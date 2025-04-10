"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, SearchIcon } from "lucide-react"

// Medicine database
const medicineDatabase = {
  // Health conditions
  "common cold": {
    name: "Common Cold",
    description: "A viral infection of the upper respiratory tract.",
    symptoms: ["runny nose", "sore throat", "cough", "congestion", "sneezing", "mild fever"],
    treatments: {
      ayurveda: [
        {
          name: "Sitopaladi Churna",
          description: "A traditional Ayurvedic formulation for respiratory conditions",
          dosage: "1/4 teaspoon twice daily with honey",
          origin: "Traditional Ayurvedic medicine dating back centuries",
          ingredients: "Bamboo manna, Piper longum, Cardamom, Cinnamon, Sugar candy",
        },
        {
          name: "Tulsi (Holy Basil)",
          description: "Sacred plant with powerful healing properties",
          dosage: "Tea made with 5-6 fresh leaves twice daily",
          origin: "Revered in Ayurveda for over 3,000 years",
          ingredients: "Ocimum sanctum leaves",
        },
      ],
      allopathy: [
        {
          name: "Paracetamol",
          description: "Pain reliever and fever reducer",
          dosage: "500mg every 6 hours as needed for fever",
          origin: "Synthetic compound first used clinically in 1893",
          ingredients: "Acetaminophen",
        },
        {
          name: "Antihistamines",
          description: "Reduces allergy symptoms like runny nose and sneezing",
          dosage: "As directed on packaging, typically once daily",
          origin: "First generation developed in the 1940s",
          ingredients: "Various, including cetirizine, loratadine",
        },
      ],
      homeopathy: [
        {
          name: "Oscillococcinum",
          description: "Homeopathic remedy for flu-like symptoms",
          dosage: "One dose every 6 hours for 3 days",
          origin: "Developed in the early 1900s",
          ingredients: "Highly diluted extract of duck heart and liver",
        },
        {
          name: "Arsenicum Album 30C",
          description: "For cold symptoms with restlessness and anxiety",
          dosage: "3-5 pellets every 4-6 hours",
          origin: "Prepared according to homeopathic principles",
          ingredients: "Highly diluted arsenic trioxide",
        },
      ],
      traditional: [
        {
          name: "Ginger Tea with Honey",
          description: "Natural remedy for sore throat and congestion",
          dosage: "2-3 cups daily",
          origin: "Traditional remedy used across many cultures",
          ingredients: "Fresh ginger, honey, hot water",
        },
        {
          name: "Steam Inhalation",
          description: "Helps clear nasal passages",
          dosage: "Inhale steam for 10 minutes twice daily",
          origin: "Ancient practice used worldwide",
          ingredients: "Hot water, optional eucalyptus oil",
        },
      ],
    },
  },
  headache: {
    name: "Headache",
    description:
      "Pain or discomfort in the head, scalp, or neck, often associated with tension, migraines, or other factors.",
    symptoms: ["head pain", "pressure in head", "sensitivity to light", "throbbing sensation"],
    treatments: {
      ayurveda: [
        {
          name: "Brahmi (Bacopa monnieri)",
          description: "Herb that helps reduce stress and tension headaches",
          dosage: "300mg twice daily",
          origin: "Traditional Ayurvedic herb used for centuries",
          ingredients: "Dried Bacopa monnieri leaves",
        },
        {
          name: "Jatamansi",
          description: "Calming herb that helps with migraines and tension headaches",
          dosage: "250mg twice daily",
          origin: "Himalayan herb used in Ayurvedic medicine",
          ingredients: "Nardostachys jatamansi root powder",
        },
      ],
      allopathy: [
        {
          name: "Ibuprofen",
          description: "Non-steroidal anti-inflammatory drug (NSAID) for pain relief",
          dosage: "400mg every 6-8 hours as needed for pain",
          origin: "Developed in the 1960s",
          ingredients: "Ibuprofen",
        },
        {
          name: "Acetaminophen",
          description: "Pain reliever and fever reducer",
          dosage: "500-1000mg every 6 hours as needed",
          origin: "Synthetic compound discovered in the late 19th century",
          ingredients: "Acetaminophen (Paracetamol)",
        },
      ],
      homeopathy: [
        {
          name: "Belladonna 30C",
          description: "For throbbing headaches with sudden onset",
          dosage: "3-5 pellets every 4 hours as needed",
          origin: "Prepared according to homeopathic principles",
          ingredients: "Highly diluted Atropa belladonna extract",
        },
        {
          name: "Natrum Muriaticum 6X",
          description: "For headaches associated with grief or emotional stress",
          dosage: "4 tablets three times daily",
          origin: "Homeopathic preparation of sodium chloride",
          ingredients: "Diluted sodium chloride",
        },
      ],
      traditional: [
        {
          name: "Peppermint Oil",
          description: "Natural remedy that creates cooling sensation and relieves tension",
          dosage: "Apply diluted oil to temples",
          origin: "Traditional remedy used for centuries",
          ingredients: "Mentha piperita essential oil",
        },
        {
          name: "Lavender Essential Oil",
          description: "Calming aroma helps with stress-induced headaches",
          dosage: "Inhale or apply diluted to temples",
          origin: "Traditional herbal remedy from Mediterranean region",
          ingredients: "Lavandula angustifolia essential oil",
        },
      ],
    },
  },
  fever: {
    name: "Fever",
    description: "Elevated body temperature, often a response to infection or inflammation.",
    symptoms: ["elevated temperature", "chills", "sweating", "headache", "muscle aches", "weakness"],
    treatments: {
      ayurveda: [
        {
          name: "Sudarshan Churna",
          description: "Traditional formulation for fever and malaria",
          dosage: "1/2 teaspoon twice daily with honey",
          origin: "Ancient Ayurvedic formula",
          ingredients: "Blend of herbs including Swertia chirata and other bitter herbs",
        },
        {
          name: "Giloy (Tinospora cordifolia)",
          description: "Immune-boosting herb that helps reduce fever",
          dosage: "500mg twice daily or 2 tsp juice",
          origin: "Known as 'Amrita' (nectar of immortality) in Ayurveda",
          ingredients: "Tinospora cordifolia stem extract",
        },
      ],
      allopathy: [
        {
          name: "Paracetamol",
          description: "Reduces fever by affecting the hypothalamic heat-regulating center",
          dosage: "500-1000mg every 6 hours as needed",
          origin: "Synthetic compound first used clinically in 1893",
          ingredients: "Acetaminophen",
        },
        {
          name: "Ibuprofen",
          description: "Anti-inflammatory that reduces fever and associated pain",
          dosage: "400mg every 6-8 hours",
          origin: "Developed in the 1960s",
          ingredients: "Ibuprofen",
        },
      ],
      homeopathy: [
        {
          name: "Belladonna 30C",
          description: "For high fever with flushed face and throbbing headache",
          dosage: "3-5 pellets every 4 hours",
          origin: "Prepared according to homeopathic principles",
          ingredients: "Highly diluted Atropa belladonna extract",
        },
        {
          name: "Ferrum Phosphoricum 6X",
          description: "For early stages of fever with mild symptoms",
          dosage: "4 tablets every 3-4 hours",
          origin: "Homeopathic preparation of iron phosphate",
          ingredients: "Diluted iron phosphate",
        },
      ],
      traditional: [
        {
          name: "Basil Leaf Tea",
          description: "Natural fever reducer with immune-boosting properties",
          dosage: "1 cup 2-3 times daily",
          origin: "Traditional remedy used across many cultures",
          ingredients: "Fresh basil leaves, hot water, honey (optional)",
        },
        {
          name: "Lukewarm Water Sponging",
          description: "Helps reduce body temperature naturally",
          dosage: "Apply to forehead, armpits, and groin when fever is high",
          origin: "Traditional home remedy",
          ingredients: "Lukewarm water, clean cloth",
        },
      ],
    },
  },
  cough: {
    name: "Cough",
    description: "A sudden, often repetitive reflex that helps clear the throat and breathing passages.",
    symptoms: ["throat irritation", "chest discomfort", "mucus production", "wheezing"],
    treatments: {
      ayurveda: [
        {
          name: "Talisadi Churna",
          description: "Traditional formulation for respiratory conditions",
          dosage: "1/2 teaspoon twice daily with honey",
          origin: "Classical Ayurvedic preparation",
          ingredients: "Talispatra, Ela, Tvak, Pippali, and other herbs",
        },
        {
          name: "Kantakari (Solanum xanthocarpum)",
          description: "Herb that helps with productive cough and bronchitis",
          dosage: "250-500mg twice daily",
          origin: "Traditional Ayurvedic herb",
          ingredients: "Dried Solanum xanthocarpum powder",
        },
      ],
      allopathy: [
        {
          name: "Dextromethorphan",
          description: "Cough suppressant that works on the brain's cough center",
          dosage: "10-30mg every 4-8 hours as needed",
          origin: "Synthetic derivative developed in the mid-20th century",
          ingredients: "Dextromethorphan hydrobromide",
        },
        {
          name: "Guaifenesin",
          description: "Expectorant that thins mucus to help clear airways",
          dosage: "200-400mg every 4 hours",
          origin: "Derived from a compound found in guaiac tree",
          ingredients: "Guaifenesin",
        },
      ],
      homeopathy: [
        {
          name: "Bryonia 30C",
          description: "For dry, painful cough that worsens with movement",
          dosage: "3-5 pellets every 4 hours",
          origin: "Prepared according to homeopathic principles",
          ingredients: "Highly diluted Bryonia alba extract",
        },
        {
          name: "Rumex Crispus 6C",
          description: "For coughs triggered by cold air or change in temperature",
          dosage: "4 tablets three times daily",
          origin: "Homeopathic preparation from yellow dock",
          ingredients: "Diluted Rumex crispus extract",
        },
      ],
      traditional: [
        {
          name: "Honey and Ginger Mixture",
          description: "Soothes throat irritation and reduces cough frequency",
          dosage: "1 teaspoon as needed",
          origin: "Traditional remedy used across many cultures",
          ingredients: "Raw honey, fresh ginger juice",
        },
        {
          name: "Licorice Root Tea",
          description: "Helps soothe throat and reduce cough",
          dosage: "1 cup 2-3 times daily",
          origin: "Used in traditional Chinese and Western herbalism",
          ingredients: "Dried licorice root, hot water",
        },
      ],
    },
  },
  indigestion: {
    name: "Indigestion",
    description: "Discomfort or pain in the upper abdomen, often after eating.",
    symptoms: ["bloating", "nausea", "heartburn", "stomach pain", "excessive gas"],
    treatments: {
      ayurveda: [
        {
          name: "Hingvashtak Churna",
          description: "Traditional digestive formula that reduces gas and bloating",
          dosage: "1/4 teaspoon before meals with warm water",
          origin: "Classical Ayurvedic preparation",
          ingredients: "Asafoetida, ginger, black pepper, and other carminative herbs",
        },
        {
          name: "Avipattikar Churna",
          description: "Balances stomach acid and improves digestion",
          dosage: "1/2 teaspoon after meals with warm water",
          origin: "Traditional Ayurvedic formulation",
          ingredients: "Blend of digestive herbs including Triphala and Trikatu",
        },
      ],
      allopathy: [
        {
          name: "Antacids",
          description: "Neutralizes stomach acid to relieve heartburn",
          dosage: "As directed on packaging, typically 1-2 tablets as needed",
          origin: "Various formulations developed in the 20th century",
          ingredients: "Calcium carbonate, magnesium hydroxide, or aluminum hydroxide",
        },
        {
          name: "Proton Pump Inhibitors",
          description: "Reduces acid production in the stomach",
          dosage: "20-40mg once daily before a meal",
          origin: "First developed in the 1980s",
          ingredients: "Omeprazole, pantoprazole, or similar compounds",
        },
      ],
      homeopathy: [
        {
          name: "Nux Vomica 30C",
          description: "For indigestion with bloating and irritability",
          dosage: "3-5 pellets twice daily",
          origin: "Prepared according to homeopathic principles",
          ingredients: "Highly diluted Strychnos nux-vomica extract",
        },
        {
          name: "Carbo Vegetabilis 6C",
          description: "For bloating with gas and feeling of fullness",
          dosage: "4 tablets as needed",
          origin: "Homeopathic preparation from vegetable charcoal",
          ingredients: "Diluted vegetable charcoal",
        },
      ],
      traditional: [
        {
          name: "Ginger Tea",
          description: "Stimulates digestion and reduces nausea",
          dosage: "1 cup after meals",
          origin: "Traditional remedy used across many cultures",
          ingredients: "Fresh ginger, hot water",
        },
        {
          name: "Apple Cider Vinegar",
          description: "Helps balance stomach acid and improve digestion",
          dosage: "1 tablespoon in water before meals",
          origin: "Traditional folk remedy",
          ingredients: "Raw, unfiltered apple cider vinegar",
        },
      ],
    },
  },

  // Skin conditions
  acne: {
    name: "Acne",
    description: "A skin condition characterized by clogged pores, pimples, and inflammation.",
    symptoms: ["pimples", "blackheads", "whiteheads", "skin inflammation", "redness"],
    treatments: {
      medicine: [
        {
          name: "Benzoyl Peroxide",
          description: "Topical treatment that kills bacteria and removes excess oil",
          dosage: "Apply 2.5-5% cream once or twice daily",
          origin: "Developed in the 1950s for acne treatment",
          ingredients: "Benzoyl peroxide",
        },
        {
          name: "Salicylic Acid",
          description: "Helps unclog pores and reduce inflammation",
          dosage: "Apply 0.5-2% solution once or twice daily",
          origin: "Derived from willow bark, used medicinally for centuries",
          ingredients: "Salicylic acid",
        },
        {
          name: "Neem Extract",
          description: "Natural antibacterial and anti-inflammatory for acne",
          dosage: "Apply neem-based cream twice daily",
          origin: "Traditional Ayurvedic remedy from the neem tree",
          ingredients: "Azadirachta indica (neem) extract",
        },
      ],
      traditional: [
        {
          name: "Tea Tree Oil",
          description: "Natural antibacterial that helps clear acne",
          dosage: "Apply diluted oil (5%) to affected areas",
          origin: "Traditional Aboriginal medicine from Australia",
          ingredients: "Melaleuca alternifolia essential oil",
        },
        {
          name: "Aloe Vera Gel",
          description: "Soothes inflammation and promotes healing",
          dosage: "Apply fresh gel to affected areas twice daily",
          origin: "Used medicinally for thousands of years across cultures",
          ingredients: "Fresh aloe vera leaf gel",
        },
      ],
    },
  },
  eczema: {
    name: "Eczema",
    description: "A chronic skin condition causing dry, itchy, and inflamed skin.",
    symptoms: ["dry skin", "itching", "redness", "skin inflammation", "rough patches"],
    treatments: {
      medicine: [
        {
          name: "Hydrocortisone Cream",
          description: "Reduces inflammation and itching",
          dosage: "Apply 1% cream to affected areas 1-2 times daily",
          origin: "Synthetic corticosteroid developed in the mid-20th century",
          ingredients: "Hydrocortisone",
        },
        {
          name: "Tacrolimus Ointment",
          description: "Non-steroidal anti-inflammatory for sensitive areas",
          dosage: "Apply 0.03-0.1% ointment twice daily",
          origin: "Derived from soil bacteria, developed in the 1990s",
          ingredients: "Tacrolimus",
        },
        {
          name: "Karanja Oil",
          description: "Ayurvedic remedy with anti-inflammatory properties",
          dosage: "Apply diluted oil to affected areas twice daily",
          origin: "Traditional Ayurvedic medicine from Pongamia tree",
          ingredients: "Pongamia pinnata seed oil",
        },
      ],
      traditional: [
        {
          name: "Colloidal Oatmeal Bath",
          description: "Soothes itching and reduces inflammation",
          dosage: "Add 1 cup to warm bath water, soak for 15-20 minutes",
          origin: "Traditional remedy used for centuries",
          ingredients: "Finely ground oatmeal",
        },
        {
          name: "Coconut Oil",
          description: "Moisturizes dry skin and has antimicrobial properties",
          dosage: "Apply to affected areas 2-3 times daily",
          origin: "Traditional remedy in tropical regions",
          ingredients: "Virgin coconut oil",
        },
      ],
    },
  },
  psoriasis: {
    name: "Psoriasis",
    description: "A chronic autoimmune condition causing rapid skin cell buildup, resulting in thick, scaly patches.",
    symptoms: ["red patches", "silvery scales", "dry skin", "itching", "burning sensation"],
    treatments: {
      medicine: [
        {
          name: "Calcipotriene",
          description: "Vitamin D analog that slows skin cell growth",
          dosage: "Apply 0.005% ointment once or twice daily",
          origin: "Synthetic vitamin D derivative developed in the 1990s",
          ingredients: "Calcipotriene",
        },
        {
          name: "Coal Tar Preparations",
          description: "Reduces inflammation and slows skin cell growth",
          dosage: "Apply 1-5% preparation once or twice daily",
          origin: "Used for psoriasis since the early 1900s",
          ingredients: "Coal tar extract",
        },
        {
          name: "Panchavalkal",
          description: "Ayurvedic herbal preparation for skin disorders",
          dosage: "Apply paste to affected areas twice daily",
          origin: "Traditional Ayurvedic formulation using five tree barks",
          ingredients: "Extracts from Ficus benghalensis and other trees",
        },
      ],
      traditional: [
        {
          name: "Dead Sea Salt Bath",
          description: "Mineral-rich soak that helps remove scales and reduce inflammation",
          dosage: "Add 1-2 cups to warm bath water, soak for 15 minutes",
          origin: "Traditional remedy from the Dead Sea region",
          ingredients: "Dead Sea mineral salts",
        },
        {
          name: "Turmeric Paste",
          description: "Anti-inflammatory that helps reduce psoriasis symptoms",
          dosage: "Apply paste to affected areas twice daily",
          origin: "Traditional remedy in Ayurvedic and Chinese medicine",
          ingredients: "Turmeric powder mixed with water or oil",
        },
      ],
    },
  },

  // Hair conditions
  "hair loss": {
    name: "Hair Loss",
    description: "Excessive shedding of hair from the scalp, leading to thinning or baldness.",
    symptoms: ["thinning hair", "receding hairline", "bald spots", "excessive shedding"],
    treatments: {
      medicine: [
        {
          name: "Minoxidil",
          description: "Topical treatment that promotes hair growth",
          dosage: "Apply 2-5% solution to scalp twice daily",
          origin: "Originally developed as blood pressure medication in the 1950s",
          ingredients: "Minoxidil",
        },
        {
          name: "Finasteride",
          description: "Oral medication that prevents conversion of testosterone to DHT",
          dosage: "1mg tablet daily (prescription only)",
          origin: "Developed in the 1990s for male pattern baldness",
          ingredients: "Finasteride",
        },
        {
          name: "Bhringraj Oil",
          description: "Ayurvedic hair oil that strengthens roots and promotes growth",
          dosage: "Massage into scalp 2-3 times weekly",
          origin: "Traditional Ayurvedic remedy from Eclipta alba",
          ingredients: "Eclipta alba extract in sesame or coconut oil base",
        },
      ],
      traditional: [
        {
          name: "Rosemary Oil",
          description: "Stimulates hair follicles and improves circulation",
          dosage: "Massage diluted oil into scalp 1-2 times weekly",
          origin: "Traditional Mediterranean remedy",
          ingredients: "Rosmarinus officinalis essential oil",
        },
        {
          name: "Onion Juice",
          description: "Rich in sulfur compounds that may promote hair growth",
          dosage: "Apply fresh juice to scalp, leave for 15 minutes before washing",
          origin: "Traditional folk remedy",
          ingredients: "Fresh onion juice",
        },
      ],
    },
  },
  dandruff: {
    name: "Dandruff",
    description: "A common scalp condition causing flaking and itching of the skin on the scalp.",
    symptoms: ["white flakes", "itchy scalp", "dry scalp", "redness"],
    treatments: {
      medicine: [
        {
          name: "Ketoconazole Shampoo",
          description: "Anti-fungal that treats the yeast causing dandruff",
          dosage: "Use 2% shampoo 2-3 times weekly",
          origin: "Synthetic antifungal developed in the 1970s",
          ingredients: "Ketoconazole",
        },
        {
          name: "Selenium Sulfide",
          description: "Reduces fungal growth and slows skin cell turnover",
          dosage: "Use 1% shampoo twice weekly",
          origin: "Developed in the mid-20th century for seborrheic dermatitis",
          ingredients: "Selenium sulfide",
        },
        {
          name: "Neem Shampoo",
          description: "Natural antifungal and antibacterial for scalp conditions",
          dosage: "Use 2-3 times weekly",
          origin: "Based on traditional Ayurvedic medicine",
          ingredients: "Azadirachta indica (neem) extract",
        },
      ],
      traditional: [
        {
          name: "Apple Cider Vinegar Rinse",
          description: "Balances scalp pH and has antimicrobial properties",
          dosage: "Dilute 1 part vinegar with 3 parts water, use as final rinse",
          origin: "Traditional folk remedy",
          ingredients: "Raw, unfiltered apple cider vinegar",
        },
        {
          name: "Aloe Vera Gel",
          description: "Soothes irritated scalp and reduces inflammation",
          dosage: "Apply fresh gel to scalp, leave for 30 minutes before washing",
          origin: "Used medicinally for thousands of years across cultures",
          ingredients: "Fresh aloe vera leaf gel",
        },
      ],
    },
  },
  "dry hair": {
    name: "Dry Hair",
    description: "Hair that lacks moisture and natural oils, appearing dull and prone to breakage.",
    symptoms: ["brittle hair", "dull appearance", "frizz", "split ends", "rough texture"],
    treatments: {
      medicine: [
        {
          name: "Argan Oil Treatment",
          description: "Rich in fatty acids and vitamin E to nourish hair",
          dosage: "Apply a few drops to damp hair 2-3 times weekly",
          origin: "Traditional Moroccan remedy now used in modern hair care",
          ingredients: "Cold-pressed Argania spinosa kernel oil",
        },
        {
          name: "Biotin Supplements",
          description: "B vitamin that supports healthy hair growth",
          dosage: "2500-5000mcg daily (consult healthcare provider)",
          origin: "Essential vitamin isolated in the early 20th century",
          ingredients: "Biotin (Vitamin B7)",
        },
        {
          name: "Coconut Oil Hair Mask",
          description: "Deeply penetrating oil that restores moisture",
          dosage: "Apply to hair, leave for 30+ minutes before washing",
          origin: "Traditional remedy in tropical regions",
          ingredients: "Virgin coconut oil",
        },
      ],
      traditional: [
        {
          name: "Egg and Honey Mask",
          description: "Protein-rich treatment that strengthens and moisturizes",
          dosage: "Apply to hair, leave for 20 minutes before washing",
          origin: "Traditional folk remedy",
          ingredients: "Whole egg, honey, olive oil",
        },
        {
          name: "Avocado Hair Mask",
          description: "Rich in healthy fats that nourish dry hair",
          dosage: "Apply mashed mixture to hair, leave for 30 minutes before washing",
          origin: "Traditional remedy from Central America",
          ingredients: "Ripe avocado, olive oil, honey",
        },
      ],
    },
  },
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCondition, setSelectedCondition] = useState(null)

  const handleSearch = () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate API call with timeout
    setTimeout(() => {
      const results = performSearch(searchQuery)
      setSearchResults(results)
      setIsSearching(false)

      // If we have results, select the first one
      if (results.length > 0) {
        setSelectedCondition(results[0])
      } else {
        setSelectedCondition(null)
      }
    }, 500)
  }

  const performSearch = (query) => {
    const normalizedQuery = query.toLowerCase().trim()
    const results = []

    // Search through the medicine database
    for (const [key, condition] of Object.entries(medicineDatabase)) {
      // Check if the condition name or description matches
      if (
        key.includes(normalizedQuery) ||
        condition.name.toLowerCase().includes(normalizedQuery) ||
        condition.description.toLowerCase().includes(normalizedQuery)
      ) {
        results.push(condition)
        continue
      }

      // Check if any symptom matches
      const matchesSymptom = condition.symptoms.some((symptom) => symptom.toLowerCase().includes(normalizedQuery))
      if (matchesSymptom) {
        results.push(condition)
        continue
      }

      // Check treatments for matches
      let matchesTreatment = false
      for (const category in condition.treatments) {
        for (const treatment of condition.treatments[category]) {
          if (
            treatment.name.toLowerCase().includes(normalizedQuery) ||
            treatment.description.toLowerCase().includes(normalizedQuery) ||
            treatment.ingredients.toLowerCase().includes(normalizedQuery)
          ) {
            matchesTreatment = true
            break
          }
        }
        if (matchesTreatment) break
      }

      if (matchesTreatment) {
        results.push(condition)
      }
    }

    return results
  }

  const handleConditionSelect = (condition) => {
    setSelectedCondition(condition)
  }

  // Determine if a condition is related to skin or hair
  const isConditionSkinOrHair = (condition) => {
    if (!condition) return false

    const skinHairKeywords = [
      "acne",
      "eczema",
      "psoriasis",
      "hair loss",
      "dandruff",
      "dry hair",
      "skin",
      "hair",
      "scalp",
    ]

    return skinHairKeywords.some(
      (keyword) =>
        condition.name.toLowerCase().includes(keyword) ||
        (condition.symptoms && condition.symptoms.some((s) => s.includes(keyword))),
    )
  }

  // Handle form submission on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Medicine Information Search</h1>
        <p className="text-muted-foreground">
          Search for conditions, symptoms, or treatments to find detailed information about traditional and modern
          medicines.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for a condition, symptom, or treatment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pr-10"
            />
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-0 top-0 h-full px-3"
              onClick={handleSearch}
              disabled={isSearching}
            >
              <SearchIcon className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <Button onClick={handleSearch} disabled={isSearching}>
          {isSearching ? "Searching..." : "Search"}
        </Button>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Search Results</CardTitle>
                <CardDescription>
                  Found {searchResults.length} results for "{searchQuery}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {searchResults.map((result, index) => (
                    <Button
                      key={index}
                      variant={selectedCondition === result ? "default" : "outline"}
                      className="w-full justify-start text-left"
                      onClick={() => handleConditionSelect(result)}
                    >
                      {result.name}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {selectedCondition && (
              <Card>
                <CardHeader>
                  <CardTitle>{selectedCondition.name}</CardTitle>
                  <CardDescription>{selectedCondition.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Common Symptoms</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCondition.symptoms.map((symptom, index) => (
                        <Badge key={index} variant="secondary">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-medium mb-4">Treatment Options</h3>

                    {isConditionSkinOrHair(selectedCondition) ? (
                      // For skin and hair conditions, show only Medicine and Traditional tabs
                      <Tabs defaultValue="medicine">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="medicine">Medicine</TabsTrigger>
                          <TabsTrigger value="traditional">Traditional Remedies</TabsTrigger>
                        </TabsList>

                        <TabsContent value="medicine" className="space-y-4 mt-4">
                          {selectedCondition.treatments.medicine?.map((treatment, index) => (
                            <div key={index} className="border rounded-md p-4">
                              <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium">{treatment.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>

                                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">DOSAGE</h5>
                                      <p className="text-sm">{treatment.dosage}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">ORIGIN</h5>
                                      <p className="text-sm">{treatment.origin}</p>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <h5 className="text-xs font-medium text-muted-foreground">INGREDIENTS</h5>
                                    <p className="text-sm">{treatment.ingredients}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>

                        <TabsContent value="traditional" className="space-y-4 mt-4">
                          {selectedCondition.treatments.traditional?.map((treatment, index) => (
                            <div key={index} className="border rounded-md p-4">
                              <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium">{treatment.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>

                                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">DOSAGE</h5>
                                      <p className="text-sm">{treatment.dosage}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">ORIGIN</h5>
                                      <p className="text-sm">{treatment.origin}</p>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <h5 className="text-xs font-medium text-muted-foreground">INGREDIENTS</h5>
                                    <p className="text-sm">{treatment.ingredients}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>
                      </Tabs>
                    ) : (
                      // For health conditions, show all four tabs
                      <Tabs defaultValue="ayurveda">
                        <TabsList className="grid w-full grid-cols-4">
                          <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
                          <TabsTrigger value="allopathy">Allopathy</TabsTrigger>
                          <TabsTrigger value="homeopathy">Homeopathy</TabsTrigger>
                          <TabsTrigger value="traditional">Traditional</TabsTrigger>
                        </TabsList>

                        <TabsContent value="ayurveda" className="space-y-4 mt-4">
                          {selectedCondition.treatments.ayurveda?.map((treatment, index) => (
                            <div key={index} className="border rounded-md p-4">
                              <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium">{treatment.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>

                                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">DOSAGE</h5>
                                      <p className="text-sm">{treatment.dosage}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">ORIGIN</h5>
                                      <p className="text-sm">{treatment.origin}</p>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <h5 className="text-xs font-medium text-muted-foreground">INGREDIENTS</h5>
                                    <p className="text-sm">{treatment.ingredients}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>

                        <TabsContent value="allopathy" className="space-y-4 mt-4">
                          {selectedCondition.treatments.allopathy?.map((treatment, index) => (
                            <div key={index} className="border rounded-md p-4">
                              <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium">{treatment.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>

                                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">DOSAGE</h5>
                                      <p className="text-sm">{treatment.dosage}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">ORIGIN</h5>
                                      <p className="text-sm">{treatment.origin}</p>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <h5 className="text-xs font-medium text-muted-foreground">INGREDIENTS</h5>
                                    <p className="text-sm">{treatment.ingredients}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>

                        <TabsContent value="homeopathy" className="space-y-4 mt-4">
                          {selectedCondition.treatments.homeopathy?.map((treatment, index) => (
                            <div key={index} className="border rounded-md p-4">
                              <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium">{treatment.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>

                                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">DOSAGE</h5>
                                      <p className="text-sm">{treatment.dosage}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">ORIGIN</h5>
                                      <p className="text-sm">{treatment.origin}</p>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <h5 className="text-xs font-medium text-muted-foreground">INGREDIENTS</h5>
                                    <p className="text-sm">{treatment.ingredients}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>

                        <TabsContent value="traditional" className="space-y-4 mt-4">
                          {selectedCondition.treatments.traditional?.map((treatment, index) => (
                            <div key={index} className="border rounded-md p-4">
                              <div className="flex flex-col md:flex-row md:items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="font-medium">{treatment.name}</h4>
                                  <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>

                                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">DOSAGE</h5>
                                      <p className="text-sm">{treatment.dosage}</p>
                                    </div>
                                    <div>
                                      <h5 className="text-xs font-medium text-muted-foreground">ORIGIN</h5>
                                      <p className="text-sm">{treatment.origin}</p>
                                    </div>
                                  </div>

                                  <div className="mt-3">
                                    <h5 className="text-xs font-medium text-muted-foreground">INGREDIENTS</h5>
                                    <p className="text-sm">{treatment.ingredients}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>
                      </Tabs>
                    )}
                  </div>

                  <div className="mt-6 bg-slate-50 p-4 rounded-md">
                    <p className="text-sm text-muted-foreground">
                      <strong>Disclaimer:</strong> This information is for educational purposes only and is not a
                      substitute for professional medical advice. Always consult with a qualified healthcare provider
                      before starting any new treatment.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/health/${selectedCondition.name.toLowerCase().replace(/\s+/g, "-")}`}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          {searchQuery && !isSearching ? (
            <div>
              <h3 className="text-lg font-medium mb-2">No results found</h3>
              <p className="text-muted-foreground">Try searching for a different condition, symptom, or treatment.</p>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-medium mb-2">Search for health information</h3>
              <p className="text-muted-foreground">
                Enter a condition, symptom, or treatment to find detailed information.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

