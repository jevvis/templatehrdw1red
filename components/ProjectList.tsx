'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const palette = ['bg-red-600', 'bg-red-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-700', 'bg-purple-600', 'bg-amber-600', 'bg-rose-700']
const colorFor = (tech: string) => palette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % palette.length]

const projects = [
  {
    number: '01',
    title: { id: "Inventarisasi & Pendataan Aset Gedung", en: "Building Asset Inventory & Records" },
    description: { id: "Menyusun inventarisasi dan pendataan aset gedung untuk administrasi dan perencanaan pemeliharaan.", en: "Preparing building asset inventories and records for administration and maintenance planning." },
    framework: "PT GEDUNG PRIMA NUSANTARA 2025",
    techStack: ["Aset", "Inventaris"],
  },
  {
    number: '02',
    title: { id: "Pemeliharaan 4 Sistem Utama Gedung", en: "Maintenance of 4 Main Building Systems" },
    description: { id: "Memeriksa dan mendukung pemeliharaan panel listrik, genset, AC, dan fasilitas operasional.", en: "Checking and supporting the maintenance of electrical panels, generator sets, AC, and operational facilities." },
    framework: "PT GEDUNG PRIMA NUSANTARA 2025",
    techStack: ["Panel", "Genset"],
  },
  {
    number: '03',
    title: { id: "Pengadaan & Vendor", en: "Procurement & Vendors" },
    description: { id: "Berkoordinasi dengan vendor dalam pengadaan dan jadwal pemeliharaan peralatan.", en: "Coordinating with vendors on procurement and equipment maintenance schedules." },
    framework: "PT GEDUNG PRIMA NUSANTARA 2025",
    techStack: ["Pengadaan", "Vendor"],
  },
  {
    number: '04',
    title: { id: "Laporan Bulanan & Arsip", en: "Monthly Reports & Archives" },
    description: { id: "Menyusun laporan bulanan, mengelola arsip, dan memutakhirkan aplikasi manajemen aset.", en: "Preparing monthly reports, managing archives, and updating the asset management application." },
    framework: "PT GEDUNG PRIMA NUSANTARA 2025",
    techStack: ["Laporan", "Arsip"],
  },
  {
    number: '05',
    title: { id: "Pemeliharaan kWh Meter & MCB", en: "kWh Meter & MCB Maintenance" },
    description: { id: "Inspeksi, pemasangan, dan penggantian kWh meter dan MCB pelanggan pada 2 area layanan.", en: "Inspection, installation, and replacement of customer kWh meters and MCBs across 2 service areas." },
    framework: "PT DAYA DISTRIBUSI CAHAYA 2023",
    techStack: ["kWh Meter", "MCB"],
  },
  {
    number: '06',
    title: { id: "Pemeliharaan Jaringan SUTM", en: "SUTM Network Maintenance" },
    description: { id: "Penggantian fuse link dan pemasangan perangkat proteksi pada SUTM.", en: "Replacing fuse links and installing protection devices on SUTM." },
    framework: "PT DAYA DISTRIBUSI CAHAYA 2023",
    techStack: ["SUTM", "Proteksi"],
  },
  {
    number: '07',
    title: { id: "Ground Patrol, Kubikel & Pentanahan", en: "Ground Patrol, Cubicles & Grounding" },
    description: { id: "Ground patrol, inspeksi kubikel, dan pengukuran tahanan pentanahan transformator distribusi.", en: "Ground patrols, cubicle inspections, and grounding resistance measurement on distribution transformers." },
    framework: "PT DAYA DISTRIBUSI CAHAYA 2023",
    techStack: ["Grounding", "Kubikel"],
  },
  {
    number: '08',
    title: { id: "Laporan Inspeksi & Rekomendasi", en: "Inspection Reports & Recommendations" },
    description: { id: "Menyusun laporan hasil inspeksi dan rekomendasi perbaikan kepada pembimbing lapangan.", en: "Preparing inspection reports and repair recommendations for the field supervisor." },
    framework: "PT DAYA DISTRIBUSI CAHAYA 2023",
    techStack: ["Laporan", "Rekomendasi"],
  },
  {
    number: '09',
    title: { id: "Operasi & Pemeliharaan PLTD", en: "PLTD Operation & Maintenance" },
    description: { id: "Pemeriksaan generator, sistem governor, dan kecepatan putar (RPM), serta panel kontrol.", en: "Checking the generator, governor system, and rotational speed (RPM), plus control panels." },
    framework: "PT ENERGI BUMI PERKASA — PLTD TELUK JAYA 2022",
    techStack: ["Generator", "Governor"],
  },
  {
    number: '10',
    title: { id: "Pengujian Tahanan Isolasi (Megger)", en: "Insulation Resistance Testing (Megger)" },
    description: { id: "Pengujian tahanan isolasi transformator menggunakan insulation tester.", en: "Insulation resistance testing on transformers using an insulation tester." },
    framework: "PT ENERGI BUMI PERKASA — PLTD TELUK JAYA 2022",
    techStack: ["Megger", "Transformator"],
  },
]

export default function ProjectList() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">{en ? 'FACILITY & ELECTRICAL MAINTENANCE PORTFOLIO' : 'PORTOFOLIO FACILITY & PEMELIHARAAN KELISTRIKAN'}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">{en ? 'Facilities, Electrical Distribution & Power Plant Experience' : 'Pengalaman Sarana Prasarana, Distribusi Listrik & Pembangkit'}</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            {en
              ? 'A record of hands-on work in facilities management, electrical power distribution maintenance, and power plant operation.'
              : 'Rekam jejak pekerjaan langsung di pengelolaan sarana prasarana, pemeliharaan distribusi tenaga listrik, dan operasional pembangkit.'}
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300"
            >
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">{project.number}</span>

              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1">{project.title[lang]}</h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">{project.description[lang]}</p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">{project.framework}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${colorFor(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
