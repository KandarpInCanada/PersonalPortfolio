"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const menuItems = ["about", "skills", "projects", "experience", "contact"]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`mx-auto mt-4 w-[95%] max-w-6xl rounded-2xl border border-white/5 px-4 py-3 backdrop-blur-lg transition-all duration-300 ${
          isScrolled ? "bg-slate-900/70 shadow-2xl shadow-blue-950/30" : "bg-slate-900/40"
        }`}
      >
        <nav className="flex items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white md:text-xl">
            Kandarp Patel
          </Link>

          <button
            className="md:hidden rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/25 hover:text-white"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? (
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <ul className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className="text-sm font-medium text-slate-200 transition hover:text-white hover:underline underline-offset-8"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/resume"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/30 hover:text-white"
            >
              Resume
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:scale-[1.02]"
            >
              Let&apos;s talk
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <motion.div
            className="mt-3 flex flex-col gap-2 rounded-xl border border-white/10 bg-slate-900/80 p-3 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
          >
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-200 transition hover:bg-white/5"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <Link
              href="/resume"
              className="rounded-lg bg-white/5 px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Resume
            </Link>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header

