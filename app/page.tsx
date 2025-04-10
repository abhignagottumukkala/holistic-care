"use client"

import Link from "next/link"
import { ActivityIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Holistic</span>Care
          </Link>
          <div className="hidden md:flex items-center gap-6 mx-6">
            <Link href="/health" className="text-sm font-medium transition-colors hover:text-primary">
              Health
            </Link>
            <Link href="/skin" className="text-sm font-medium transition-colors hover:text-primary">
              Skin
            </Link>
            <Link href="/hair" className="text-sm font-medium transition-colors hover:text-primary">
              Hair
            </Link>
            <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link href="/consult" className="text-sm font-medium transition-colors hover:text-primary">
              Consult
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <AuthButtons />
            <Link href="/consult">
              <Button>Consult Now</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://www.autoimmuneinstitute.org/wp-content/smush-webp/2024/02/Holistic-vs-Modern-Western-Medicine.jpg.webp"
              alt="Holistic health background"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Your Complete Health & Wellness Solution
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Find natural and medical solutions for your health, skin, and hair concerns from multiple healing
                  traditions.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex w-full max-w-sm items-center space-x-2 mx-auto" action="/search">
                  <Input type="search" name="q" placeholder="Search symptoms or conditions..." className="flex-1" />
                  <Button type="submit">Search</Button>
                </form>
                <div className="flex justify-center">
                  <Link href="/symptom-analysis">
                    <Button variant="outline" className="gap-2">
                      <ActivityIcon className="h-4 w-4" />
                      Analyze Your Symptoms
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-muted-foreground">Popular: Acne, Hair Loss, Diabetes, Arthritis, Anxiety</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CategoryCard
                title="Health"
                description="Discover solutions for common health conditions from multiple healing traditions."
                imageSrc="https://media.istockphoto.com/id/1012323872/photo/medical-insurance-concept-with-family-and-stethoscope-on-wooden-desk.jpg?s=2048x2048&w=is&k=20&c=5dJnfu-miOxR1Zsm1tE6MHhJlYYUY-6TrmQ7R7aJCS4="
                href="/health"
              />
              <CategoryCard
                title="Skin"
                description="Find effective treatments for all types of skin concerns and conditions."
                imageSrc="https://staraesthetic.shopespot.com/uploads/partner/236/promo_images/2021/01/acute.jpg"
                href="/skin"
              />
              <CategoryCard
                title="Hair"
                description="Explore remedies for hair loss, damage, and other scalp and hair issues."
                imageSrc="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/04/pjimage-9-1556525020.jpg"
                href="/hair"
              />
            </div>
          </div>

          <div className="bg-muted p-8 rounded-lg mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Why Choose Holistic Care?</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs mt-1">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Multiple Healing Traditions</h3>
                      <p className="text-sm text-muted-foreground">
                        Access treatments from Ayurveda, Homeopathy, Allopathy, and traditional remedies all in one
                        place.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs mt-1">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Expert Consultations</h3>
                      <p className="text-sm text-muted-foreground">
                        Connect with qualified specialists from various medical backgrounds for personalized advice.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs mt-1">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Comprehensive Solutions</h3>
                      <p className="text-sm text-muted-foreground">
                        Find information, products, and professional help for all your health, skin, and hair concerns.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://splendorofyouth.com/wp-content/uploads/2019/12/Canva-Alternative-Medicine.-1024x678.jpg"
                  alt="Holistic health approach"
                  width={500}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/50">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HolisticCare</h3>
              <p className="text-sm text-muted-foreground">
                Your complete health and wellness platform offering solutions from multiple healing traditions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/health" className="text-muted-foreground hover:text-foreground">
                    Health
                  </Link>
                </li>
                <li>
                  <Link href="/skin" className="text-muted-foreground hover:text-foreground">
                    Skin
                  </Link>
                </li>
                <li>
                  <Link href="/hair" className="text-muted-foreground hover:text-foreground">
                    Hair
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-muted-foreground hover:text-foreground">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">
                    Medical Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} HolisticCare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface CategoryCardProps {
  title: string
  description: string
  imageSrc: string
  href: string
}

function CategoryCard({ title, description, imageSrc, href }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-lg transition-all hover:shadow-lg">
        <div className="aspect-[4/3] relative">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-xl font-bold mb-1">{title}</h3>
          <p className="text-sm text-white/80 line-clamp-2">{description}</p>
          <Button variant="outline" className="mt-3 bg-white/20 hover:bg-white/30 border-white/50 text-white">
            Explore {title}
          </Button>
        </div>
      </div>
    </Link>
  )
}

function AuthButtons() {
  "use client"
  
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)
  }, [])
  
  if (isLoggedIn) {
    return (
      <Link href="/profile">
        <Button variant="outline" className="hidden md:flex">
          My Profile
        </Button>
      </Link>
    )
  }
  
  return (
    <>
      <Link href="/auth/signin">
        <Button variant="outline" className="hidden md:flex">
          Sign In
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button variant="outline" className="hidden md:flex">
          Sign Up
        </Button>
      </Link>
    </>
  )
}

const healthCategories = [
  {
    title: "Digestive Health",
    description: "Solutions for digestive issues including acidity, IBS, constipation, and more.",
  },
  {
    title: "Respiratory Conditions",
    description: "Treatments for asthma, allergies, bronchitis, and other breathing problems.",
  },
  {
    title: "Chronic Pain",
    description: "Relief for arthritis, back pain, migraines, and other chronic pain conditions.",
  },
  {
    title: "Mental Wellness",
    description: "Support for anxiety, depression, stress, and sleep disorders.",
  },
  {
    title: "Diabetes Management",
    description: "Natural and medical approaches to managing diabetes and blood sugar.",
  },
  {
    title: "Heart Health",
    description: "Solutions for hypertension, cholesterol, and overall cardiovascular health.",
  },
]

const skinCategories = [
  {
    title: "Acne & Blemishes",
    description: "Treatments for all types of acne, pimples, and blemishes.",
  },
  {
    title: "Anti-Aging",
    description: "Solutions for wrinkles, fine lines, and maintaining youthful skin.",
  },
  {
    title: "Dry & Sensitive Skin",
    description: "Gentle remedies for dry, itchy, and sensitive skin conditions.",
  },
  {
    title: "Pigmentation",
    description: "Treatments for dark spots, melasma, and uneven skin tone.",
  },
  {
    title: "Eczema & Psoriasis",
    description: "Relief for chronic inflammatory skin conditions.",
  },
  {
    title: "Skin Brightening",
    description: "Natural and clinical solutions for radiant, glowing skin.",
  },
]

const hairCategories = [
  {
    title: "Hair Loss & Thinning",
    description: "Solutions for male and female pattern baldness and thinning hair.",
  },
  {
    title: "Dandruff & Scalp Issues",
    description: "Treatments for dandruff, dry scalp, and scalp psoriasis.",
  },
  {
    title: "Hair Growth",
    description: "Natural and clinical approaches to stimulate hair growth.",
  },
  {
    title: "Damaged Hair Repair",
    description: "Remedies for dry, brittle, and chemically damaged hair.",
  },
  {
    title: "Premature Graying",
    description: "Solutions to address premature graying and maintain natural color.",
  },
  {
    title: "Oily Hair & Scalp",
    description: "Treatments to balance oil production and maintain healthy hair.",
  },
]

