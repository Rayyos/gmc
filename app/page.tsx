import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CheckCircle, Phone, Mail, Globe, Facebook, Twitter, LinkedinIcon as LinkedIn } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-navy-blue text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center">
                <span className="text-navy-blue font-bold text-xl">GMC</span>
              </div>
              <span className="text-xl font-semibold">Gulf Manpower</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#services" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Services</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#why-choose-us" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Why Choose Us</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="#contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 relative">
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Gulf Manpower Consultancy"
            width={1200}
            height={400}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-navy-blue bg-opacity-70 flex items-center justify-center rounded-lg">
            <div className="text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Reliable Recruitment Partner</h2>
              <p className="text-xl md:text-2xl">for the Gulf Region</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-lg text-center mb-6 text-gray-700">
            At Gulf Manpower Consultancy, we specialize in providing skilled and unskilled workforce solutions to
            businesses across the Gulf region. Whether you're looking for highly qualified professionals or dedicated
            laborers, we ensure the right talent reaches the right opportunity.
          </p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-navy-blue">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard
              title="Skilled & Professional Manpower Recruitment"
              items={[
                "Oil & Gas",
                "Engineering & Construction",
                "Healthcare & Medical Staff",
                "IT & Software Development",
                "Finance & Banking",
                "Hospitality & Tourism",
              ]}
            />
            <ServiceCard
              title="Unskilled & General Labor Recruitment"
              items={[
                "Construction Workers",
                "Factory & Warehouse Labor",
                "Housekeeping & Cleaning Staff",
                "Hospitality & Catering Assistants",
                "Security Guards & Drivers",
                "Agriculture & Farming Labor",
              ]}
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-navy-blue">Additional Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Overseas Employment Assistance</li>
              <li>HR & Payroll Outsourcing</li>
              <li>Training & Skill Development</li>
            </ul>
          </div>
        </section>

        <section id="why-choose-us" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-navy-blue">Why Choose Gulf Manpower Consultancy?</h2>
          <ul className="space-y-4">
            {[
              "Industry Expertise – Years of experience in Gulf recruitment for all workforce levels.",
              "Extensive Talent Pool – A vast database of skilled and unskilled job seekers.",
              "Fast & Reliable Hiring – Efficient recruitment processes to match employers with the right candidates.",
              "End-to-End Support – We assist with documentation, visas, and onboarding.",
              "Trusted by Top Companies – We partner with leading Gulf businesses to supply workforce solutions.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-6 w-6 text-gold mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-navy-blue">For Employers & Job Seekers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-navy-blue text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Employers</h3>
              <p>
                Looking for skilled professionals or general labor? Our recruitment solutions help businesses find the
                right workforce efficiently.
              </p>
            </div>
            <div className="bg-gold text-navy-blue p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
              <p>Searching for a job in the Gulf? Register with us today and explore various career opportunities.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-6 text-navy-blue">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-700">
                For recruitment inquiries, job applications, or consultations, contact us at:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gold" />
                  <span>[Your Contact Number]</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gold" />
                  <span>[Your Email Address]</span>
                </li>
                <li className="flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gold" />
                  <span>[Your Website URL]</span>
                </li>
              </ul>
            </div>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button type="submit" className="bg-navy-blue text-white hover:bg-navy-blue/90">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-navy-blue text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Gulf Manpower Consultancy</h3>
              <p>Your Gateway to Gulf Employment!</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#services" className="hover:text-gold">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose-us" className="hover:text-gold">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-gold">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-gold">
                  <Facebook />
                </Link>
                <Link href="#" className="hover:text-gold">
                  <Twitter />
                </Link>
                <Link href="#" className="hover:text-gold">
                  <LinkedIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Gulf Manpower Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-navy-blue">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-gold mr-2" />
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

