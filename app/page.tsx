"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Ship,
  Plane,
  Globe,
  Box,
  Anchor,
  Warehouse,
  Clock,
  Users,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import NewsSection from "@/components/news-section"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

// Login Modal Component
function LoginModal({ onClose, onLogin }: { onClose: () => void, onLogin: () => void }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-green-800">Login</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            ×
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800">
            Login
          </Button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default function FreightForwarding() {
  const router = useRouter()
  const [showLogin, setShowLogin] = useState(false)
  const [redirectPath, setRedirectPath] = useState("")

  const handleQuoteClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    setRedirectPath(path)
    setShowLogin(true)
  }

  const handleLogin = () => {
    setShowLogin(false)
    router.push(redirectPath || "/quote")
  }

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Global Freight Forwarding Solutions
              </h1>
              <p className="text-lg opacity-90 max-w-md">
                Expert freight forwarding services by sea, air, and land with Arthur Great Services Limited.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote" onClick={(e) => handleQuoteClick(e, "/quote")}>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                    Request a Quote
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                    Our Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src="/freight-hero.jpg"
                alt="Cargo shipment"
                className="rounded-lg shadow-lg h-[400px] w-[500px] object-cover"
              />
            </motion.div>
          </div>

          {/* Quick Tracking Form in Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
              <h3 className="text-blue-700 font-bold text-lg mb-4">Track Your Shipment</h3>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Enter tracking number"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                />
                <Link href="/register">
                  <Button className="whitespace-nowrap bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Track Now
                  </Button>
                </Link>
              </form>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-4 max-w-2xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-blue-800">Our Freight Forwarding Services</h2>
              <p className="text-gray-600">
                Comprehensive freight solutions tailored to your international shipping needs
              </p>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Ship className="h-12 w-12 text-blue-700 mb-4" />,
                  title: "Ocean Freight",
                  description: "Cost-effective sea freight solutions with global coverage and customs expertise.",
                  href: "/services/ocean-freight"
                },
                {
                  icon: <Plane className="h-12 w-12 text-blue-700 mb-4" />,
                  title: "Air Freight",
                  description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
                  href: "/services/air-freight"
                },
                {
                  icon: <Box className="h-12 w-12 text-blue-700 mb-4" />,
                  title: "LCL & FCL",
                  description: "Less than Container Load and Full Container Load shipping options.",
                  href: "/services/lcl-fcl"
                },
                {
                  icon: <Anchor className="h-12 w-12 text-blue-700 mb-4" />,
                  title: "Port Operations",
                  description: "Efficient handling and coordination of port operations and documentation.",
                  href: "/services/port-operations"
                },
                {
                  icon: <Warehouse className="h-12 w-12 text-blue-700 mb-4" />,
                  title: "Cargo Consolidation",
                  description: "Optimized cargo consolidation services for cost-effective shipping.",
                  href: "/services/cargo-consolidation"
                },
                {
                  icon: <Globe className="h-12 w-12 text-blue-700 mb-4" />,
                  title: "Global Coverage",
                  description: "Extensive network covering major ports and airports worldwide.",
                  href: "/services/global-coverage"
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  variants={item}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  {service.icon}
                  <h3 className="text-xl font-bold mb-2 text-blue-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link href={service.href} className="text-blue-700 font-medium inline-flex items-center group">
                    Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { icon: <Globe className="h-10 w-10" />, value: "150+", label: "Countries Served" },
                { icon: <Ship className="h-10 w-10" />, value: "8,000+", label: "Monthly TEUs" },
                { icon: <Users className="h-10 w-10" />, value: "1,200+", label: "Satisfied Clients" },
                { icon: <Clock className="h-10 w-10" />, value: "20+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="text-blue-700 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-blue-800">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <img
                  src="/freight-about.jpg"
                  alt="Freight forwarding team"
                  className="rounded-lg shadow-lg h-[400px] w-full object-cover"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-blue-800">Why Choose Our Freight Services?</h2>
                <p className="text-gray-600">
                  Arthur Great Services Limited brings decades of expertise in international freight forwarding, 
                  offering reliable, efficient, and cost-effective solutions for your global shipping needs.
                </p>
                <div className="space-y-4">
                  {[
                    "Global Network: Partnered with major carriers and agents worldwide",
                    "Customs Expertise: Smooth customs clearance with our expert team",
                    "Real-time Tracking: Advanced tracking systems for complete visibility",
                    "Competitive Rates: Negotiated rates with major shipping lines"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="h-6 w-6 text-blue-700 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-blue-800">{item.split(":")[0]}</h3>
                        <p className="text-gray-600">{item.split(":")[1]}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <Link href="/about">
                  <Button className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Learn More About Us
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialCarousel />

        {/* News Section */}
        <NewsSection />

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Ship Your Cargo Globally?</h2>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Contact our freight experts today to discuss your international shipping requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/quote" onClick={(e) => handleQuoteClick(e, "/quote")}>
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-blue-800">Get in Touch</h2>
                <p className="text-gray-600">Have questions about our freight services? Our team is ready to assist you.</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-700" />
                    <span>24, Hospital Road, Olodi-Apapa, Lagos - Nigeria.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-700" />
                    <span>+234 906 036 0506</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                    <span>admin@arthurgreatservices.com.ng</span>
                  </div>
                </div>

                <div className="pt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3526145645607!2d3.3751832!3d6.5951815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf6d29c2d5d%3A0x76c3e96a1f1b2e48!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                    title="Office Location"
                  ></iframe>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <form 
                  action="https://formsubmit.co/admin@arthurgreatservices.com.ng" 
                  method="POST" 
                  className="space-y-4"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_autoresponse" value="Thank you for contacting Arthur Great Services Limited. We'll get back to you shortly." />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value="https://arthurgreatserviceslogistics.vercel.app/" />
                  <input type="hidden" name="subject" value="Freight Forwarding Inquiry" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-blue-800">
                        Full Name
                      </label>
                      <input 
                        id="name" 
                        name="name" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-blue-800">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-blue-800">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium text-blue-800">
                      Service Interested In
                    </label>
                    <select 
                      id="service" 
                      name="service" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="lcl">LCL Shipping</option>
                      <option value="fcl">FCL Shipping</option>
                      <option value="customs">Customs Clearance</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-blue-800">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your freight needs..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}