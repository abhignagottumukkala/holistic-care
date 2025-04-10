import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function SkinPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Skin Solutions</h1>
        <p className="text-muted-foreground">
          Discover effective treatments for common skin conditions from multiple healing traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {skinConditions.map((condition) => (
          <Link href={`/skin/${condition.slug}`} key={condition.name}>
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
          Our specialists can provide customized treatment plans based on your specific skin concerns and history.
        </p>
        <Link href="/consult">
          <Button>Book a Consultation</Button>
        </Link>
      </div>
    </div>
  )
}

const skinConditions = [
  {
    name: "Acne",
    slug: "acne",
    description: "Effective treatments for different types of acne, from mild to severe.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://assets.nhs.uk/nhsuk-cms/images/S_0917_acne_M1080444.original.max-600x600.jpg",
  },
  {
    name: "Dark Spots",
    slug: "dark-spots",
    description: "Hyperpigmented patches on the skin caused by sun exposure, aging, or acne scars.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://t3.ftcdn.net/jpg/03/98/00/12/360_F_398001269_GwuOCahwPv5DzgoPqU18QGZMjtUsWshc.jpg",
  },
  {
    name: "Psoriasis",
    slug: "psoriasis",
    description: "Management strategies for this chronic autoimmune condition affecting the skin.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://hips.hearstapps.com/hmg-prod/images/pustular-psoriasis-1527698589.jpg?crop=0.682xw:1.00xh;0.241xw,0&resize=640:*",
  },
  {
    name: "Dermatitis",
    slug: "dermatitis",
    description: "Inflammation of the skin resulting in redness, itching, and rashes.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://www.cozmoderm.com/wp-content/uploads/2022/06/Seborrheic-Dermatitis.jpg",
  },
  {
    name: "Eczema",
    slug: "eczema",
    description: "A chronic skin condition causing inflammation, itching, redness, and dryness.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://www.assuranceskin.com/wp-content/uploads/2020/10/Askin-servicehero-eczema.jpg",
  },
  {
    name: "Dry Skin",
    slug: "dry-skin",
    description: "Hydrating remedies for dry, flaky, and dehydrated skin.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://geimshospital.com/wp-content/uploads/2025/03/auSAMJOb-AdobeStock_416637566-jpeg.webp",
  },
  {
    name: "Blackheads",
    slug: "black-heads",
    description: "Small, clogged pores filled with oil and dead skin cells, appearing as dark spots.",
    treatments: ["Ayurveda", "Traditional Remedies"],
    image: "https://www.silkor.com/wp-content/uploads/2023/09/Blackheads-at-silkor-scaled.jpg",
  },
  {
    name: "Skin Allergies",
    slug: "skin-allergies",
    description: "Immune reactions to allergens that produce red, itchy, and inflamed skin.",
    treatments: ["Medicine", "Traditional Remedies"],
    image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2022/10/types-rashes-slide40-300x169.jpg",
  },
  {
    name: "Sunburn",
    slug: "sun-burn",
    description: "Skin damage caused by excessive UV exposure, leading to redness, pain, and peeling.",
    treatments: ["Medicine","Traditional Remedies"],
    image: "https://cdn.britannica.com/12/144412-050-68832E22/Sunburn.jpg",
  },
]

