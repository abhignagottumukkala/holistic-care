"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

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

export default function SymptomAnalysisPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(20)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    locality: "",
    allergies: "",
    recentFood: "",
    weight: "",
    height: "",
    primarySymptoms: [],
    otherSymptoms: "",
    duration: "",
    severity: 5,
    previousMedicine: "",
  })

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (id) => {
    setFormData((prev) => {
      const currentSymptoms = [...prev.primarySymptoms]
      if (currentSymptoms.includes(id)) {
        return { ...prev, primarySymptoms: currentSymptoms.filter((symptom) => symptom !== id) }
      } else {
        return { ...prev, primarySymptoms: [...currentSymptoms, id] }
      }
    })
  }

  const nextStep = () => {
    if (step === 1 && (!formData.name || !formData.age || !formData.gender || !formData.locality)) {
      alert("Please fill in all required fields before proceeding.")
      return
    }

    if (step === 3 && formData.primarySymptoms.length === 0) {
      alert("Please select at least one symptom before proceeding.")
      return
    }

    if (step < 5) {
      setStep(step + 1)
      setProgress((step + 1) * 20)
    } else {
      // Submit the form
      const analysisData = {
        id: Date.now().toString(),
        ...formData,
        date: new Date().toISOString(),
        analyzed: false,
      }

      // Store in localStorage
      const analyses = JSON.parse(localStorage.getItem("symptomAnalyses") || "[]")
      analyses.push(analysisData)
      localStorage.setItem("symptomAnalyses", JSON.stringify(analyses))

      // Save to MongoDB
      saveToDatabase(analysisData)

      // Redirect to results page
      router.push(`/symptom-analysis/results/${analysisData.id}`)
    }
  }

  const saveToDatabase = async (data) => {
    try {
      // Get the authenticated user from localStorage
      const userString = localStorage.getItem('user');
      let userId = data.id; // Default to analysis ID if no user is logged in
      
      // Get auth token if available
      const token = localStorage.getItem('token');
      
      // If user is logged in, use their MongoDB ID
      if (userString) {
        try {
          const userData = JSON.parse(userString);
          if (userData && userData.id) {
            userId = userData.id; // Use the MongoDB user ID
          }
        } catch (e) {
          console.error('Error parsing user data:', e);
        }
      }
      
      // Extract the relevant symptom data for our MongoDB schema
      const selectedSymptomLabels = data.primarySymptoms.map(
        symptomId => commonSymptoms.find(s => s.id === symptomId)?.label
      ).filter(Boolean);

      // Prepare the data to be sent to our API
      const symptomData = {
        userId: userId, // Now using the MongoDB user ID when available
        symptoms: selectedSymptomLabels,
        severity: data.severity,
        duration: data.duration,
        additionalNotes: data.otherSymptoms
      };

      // Prepare headers with authorization if token exists
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      // Send the data to our API endpoint
      const response = await fetch('/api/symptoms', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(symptomData),
      });

      if (!response.ok) {
        throw new Error('Failed to save symptoms to database');
      }

      console.log('Symptoms saved to database successfully');
    } catch (error) {
      console.error('Error saving symptoms:', error);
      // We continue with local storage as fallback
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1)
      setProgress((step - 1) * 20)
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Symptom Analysis</h1>
        <p className="text-muted-foreground">
          Complete this form to get personalized health insights and recommendations.
        </p>
      </div>

      <div className="mb-8">
        <Progress value={progress} className="h-2" />
        <div className="mt-2 text-sm text-muted-foreground text-center">Step {step} of 5</div>
      </div>

      <Card className="max-w-2xl mx-auto">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Please provide your basic details to help us personalize your analysis.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">
                    Age <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min="0"
                    max="120"
                    value={formData.age}
                    onChange={(e) => updateFormData("age", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">
                    Gender <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="locality">
                  Locality <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.locality}
                  onValueChange={(value) => updateFormData("locality", value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="urban" id="urban" />
                    <Label htmlFor="urban">Urban</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rural" id="rural" />
                    <Label htmlFor="rural">Rural</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>Health Background</CardTitle>
              <CardDescription>This information helps us understand your overall health context.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    min="0"
                    value={formData.weight}
                    onChange={(e) => updateFormData("weight", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <Input
                    id="height"
                    type="number"
                    min="0"
                    value={formData.height}
                    onChange={(e) => updateFormData("height", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="allergies">Known Allergies</Label>
                <Textarea
                  id="allergies"
                  placeholder="List any allergies you have (medications, food, etc.)"
                  value={formData.allergies}
                  onChange={(e) => updateFormData("allergies", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="recentFood">Food Consumed in Last 24 Hours</Label>
                <Textarea
                  id="recentFood"
                  placeholder="Briefly describe what you've eaten in the last 24 hours"
                  value={formData.recentFood}
                  onChange={(e) => updateFormData("recentFood", e.target.value)}
                />
              </div>
            </CardContent>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>Symptoms</CardTitle>
              <CardDescription>Select all symptoms you are currently experiencing.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {commonSymptoms.map((symptom) => (
                  <div key={symptom.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={symptom.id}
                      checked={formData.primarySymptoms.includes(symptom.id)}
                      onCheckedChange={() => handleCheckboxChange(symptom.id)}
                    />
                    <Label htmlFor={symptom.id}>{symptom.label}</Label>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mt-6">
                <Label htmlFor="otherSymptoms">Other Symptoms</Label>
                <Textarea
                  id="otherSymptoms"
                  placeholder="Describe any other symptoms not listed above"
                  value={formData.otherSymptoms}
                  onChange={(e) => updateFormData("otherSymptoms", e.target.value)}
                />
              </div>
            </CardContent>
          </>
        )}

        {step === 4 && (
          <>
            <CardHeader>
              <CardTitle>Symptom Details</CardTitle>
              <CardDescription>Please provide more information about your symptoms.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="duration">
                  How long have you been experiencing these symptoms? <span className="text-red-500">*</span>
                </Label>
                <Select value={formData.duration} onValueChange={(value) => updateFormData("duration", value)}>
                  <SelectTrigger id="duration">
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="less-than-day">Less than a day</SelectItem>
                    <SelectItem value="1-3-days">1-3 days</SelectItem>
                    <SelectItem value="4-7-days">4-7 days</SelectItem>
                    <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                    <SelectItem value="2-4-weeks">2-4 weeks</SelectItem>
                    <SelectItem value="1-3-months">1-3 months</SelectItem>
                    <SelectItem value="more-than-3-months">More than 3 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <Label>Symptom Severity</Label>
                  <span className="text-sm text-muted-foreground">
                    {formData.severity === 1 && "Very Mild"}
                    {formData.severity === 2 && "Mild"}
                    {formData.severity === 3 && "Moderate"}
                    {formData.severity === 4 && "Severe"}
                    {formData.severity === 5 && "Moderate"}
                    {formData.severity === 6 && "Moderate"}
                    {formData.severity === 7 && "Moderate"}
                    {formData.severity === 8 && "Severe"}
                    {formData.severity === 9 && "Very Severe"}
                    {formData.severity === 10 && "Extreme"}
                  </span>
                </div>
                <Slider
                  value={[formData.severity]}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={(value) => updateFormData("severity", value[0])}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Mild</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                </div>
              </div>
            </CardContent>
          </>
        )}

        {step === 5 && (
          <>
            <CardHeader>
              <CardTitle>Previous Treatments</CardTitle>
              <CardDescription>Tell us about any treatments you've already tried.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="previousMedicine">Previous Medicines or Treatments</Label>
                <Textarea
                  id="previousMedicine"
                  placeholder="List any medicines or treatments you've tried for these symptoms and whether they helped"
                  value={formData.previousMedicine}
                  onChange={(e) => updateFormData("previousMedicine", e.target.value)}
                  className="min-h-[150px]"
                />
              </div>
            </CardContent>
          </>
        )}

        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevStep} disabled={step === 1}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>

          <Button onClick={nextStep}>
            {step < 5 ? (
              <>
                Next <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Submit <CheckCircle className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

