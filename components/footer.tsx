import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 to-green-900 text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Branding + Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/AGS.png"
                alt="Arthur Great Services Logo"
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold text-white hidden sm:inline-block">
                FRIEGHT FORWARD - Arthur Great Services
              </span>
            </div>
            <p className="text-sm mb-4">
              Your trusted partner for global freight forwarding and logistics solutions.
            </p>
            <div className="flex space-x-4">
              {[
                ["#", <Facebook className="h-5 w-5" />, "Facebook"],
                ["#", <Twitter className="h-5 w-5" />, "Twitter"],
                ["#", <Linkedin className="h-5 w-5" />, "LinkedIn"],
                ["#", <Instagram className="h-5 w-5" />, "Instagram"],
              ].map(([href, icon, label]) => (
                <Link
                  key={String(label)}
                  href={String(href)}
                  className="text-gray-400 hover:text-green-300 transition-colors"
                >
                  {icon}
                  <span className="sr-only">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/login"
                  className="hover:text-green-300 transition-colors"
                >
                  Freight Forwarding
                </Link>
              </li>
              <li>
                <a
                  href="https://arthurgreatserviceslogistics.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors"
                >
                  Logistics Consultancy
                </a>
              </li>
              <li>
                <Link
                  href="/services/air-freight"
                  className="hover:text-green-300 transition-colors"
                >
                  Air Freight
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ocean-freight"
                  className="hover:text-green-300 transition-colors"
                >
                  Ocean Freight
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                ["About Us", "/about"],
                ["Services", "/services"],
                ["Track Shipment", "/tracking"],
                ["Request a Quote", "/quote"],
                ["Careers", "/careers"],
                ["FAQ", "/faq"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-green-300 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-green-300" />
                <span>24, Hospital Road, Olodi-Apapa, Lagos - Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-green-300" />
                <span>+234 906 036 0506</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-green-300" />
                <span>admin@arthurgreatservices.com.ng</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium text-white mb-2">Business Hours</h4>
              <p className="text-sm">Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-sm">Sat: 9:00 AM – 1:00 PM</p>
              <p className="text-sm">Sun: Closed</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} FRIEGHT FORWARD - Arthur Great Services Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}