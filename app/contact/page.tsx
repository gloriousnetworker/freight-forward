import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import ContactForm from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 md:py-24 px-4 lg:px-8">
        <div className="container px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">Have questions about our services? Our team is ready to assist you.</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-800">Get in Touch</h2>
              <p className="text-green-600 mb-8">
                Whether you have a question about our services, need a quote, or want to discuss your logistics needs,
                our team is here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-800">Our Headquarters</h3>
                    <p className="text-green-600">24, Hospital Road, Olodi-Apapa,</p>
                    <p className="text-green-600">Lagos - Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-800">Phone</h3>
                    <p className="text-green-600">Main: +234 906 036 0506</p>
                    <p className="text-green-600">Customer Support: +234 906 036 0506</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-800">Email</h3>
                    <p className="text-green-600">General Inquiries: admin@arthurgreatservices.com.ng</p>
                    <p className="text-green-600">Customer Support: admin@arthurgreatservices.com.ng</p>
                    <p className="text-green-600">Sales: admin@arthurgreatservices.com.ng</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-green-800">Business Hours</h3>
                    <p className="text-green-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-green-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-green-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4 text-green-800">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://arthurgreatserviceslogistics.vercel.app/"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  >
                    <MapPin className="h-6 w-6" />
                    <span className="sr-only">Website</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="#"
                    className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-green-800">Send Us a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map and other sections remain unchanged */}
    </div>
  )
}
