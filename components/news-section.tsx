"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import NewsletterForm from "@/components/newsletter-form"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Logistics",
    excerpt:
      "Discover how eco-friendly practices are transforming the logistics industry and reducing carbon footprints.",
    date: "May 15, 2023",
    image: "/cargo.png?height=200&width=400",
    slug: "sustainable-logistics",
  },
  {
    id: 2,
    title: "Navigating Global Supply Chain Disruptions",
    excerpt: "Learn strategies to mitigate risks and maintain operational continuity during supply chain challenges.",
    date: "April 22, 2023",
    image: "/cargo.png?height=200&width=400",
    slug: "supply-chain-disruptions",
  },
  {
    id: 3,
    title: "Technology Trends Reshaping Freight Forwarding",
    excerpt: "Explore how AI, blockchain, and IoT are revolutionizing the freight forwarding and logistics landscape.",
    date: "March 10, 2023",
    image: "/cargo.png?height=200&width=400",
    slug: "technology-trends",
  },
]

export default function NewsSection() {
  return (
    <section className="py-16 bg-gray-50 px-4 lg:px-8">
      <div className="container px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-green-800">Latest News & Insights</h2>
            <p className="text-green-600 mt-2">
              Stay updated with industry trends and company announcements
            </p>
          </div>
          <Link href="/blog">
            <Button variant="outline" className="mt-4 md:mt-0 text-green-600 border-green-600 hover:bg-green-50">
              View All Posts <ArrowRight className="ml-2 h-4 w-4 text-green-600" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image || "/cargo.png"}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-green-600 text-sm mb-2">{post.date}</p>
                <h3 className="font-bold text-xl mb-2 text-green-800">
                  {post.title}
                </h3>
                <p className="text-green-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-green-600 font-medium inline-flex items-center group"
                >
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform text-green-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-green-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2 text-green-800">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-green-600">
              Stay updated with our latest news, industry insights, and logistics tips delivered directly to your inbox.
            </p>
          </div>
          <div className="max-w-md mx-auto">
            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  )
}
