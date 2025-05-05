"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "Supply Chain Manager",
    company: "Global Retail Inc.",
    quote:
      "GlobalLogistics has transformed our supply chain operations. Their expertise in freight forwarding and customs clearance has reduced our shipping times by 30% and saved us thousands in logistics costs.",
    image: "/cargo.png?height=80&width=80",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Director",
    company: "Tech Solutions Ltd.",
    quote:
      "We've been working with GlobalLogistics for over 5 years, and they've consistently delivered exceptional service. Their tracking system gives us real-time visibility into our shipments, which is invaluable for our business.",
    image: "/cargo.png?height=80&width=80",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Import/Export Manager",
    company: "International Trading Co.",
    quote:
      "The team at GlobalLogistics understands the complexities of international shipping. Their customs expertise has helped us navigate complicated regulations and avoid costly delays at borders.",
    image: "/cargo.png?height=80&width=80",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-white px-4 lg:px-8">
      <div className="container px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-blue-800">What Our Clients Say</h2>
          <p className="text-blue-600 mt-2">Trusted by businesses worldwide</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-xl p-8 md:p-12 shadow-md">
            <div className="text-blue-200 mb-6">
              <Quote className="h-12 w-12" />
            </div>

            <p className="text-lg md:text-xl italic text-blue-800 mb-8">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center">
              <img
                src={testimonials[currentIndex].image || "/cargo.png"}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="font-bold text-blue-800">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-blue-600">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-blue-600">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md hidden md:flex text-blue-600"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md hidden md:flex text-blue-600"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
