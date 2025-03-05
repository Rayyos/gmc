import Image from "next/image"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { CheckCircle, Phone, Mail, Facebook, MessageCircle,  Instagram, Linkedin } from "lucide-react"
import ContactForm from "@/components/common/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-navy-blue text-white py-6 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={"/logo.png"} // Image path
                alt="Company Logo"
                width={60} // Adjust width as needed
                height={40} // Adjust height as needed
                className="rounded-full" // Optional: Apply rounded corners
              />
              <span className="text-xl font-semibold">Gulf Manpower Consultancy</span>
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

      <main className="w-full">
        {/* Full-width Banner Section */}
        <section className="mb-12 relative w-full">
          <Image
            src="/main_banner.webp"
            alt="Gulf Manpower Consultancy"
            width={1920} // Set to full-width dimensions
            height={600}
            className="w-full h-[600px]"
          />
          <div className="absolute inset-0 bg-navy-blue bg-opacity-0 flex items-center justify-center rounded-lg">
            <div className="text-center text-black-500">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Reliable Recruitment Partner</h2>
              <p className="text-xl md:text-2xl font-bold text-black">Your Gateway to Gulf Employment!</p>
            </div>
          </div>
        </section>

        {/* Constrained Container for Rest of the Content */}
        <div className="container mx-auto px-4">
          <section className="mb-12">
            <p className="text-lg text-center mb-6 text-gray-700">
              At Gulf Manpower Consultancy, we specialize in providing skilled and unskilled workforce solutions to
              businesses across the Gulf region. Whether you are looking for highly qualified professionals or dedicated
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
                    <a href="tel:+917678023779" className="text-blue-600 hover:underline">+91 76780 23779</a>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-gold" />
                    <a href="https://wa.me/971553717744" className="text-blue-600 hover:underline flex items-center">
                      +971 55 371 7744
                    </a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-gold" />
                    <a href="mailto:gulfmanpowerconsultancy@outlook.com" className="text-blue-600 hover:underline">gulfmanpowerconsultancy@outlook.com</a>
                  </li>
                </ul>
              </div>
              <ContactForm />
            </div>
          </section>
        </div>
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
                <Link href="https://www.facebook.com/share/19tAEXhEp2/"
                  className="hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer" >
                  <Facebook />
                </Link>
                <Link
                  href="https://www.instagram.com/gulf.manpowerconsultancy/"
                  className="hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/gulf-manpower-consultancy/"
                  className="hover:text-gold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
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

