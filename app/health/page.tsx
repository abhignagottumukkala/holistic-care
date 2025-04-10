import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function HealthPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Health Solutions</h1>
        <p className="text-muted-foreground">
          Discover comprehensive treatments for common health conditions from multiple healing traditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {healthConditions.map((condition) => (
          <Link href={`/health/${condition.slug}`} key={condition.name}>
            <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src={
                    condition.image ||
                    `/placeholder.svg?height=200&width=400&text=${condition.name.replace(/\s+/g, "+")}`
                  }
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
          Our specialists can provide customized treatment plans based on your specific symptoms and health history.
        </p>
        <Link href="/consult">
          <Button>Book a Consultation</Button>
        </Link>
      </div>
    </div>
  )
}

const healthConditions = [
  {
    name: "Diabetes",
    slug: "diabetes",
    description: "Natural and medical approaches to managing blood sugar levels and preventing complications.",
    treatments: ["Ayurveda", "Allopathy", "Homeopathy", "Traditional Remedies"],
    image: "https://static.toiimg.com/thumb/msid-63375718,width-1280,height-720,resizemode-4/63375718.jpg",
  },
  {
    name: "Gastritis",
    slug: "gastritis",
    description: "Inflammation of the stomach lining causing pain and discomfort.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://www.carehospitals.com/ckfinder/userfiles/images/gastritis-diet-foods-eat-avoid.webp",
  },
  {
    name: "Headache",
    slug: "head-ache",
    description: "Solutions for preventing and treating different types of headaches and migraines.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCs8e5YySH-Zvv56pYbNrJnp5m6Sr7u1WZWA&s",
  },
  {
    name: "Diarrhea",
    slug: "diarrhea",
    description: "Frequent, loose, or watery bowel movements due to infection or indigestion.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://www.shutterstock.com/image-photo/asian-little-girl-feel-nauseous-260nw-2542573093.jpg",
  },
  {
    name: "BodyPains",
    slug: "body-pains",
    description: "Muscle or joint discomfort often caused by fatigue or illness.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://www.dietburrp.com/wp-content/uploads/WhatsApp-Image-2021-05-30-at-7.15.22-PM-1200x1375.jpeg",
  },
  {
    name: "CommonCold",
    slug: "common-cold",
    description: "Viral respiratory infection causing congestion and sneezing.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://static.toiimg.com/photo/86451445.cms",
  },
  {
    name: "Stomach Ache",
    slug: "stomach-ache",
    description: "Abdominal pain due to indigestion, infection, or other issues.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://media.istockphoto.com/id/2156837833/photo/sick-ill-woman-suffering-from-period-cramps-stomach-ache-menstrual-pain-lying-on-sofa-at-home.jpg?s=612x612&w=0&k=20&c=XxuLQSOaS9TWrJlrJHHzg-ffFMVzLt6KzqNiKeIxN6I=",
  },
  {
    name: "Fever",
    slug: "fever",
    description: "Elevated body temperature due to infection or illness.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://static8.depositphotos.com/1171396/1050/i/450/depositphotos_10504515-stock-photo-sick-child-boy-being-checked.jpg",
  },
  {
    name: "Sleep Disorders",
    slug: "sleep-disorders",
    description: "Approaches to improve sleep quality and treat insomnia and other sleep issues.",
    treatments: ["Ayurveda", "Homeopathy", "Allopathy", "Traditional Remedies"],
    image: "https://res.cloudinary.com/dycihkdzs/image/upload/c_fill,f_auto/cloud/download/penyebab-gangguan-tidur-dan-cara-mengatasinya-2-14022023-082557.jpg",
  },
]

