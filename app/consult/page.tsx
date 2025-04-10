import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Video, MessageSquare, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ConsultPage() {
  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Consult with Specialists</h1>
        <p className="text-muted-foreground max-w-3xl">
          Connect with qualified healthcare professionals from various healing traditions for personalized advice and
          treatment plans.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid w-full max-w-md grid-cols-6 gap-1">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
          <TabsTrigger value="homeopathy">Homeopathy</TabsTrigger>
          <TabsTrigger value="allopathy">Allopathy</TabsTrigger>
          <TabsTrigger value="dermatologist">Skin</TabsTrigger>
          <TabsTrigger value="trichologist">Hair</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="ayurveda" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors
              .filter((doctor) => doctor.specialty === "Ayurvedic Practitioner")
              .map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="homeopathy" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors
              .filter((doctor) => doctor.specialty === "Homeopathic Doctor")
              .map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="allopathy" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors
              .filter((doctor) => doctor.specialty === "General Physician")
              .map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="dermatologist" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors
              .filter((doctor) => doctor.specialty === "Dermatologist")
              .map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </div>
        </TabsContent>
        <TabsContent value="trichologist" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors
              .filter((doctor) => doctor.specialty === "Trichologist")
              .map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-muted p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">How Teleconsultation Works</h2>
            <p className="text-muted-foreground mb-4">
              Get expert medical advice from the comfort of your home in three simple steps.
            </p>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Choose a Specialist</h3>
                  <p className="text-sm text-muted-foreground">
                    Select from our network of qualified healthcare professionals.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Book an Appointment</h3>
                  <p className="text-sm text-muted-foreground">
                    Select a convenient date and time for your consultation.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Connect Virtually</h3>
                  <p className="text-sm text-muted-foreground">
                    Join the video call or chat session at your scheduled time.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2020-04/17/full/1587123382-8739.jpg?im=FeatureCrop,size=(826,465)"
              alt="Teleconsultation illustration"
              width={400}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function DoctorCard({ doctor }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-[3/2] relative">
        <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
      </div>
      <CardHeader className="p-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">{doctor.specialty}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-primary text-primary" />
            <span className="text-sm ml-1">{doctor.rating}</span>
          </div>
        </div>
        <CardTitle className="text-lg mt-2">{doctor.name}</CardTitle>
        <CardDescription>{doctor.experience} Years Experience</CardDescription>
        <CardDescription>Qualification: {doctor.qualification}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-muted-foreground mb-4">{doctor.bio}</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center text-sm">
            <Video className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Video Consult</span>
          </div>
          <div className="flex items-center text-sm">
            <MessageSquare className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Chat Available</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{doctor.consultationTime} mins</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>Available Today</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          <span className="font-semibold">₹{doctor.consultationFee}</span>
          <Link href={`/consult/book/${doctor.id}`}>
            <Button>Book Appointment</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

const doctors = [
  {
    id: 1,
    name: "Dr. Mohammed Iqbal",
    specialty: "Ayurvedic Practitioner",
    experience: 39,
    qualification: "BAMS, MD (Ayurveda)",
    rating: 4.9,
    consultationTime: 30,
    consultationFee: 300,
    availability: "Today",
    image: "https://content.jdmagicbox.com/comp/visakhapatnam/y7/0891px891.x891.150728150300.t6y7/catalogue/dr-mohammed-iqbal-vizag-ayurvedic-clinic-siripuram-visakhapatnam-ayurvedic-doctors-ouzbzr2qgk.jpg",
  },
  {
    id: 2,
    name: "Dr. Saritha Aadhi",
    specialty: "Dermatologist",
    experience: 13,
    qualification: "MBBS, MD (Dermatology)",
    rating: 4.8,
    consultationTime: 30,
    consultationFee: 500,
    availability: "Tomorrow",
    image: "https://imagesx.practo.com/providers/dr-saritha-aadhi-dermatologist-hyderabad-fe8825fb-1ed2-43a6-b077-8c04e530ab85.jpg?i_type=t_70x70",
  },
  {
    id: 3,
    name: "Dr. Swetha Ravi",
    specialty: "Trichologist",
    experience: 15,
    qualification: "MBBS, MD (Dermatology), IAT",
    rating: 4.7,
    consultationTime: 30,
    consultationFee: 400,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-swetha-ravi-dermatologist-hyderabad-9947583f-3e7f-4cf9-a634-fac0b9dd4dce.jpg?i_type=t_70x70",
  },
  {
    id: 4,
    name: "Dr. Lakshmi Prasad",
    specialty: "Ayurvedic Practitioner",
    experience: 28,
    qualification: "BAMS, PhD (Ayurveda)",
    rating: 4.9,
    consultationTime: 40,
    consultationFee: 200,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-lakshmi-prasad-ayurveda-visakhapatnam-1d1912ae-862c-4a60-bfb4-937fc61a05af.jpg?i_type=t_70x70",
  },
  {
    id: 5,
    name: "Dr. T Kiran Kumar",
    specialty: "Homeopathic Doctor",
    experience: 30,
    qualification: "BHMS, MD (Homeopathy)",
    rating: 4.6,
    consultationTime: 40,
    consultationFee: 300,
    availability: "Tomorrow",
    image: "https://imagesx.practo.com/providers/dr-t-kiran-kumar-homoeopath-hyderabad-2a0caa8b-3790-4f30-bf22-05c8e838be9d.jpg?i_type=t_70x70",
  },
  {
    id: 6,
    name: "Dr. Ravi Kumar GurugubeIli",
    specialty: "General Physician",
    experience: 25,
    qualification: "MBBS, MD (Internal Medicine)",
    rating: 4.8,
    consultationTime: 25,
    consultationFee: 500,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-ravi-kumar-gurugubeili-cardiologist-visakhapatnam-23f12e01-e722-4a3e-b12c-416507e69d47.jpg?i_type=t_70x70",
  },
  {
    id: 7,
    name: "Dr. Ananda Kumar Pingali",
    specialty: "Homeopathic Doctor",
    experience: 24,
    qualification: "BHMS, MD (Homeopathy)",
    rating: 4.9,
    consultationTime: 30,
    consultationFee: 300,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-ananda-kumar-pingali-homoeopath-visakhapatnam-0c5716aa-4754-48dc-a23e-690d230b5067.jpg?i_type=t_70x70",
  },
  {
    id: 8,
    name: "Dr. V Rama Narasimham",
    specialty: "General Physician",
    experience: 45,
    qualification: "MBBS, MD (General Medicine)",
    rating: 4.9,
    consultationTime: 30,
    consultationFee: 600,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-v-rama-narasimham-general-physician-visakhapatnam-23303f02-7df0-40a1-8316-a1497bd1fb91.jpg?i_type=t_70x70",
  },
  {
    id: 9,
    name: "Dr. Kathyayani A",
    specialty: "Dermatologist",
    experience: 13,
    qualification: "MBBS, MD (Dermatology)",
    rating: 4.9,
    consultationTime: 30,
    consultationFee: 300,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-kathyayani-a-dermatologist-visakhapatnam-48c5dca0-44d6-43b6-bc73-726cf7492a16.jpg?i_type=t_70x70",
  },
  {
    id: 10,
    name: "Dr. Sravani.P.V",
    specialty: "Trichologist",
    experience: 25,
    qualification: "MBBS, MD (Dermatology),IAT",
    rating: 4.9,
    consultationTime: 30,
    consultationFee: 600,
    availability: "Today",
    image: "https://imagesx.practo.com/providers/dr-sravani-p-v-dermatologist-visakhapatnam-e94909b6-d592-4c79-b0d3-68c615dc296d.jpg?i_type=t_70x70",
  },
]

