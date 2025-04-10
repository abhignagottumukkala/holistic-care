"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookAppointmentPage({ params }) {
  const { doctorId } = params
  const router = useRouter()
  const [doctor, setDoctor] = useState(null)
  const [date, setDate] = useState(null)
  const [timeSlot, setTimeSlot] = useState("")
  const [consultationType, setConsultationType] = useState("video")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [concerns, setConcerns] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // In a real application, this would be an API call to get doctor details
    // For now, we'll use the mock data
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
      },
    ]

    const foundDoctor = doctors.find((d) => d.id === Number.parseInt(doctorId, 10))
    setDoctor(foundDoctor)

    // Get user data if logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}")
    if (currentUser.name) {
      setName(currentUser.name)
      setEmail(currentUser.email)
    }
  }, [doctorId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Validate form
      if (!date || !timeSlot || !name || !email || !phone || !concerns) {
        throw new Error("Please fill in all required fields, including your health concerns")
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Store appointment in localStorage
      const appointments = JSON.parse(localStorage.getItem("appointments") || "[]")
      const newAppointment = {
        id: Date.now().toString(),
        doctorId,
        doctorName: doctor.name,
        specialty: doctor.specialty,
        date: format(date, "PPP"),
        timeSlot,
        consultationType,
        patientName: name,
        patientEmail: email,
        patientPhone: phone,
        concerns,
        status: "confirmed",
        createdAt: new Date().toISOString(),
      }

      appointments.push(newAppointment)
      localStorage.setItem("appointments", JSON.stringify(appointments))

      // Redirect to confirmation page
      router.push(`/consult/confirmation/${newAppointment.id}`)
    } catch (err) {
      alert(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (!doctor) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <p>Loading doctor information...</p>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <Link href="/consult" className="text-primary hover:underline mb-4 inline-block">
        ← Back to Doctors
      </Link>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Book an Appointment</CardTitle>
              <CardDescription>Schedule a consultation with {doctor.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                    {doctor.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-medium">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Consultation Fee</span>
                  <span className="font-semibold">₹{doctor.consultationFee}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Duration</span>
                  <span>{doctor.consultationTime} minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Appointment Details</CardTitle>
              <CardDescription>Fill in your details to book your appointment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Consultation Type</Label>
                  <RadioGroup defaultValue="video" onValueChange={setConsultationType} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="video" id="video" />
                      <Label htmlFor="video">Video Call</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="chat" id="chat" />
                      <Label htmlFor="chat">Chat</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="appointment-date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time-slot">Time Slot</Label>
                    <Select onValueChange={setTimeSlot}>
                      <SelectTrigger id="time-slot">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="09:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="12:00">12:00 PM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="concerns">
                    Health Concerns <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="concerns"
                    placeholder="Briefly describe your health concerns or symptoms"
                    value={concerns}
                    onChange={(e) => setConcerns(e.target.value)}
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Confirm Booking"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

