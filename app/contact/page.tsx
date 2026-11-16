import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Kontak | Rafi Aditya Nugraha',
  description: 'Hubungi Rafi Aditya Nugraha — Electrical & Facility Engineering',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center pt-20">
        <div className="w-full">
          <Contact />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-[var(--card-border)]">
        <p className="text-[var(--muted)] text-sm">
          © {new Date().getFullYear()} Rafi Aditya Nugraha All rights reserved.
        </p>
      </footer>
    </main>
  )
}
