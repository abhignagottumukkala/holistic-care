"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, LogOut, User } from "lucide-react"

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/auth/signin")
      return
    }

    try {
      const parsedUser = JSON.parse(userData)
      setUser(parsedUser)
    } catch (error) {
      console.error("Error parsing user data:", error)
      router.push("/auth/signin")
    } finally {
      setLoading(false)
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    router.push("/auth/signin")
  }

  if (loading) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          <ArrowLeft className="h-4 w-4 inline mr-1" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Your Profile</h1>
        <p className="text-muted-foreground">Manage your account and view your information</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="" alt={user?.name} />
                <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                  {user?.name?.split(" ").map((n: string) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-center">{user?.name}</CardTitle>
              <CardDescription className="text-center">{user?.email}</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Member since</span>
                <span>{new Date(user?.createdAt || Date.now()).toLocaleDateString()}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="destructive" className="w-full" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Health Information</CardTitle>
            <CardDescription>Your saved health data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Recent Symptom Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  View your recent symptom analyses and health insights.
                </p>
                <div className="mt-2">
                  <Link href="/symptom-history">
                    <Button variant="outline">
                      View Symptom History
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium">Saved Treatments</h3>
                <p className="text-sm text-muted-foreground">
                  Access your saved treatments and remedies.
                </p>
                <div className="mt-2">
                  <Button variant="outline" disabled>Coming Soon</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 