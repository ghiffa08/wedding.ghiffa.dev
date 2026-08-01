/**
 * Interactive Controller Script - Web Undangan Azzam & Ilmi
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. URL Parameter Guest Name Reader
  // ==========================================
  const urlParams = new URLSearchParams(window.location.search);
  const guestParam = urlParams.get('to') || urlParams.get('u') || urlParams.get('tamu');
  const guestDisplay = document.getElementById('guest-name-display');
  const inputName = document.getElementById('input-name');

  if (guestParam) {
    const formattedGuestName = decodeURIComponent(guestParam).replace(/\+/g, ' ');
    if (guestDisplay) guestDisplay.textContent = formattedGuestName;
    if (inputName) inputName.value = formattedGuestName;
  }

  // ==========================================
  // 2. Cover Screen & Music Controller
  // ==========================================
  const cover = document.getElementById('cover');
  const btnOpen = document.getElementById('btn-open-invitation');
  const bgMusic = document.getElementById('bg-music');
  const audioToggle = document.getElementById('audio-toggle');
  const audioIcon = document.getElementById('audio-icon');

  let isPlaying = false;

  function playAudio() {
    if (!bgMusic) return;
    bgMusic.play().then(() => {
      isPlaying = true;
      audioToggle.classList.add('playing');
      audioIcon.className = 'fas fa-pause-circle';
    }).catch(err => {
      console.log('Autoplay prevented by browser:', err);
    });
  }

  function pauseAudio() {
    if (!bgMusic) return;
    bgMusic.pause();
    isPlaying = false;
    audioToggle.classList.remove('playing');
    audioIcon.className = 'fas fa-compact-disc';
  }

  if (btnOpen) {
    btnOpen.addEventListener('click', () => {
      document.body.classList.remove('locked');
      cover.classList.add('unlocked');
      playAudio();

      // Scroll smoothly to top of main content
      const hero = document.getElementById('home');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (audioToggle) {
    audioToggle.addEventListener('click', () => {
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    });
  }

  // ==========================================
  // 3. Countdown Timer (Target: 11 Jan 2025)
  // ==========================================
  const targetDate = new Date('2026-08-09T08:00:00+07:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('cd-days');
    const hoursEl = document.getElementById('cd-hours');
    const minutesEl = document.getElementById('cd-minutes');
    const secondsEl = document.getElementById('cd-seconds');

    if (distance < 0) {
      if (daysEl) daysEl.textContent = '00';
      if (hoursEl) hoursEl.textContent = '00';
      if (minutesEl) minutesEl.textContent = '00';
      if (secondsEl) secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==========================================
  // 4. Gift Toggle & Clipboard Copy
  // ==========================================
  const btnToggleGift = document.getElementById('btn-toggle-gift');
  const giftContent = document.getElementById('gift-content');
  const toast = document.getElementById('toast');

  if (btnToggleGift && giftContent) {
    btnToggleGift.addEventListener('click', () => {
      const isHidden = giftContent.style.display === 'none' || giftContent.style.display === '';
      giftContent.style.display = isHidden ? 'block' : 'none';
      if (isHidden) {
        giftContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  document.querySelectorAll('.btn-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy') || '1347201201';
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast('Nomor rekening berhasil disalin!');
      }).catch(() => {
        // Fallback for older browsers
        const tempInput = document.createElement('textarea');
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        showToast('Nomor rekening berhasil disalin!');
      });
    });
  });

  // ==========================================
  // 5. Lightbox Gallery Viewer
  // ==========================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = document.getElementById('lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-src') || item.querySelector('img').src;
      if (lightboxImg && lightboxModal) {
        lightboxImg.src = src;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 6. RSVP & Guestbook (localStorage)
  // ==========================================
  const defaultWishes = [
    {
      name: "Keluarga & Sahabat",
      attendance: "Hadir",
      message: "Selamat untuk Azzam dan Ilmi! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Aamiin yaa robbal aalamin 🤲🏼",
      time: "30 Des 2024"
    },
    {
      name: "Rizky & Amanda",
      attendance: "Hadir",
      message: "Happy Wedding Azzam & Ilmi! Lancar terus sampai hari H yaa bro. Bahagia selalu menyertai kalian!",
      time: "31 Des 2024"
    },
    {
      name: "Dimas Anggara",
      attendance: "Hadir",
      message: "Selamat menempuh hidup baru sahabatku Azzam & Ilmi! Semoga berkah rumah tangganya dan cepat dikaruniai momongan.",
      time: "01 Jan 2025"
    },
    {
      name: "Siti Rahmawati",
      attendance: "Hadir",
      message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fii khair. Selamat berbahagia Azzam & Ilmi ❤️",
      time: "02 Jan 2025"
    },
    {
      name: "Budi Santoso",
      attendance: "Tidak Hadir",
      message: "Selamat ya Azzam & Ilmi, mohon maaf belum bisa hadir secara langsung karena sedang di luar kota. Doa terbaik untuk kalian!",
      time: "03 Jan 2025"
    }
  ];

  function getStoredWishes() {
    const data = localStorage.getItem('azzam_ilmi_wishes');
    if (!data) {
      localStorage.setItem('azzam_ilmi_wishes', JSON.stringify(defaultWishes));
      return defaultWishes;
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      return defaultWishes;
    }
  }

  function renderWishes() {
    const wishes = getStoredWishes();
    const wishesList = document.getElementById('wishes-list');
    const cntHadir = document.getElementById('cnt-hadir');
    const cntAbsen = document.getElementById('cnt-absen');

    if (!wishesList) return;

    let totalHadir = 0;
    let totalAbsen = 0;

    wishesList.innerHTML = '';

    wishes.forEach(w => {
      if (w.attendance === 'Hadir') totalHadir++;
      else totalAbsen++;

      const item = document.createElement('div');
      item.className = 'wish-item';
      
      const isHadir = w.attendance === 'Hadir';
      const badgeClass = isHadir ? 'hadir' : 'absen';
      const badgeText = isHadir ? 'Hadir' : 'Tidak Hadir';

      item.innerHTML = `
        <div class="wish-header">
          <span class="wish-author">${escapeHTML(w.name)}</span>
          <span class="wish-status ${badgeClass}">${badgeText}</span>
        </div>
        <div class="wish-text">${escapeHTML(w.message)}</div>
        <div class="wish-time">${w.time}</div>
      `;

      wishesList.appendChild(item);
    });

    if (cntHadir) cntHadir.textContent = totalHadir;
    if (cntAbsen) cntAbsen.textContent = totalAbsen;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  const rsvpForm = document.getElementById('rsvp-form');
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('input-name').value.trim();
      const attendance = document.getElementById('input-attendance').value;
      const message = document.getElementById('input-message').value.trim();

      if (!name || !attendance || !message) {
        showToast('Mohon lengkapi semua kolom form!');
        return;
      }

      const newWish = {
        name: name,
        attendance: attendance,
        message: message,
        time: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })
      };

      const wishes = getStoredWishes();
      wishes.unshift(newWish); // Add to beginning of array
      localStorage.setItem('azzam_ilmi_wishes', JSON.stringify(wishes));

      renderWishes();

      // Reset form text
      document.getElementById('input-message').value = '';
      showToast('Terima kasih atas ucapan & konfirmasi Anda!');
    });
  }

  // Initial render of guest wishes
  renderWishes();

});
