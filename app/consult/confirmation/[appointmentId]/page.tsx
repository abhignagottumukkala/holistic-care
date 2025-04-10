"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, Clock, Video, MessageSquare } from "lucide-react"

export default function ConfirmationPage({ params }) {
  const { appointmentId } = params
  const [appointment, setAppointment] = useState(null)

  useEffect(() => {
    // Get appointment details from localStorage
    const appointments = JSON.parse(localStorage.getItem("appointments") || "[]")
    const foundAppointment = appointments.find((a) => a.id === appointmentId)
    setAppointment(foundAppointment)
  }, [appointmentId])

  if (!appointment) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <p>Loading appointment details...</p>
      </div>
    )
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-6 w-6 text-primary" />
          </div>
          <CardTitle className="text-2xl">Appointment Confirmed!</CardTitle>
          <CardDescription>Your consultation with {appointment.doctorName} has been scheduled.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">{appointment.date}</span>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="font-medium">{appointment.timeSlot}</span>
            </div>
            <div className="flex items-center gap-2">
              {appointment.consultationType === "video" ? (
                <Video className="h-5 w-5 text-muted-foreground" />
              ) : (
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
              )}
              <span className="font-medium capitalize">{appointment.consultationType} Consultation</span>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-medium">Appointment Details</h3>
            <dl className="grid grid-cols-2 gap-1 text-sm">
              <dt className="text-muted-foreground">Doctor:</dt>
              <dd>{appointment.doctorName}</dd>
              <dt className="text-muted-foreground">Specialty:</dt>
              <dd>{appointment.specialty}</dd>
              <dt className="text-muted-foreground">Patient:</dt>
              <dd>{appointment.patientName}</dd>
              <dt className="text-muted-foreground">Email:</dt>
              <dd>{appointment.patientEmail}</dd>
              <dt className="text-muted-foreground">Phone:</dt>
              <dd>{appointment.patientPhone}</dd>
            </dl>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <p className="text-center text-sm text-muted-foreground mb-2">
            You will receive a confirmation email with details to join the consultation.
          </p>
          <Link href="/" className="w-full">
            <Button className="w-full">Return to Home</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

