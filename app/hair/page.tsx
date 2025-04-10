import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function HairPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Hair Solutions</h1>
        <p className="text-muted-foreground">
          Discover effective treatments for common hair and scalp conditions from multiple healing traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {hairConditions.map((condition) => (
          <Link href={`/hair/${condition.slug}`} key={condition.name}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-[16/9] relative">
                <Image
                  src={condition.image || "/placeholder.svg?height=200&width=400"}
                  alt={condition.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle>{condition.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>{condition.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex flex-wrap gap-2">
                  {condition.treatments.map((treatment) => (
                    <span key={treatment} className="text-xs bg-muted px-2 py-1 rounded-full">
                      {treatment}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Need Personalized Advice?</h2>
        <p className="mb-4">
          Our specialists can provide customized treatment plans based on your specific hair concerns and history.
        </p>
        <Link href="/consult">
          <Button>Book a Consultation</Button>
        </Link>
      </div>
    </div>
  )
}

const hairConditions = [
  {
    name: "Hair Loss",
    slug: "hair-loss",
    description: "Treatments for male and female pattern baldness, alopecia, and other causes of hair loss.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://media6.ppl-media.com/mediafiles/blogs/shutterstock_2053913117_b9fa9fbc8c.jpg",
  },
  {
    name: "Dandruff",
    slug: "dandruff",
    description: "Solutions for flaky, itchy scalp and persistent dandruff problems.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://www.drhealthclinic.com/wp-content/uploads/2024/12/Untitled-1.jpg",
  },
  {
    name: "Premature Graying",
    slug: "premature-graying",
    description: "Natural approaches to address premature graying and maintain natural hair color.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePpjnIC48lM5XML9aUKdDgrjQB6xWrZZAyw&s",
  },
  {
    name: "Dry & Damaged Hair",
    slug: "dry-damaged-hair",
    description: "Remedies for dry, brittle, and chemically damaged hair.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://t4.ftcdn.net/jpg/05/94/21/31/360_F_594213145_LBGvLIFpebyyVKW0wT5v0Bax9JwxzbRv.jpg",
  },
  {
    name: "Scalp Psoriasis",
    slug: "scalp-psoriasis",
    description: "Treatments for the red, itchy, scaly patches associated with scalp psoriasis.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQbHs_yrRUOLx2Fh57h9lVlvYX1HxhpGppUw&s",
  },
  {
    name: "Oily Scalp",
    slug: "oily-scalp",
    description: "Solutions to balance oil production and maintain a healthy scalp.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://images.ctfassets.net/j6utfne5ne6b/XwagHyHh1qDcskvrKKtNB/779d0c5f3488a233f7a8373be5cf3c1a/causes-of-oily-hair-and-scalp-in-summer.jpg?fm=webp&q=70",
  },
  {
    name: "Hair Thinning",
    slug: "hair-thinning",
    description: "Approaches to improve hair density and address progressive thinning.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/036/776/210/small_2x/ai-generated-a-woman-dealing-with-hair-loss-generative-ai-free-photo.jpeg",
  },
  {
    name: "Frizzy Hair",
    slug: "frizzy-hair",
    description: "Treatments to manage frizz and improve hair texture and manageability.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://preview.redd.it/wavy-poofy-frizzy-hair-need-help-v0-mshoteondd8d1.jpg?width=1080&crop=smart&auto=webp&s=9420199162d1d6fee1065c0f24cb8874c1788245",
  },
  {
    name: "Slow Hair Growth",
    slug: "slow-hair-growth",
    description: "Natural methods to stimulate and accelerate healthy hair growth.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://c02.purpledshub.com/uploads/sites/41/2024/12/Balding.jpg?w=1029&webp=1",
  },
]

