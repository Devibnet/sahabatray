// ==========================================
// Cerita.In — Enhanced Interactive Script
// ==========================================

// --- Data ---
const konselors = [
  {
    id: '1',
    nama: 'Sukkun Siregar',
    foto: 'Foto/raygar.jpeg',
    minat: 'Self-love, Kecemasan, Persahabatan',
    bio: 'Sukkun adalah konselor sebaya yang dikenal hangat dan penuh empati. Ia senang menjadi pendengar yang baik dan hadir untuk membantu remaja melewati berbagai tantangan hidup. Bagi Sukkun, setiap orang berhak merasa didengar, dimengerti, dan meraih kebahagiaan dalam hidupnya.',
    usia: 20,
    instagram: 'raygar28_'
  },
  {
    id: '2',
    nama: 'Silviana Darini',
    foto: 'Foto/ana.jpeg',
    minat: 'Motivasi, Keluarga, Percaya Diri',
    bio: 'Silviana aktif di forum GenRe Buleleng dan senang berbagi tips seputar membangun kepercayaan diri. Ia dikenal sebagai pribadi yang ramah, mudah diajak bicara, dan selalu berusaha menjadi pendengar yang baik. Silviana siap menjadi teman cerita yang suportif, hadir untuk mendengarkan tanpa menghakimi dan menemani dengan tulus.',
    usia: 20,
    instagram: 'silvianadarini'
  },
  {
    id: '3',
    nama: 'Bayu Wiguna',
    foto: 'Foto/bayu.jpeg',
    minat: 'Overthinking, Akademik, Hubungan',
    bio: 'Bayu memahami betul tantangan yang sering dihadapi remaja, mulai dari tekanan akademik hingga masalah dalam hubungan pertemanan atau asmara. Ia ingin menjadi tempat bercerita yang nyaman dan membantu remaja menemukan solusi yang sehat, positif, dan sesuai dengan diri mereka sendiri.',
    usia: 20,
    instagram: 'bayuwiguna'
  },
  {
    id: '4',
    nama: 'Komang Murniasih',
    foto: 'Foto/murni.jpeg',
    minat: 'mental health, pertemanan, kesehatan reproduksi',
    bio: 'komang murniasih adalah seorang konselor yang memiliki pengalaman dalam membantu remaja menghadapi tekanan akademik dan masalah hubungan. Ia dikenal sebagai pribadi yang sabar, penuh pengertian, dan selalu berusaha memberikan dukungan yang positif. Komang siap menjadi teman cerita yang dapat diandalkan untuk mendengarkan dan memberikan solusi yang sehat bagi remaja.',
    usia: 19,
    instagram: 'murniasih'
  },
  {
    id: '5',
    nama: 'Dayana Mahendra',
    foto: 'Foto/mahen.jpeg',
    minat: 'kesehatan reproduksi, seksualitas,hubungan',
    bio: 'Dayana adalah seorang konselor yang sudah berpengalaman dalam membantu remaja mengatasi kesehatan reprodusi remaja. Ia dikenal sebagai pribadi yang ramah, mudah diajak bicara, dan selalu berusaha menjadi pendengar yang baik. Dayana siap menjadi teman cerita yang suportif, hadir untuk mendengarkan tanpa menghakimi dan menemani dengan tulus.',
    usia: 17,
    instagram: 'dayanamahendra'
  },
  {
    id: '6',
    nama: 'Melyn Agustin',
    foto: 'Foto/melyn.jpeg',
    minat: 'sharing cerita, kesehatan mental hubungan, lingkungan sosial',
    bio: 'Melyn Agustin adalah seorang konselor yang memiliki pengalaman dalam membantu remaja menghadapi berbagai tantangan hidup. Ia dikenal sebagai pribadi yang sabar, penuh pengertian, dan selalu berusaha memberikan dukungan yang positif. Melyn siap menjadi teman cerita yang dapat diandalkan untuk mendengarkan dan memberikan solusi yang sehat bagi remaja.',
    usia: 19,
    instagram: 'melynnagustin'
  },
  {
    id: '7',
    nama: 'Ketut Putriani',
    foto: 'Foto/putriani.jpeg',
    minat: 'pressure akademik, pola hidup sehat, hubungan',
    bio: 'Ketut Putriani adalah seorang konselor yang suka membantu remaja menghadapi tekanan akademik dan masalah hubungan. Ia dikenal sebagai pribadi yang sabar, penuh pengertian, dan selalu berusaha memberikan dukungan yang positif. Ketut siap menjadi teman cerita yang dapat diandalkan untuk mendengarkan dan memberikan solusi yang sehat bagi remaja.',
    usia: 17,
    instagram: 'ketutputriani'
  },
  {
    id: '8',
    nama: 'Ayu Nataya',
    foto: 'Foto/nataya.jpeg',
    minat: 'pacaran sehat, pencegahan pernikahan dini, napza',
    bio: 'Ayu Nataya adalah seorang konselor yang memiliki berbagai pengalaman dalam membantu upaya pencegahan pernikahan dini dan napza',
    usia: 18,
    instagram: 'ayunataya'
  },
  {
    id: '9',
    nama: 'Galang Okta',
    foto: 'Foto/galang.jpeg',
    minat: 'bullying, kesehatan mental, cyberbullying',
    bio: 'Galang Okta adalah seorang konselor yang memiliki pengalaman dalam membantu menangani bullying',  
    usia: 17,
    instagram: 'galangokta'
  },
  {
    id: '10',
    nama: 'Jyoti Wedastri',
    foto: 'Foto/jyoti.jpeg',
    minat: 'Karir, pengembangan diri, perencanaan masa depan',
    bio: 'jyoti wedastri adalah seorang konselor yang memiliki pengalaman dalam perencanaan karir dan pengambangan diri remaja',
    usia: 17,
    instagram: 'jyotiwedastri'
  }
];


const artikels = [
  {
    id: 'a1',
    judul: '6 Cara Mengatasi Stres yang Mudah dan Efektif',
    gambar: 'Foto/Mengelola Stress.jpeg',
    deskripsi: 'Stres adalah hal yang wajar, tapi bisa dikelola dengan langkah sederhana. Yuk, simak tipsnya!',
    link: 'https://www.alodokter.com/ternyata-tidak-sulit-mengatasi-stres'
  },
  {
    id: 'a2',
    judul: 'Mengenal Self-Love, Cara Mencintai Diri agar Lebih Bahagia',
    gambar: 'Foto/Self Love.jpeg',
    deskripsi: 'Self-love penting untuk kesehatan mental. Bagaimana cara memulainya? Baca selengkapnya di sini.',
    link: 'https://www.siloamhospitals.com/informasi-siloam/artikel/apa-itu-self-love'
  },
  {
    id: 'a3',
    judul: 'Mengenal Overthinking, Memahami Dampak, dan Cara Mengatasinya',
    gambar: 'Foto/OverThinking.jpeg',
    deskripsi: 'Overthinking sering dialami remaja. Berikut tips sederhana untuk mengatasinya.',
    link: 'https://www.idionline.org/article/mengenal-overthinking-memahami-dampak-dan-cara-mengatasinya'
  },
  {
    id: 'a4',
    judul: '10 Cara Efektif Menjaga Kesehatan Mental Agar Tetap Bahagia',
    gambar: 'Foto/Mental.jpg',
    deskripsi: 'Kesehatan mental yang baik merupakan aspek utama yang dibutuhkan untuk mendukung kesejahteraan hidup kita.',
    link: 'https://ayosehat.kemkes.go.id/cara-menjaga-kesehatan-mental'
  },
  {
    id: 'a5',
    judul: 'Pentingnya Mengelola Emosi, Baik Untuk Diri Sendiri Ataupun Berkelompok',
    gambar: 'Foto/Emosi.jpg',
    deskripsi: 'Ada beberapa hal yang dapat dilakukan dalam mengelola emosi dan amarah diri yang tepat',
    link: 'https://telemed.ihc.id/artikel-detail-534-Pentingnya-Mengelola-Emosi,-Baik-Untuk-Diri-Sendiri-Ataupun-Berkelompok.html'
  }
];

const quotes = [
  'Kamu berharga, bahkan saat kamu merasa tidak demikian.',
  'Setiap hari adalah kesempatan baru untuk menjadi lebih baik.',
  'Jangan takut gagal, karena kegagalan adalah bagian dari proses belajar.',
  'Kamu tidak sendirian. Selalu ada harapan.',
  'Berani bicara, berani bahagia.',
  'Hargai dirimu, cintai prosesmu.',
  'Setiap masalah pasti ada jalan keluarnya, percayalah pada proses.',
  'Tidak apa-apa untuk beristirahat, kamu juga butuh waktu untuk dirimu sendiri.',
  'Kegagalan bukan akhir dari segalanya, tapi awal dari sesuatu yang baru.',
  'Jangan bandingkan dirimu dengan orang lain, perjalananmu unik dan berharga.',
  'Terkadang, hal kecil yang kamu lakukan hari ini bisa berdampak besar di masa depan.',
  'Kamu lebih kuat dari yang kamu kira.',
  'Tidak ada yang salah dengan meminta bantuan.',
  'Kesehatan mental sama pentingnya dengan kesehatan fisik.',
  'Setiap langkah kecil menuju kebaikan adalah kemenangan.',
  'Jadilah teman terbaik untuk dirimu sendiri.',
  'Kamu tidak harus sempurna untuk dicintai dan dihargai.',
  'Hari ini mungkin berat, tapi besok bisa jadi lebih baik.',
  'Jangan menyerah, kamu sudah sejauh ini.',
  'Kamu pantas mendapatkan kebahagiaan dan ketenangan.'
];

const quotesEmojis = ['😺','😸','😻','😽','😹','😆','😎','🤩','😇','🥳','😋','😜','🤗','🦄','🐧','🐼','🐣','🦊','🐻','🐶','🐱','🐰','🐵','🦥','🦙','🦩','🦋','🌈','⭐','🍀','🍉','🍦','🍩','🍕','🍔','🍟','🍿','🎉','🎈','🎵','🎨','🧸'];

const dokumentasis = [
  {
    id: 'd1',
    gambar: 'Foto/raygar.jpeg',
    judul: 'Konseling Self-Love',
    deskripsi: 'Sesi konseling membahas pentingnya mencintai diri sendiri dan mengelola kecemasan.',
    tanggal: 'Maret 2025'
  },
  {
    id: 'd2',
    gambar: 'Foto/ana.jpeg',
    judul: 'Motivasi & Percaya Diri',
    deskripsi: 'Sesi motivasi untuk membangun kepercayaan diri dan semangat belajar remaja.',
    tanggal: 'April 2025'
  },
  {
    id: 'd3',
    gambar: 'Foto/bayu.jpeg',
    judul: 'Edukasi Overthinking',
    deskripsi: 'Diskusi tentang cara mengenali dan mengatasi overthinking pada remaja.',
    tanggal: 'April 2025'
  },
  {
    id: 'd4',
    gambar: 'Foto/Mengelola Stress.jpeg',
    judul: 'Workshop Manajemen Stres',
    deskripsi: 'Workshop interaktif tentang teknik sederhana mengelola stres sehari-hari untuk remaja.',
    tanggal: 'Mei 2025'
  },
  {
    id: 'd5',
    gambar: 'Foto/Self Love.jpeg',
    judul: 'Seminar Self-Love',
    deskripsi: 'Seminar tentang pentingnya self-love dan dampak positifnya terhadap kesehatan mental.',
    tanggal: 'Mei 2025'
  },
  {
    id: 'd6',
    gambar: 'Foto/OverThinking.jpeg',
    judul: 'Diskusi Kesehatan Mental',
    deskripsi: 'Forum diskusi remaja tentang kesehatan mental dan cara menjaga pikiran tetap positif.',
    tanggal: 'Juni 2025'
  }
];

// --- Helpers ---
function $(id) { return document.getElementById(id); }

// --- Particle System ---
class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 120 };
    this.resize();
    this.init();
    this.bind();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init() {
    const count = Math.min(80, Math.floor((this.canvas.width * this.canvas.height) / 15000));
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }
  }

  bind() {
    window.addEventListener('resize', () => this.resize());
    this.canvas.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
    });
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const particles = this.particles;
    const ctx = this.ctx;
    const mouse = this.mouse;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

      // Mouse interaction
      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= dx * force * 0.02;
          p.y -= dy * force * 0.02;
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(74, 158, 255, ${p.alpha})`;
      ctx.fill();

      // Connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(74, 158, 255, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// --- Scroll Reveal (Intersection Observer) ---
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .stagger').forEach(el => {
    observer.observe(el);
  });
}

// --- Navbar scroll effect ---
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  const toggle = navbar.querySelector('.nav-toggle');
  const links = navbar.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
      });
    });
  }
}

// --- Counter animation ---
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        if (isNaN(target)) return;
        let current = 0;
        const increment = Math.ceil(target / 60);
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = current;
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

// ==========================================
// Page-specific logic
// ==========================================

// --- Index Page: Dokumentasi ---
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('/')) {
  const list = $('dokumentasi-list');
  if (list) {
    list.innerHTML = dokumentasis.map(d => `
      <div class="dokumentasi-card reveal">
        <img src="${d.gambar}" alt="${d.judul}" class="dokumentasi-card-img" loading="lazy">
        <div class="dokumentasi-card-body">
          <div class="dokumentasi-card-title">${d.judul}</div>
          <div class="dokumentasi-card-desc">${d.deskripsi}</div>
          <span class="dokumentasi-card-date"><i class="fa fa-calendar" style="margin-right:0.3rem;"></i>${d.tanggal}</span>
        </div>
      </div>
    `).join('');
  }
}

// --- Konselor List Page ---
if (window.location.pathname.includes('konselor.html')) {
  const list = $('konselor-list');
  if (list) {
    list.className = 'card-grid stagger';
    list.innerHTML = konselors.map(k => `
      <div class="card">
        <img src="${k.foto}" alt="${k.nama}" class="card-img" loading="lazy">
        <div class="card-title">${k.nama}</div>
        <div class="card-subtitle">${k.minat}</div>
        <div class="card-desc">${k.bio}</div>
        <button class="btn btn-primary" onclick="lihatProfil('${k.id}')">
          <span>Lihat Profil</span>
          <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    `).join('');
    // Trigger stagger after DOM update
    requestAnimationFrame(() => {
      list.classList.add('visible');
    });
  }
}

function lihatProfil(id) {
  localStorage.setItem('konselorId', id);
  window.location.href = 'profil-konselor.html?id=' + id;
}

// --- Profil Konselor Page ---
if (window.location.pathname.includes('profil-konselor.html')) {
  const detail = $('profil-konselor-detail');
  let id = new URLSearchParams(window.location.search).get('id') || localStorage.getItem('konselorId');
  const konselor = konselors.find(k => k.id === id);

  const pengalaman = {
    '1': 'Winner Putri Duta GenRe Undiksha 2024, RU I Duta GenRe Buleleng Putri 2025, Konselor Sebaya Forum Genre Buleleng.',
    '2': 'RU I Putra Duta GenRe Undiksha 2024, RU I Duta GenRe Buleleng Putra 2025.',
    '3': 'RU I Putri Duta GenRe Undiksha 2024, RU II Duta GenRe Buleleng Putri 2025.',
    '4': 'Aktif dalam kegiatan konseling sebaya dan pendampingan remaja di lingkungan sekolah dan komunitas.',
    '5': 'Berpengalaman dalam edukasi kesehatan reproduksi remaja dan pendampingan sebaya.',
    '6': 'Terlibat aktif dalam forum diskusi remaja dan kegiatan pengembangan diri.',
    '7': 'Berpengalaman dalam pendampingan akademik dan konseling sebaya di lingkungan sekolah.',
    '8': 'Aktif dalam kegiatan pencegahan pernikahan dini dan edukasi napza di kalangan remaja.',
    '9': 'Berpengalaman dalam menangani kasus bullying dan cyberbullying di lingkungan sekolah.',
    '10': 'Aktif dalam kegiatan pengembangan karir dan perencanaan masa depan untuk remaja.',
  };
  const testimoni = {
    '1': '"Sukkun sangat sabar dan selalu membuat setiap orang merasa didengar."',
    '2': '"Silviana selalu memberi motivasi yang membangun dan positif!"',
    '3': '"Bayu siap membantu menghadapi tekanan sekolah dengan cara yang sehat."',
    '4': '"Murniasih adalah pendengar yang hangat dan sangat membantu saya melewati masa sulit."',
    '5': '"Dayana memberikan perspektif baru yang membuat saya lebih percaya diri."',
    '6': '"Melyn membuat saya nyaman bercerita dan tidak pernah menghakimi."',
    '7': '"Putriani sangat perhatian dan membantu saya mengatasi tekanan akademik."',
    '8': '"Nataya memberikan informasi yang sangat bermanfaat tentang pencegahan pernikahan dini."',
    '9': '"Galang membantu saya berani melawan bullying dan lebih percaya diri."',
    '10': '"Jyoti membantu saya menemukan arah karir dan masa depan yang lebih jelas."',
  };
  const wa = {
    '1': '6282215682163',
    '2': '6282340075098',
    '3': '6282236134790',
    '4': '6285971612749',
    '5': '6288987237648',
    '6': '6287883026937',
    '7': '6283822908941',
    '8': '6281252788139',
    '9': '6282237995166',
    '10': '6285858016785',
  };

  if (detail && konselor) {
    const defaultPesan = `Halo ${konselor.nama}, saya ingin bercerita atau konsultasi seputar kesehatan mental.`;
    const waNumber = wa[konselor.id];

    detail.innerHTML = `
      <div class="profil-layout">
        <div class="profil-card reveal visible" style="transition:none;">
          <img src="${konselor.foto}" alt="${konselor.nama}" class="profil-img" loading="lazy">
          <div class="profil-title">${konselor.nama}</div>
          <div class="profil-minat"><i class="fa fa-heart" style="color:var(--accent);margin-right:0.4rem;"></i>${konselor.minat}</div>
          <div class="profil-detail"><b>Usia:</b> ${konselor.usia} tahun</div>
          <div class="profil-bio">${konselor.bio}</div>
          <div class="profil-detail"><b>Pengalaman:</b> ${pengalaman[konselor.id]}</div>
          <div class="profil-ig-info">Instagram: <span class="profil-ig-username">@${konselor.instagram}</span></div>
          <div class="profil-testimoni">${testimoni[konselor.id]}</div>
          <div class="profil-btn-group">
            <button class="btn btn-primary btn-glow" onclick="bukaModal('${konselor.nama}', '${waNumber}')">
              <i class="fa fa-whatsapp"></i>
              <span>Konseling</span>
            </button>
            <button class="btn btn-secondary" onclick="window.location.href='konselor.html'">
              <i class="fa fa-arrow-left"></i>
              <span>Kembali</span>
            </button>
          </div>
          <div class="profil-privasi">
            <i class="fa fa-lock" style="margin-right:0.4rem;"></i>
            Cerita yang kamu bagikan bersifat <b>rahasia</b> dan tidak akan disebarluaskan.
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal-overlay" id="modal-wa">
        <div class="modal-box">
          <div class="modal-header">
            <h3>Kirim Pesan ke <span id="modal-nama-konselor">${konselor.nama}</span></h3>
            <button class="modal-close" onclick="tutupModal()">&times;</button>
          </div>
          <div class="modal-body">
            <p class="form-subtitle">Isi form di bawah untuk memulai percakapan via WhatsApp.</p>
            <form id="form-konseling" onsubmit="return kirimWA(event)">
              <div class="form-group">
                <label class="form-label" for="form-nama">Nama Kamu</label>
                <input class="form-input" type="text" id="form-nama" name="nama" placeholder="Masukkan namamu..." required>
              </div>
              <div class="form-group">
                <label class="form-label" for="form-pesan">Pesan</label>
                <textarea class="form-textarea" id="form-pesan" name="pesan" placeholder="Ceritakan apa yang kamu rasakan..." required>${defaultPesan}</textarea>
              </div>
              <button type="submit" class="btn btn-wa form-submit">
                <i class="fa fa-whatsapp"></i>
                <span>Kirim</span>
              </button>
            </form>
            <p class="form-info">
              <i class="fa fa-lock"></i>Pesan kamu akan dikirim langsung via WhatsApp. Identitas kamu aman dan dirahasiakan.
            </p>
          </div>
        </div>
      </div>
    `;
  } else if (detail) {
    detail.innerHTML = '<div class="profil-card"><p style="color:var(--text-secondary);">Konselor tidak ditemukan.</p></div>';
  }
}

let waTarget = '';

function bukaModal(nama, waNumber) {
  waTarget = waNumber;
  document.getElementById('modal-nama-konselor').textContent = nama;
  document.getElementById('form-nama').value = '';
  document.getElementById('form-pesan').value = '' ;
  document.getElementById('modal-wa').classList.add('open');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-wa').onclick = function(e) {
    if (e.target === this) tutupModal();
  };
}

function tutupModal() {
  document.getElementById('modal-wa').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') tutupModal();
});

function kirimWA(event) {
  event.preventDefault();
  const nama = document.getElementById('form-nama').value.trim();
  const pesan = document.getElementById('form-pesan').value.trim();
  if (!nama || !pesan || !waTarget) return false;
  const text = 'Halo, saya ' + nama + '. ' + pesan;
  window.open('https://wa.me/' + waTarget + '?text=' + encodeURIComponent(text), '_blank');
  tutupModal();
  return false;
}

// --- Artikel Page ---
if (window.location.pathname.includes('artikel.html')) {
  const list = $('artikel-list');
  if (list) {
    list.className = 'card-grid stagger';
    list.innerHTML = artikels.map(a => `
      <div class="card">
        <div class="card-img-wrapper">
          <img src="${a.gambar}" alt="${a.judul}" class="card-img--landscape" loading="lazy">
        </div>
        <div class="card-title">${a.judul}</div>
        <div class="card-desc">${a.deskripsi}</div>
        <a href="${a.link}" class="btn btn-secondary" target="_blank" rel="noopener">
          <span>Baca Selengkapnya</span>
          <i class="fa fa-external-link-alt"></i>
        </a>
      </div>
    `).join('');
    requestAnimationFrame(() => {
      list.classList.add('visible');
    });
  }
}

// --- Quotes Page ---
if (window.location.pathname.includes('quotes.html')) {
  const quoteText = $('quote-text');
  const btn = $('new-quote-btn');
  const emoji = $('quotes-emoji');

  function tampilkanQuote() {
    const idx = Math.floor(Math.random() * quotes.length);
    const eidx = Math.floor(Math.random() * quotesEmojis.length);

    if (quoteText) {
      quoteText.style.opacity = '0';
      quoteText.style.transform = 'translateY(20px) scale(0.95)';
    }
    if (emoji) {
      emoji.style.opacity = '0';
      emoji.style.transform = 'scale(0.5) rotate(-20deg)';
    }

    setTimeout(() => {
      if (quoteText) {
        quoteText.textContent = quotes[idx];
        quoteText.style.opacity = '1';
        quoteText.style.transform = 'translateY(0) scale(1)';
      }
      if (emoji) {
        emoji.textContent = quotesEmojis[eidx];
        emoji.style.opacity = '1';
        emoji.style.transform = 'scale(1) rotate(0deg)';
      }
    }, 250);
  }

  if (quoteText && btn && emoji) {
    tampilkanQuote();
    btn.onclick = tampilkanQuote;
  }
}

// ==========================================
// Init on DOM ready
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbar();
  initCounters();
  // Particle system for pages that have the canvas
  const canvas = document.getElementById('particle-canvas');
  if (canvas) {
    new ParticleSystem(canvas);
  }
});

