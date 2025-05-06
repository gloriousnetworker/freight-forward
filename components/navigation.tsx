"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b border-green-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Ring */}
        <div className="relative flex items-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="block h-10 w-10 rounded-full bg-green-100" />
            <span className="absolute h-12 w-12 rounded-full border-2 border-green-200 animate-pulse-slow" />
          </div>
          <Link href="/" className="relative flex items-center gap-2">
            <img
              src="/AGS.png"
              alt="Arthur Great Services Logo"
              className="h-12 w-12"
            />
            <span className="text-xl font-bold text-green-800 hidden sm:inline-block">
              FREIGHT FORWARDING SERVICES
            </span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Tracking", "/tracking"],
            ["Blog", "/blog"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`
                text-sm font-medium transition-colors 
                ${
                  isActive(href)
                    ? "text-green-800"
                    : "text-gray-600 hover:text-green-600"
                }
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/quote">
            <Button className="bg-green-700 hover:bg-green-600 border-green-700">
              Get a Quote
            </Button>
          </Link>
          <Link href="/register">
            <span
              className={`
                text-sm font-medium transition-colors
                ${isActive("/register")
                  ? "text-green-800"
                  : "text-green-600 hover:underline"}
              `}
            >
              Track Shipment
            </span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden text-green-700 border-green-700"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="px-4">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" className="flex items-center gap-2">
                  <img
                    src="/AGS.png"
                    alt="Logo"
                    className="h-6 w-6 text-green-700"
                  />
                  <span className="text-xl font-bold text-green-800">
                    Arthur Great Services
                  </span>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ×
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                {[
                  ["Home", "/"],
                  ["About Us", "/about"],
                  ["Services", "/services"],
                  ["Tracking", "/register"],
                  ["Blog", "/blog"],
                  ["Contact", "/contact"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      text-lg font-medium py-2 transition-colors
                      ${
                        isActive(href)
                          ? "text-green-800"
                          : "text-gray-600 hover:text-green-600"
                      }
                    `}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto space-y-4 pt-6">
                <Link href="/quote" className="w-full">
                  <Button className="w-full bg-green-700 hover:bg-green-600 border-green-700">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/register" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full border-green-700 text-green-700 hover:bg-green-50"
                  >
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}