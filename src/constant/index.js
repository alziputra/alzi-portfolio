export const PERSONAL_INFO = {
  name: "Alzi Rahmana Putra",
  role: "IT Support & Full Stack Developer",
  greeting: "🚀 Portofolio & Tulisan Teknis",
  heroDescription: "Lulusan Informatika yang mahir membangun aplikasi web. Saya aktif berbagi pengetahuan melalui tulisan teknis seputar JavaScript, Backend, dan infrastruktur IT.",
  aboutDescription: "Saya memiliki latar belakang Informatika (IPK 3,61) dan saat ini berkarir sebagai IT Support dengan fokus pada optimasi sistem. Pengalaman lapangan memberikan saya pemahaman langsung mengenai kendala teknis pengguna, sehingga saya mampu membangun sistem yang praktis dan mudah digunakan.",
  location: "Jakarta Timur, DKI Jakarta",
  award: "TOP 8 Demo Day Skilvul (2023)",
  email: "alziputra12@gmail.com",
  githubUrl: "https://github.com/alziputra",
  linkedinUrl: "https://www.linkedin.com/in/alzirahmana/"
};

export const EXPERIENCES = [
  {
    id: 1,
    jobTitle: "IT Support",
    period: "Dec 2024 - Sekarang",
    company: "PT Pegadaian",
    description: "Bertanggung jawab memastikan kelancaran operasional TI (Server, Jaringan, Hardware) untuk kantor wilayah dan cabang di area operasional Jakarta Pusat, Timur, Bekasi, hingga Bogor.",
    highlight: "Selain tugas operasional utama, saya juga mengembangkan aplikasi web khusus untuk optimasi alur kerja departemen logistik. Sistem ini dirancang spesifik untuk mendukung efisiensi tim inti yang beranggotakan 1-4 orang pengguna.",
    isActive: true, // Untuk warna highlight timeline
    iconType: "briefcase"
  },
  {
    id: 2,
    jobTitle: "Full Stack Developer",
    period: "Aug 2023 - Dec 2023",
    company: "PT IMPACTBYTE TEKNOLOGI EDUKASI",
    description: "Memperdalam keterampilan Full-Stack Web Development melalui pengembangan aplikasi dari front-end hingga back-end. Mengembangkan website GreenWorldWare sebagai tugas akhir untuk meningkatkan kesadaran masalah lingkungan.",
    highlight: null,
    isActive: false,
    iconType: "code"
  }
];

export const SKILLS = [
  "Next.js", "React.js", "Node.js", "MySQL", "Firebase", 
  "JavaScript", "Tailwind CSS", "Web Development", "Sequelize", "Linux/Ubuntu"
];

export const PROJECTS = [
  {
    id: 1,
    title: "Sistem Manajemen Logistik",
    description: "Aplikasi web operasional yang dibangun khusus untuk departemen logistik PT Pegadaian. Dioptimalkan untuk efisiensi alur kerja harian bagi tim inti (1-4 pengguna). Fitur utama meliputi manajemen data barang, pemantauan status pengiriman, dan integrasi dengan sistem internal untuk memastikan data selalu akurat dan up-to-date.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Firebase"],
    githubLink: "https://github.com/alziputra/logistik-app",
    liveLink: "https://logistik-app-sigma.vercel.app/",
    image: "https://github.com/alziputra/logistik-app/blob/main/public/dashboard.png?raw=true",
    isFeatured: true, 
  },
  {
    id: 2,
    title: "Aplikasi Absensi",
    description: "Sistem pencatatan kehadiran dengan antarmuka modern yang responsif. Dilengkapi dengan logika validasi khusus untuk memastikan pengguna hanya dapat melakukan absensi satu kali dalam sehari untuk mencegah duplikasi data.",
    techStack: ["Next.js", "React", "Tailwind CSS"],
    githubLink: "https://github.com/alziputra/absensi-app",
    liveLink: "https://absensi-app-three.vercel.app/",
    image: "https://github.com/alziputra/absensi-app/blob/main/public/screenshot2.jpeg?raw=true",
    isFeatured: false,
  },
  {
    id: 3,
    title: "GreenWorldWare",
    description: "Platform web untuk meningkatkan kesadaran masyarakat terhadap masalah lingkungan. Merupakan proyek akhir yang meraih TOP 8 Demo Day Skilvul.",
    techStack: ["React.js", "Node.js", "Express", "Fullstack"],
    githubLink: "https://github.com/Skilvul-FS13/FE-greenworldaware",
    liveLink: "",
    image: "",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Be_atlitkita (Backend System)",
    description: "Sistem manajemen data atlet di sisi server. Berfokus pada pengelolaan relasi database, pembuatan data dummy (seeder), dan arsitektur RESTful API.",
    techStack: ["Node.js", "MySQL", "Sequelize"],
    githubLink: "https://github.com/alziputra",
    image: "",
    liveLink: "",
    isFeatured: false,
  }
];

export const REAL_ARTICLES = [
  { 
    id: 1, 
    title: 'Memahami Asynchronous di JavaScript: Dari Callback ke Async/Await', 
    pubDate: '2024', 
    contentSnippet: 'Panduan mendalam memahami konsep non-blocking di JavaScript, mulai dari dasar callback hingga kemudahan menggunakan async/await.', 
    link: 'https://medium.com/@alziputra12/memahami-asynchronous-di-javascript-dari-callback-ke-async-await-e5764d01484e' 
  },
  { 
    id: 2, 
    title: 'Membangun Aplikasi Backend Express.js & MySQL dengan Sequelize Migration', 
    pubDate: '2024', 
    contentSnippet: 'Langkah demi langkah setup backend modern menggunakan Express, MySQL, dan manajemen database yang rapi dengan Sequelize.', 
    link: 'https://medium.com/@alziputra12/membangun-aplikasi-backend-express-js-mysql-dengan-sequelize-migration-11b41aa44c1f' 
  },
  { 
    id: 3, 
    title: 'Windows vs Linux: Perbedaan Struktur Folder yang Perlu Kamu Tahu', 
    pubDate: '2024', 
    contentSnippet: 'Analisis komparatif mengenai bagaimana kedua sistem operasi ini mengelola file dan direktori secara fundamental.', 
    link: 'https://medium.com/@alziputra12/windows-vs-linux-perbedaan-struktur-folder-yang-perlu-kamu-tahu-9dce03cde0d1' 
  },
  { 
    id: 4, 
    title: 'Menguasai DOM JavaScript: Dari Seleksi Elemen Hingga Interaktivitas', 
    pubDate: '2024', 
    contentSnippet: 'Pelajari cara memanipulasi elemen HTML secara dinamis untuk menciptakan pengalaman pengguna yang interaktif.', 
    link: 'https://medium.com/@alziputra12/menguasai-dom-javascript-dari-seleksi-elemen-hingga-interaktivitas-090a959dcbec' 
  },
  { 
    id: 5, 
    title: 'Mengenal Perbedaan /bin dan /sbin di Ubuntu 22', 
    pubDate: '2024', 
    contentSnippet: 'Penjelasan teknis mengenai hirarki sistem file Linux, khususnya perbedaan fungsi antara direktori bin dan sbin.', 
    link: 'https://medium.com/@alziputra12/mengenal-perbedaan-bin-dan-sbin-di-ubuntu-22-99676acae3f0' 
  },
  { 
    id: 6, 
    title: 'Cara Reset Printer Epson L3110 dengan Resetter dan Manual', 
    pubDate: '2024', 
    contentSnippet: 'Tutorial praktis solusi maintenance hardware printer untuk mengatasi masalah "service required" dengan aman.', 
    link: 'https://medium.com/@alziputra12/cara-reset-printer-epson-l3110-dengan-resetter-dan-manual-5520101910d2' 
  }
];