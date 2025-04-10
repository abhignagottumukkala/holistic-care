"use client"

import { Input } from "@/components/ui/input"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, MessageSquare, Pill, Stethoscope } from "lucide-react"

// Update the analyzeSymptoms function to include symptoms from the otherSymptoms text field
const analyzeSymptoms = (data) => {
  // This is a simplified mock of ML analysis
  // In a real application, this would be a call to a backend API with actual ML models

  const symptoms = [...data.primarySymptoms]

  // Process other symptoms from the text field
  if (data.otherSymptoms && data.otherSymptoms.trim() !== "") {
    // Split the text by common separators and clean up
    const otherSymptomsList = data.otherSymptoms
      .toLowerCase()
      .split(/[,;.\n]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    // Add these symptoms to our analysis
    symptoms.push(...otherSymptomsList)
  }

  // Simple rule-based analysis for demo purposes
  const possibleConditions = []
  const recommendations = []
  let severity = "moderate"
  let urgency = "non-urgent"

  // Check for common symptom patterns
  if (symptoms.includes("fever") && symptoms.includes("cough") && symptoms.includes("sore-throat")) {
    possibleConditions.push({
      name: "Common Cold",
      probability: "High",
      description: "A viral infection of the upper respiratory tract.",
    })

    if (symptoms.includes("shortness-of-breath")) {
      possibleConditions.push({
        name: "COVID-19",
        probability: "Moderate",
        description: "A respiratory illness caused by the SARS-CoV-2 virus.",
      })
      severity = "moderate-to-high"
      urgency = "seek-medical-attention"
    }

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Paracetamol",
      dosage: "500mg every 6 hours as needed for fever",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Sitopaladi Churna",
      dosage: "1/4 teaspoon twice daily with honey",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Oscillococcinum",
      dosage: "One dose every 6 hours for 3 days",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Ginger Tea with Honey",
      dosage: "2-3 cups daily",
      tradition: "Traditional Remedy",
      description: "Helps soothe sore throat and reduce inflammation",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Steam Inhalation with Eucalyptus Oil",
      dosage: "2-3 times daily for 5-10 minutes",
      tradition: "Traditional Remedy",
      description: "Helps clear congestion and ease breathing",
    })
  }

  if (symptoms.includes("headache") && symptoms.includes("fatigue")) {
    possibleConditions.push({
      name: "Tension Headache",
      probability: "Moderate",
      description: "Pain or discomfort in the head, scalp, or neck, often associated with stress or muscle strain.",
    })

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Ibuprofen",
      dosage: "400mg every 6-8 hours as needed for pain",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Brahmi (Bacopa monnieri)",
      dosage: "300mg twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Belladonna 30C",
      dosage: "3-5 pellets every 4 hours as needed",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Peppermint Oil",
      dosage: "Apply diluted oil to temples",
      tradition: "Traditional Remedy",
      description: "The cooling effect helps relieve tension headaches",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Lavender Essential Oil",
      dosage: "Inhale or apply diluted to temples",
      tradition: "Traditional Remedy",
      description: "Has calming properties that can help with stress-induced headaches",
    })
  }
  if (symptoms.includes("fever") && symptoms.includes("cough") && symptoms.includes("runny-nose")) {
    possibleConditions.push({
      name: "Common Cold or Flu",
      probability: "High",
      description: "A viral infection causing fever, cough, congestion, and fatigue.",
    })

    severity = "moderate"
    urgency = "monitor"

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Paracetamol",
      dosage: "500mg every 6 hours as needed for fever",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Tulsi (Holy Basil)",
      dosage: "Tea made with 5-6 fresh leaves twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Arsenicum Album 30C",
      dosage: "3-5 pellets every 4-6 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Ginger Tea",
      dosage: "1 cup, 2-3 times a day",
      tradition: "Traditional Remedy",
      description: "Helps with congestion, sore throat, and boosts immunity",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Steam Inhalation",
      dosage: "Inhale steam for 10 minutes twice daily",
      tradition: "Traditional Remedy",
      description: "Clears nasal passages and reduces congestion",
    })
  }
  if (symptoms.includes("excessive-thirst") && symptoms.includes("dry-mouth") && symptoms.includes("dizziness")) {
    possibleConditions.push({
      name: "Dehydration",
      probability: "High",
      description:
        "A condition resulting from excessive loss of body fluids, leading to electrolyte imbalance and reduced bodily function.",
    })

    severity = "severe"
    urgency =
      "Critical (Immediate rehydration required; seek emergency care if confusion, rapid heartbeat, or fainting occurs)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Electrolyte Solution",
      dosage: "Sip frequently throughout the day",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Coconut Water",
      dosage: "1-2 glasses per day",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "China Officinalis 30C",
      dosage: "3-5 pellets every 4 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Lemon Water with Salt & Sugar",
      dosage: "Drink 1 glass every few hours",
      tradition: "Traditional Remedy",
      description: "Helps replenish lost electrolytes and prevents dehydration",
    })
  }
  if (symptoms.includes("runny-nose") && symptoms.includes("body-ache") && symptoms.includes("headache")) {
    possibleConditions.push({
      name: "Viral Fever",
      probability: "High",
      description: "A fever caused by viral infections, often accompanied by fatigue and body aches.",
    })

    severity: "moderate"
    urgency: "Low (self-care at home), but consult a doctor if fever persists beyond 3 days."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Ibuprofen",
      dosage: "400mg every 6 hours as needed for pain and fever",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Giloy Juice",
      dosage: "10ml with warm water twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Eupatorium Perfoliatum 30C",
      dosage: "3-5 pellets every 4-6 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Honey and Warm Water",
      dosage: "1 tbsp honey in warm water, drink twice daily",
      tradition: "Traditional Remedy",
      description: "Boosts immunity and relieves sore throat",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Rest & Hydration",
      dosage: "Get plenty of rest and drink fluids",
      tradition: "Traditional Remedy",
      description: "Aids recovery and prevents dehydration",
    })
  }
  if (symptoms.includes("sore-throat") && symptoms.includes("fever") && symptoms.includes("body-ache")) {
    possibleConditions.push({
      name: "Strep Throat",
      probability: "High",
      description: "A bacterial infection that causes throat pain, fever, and fatigue.",
    })

    severity: "moderate"
    urgency: "Moderate (consult a doctor for antibiotics if symptoms persist)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Amoxicillin",
      dosage: "500mg twice daily for 7 days",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Turmeric Milk",
      dosage: "1 cup warm milk with 1/2 tsp turmeric before bed",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Belladonna 30C",
      dosage: "3-5 pellets every 3 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Salt Water Gargle",
      dosage: "Gargle with warm salt water 3-4 times daily",
      tradition: "Traditional Remedy",
      description: "Reduces throat pain and inflammation",
    })
  }
  if (symptoms.includes("joint-pain") && symptoms.includes("fatigue") && symptoms.includes("fever")) {
    possibleConditions.push({
      name: "Dengue Fever",
      probability: "High",
      description: "A mosquito-borne viral infection causing high fever, joint pain, and severe fatigue.",
    })

    severity: "severe"
    urgency: "High (seek medical attention immediately)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Paracetamol",
      dosage: "500mg every 6 hours for fever",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Papaya Leaf Extract",
      dosage: "1 tbsp twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Eupatorium Perfoliatum 30C",
      dosage: "3-5 pellets every 4 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Coconut Water",
      dosage: "Drink 2-3 glasses daily",
      tradition: "Traditional Remedy",
      description: "Helps with hydration and platelet recovery",
    })
  }
  if (symptoms.includes("headache") && symptoms.includes("dizziness") && symptoms.includes("nausea")) {
    possibleConditions.push({
      name: "Migraine",
      probability: "High",
      description: "A neurological condition causing severe headaches, often with nausea and light sensitivity.",
    })

    severity: "moderate"
    urgency: "Moderate (consult a doctor if headaches are frequent)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Ibuprofen",
      dosage: "400mg as needed for pain relief",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Brahmi Powder",
      dosage: "1 tsp with warm water before bed",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Gelsemium 30C",
      dosage: "3-5 pellets every 3 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Cold Compress",
      dosage: "Apply to forehead for 15 minutes",
      tradition: "Traditional Remedy",
      description: "Reduces headache intensity",
    })
  }
  if (
    symptoms.includes("fever") &&
    symptoms.includes("body-ache") &&
    symptoms.includes("chills") &&
    symptoms.includes("headache")
  ) {
    possibleConditions.push({
      name: "Malaria",
      probability: "High",
      description: "A mosquito-borne disease causing recurrent fever, chills, and fatigue.",
    })

    severity: "severe"
    urgency: "High (seek medical attention immediately)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Chloroquine",
      dosage: "600mg on first day, then 300mg for next two days",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Neem Leaves",
      dosage: "Boil 10 leaves in water and drink daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "China Officinalis 30C",
      dosage: "3-5 pellets every 4 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Ginger & Lemon Tea",
      dosage: "1 cup twice daily",
      tradition: "Traditional Remedy",
      description: "Boosts immunity and reduces fever",
    })
  }
  if (symptoms.includes("rash") && symptoms.includes("fever") && symptoms.includes("fatigue")) {
    possibleConditions.push({
      name: "Measles",
      probability: "High",
      description: "A viral infection causing fever, skin rash, cough, and fatigue.",
    })

    severity: "moderate"
    urgency: "High (consult a doctor immediately, especially if symptoms worsen)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Paracetamol",
      dosage: "500mg every 6 hours for fever",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Neem Leaves",
      dosage: "Boil neem leaves in water and bathe with it once daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Bryonia Alba 30C",
      dosage: "3-5 pellets every 6 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Turmeric and Milk",
      dosage: "1 glass warm milk with turmeric before bed",
      tradition: "Traditional Remedy",
      description: "Helps reduce fever and improves immunity",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Oatmeal Bath",
      dosage: "Soak in an oatmeal bath for 15 minutes daily",
      tradition: "Traditional Remedy",
      description: "Relieves itching and soothes skin rash",
    })
  }
  if (symptoms.includes("rash") && symptoms.includes("nausea") && symptoms.includes("vomiting")) {
    possibleConditions.push({
      name: "Food Allergy",
      probability: "High",
      description: "An allergic reaction causing rash, nausea, and vomiting.",
    })

    severity: "moderate"
    urgency: "Moderate (seek medical help if symptoms worsen or breathing difficulty occurs)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Antihistamine (Cetirizine)",
      dosage: "10mg once daily",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Aloe Vera",
      dosage: "Apply fresh aloe vera gel on rashes twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Apis Mellifica 30C",
      dosage: "3-5 pellets every 4-6 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Ginger Tea",
      dosage: "1 cup, twice daily",
      tradition: "Traditional Remedy",
      description: "Reduces nausea and vomiting",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Oatmeal Paste",
      dosage: "Apply on rash for 15 minutes daily",
      tradition: "Traditional Remedy",
      description: "Soothes allergic rashes and reduces inflammation",
    })
  }
  if (symptoms.includes("headache") && symptoms.includes("nasal-congestion") && symptoms.includes("facial- pain")) {
    possibleConditions.push({
      name: "Sinusitis",
      probability: "High",
      description: "Inflammation of the sinuses causing congestion, headache, and facial pain.",
    })

    severity = "moderate"
    urgency = "monitor"

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Decongestant (Pseudoephedrine)",
      dosage: "30mg twice daily",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Triphala Churna",
      dosage: "1 tsp with warm water before bed",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Kali Bichromicum 30C",
      dosage: "3-5 pellets every 4-6 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Steam Inhalation",
      dosage: "Inhale steam for 10 minutes twice daily",
      tradition: "Traditional Remedy",
      description: "Clears nasal congestion and relieves sinus pressure",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Eucalyptus Oil",
      dosage: "Add a few drops to hot water and inhale",
      tradition: "Traditional Remedy",
      description: "Relieves congestion and soothes sinuses",
    })
  }
  if (symptoms.includes("abdominal-pain") && symptoms.includes("bloating") && symptoms.includes("hard- stools")) {
    possibleConditions.push({
      name: "Constipation",
      probability: "High",
      description: "A digestive condition causing difficulty in passing stools, leading to bloating and discomfort.",
    })

    severity: "Mild"
    urgency: "Low (self-care at home, but consult a doctor if it persists for more than a week)."

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Lactulose Syrup",
      dosage: "15ml once daily before bedtime",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Triphala Powder",
      dosage: "1 tsp with warm water before bed",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Nux Vomica 30C",
      dosage: "3-5 pellets once daily",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Warm Lemon Water",
      dosage: "1 glass in the morning",
      tradition: "Traditional Remedy",
      description: "Stimulates digestion and relieves constipation",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Flaxseeds",
      dosage: "1 tbsp ground flaxseeds with water daily",
      tradition: "Traditional Remedy",
      description: "Adds fiber to diet and promotes bowel movement",
    })
  }

  if (symptoms.includes("nausea") && symptoms.includes("vomiting") && symptoms.includes("diarrhea")) {
    possibleConditions.push({
      name: "Gastroenteritis",
      probability: "High",
      description:
        "Inflammation of the stomach and intestines, typically resulting from a bacterial or viral infection.",
    })

    severity = "moderate"
    urgency = "monitor"

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Oral Rehydration Solution",
      dosage: "Drink regularly to prevent dehydration",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Hingwashtak Churna",
      dosage: "1/4 teaspoon with warm water before meals",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Arsenicum Album 30C",
      dosage: "3-5 pellets every 4 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Rice Water",
      dosage: "Drink throughout the day",
      tradition: "Traditional Remedy",
      description: "Helps bind stools and replace lost fluids",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Ginger Tea",
      dosage: "Small sips throughout the day",
      tradition: "Traditional Remedy",
      description: "Helps reduce nausea and settle the stomach",
    })
  }

  if (symptoms.includes("joint-pain") && symptoms.includes("body-ache")) {
    possibleConditions.push({
      name: "Arthritis",
      probability: "Low",
      description: "Inflammation of one or more joints, causing pain and stiffness.",
    })

    if (data.age > 50) {
      possibleConditions[possibleConditions.length - 1].probability = "Moderate"
    }

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Diclofenac",
      dosage: "50mg twice daily with food",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Turmeric Capsules",
      dosage: "500mg twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Rhus Toxicodendron 30C",
      dosage: "3-5 pellets three times daily",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Warm Sesame Oil Massage",
      dosage: "Apply to affected joints twice daily",
      tradition: "Traditional Remedy",
      description: "Helps improve circulation and reduce pain",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Epsom Salt Bath",
      dosage: "Soak for 20 minutes, 2-3 times per week",
      tradition: "Traditional Remedy",
      description: "The magnesium in Epsom salts can help reduce inflammation and pain",
    })
  }
  if (symptoms.includes("fatigue") && symptoms.includes("shortness-of-breath") && symptoms.includes("dizziness")) {
    possibleConditions.push({
      name: "Anemia",
      probability: "High",
      description:
        "A condition in which the blood doesn't have enough healthy red blood cells, often due to iron deficiency.",
    })

    severity: "moderate"
    urgency: "Moderate (consult a doctor for blood tests and proper treatment plan)"

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Ferrous Sulfate (Iron Supplement)",
      dosage: "325mg once or twice daily after meals",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Punarnava Mandur",
      dosage: "1-2 tablets twice daily after food",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Ferrum Phosphoricum 6X",
      dosage: "4 tablets twice daily",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Beetroot Juice",
      dosage: "1 glass daily",
      tradition: "Traditional Remedy",
      description: "Rich in iron, helps increase hemoglobin levels",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Sesame Seeds",
      dosage: "1 tablespoon daily",
      tradition: "Traditional Remedy",
      description: "A good plant-based source of iron",
    })
  }
  if (symptoms.includes("fatigue") && symptoms.includes("dizziness") && symptoms.includes("joint pain")) {
    possibleConditions.push({
      name: "Vitamin B12 Deficiency",
      probability: "Moderate",
      description:
        "A condition caused by low levels of Vitamin B12, leading to fatigue, weakness, and neurological symptoms.",
    })

    severity = "mild"
    urgency = "Low (dietary improvement and supplements recommended)"

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Methylcobalamin Tablets",
      dosage: "1500 mcg once daily after food",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Ashwagandha",
      dosage: "1 tsp powder with warm milk daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Calcarea Phosphorica 6X",
      dosage: "4 tablets twice a day",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Include dairy and eggs",
      dosage: "Daily with meals",
      tradition: "Traditional Remedy",
      description: "Rich sources of B12 for vegetarians",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Consume fortified cereals",
      dosage: "1 serving per day",
      tradition: "Traditional Remedy",
      description: "Fortified foods can help meet B12 needs",
    })
  }
  if (
    symptoms.includes("dizziness") &&
    symptoms.includes("fatigue") &&
    symptoms.includes("dry mouth") &&
    symptoms.includes("excessive thirst")
  ) {
    possibleConditions.push({
      name: "Heat Stroke",
      probability: "High",
      description:
        "A serious condition due to prolonged exposure to high temperatures causing dehydration and body temperature dysregulation.",
    })

    severity = "severe"
    urgency = "High (seek immediate medical attention)"

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "ORS Sachets (Oral Rehydration Salts)",
      dosage: "1 sachet mixed in 1L water, sip frequently",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Shatavari Powder",
      dosage: "1 tsp with cold milk twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Glonoine 30C",
      dosage: "2-3 pellets every 3 hours",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Cool Compress",
      dosage: "Apply cold cloth to forehead and neck",
      tradition: "Traditional Remedy",
      description: "Helps bring down body temperature",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Buttermilk with salt",
      dosage: "1 glass 2-3 times daily",
      tradition: "Traditional Remedy",
      description: "Restores electrolytes naturally",
    })
  }

  // Skin conditions
  if (symptoms.includes("rash")) {
    possibleConditions.push({
      name: "Contact Dermatitis",
      probability: "Moderate",
      description: "Skin inflammation resulting from direct contact with an irritating substance.",
    })

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Hydrocortisone Cream 1%",
      dosage: "Apply thin layer to affected area 2-3 times daily",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Neem Capsules",
      dosage: "500mg twice daily",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Apis Mellifica 30C",
      dosage: "3-5 pellets three times daily",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Aloe Vera Gel",
      dosage: "Apply to affected areas 3-4 times daily",
      tradition: "Traditional Remedy",
      description: "Soothes inflammation and promotes healing",
    })

    recommendations.push({
      type: "home-remedy",
      name: "Colloidal Oatmeal Bath",
      dosage: "Soak for 15-20 minutes daily",
      tradition: "Traditional Remedy",
      description: "Relieves itching and irritation",
    })
  }

  // If no specific conditions matched, provide general recommendations
  if (possibleConditions.length === 0) {
    possibleConditions.push({
      name: "General Malaise",
      probability: "Moderate",
      description: "A general feeling of discomfort, illness, or unease.",
    })

    // Allopathic recommendations
    recommendations.push({
      type: "medication",
      category: "allopathy",
      name: "Multivitamin",
      dosage: "One tablet daily with food",
      tradition: "Allopathy",
    })

    // Ayurvedic recommendations
    recommendations.push({
      type: "medication",
      category: "ayurveda",
      name: "Chyawanprash",
      dosage: "1 teaspoon daily in the morning",
      tradition: "Ayurveda",
    })

    // Homeopathic recommendations
    recommendations.push({
      type: "medication",
      category: "homeopathy",
      name: "Gelsemium 30C",
      dosage: "3-5 pellets twice daily",
      tradition: "Homeopathy",
    })

    // Home remedies
    recommendations.push({
      type: "home-remedy",
      name: "Lemon and Honey Water",
      dosage: "1 cup warm water with lemon and honey, twice daily",
      tradition: "Traditional Remedy",
      description: "Boosts immunity and energy levels",
    })

    recommendations.push({
      type: "lifestyle",
      name: "Rest and Hydration",
      dosage: "Ensure adequate rest and drink plenty of fluids",
      tradition: "General Advice",
    })
  }

  // Adjust severity based on reported severity
  if (data.severity >= 8) {
    severity = "high"
    urgency = "seek-medical-attention"
  } else if (data.severity <= 3) {
    severity = "low"
    urgency = "self-care"
  }

  // Add general recommendations for all cases
  recommendations.push({
    type: "lifestyle",
    name: "Balanced Diet",
    dosage: "Ensure adequate nutrition with plenty of fruits and vegetables",
    tradition: "General Advice",
  })

  recommendations.push({
    type: "lifestyle",
    name: "Adequate Hydration",
    dosage: "Drink at least 8 glasses of water daily",
    tradition: "General Advice",
  })

  return {
    possibleConditions,
    recommendations,
    severity,
    urgency,
    analyzed: true,
  }
}

export default function AnalysisResultsPage({ params }) {
  const { id } = params
  const [analysis, setAnalysis] = useState(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "system",
      content:
        "Hello! I'm your health assistant. I can help answer questions about your symptom analysis results. What would you like to know?",
    },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    // Get analysis from localStorage
    const analyses = JSON.parse(localStorage.getItem("symptomAnalyses") || "[]")
    let foundAnalysis = analyses.find((a) => a.id === id)

    if (foundAnalysis && !foundAnalysis.analyzed) {
      // Run the analysis
      const results = analyzeSymptoms(foundAnalysis)
      foundAnalysis = { ...foundAnalysis, ...results }

      // Update in localStorage
      const updatedAnalyses = analyses.map((a) => (a.id === id ? foundAnalysis : a))
      localStorage.setItem("symptomAnalyses", JSON.stringify(updatedAnalyses))
    }

    setAnalysis(foundAnalysis)
  }, [id])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    // Add user message
    const userMessage = { role: "user", content: newMessage }
    setMessages((prev) => [...prev, userMessage])
    setNewMessage("")
    setIsTyping(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(newMessage, analysis)
      setMessages((prev) => [...prev, { role: "system", content: aiResponse }])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (message, analysis) => {
    // Simple rule-based chatbot responses
    const lowerMessage = message.toLowerCase()

    if (
      lowerMessage.includes("medicine") ||
      lowerMessage.includes("treatment") ||
      lowerMessage.includes("recommendation")
    ) {
      return `Based on your symptoms, I recommend: ${analysis.recommendations.map((r) => r.name).join(", ")}. Would you like more details about any specific recommendation?`
    }

    if (lowerMessage.includes("condition") || lowerMessage.includes("disease") || lowerMessage.includes("diagnosis")) {
      return `Your symptoms suggest possible: ${analysis.possibleConditions.map((c) => c.name).join(", ")}. Remember, this is not a definitive diagnosis. Would you like to know more about any of these conditions?`
    }

    if (lowerMessage.includes("severe") || lowerMessage.includes("serious") || lowerMessage.includes("urgency")) {
      if (analysis.urgency === "seek-medical-attention") {
        return "Your symptoms suggest a condition that may require medical attention. I recommend consulting with a healthcare professional soon."
      } else if (analysis.urgency === "monitor") {
        return "Your condition appears to be moderate. Monitor your symptoms and if they worsen, please consult a healthcare professional."
      } else {
        return "Your symptoms appear to be mild. Self-care measures should help, but if symptoms persist or worsen, please consult a healthcare professional."
      }
    }

    if (lowerMessage.includes("ayurveda") || lowerMessage.includes("natural") || lowerMessage.includes("herbal")) {
      const ayurvedicRecs = analysis.recommendations.filter(
        (r) => r.tradition === "Ayurveda" || r.tradition === "Traditional Remedy",
      )
      if (ayurvedicRecs.length > 0) {
        return `For natural remedies, I suggest: ${ayurvedicRecs.map((r) => r.name).join(", ")}. These are based on Ayurveda and traditional healing practices.`
      } else {
        return "I don't have specific Ayurvedic recommendations for your symptoms, but maintaining a balanced diet and proper hydration is always beneficial according to Ayurvedic principles."
      }
    }

    if (lowerMessage.includes("thank")) {
      return "You're welcome! Is there anything else you'd like to know about your health analysis?"
    }

    // Default response
    return "I'm here to help with your health concerns. You can ask about your possible conditions, recommended treatments, severity, or specific healing traditions like Ayurveda."
  }

  if (!analysis) {
    return (
      <div className="container flex items-center justify-center min-h-screen">
        <p>Loading analysis results...</p>
      </div>
    )
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Your Health Analysis</h1>
        <p className="text-muted-foreground">
          Based on the symptoms and information you provided, here's our analysis.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Analysis Summary</CardTitle>
                <Badge
                  variant={
                    analysis.severity === "high"
                      ? "destructive"
                      : analysis.severity === "moderate"
                        ? "outline"
                        : "secondary"
                  }
                >
                  {analysis.severity === "high"
                    ? "High Severity"
                    : analysis.severity === "moderate"
                      ? "Moderate Severity"
                      : "Low Severity"}
                </Badge>
              </div>
              <CardDescription>Based on your reported symptoms and health information</CardDescription>
            </CardHeader>
            <CardContent>
              {analysis.urgency === "seek-medical-attention" && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-red-800">Medical Attention Recommended</p>
                    <p className="text-sm text-red-700">
                      Your symptoms suggest a condition that may require medical attention. Consider consulting with a
                      healthcare professional.
                    </p>
                  </div>
                </div>
              )}

              {analysis.urgency === "monitor" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6 flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-yellow-800">Monitor Your Symptoms</p>
                    <p className="text-sm text-yellow-700">
                      Your condition appears to be moderate. Keep track of your symptoms and if they worsen, please
                      consult a healthcare professional.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Possible Conditions</h3>
                  <div className="space-y-4">
                    {analysis.possibleConditions.map((condition, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{condition.name}</h4>
                          <Badge
                            variant={
                              condition.probability === "High"
                                ? "default"
                                : condition.probability === "Moderate"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {condition.probability} Probability
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{condition.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    <strong>Note:</strong> This is not a definitive diagnosis. Please consult with a healthcare
                    professional for proper evaluation.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-medium mb-2">Reported Symptoms</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {analysis.primarySymptoms.map((symptomId) => {
                      const symptom = commonSymptoms.find((s) => s.id === symptomId)
                      return symptom ? (
                        <Badge key={symptomId} variant="secondary">
                          {symptom.label}
                        </Badge>
                      ) : null
                    })}
                  </div>

                  {analysis.otherSymptoms && (
                    <div className="mt-2">
                      <h4 className="text-sm font-medium mb-1">Additional Symptoms</h4>
                      <p className="text-sm text-muted-foreground">{analysis.otherSymptoms}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Duration</h4>
                      <p className="text-sm">
                        {analysis.duration === "less-than-day" && "Less than a day"}
                        {analysis.duration === "1-3-days" && "1-3 days"}
                        {analysis.duration === "4-7-days" && "4-7 days"}
                        {analysis.duration === "1-2-weeks" && "1-2 weeks"}
                        {analysis.duration === "2-4-weeks" && "2-4 weeks"}
                        {analysis.duration === "1-3-months" && "1-3 months"}
                        {analysis.duration === "more-than-3-months" && "More than 3 months"}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Severity</h4>
                      <p className="text-sm">{analysis.severity}/10</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>Based on your symptoms, here are some potential treatments and remedies</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="medication">Medications</TabsTrigger>
                  <TabsTrigger value="home-remedy">Home Remedies</TabsTrigger>
                  <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="mt-4 space-y-4">
                  {analysis.recommendations.map((rec, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{rec.name}</h4>
                        <Badge variant="outline">{rec.tradition}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{rec.dosage}</p>
                    </div>
                  ))}
                </TabsContent>

                <TabsContent value="medication" className="mt-4">
                  <Tabs defaultValue="all-meds">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all-meds">All</TabsTrigger>
                      <TabsTrigger value="ayurveda-meds">Ayurveda</TabsTrigger>
                      <TabsTrigger value="homeopathy-meds">Homeopathy</TabsTrigger>
                      <TabsTrigger value="allopathy-meds">Allopathy</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all-meds" className="mt-4 space-y-4">
                      {analysis.recommendations
                        .filter((rec) => rec.type === "medication")
                        .map((rec, index) => (
                          <div key={index} className="border rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{rec.name}</h4>
                              <Badge variant="outline">{rec.tradition}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{rec.dosage}</p>
                          </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="ayurveda-meds" className="mt-4 space-y-4">
                      {analysis.recommendations
                        .filter((rec) => rec.type === "medication" && rec.category === "ayurveda")
                        .map((rec, index) => (
                          <div key={index} className="border rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{rec.name}</h4>
                              <Badge variant="outline">{rec.tradition}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{rec.dosage}</p>
                          </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="homeopathy-meds" className="mt-4 space-y-4">
                      {analysis.recommendations
                        .filter((rec) => rec.type === "medication" && rec.category === "homeopathy")
                        .map((rec, index) => (
                          <div key={index} className="border rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{rec.name}</h4>
                              <Badge variant="outline">{rec.tradition}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{rec.dosage}</p>
                          </div>
                        ))}
                    </TabsContent>

                    <TabsContent value="allopathy-meds" className="mt-4 space-y-4">
                      {analysis.recommendations
                        .filter((rec) => rec.type === "medication" && rec.category === "allopathy")
                        .map((rec, index) => (
                          <div key={index} className="border rounded-md p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{rec.name}</h4>
                              <Badge variant="outline">{rec.tradition}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{rec.dosage}</p>
                          </div>
                        ))}
                    </TabsContent>
                  </Tabs>
                </TabsContent>

                <TabsContent value="home-remedy" className="mt-4 space-y-4">
                  {analysis.recommendations
                    .filter((rec) => rec.type === "home-remedy")
                    .map((rec, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{rec.name}</h4>
                          <Badge variant="outline">{rec.tradition}</Badge>
                        </div>
                        <p className="text-sm mb-2">{rec.dosage}</p>
                        {rec.description && <p className="text-sm text-muted-foreground">{rec.description}</p>}
                      </div>
                    ))}
                </TabsContent>

                <TabsContent value="lifestyle" className="mt-4 space-y-4">
                  {analysis.recommendations
                    .filter((rec) => rec.type === "lifestyle")
                    .map((rec, index) => (
                      <div key={index} className="border rounded-md p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{rec.name}</h4>
                          <Badge variant="outline">{rec.tradition}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{rec.dosage}</p>
                      </div>
                    ))}
                </TabsContent>
              </Tabs>

              <div className="mt-6 bg-slate-50 p-4 rounded-md">
                <p className="text-sm text-muted-foreground">
                  <strong>Disclaimer:</strong> These recommendations are for informational purposes only and are not a
                  substitute for professional medical advice. Always consult with a qualified healthcare provider before
                  starting any new treatment.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="sticky top-20 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Stethoscope className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Consult a Specialist</h3>
                    <p className="text-sm text-muted-foreground">Get professional medical advice</p>
                  </div>
                </div>
                <Link href="/consult">
                  <Button className="w-full">Book a Consultation</Button>
                </Link>

                <Separator />

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Pill className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Shop Remedies</h3>
                    <p className="text-sm text-muted-foreground">Find recommended products</p>
                  </div>
                </div>
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    Browse Products
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Health Assistant</CardTitle>
                <CardDescription>
                  Have questions about your analysis? Chat with our AI health assistant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setChatOpen(!chatOpen)}
                  className="w-full"
                  variant={chatOpen ? "secondary" : "default"}
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  {chatOpen ? "Close Chat" : "Start Chat"}
                </Button>

                {chatOpen && (
                  <div className="mt-4 border rounded-md overflow-hidden">
                    <div className="h-[300px] overflow-y-auto p-4 space-y-4 bg-muted/30">
                      {messages.map((message, index) => (
                        <div
                          key={index}
                          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg px-3 py-2 ${
                              message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-lg px-3 py-2 bg-muted">
                            <p className="text-sm">Typing...</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="p-3 border-t">
                      <form onSubmit={handleSendMessage} className="flex gap-2">
                        <Input
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type your question..."
                          className="flex-1"
                        />
                        <Button type="submit" size="sm">
                          Send
                        </Button>
                      </form>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
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

