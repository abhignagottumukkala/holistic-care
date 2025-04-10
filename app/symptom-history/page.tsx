"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, FileText } from "lucide-react"

export default function SymptomHistoryPage() {
  const [localHistory, setLocalHistory] = useState([])
  const [dbHistory, setDbHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [userId, setUserId] = useState("")

  useEffect(() => {
    // Get history from localStorage
    const localData = JSON.parse(localStorage.getItem("symptomAnalyses") || "[]")
    setLocalHistory(localData)
    
    // If we have at least one analysis, use its ID to fetch from DB
    if (localData.length > 0) {
      setUserId(localData[0].id)
      fetchFromDatabase(localData[0].id)
    } else {
      setIsLoading(false)
    }
  }, [])

  const fetchFromDatabase = async (id) => {
    try {
      setIsLoading(true)
      const response = await fetch(`/api/symptoms?userId=${id}`)
      
      if (!response.ok) {
        throw new Error('Failed to fetch symptoms from database')
      }
      
      const data = await response.json()
      setDbHistory(data.data || [])
    } catch (error) {
      console.error('Error fetching symptoms:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          <ArrowLeft className="h-4 w-4 inline mr-1" /> Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Your Symptom History</h1>
        <p className="text-muted-foreground">
          View your past symptom analyses and track your health patterns over time.
        </p>
      </div>

      <Tabs defaultValue="local" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="local">Local History</TabsTrigger>
          <TabsTrigger value="database">Database History</TabsTrigger>
        </TabsList>
        
        <TabsContent value="local">
          {localHistory.length > 0 ? (
            <div className="grid gap-6">
              {localHistory.map((analysis) => (
                <Card key={analysis.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Symptom Analysis</CardTitle>
                      <Badge variant="outline" className="ml-2">
                        {formatDate(analysis.date)}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center mt-2">
                      <Calendar className="h-4 w-4 mr-1" /> 
                      {new Date(analysis.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="font-medium mb-2">Primary Symptoms</h3>
                        <div className="flex flex-wrap gap-2">
                          {analysis.primarySymptoms.map((symptomId) => (
                            <Badge key={symptomId} variant="secondary">
                              {commonSymptoms.find((s) => s.id === symptomId)?.label || symptomId}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Details</h3>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <span className="font-medium">Severity:</span> {analysis.severity}/10
                          </li>
                          <li>
                            <span className="font-medium">Duration:</span> {analysis.duration || "Not specified"}
                          </li>
                          {analysis.otherSymptoms && (
                            <li>
                              <span className="font-medium">Additional notes:</span> {analysis.otherSymptoms}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/symptom-analysis/results/${analysis.id}`}>
                      <Button variant="outline" size="sm">
                        <FileText className="h-4 w-4 mr-2" /> View Full Analysis
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center p-6">
              <p className="mb-4">You haven't recorded any symptoms yet.</p>
              <Link href="/symptom-analysis">
                <Button>Record Your Symptoms</Button>
              </Link>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="database">
          {isLoading ? (
            <Card className="text-center p-6">
              <p>Loading your symptom history...</p>
            </Card>
          ) : dbHistory.length > 0 ? (
            <div className="grid gap-6">
              {dbHistory.map((record) => (
                <Card key={record._id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Recorded Symptoms</CardTitle>
                      <Badge variant="outline" className="ml-2">
                        {formatDate(record.createdAt)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <h3 className="font-medium mb-2">Symptoms</h3>
                        <div className="flex flex-wrap gap-2">
                          {record.symptoms.map((symptom, index) => (
                            <Badge key={index} variant="secondary">
                              {symptom}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Details</h3>
                        <ul className="space-y-1 text-sm">
                          <li>
                            <span className="font-medium">Severity:</span> {record.severity}/10
                          </li>
                          <li>
                            <span className="font-medium">Duration:</span> {record.duration}
                          </li>
                          {record.additionalNotes && (
                            <li>
                              <span className="font-medium">Additional notes:</span> {record.additionalNotes}
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center p-6">
              <p className="mb-4">No symptom records found in the database.</p>
              <Link href="/symptom-analysis">
                <Button>Record Your Symptoms</Button>
              </Link>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

const commonSymptoms = [
  { id: "headache", label: "Headache" },
  { id: "fever", label: "Fever" },
  { id: "cough", label: "Cough" },
  { id: "sore-throat", label: "Sore Throat" },
  { id: "runny-nose", label: "Runny Nose" },
  { id: "body-ache", label: "Body Ache" },
  { id: "fatigue", label: "Fatigue" },
  { id: "nausea", label: "Nausea" },
  { id: "vomiting", label: "Vomiting" },
  { id: "diarrhea", label: "Diarrhea" },
  { id: "chest-pain", label: "Chest Pain" },
  { id: "shortness-of-breath", label: "Shortness of Breath" },
  { id: "dizziness", label: "Dizziness" },
  { id: "rash", label: "Skin Rash" },
  { id: "joint-pain", label: "Joint Pain" },
  { id: "excessive-thirst", label: "Excessive thirst" },
  { id: "dry-mouth", label: "Dry mouth" },
  { id: "nasal-congestion", label: "Nasal Congestion" },
  { id: "facial-pain", label: "Facial Pain" },
] 