"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Globe, Award, TrendingUp, Ship, Plane, Truck, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
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
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 md:px-6 lg:px-8"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">About Arthur Great Services</h1>
            <p className="text-xl opacity-90 mb-8">Your trusted partner in logistics and freight solutions since 1990</p>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Arthur Great Services Ltd is a company Incorporated in Nigeria under the Companies and allied matters act of 1990 as a Licensed Clearing and Forwarding Company, Logistics Consultancy, Freight forwarding, haulage, with the corporate head office in Apapa, Lagos State, Nigeria and branch offices in Rivers State.
              </p>
              <p className="text-gray-600 mb-4">
                Arthur Great Services Ltd began international freight clearing and forwarding services in Nigeria over a decade ago. And since then, it has been nothing but stories of excellence and she has grown to become an international brand.
              </p>
              <p className="text-gray-600">
                We provide excellent, competent, efficient freight clearing, forwarding, logistics and delivery services in Lagos and Port Harcourt Sea Ports.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="/images/IMG7.jpg"
                alt="Arthur Great Services headquarters"
                className="rounded-lg shadow-lg h-[400px] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div 
              variants={item}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-800">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To provide innovative, reliable, and cost-effective logistics solutions that empower businesses to
                thrive in Nigeria and beyond. We are committed to exceeding customer expectations through
                operational excellence and personalized service.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Deliver exceptional service quality</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Optimize supply chains for efficiency</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Provide transparent and reliable solutions</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-800">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To be the most trusted and innovative logistics partner in Nigeria, known for transforming how businesses
                manage their supply chains. We envision a future where logistics is seamless and a strategic advantage for our clients.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Lead industry innovation and best practices</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Expand reach while maintaining service excellence</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span>Promote sustainable logistics solutions</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">Our Core Values</h2>
            <p className="text-gray-600">
              These principles guide everything we do at Arthur Great Services, from how we serve our clients to how we work
              together as a team.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full text-green-700 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our operations, continuously raising the bar for quality and
                performance.
              </p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full text-green-700 mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We conduct business with honesty, transparency, and ethical standards that build trust with our clients
                and partners.
              </p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full text-green-700 mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and creative solutions to solve complex logistics challenges and drive
                industry progress.
              </p>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full text-green-700 mb-4">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and partnerships to deliver exceptional results for our clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our company's history that have shaped who we are today</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div 
                variants={item}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">1990</h3>
                    <h4 className="text-green-700 font-medium mb-2">Company Founded</h4>
                    <p className="text-gray-600">
                      Arthur Great Services was established in Lagos, Nigeria as a licensed clearing and forwarding company.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-green-700 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="hidden md:block"></div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2014</h3>
                    <h4 className="text-green-700 font-medium mb-2">Port Harcourt Expansion</h4>
                    <p className="text-gray-600">
                      Opened our first branch office in Rivers State to serve clients in the eastern region of Nigeria.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-green-700 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2017</h3>
                    <h4 className="text-green-700 font-medium mb-2">Haulage Services Launch</h4>
                    <p className="text-gray-600">
                      Established our haulage subsidiary "The Lord is My Song Haulage Services" for nationwide deliveries.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-green-700 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="hidden md:block"></div>
                <div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2020</h3>
                    <h4 className="text-green-700 font-medium mb-2">Technology Upgrade</h4>
                    <p className="text-gray-600">
                      Implemented digital tracking systems and online documentation for faster clearance processes.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-green-700 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </motion.div>

              <motion.div 
                variants={item}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                <div className="md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <h4 className="text-green-700 font-medium mb-2">Industry Recognition</h4>
                    <p className="text-gray-600">
                      Recognized as one of Nigeria's top clearing and forwarding companies with operations in all major ports.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 hidden md:flex">
                  <div className="bg-green-700 rounded-full h-6 w-6 border-4 border-white"></div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Port Operations */}
      <section className="py-16">
        <div className="container px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">Our Port Operations</h2>
            <p className="text-gray-600">
              We clear all your shipments through the following Sea Ports in Nigeria with efficiency and professionalism.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-700 mb-4">
                <MapPin className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lagos Ports</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Lagos Port Complex Apapa</li>
                <li>Tincan Island Port</li>
                <li>KLT 1 & 2 Terminals</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-700 mb-4">
                <Ship className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rivers State Ports</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Port Harcourt Port</li>
                <li>Federal Lighter Terminal Onne</li>
                <li>Federal Ocean Terminal Onne</li>
              </ul>
            </motion.div>

            <motion.div 
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-green-700 mb-4">
                <Truck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Clearing of cars, trucks and goods</li>
                <li>Logistics and Tariff consultation</li>
                <li>Freight forwarding nationwide</li>
                <li>Haulage services</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Changed from green background to white */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-800">Why Choose Arthur Great Services?</h2>
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
                title: "Licensed Experts",
                description: "We are a leading customs licensed clearing agent in Nigeria, clearing directly and swiftly with the Ports without involving third parties."
              },
              {
                title: "Strong Customs Reputation",
                description: "Our day-to-day association with Nigeria customs has earned us a good reputation and smooth working relationship."
              },
              {
                title: "Strategic Location",
                description: "We are located close to the Ports, eliminating challenges with distance and ensuring faster service."
              },
              {
                title: "No Demurrage",
                description: "Our efficient processes prevent unnecessary delays and extra charges at the ports."
              },
              {
                title: "Experienced Team",
                description: "Our professionals have extensive knowledge of customs regulations and procedures."
              },
              {
                title: "Comprehensive Services",
                description: "From clearing to haulage, we provide end-to-end logistics solutions under one roof."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 p-6 rounded-lg shadow-md text-white"
              >
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="opacity-90">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}