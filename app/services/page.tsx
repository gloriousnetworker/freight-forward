import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Truck,
  Ship,
  Plane,
  Package,
  FileText,
  MapPin,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Globe,
  Shield,
} from "lucide-react"

const services = [
  {
    id: "freight-forwarding",
    title: "Freight Forwarding",
    description:
      "International shipping solutions by sea, air, and land with real-time tracking and customs clearance.",
    icon: Ship,
    features: [
      "Door-to-door delivery services",
      "Customs documentation and clearance",
      "Cargo insurance options",
      "Real-time shipment tracking",
      "Consolidation services",
    ],
    image: "/images/IMG5.jpg",
  },
  {
    id: "haulage",
    title: "Haulage Services",
    description:
      "Reliable transportation of goods with our modern fleet of vehicles for local and long-distance deliveries.",
    icon: Truck,
    features: [
      "Full truckload (FTL) services",
      "Less than truckload (LTL) options",
      "Temperature-controlled transport",
      "Specialized equipment for oversized cargo",
      "GPS tracking on all vehicles",
    ],
    image: "/images/IMG12.jpg",
  },
  {
    id: "clearing-forwarding",
    title: "Clearing & Forwarding",
    description: "Expert handling of customs documentation and procedures to ensure smooth clearance of your goods.",
    icon: Package,
    features: [
      "Import and export customs clearance",
      "Documentation preparation and verification",
      "Tariff classification and duty calculation",
      "Regulatory compliance management",
      "Customs bond processing",
    ],
    image: "/images/IMG14.jpg",
  },
  {
    id: "consultancy",
    title: "Logistics Consultancy",
    description: "Strategic advice on optimizing your supply chain, reducing costs, and improving efficiency.",
    icon: FileText,
    features: [
      "Supply chain optimization",
      "Logistics network design",
      "Cost reduction strategies",
      "Performance benchmarking",
      "Technology implementation guidance",
    ],
    image: "/images/IMG3.jpg",
  },
  {
    id: "air-freight",
    title: "Air Freight",
    description: "Fast and reliable air freight services for time-sensitive shipments to destinations worldwide.",
    icon: Plane,
    features: [
      "Express air freight services",
      "Charter solutions for urgent shipments",
      "Dangerous goods handling",
      "Temperature-controlled air freight",
      "Airport-to-airport and door-to-door options",
    ],
    image: "/images/IMG6.jpg",
  },
  {
    id: "warehousing",
    title: "Warehousing",
    description: "Secure storage solutions with inventory management systems and distribution services.",
    icon: MapPin,
    features: [
      "Short and long-term storage options",
      "Inventory management systems",
      "Pick and pack services",
      "Cross-docking capabilities",
      "Distribution and fulfillment services",
    ],
    image: "/cargo.png?height=300&width=500",
  },
]

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-16 md:py-24 px-4 lg:px-8">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Logistics Solutions</h1>
            <p className="text-xl opacity-90 mb-8">
              From freight forwarding to warehousing, we offer end-to-end logistics services tailored to your business
              needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Request a Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-green-700 hover:bg-green-700">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Our Services</h2>
            <p className="text-gray-600">
              We provide a comprehensive range of logistics services to meet all your shipping and supply chain needs.
              Our experienced team ensures efficient, reliable, and cost-effective solutions for businesses of all
              sizes.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center justify-center p-2 bg-green-100 rounded-lg text-green-600 mb-4">
                    {React.createElement(service.icon, { className: "h-8 w-8" })}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-green-700">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <Button className="text-white bg-green-600 hover:bg-green-700">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <img
                    src={service.image || "/cargo.png"}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 px-4 lg:px-8">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Why Choose Our Services</h2>
            <p className="text-gray-600">
              With years of experience in the logistics industry, we've built a reputation for reliability, efficiency,
              and exceptional customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Network</h3>
              <p className="text-gray-600">
                Our extensive network of partners in over 100 countries ensures seamless logistics operations worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <Shield className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliability & Security</h3>
              <p className="text-gray-600">
                We prioritize the safety and security of your cargo with advanced tracking and monitoring systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <BarChart3 className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">
                Our optimized logistics solutions help reduce costs while maintaining high service quality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4">
                <Truck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Fleet</h3>
              <p className="text-gray-600">
                Our well-maintained fleet of vehicles ensures timely and safe delivery of your goods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white-600 text-green-700 px-4 lg:px-8">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Logistics?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Contact our team today to discuss how we can help streamline your supply chain and reduce costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/quote">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Request a Quote
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-green text-green-700 hover:bg-green-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
