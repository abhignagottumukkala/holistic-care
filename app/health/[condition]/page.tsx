import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Calendar } from "lucide-react"

export default function ConditionPage({ params }: { params: { condition: string } }) {
  // In a real application, you would fetch this data from an API or database
  // based on the condition slug in params.condition

  // Define conditions data
  const conditions = {
    diabetes: {
      name: "Diabetes",
      description:
        "Diabetes is a chronic condition that affects how your body turns food into energy. There are different types of diabetes, but they all involve having too much sugar (glucose) in your bloodstream. Over time, high blood sugar levels can lead to serious health problems.",
      symptoms: [
        "Increased thirst and urination",
        "Extreme hunger",
        "Unexplained weight loss",
        "Fatigue",
        "Blurred vision",
        "Slow-healing sores",
        "Frequent infections",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurvedic treatment for diabetes focuses on balancing the doshas, particularly Kapha, through diet, herbs, and lifestyle modifications.",
          remedies: [
            {
              name: "Gymnema Sylvestre (Gurmar)",
              description:
                "Known as 'sugar destroyer' in Ayurveda, it helps reduce blood sugar levels and sugar cravings.",
              usage: "Take 500mg capsule twice daily before meals or as directed by an Ayurvedic practitioner.",
              origin:
                "Native to tropical forests of India, this herb has been used in Ayurvedic medicine for over 2,000 years.",
            },
            {
              name: "Bitter Gourd (Karela)",
              description: "Contains compounds that act like insulin, helping to reduce blood glucose levels.",
              usage: "Consume as juice (30ml) on an empty stomach in the morning or take in capsule form.",
              origin:
                "Widely used in traditional medicine across India and other Asian countries for its blood sugar-lowering properties.",
            },
          ],
        },
        allopathy: {
          description:
            "Allopathic treatment for diabetes involves medication to control blood sugar levels, along with lifestyle changes.",
          remedies: [
            {
              name: "Metformin",
              description: "First-line medication for type 2 diabetes that reduces glucose production in the liver.",
              usage: "Typically started at 500mg once or twice daily with meals, as prescribed by a doctor.",
              origin:
                "Derived from the French lilac plant, developed into a medication in the 1920s and approved for diabetes in the 1950s.",
            },
            {
              name: "Insulin",
              description:
                "Hormone that helps glucose enter cells for energy. Used when the body doesn't produce enough insulin.",
              usage: "Administered via injection or insulin pump as prescribed by a doctor.",
              origin: "First isolated from pancreatic extracts in 1921 by Frederick Banting and Charles Best.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathic treatment for diabetes focuses on stimulating the body's self-healing mechanisms through highly diluted remedies tailored to individual symptoms.",
          remedies: [
            {
              name: "Uranium Nitricum 30C",
              description: "Used for diabetes with excessive urination, great thirst, and emaciation.",
              usage: "Take 3-5 pellets three times daily as directed by a homeopathic practitioner.",
              origin:
                "Introduced into homeopathy in the 19th century specifically for treating diabetes-like symptoms.",
            },
            {
              name: "Syzygium Jambolanum 30C",
              description: "Particularly effective for reducing blood sugar levels and excessive urination.",
              usage: "Take 3-5 pellets twice daily before meals.",
              origin: "Derived from the jamun tree (Java plum), traditionally used in India for diabetes management.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for diabetes include various natural ingredients and lifestyle practices that help manage blood sugar levels.",
          remedies: [
            {
              name: "Cinnamon",
              description: "May help improve insulin sensitivity and lower blood sugar levels.",
              usage: "Add 1/2 to 1 teaspoon of cinnamon to food or take as a supplement (1-6g daily).",
              origin:
                "Used in traditional Chinese medicine and Ayurveda for thousands of years for its medicinal properties.",
            },
            {
              name: "Fenugreek Seeds",
              description: "Contains soluble fiber that helps slow digestion and absorption of carbohydrates.",
              usage:
                "Soak 1 tablespoon of seeds overnight and consume in the morning, or take 500mg capsules twice daily.",
              origin: "Used in traditional medicine across the Middle East, Egypt, and India for thousands of years.",
            },
          ],
        },
      },
      lifestyle: [
        "Maintain a healthy weight",
        "Follow a balanced diet low in refined carbohydrates",
        "Exercise regularly (at least 150 minutes per week)",
        "Monitor blood sugar levels as recommended",
        "Manage stress through meditation, yoga, or other relaxation techniques",
        "Get adequate sleep (7-8 hours per night)",
        "Stay hydrated by drinking plenty of water",
      ],
      relatedProducts: [
        {
          name: "Blood Glucose Monitor",
          price: 799,
          description: "Accurate and easy-to-use monitor for checking blood sugar levels at home.",
          image:
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRvvyuNTIuNZmunTVFcZIAaEucGF0ZDZKdi7Z6jginxmbSRzCs-IUaS5bxDb3PaCPm6czDt1gLKcnX2YOYPsx2wZaEN2QKBCtfbSU9l2lcbtIiiGPildKJo",
        },
        {
          name: "Uranium Nitricum 30C",
          price: 100,
          description:
            "SBL Uranium Nitricum Dilution is a homeopathic medicine which is helpful in increased sugar levels and blood pressure.",
          image: "https://m.media-amazon.com/images/I/31VXMyuA5EL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          name: "Metformin",
          price: 43,
          description: "High-quality protein supplement without added sugars, suitable for diabetics.",
          image: "https://www.netmeds.com/images/product-v1/600x600/916665/metform_500mg_tablet_20s_0_0.jpg",
        },
      ],
    },
    fever: {
      name: "Fever",
      description:
        "Fever is a temporary increase in body temperature, often due to an underlying infection. It is a natural response by the body to fight off pathogens and can be accompanied by chills, sweating, weakness, and headache.",
      symptoms: [
        "Elevated body temperature (above 100.4°F or 38°C)",
        "Chills and shivering",
        "Sweating",
        "Body aches",
        "Fatigue or weakness",
        "Loss of appetite",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda views fever (Jwara) as an imbalance in the doshas, especially Pitta, and uses herbs and dietary changes to restore balance and reduce heat.",
          remedies: [
            {
              name: "Tulsi (Holy Basil)",
              description:
                "Boosts immunity and helps reduce fever due to its antipyretic and antimicrobial properties.",
              usage: "Boil 5–6 leaves in water and sip like tea 2–3 times daily.",
              origin: "Sacred herb in India, used for centuries in treating fevers and infections.",
            },
            {
              name: "Guduchi (Giloy)",
              description:
                "A powerful immunomodulator and antipyretic herb used for treating chronic and intermittent fevers.",
              usage: "Take as juice (15-30ml) or tablets twice daily.",
              origin: "Known as 'Amrita' in Ayurveda for its revitalizing properties.",
            },
          ],
        },
        allopathy: {
          description:
            "Fever in allopathy is managed with antipyretics to lower temperature and address the root cause like infections with antibiotics if necessary.",
          remedies: [
            {
              name: "Paracetamol (Acetaminophen)",
              description: "Most common medication to reduce fever and relieve pain.",
              usage: "500–1000 mg every 4–6 hours as needed (max 4g/day).",
              origin: "First synthesized in the late 19th century; standard fever-reducing agent.",
            },
            {
              name: "Ibuprofen",
              description: "Reduces fever, inflammation, and body aches.",
              usage: "200–400 mg every 6–8 hours as needed with food.",
              origin: "NSAID developed in the 1960s; commonly used for mild to moderate fever.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathic remedies for fever focus on individual symptoms and overall constitution, aiming to stimulate the body’s natural defenses.",
          remedies: [
            {
              name: "Aconitum Napellus 30C",
              description: "For fever with sudden onset, chills, and restlessness.",
              usage: "3–5 pellets every 2–4 hours during fever onset.",
              origin: "Derived from monkshood plant; used in acute fevers with anxiety.",
            },
            {
              name: "Ferrum Phosphoricum 6X",
              description: "For low-grade fever with weakness, especially at early stages.",
              usage: "4 tablets 3–4 times daily during fever.",
              origin: "One of the 12 Schuessler salts used in cellular-level support.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional fever relief often includes herbal teas, hydration, and cooling remedies to support the immune system.",
          remedies: [
            {
              name: "Lemongrass Tea",
              description: "Reduces fever and supports digestion and immunity.",
              usage: "Boil fresh lemongrass in water and sip warm 2–3 times daily.",
              origin: "Used in folk medicine in Southeast Asia and India.",
            },
            {
              name: "Wet Cloth Compress",
              description: "Helps bring down body temperature during high fever.",
              usage: "Place a cool, damp cloth on forehead or underarms for 10–15 minutes.",
              origin: "Time-tested household remedy across the globe.",
            },
          ],
        },
      },
      lifestyle: [
        "Stay well-hydrated with water, soups, and herbal teas",
        "Take adequate rest and avoid exertion",
        "Wear light, breathable clothing",
        "Use a fan or sponge bath to stay cool if temperature is high",
        "Avoid spicy, oily foods and eat light, digestible meals",
        "Monitor body temperature regularly",
      ],
      relatedProducts: [
        {
          name: "Digital Thermometer",
          price: 165,
          description: "Accurate device to monitor body temperature at home.",
          image: "https://www.seelingo.in/wp-content/uploads/2025/01/121770.jpg",
        },
        {
          name: "Tulsi-Giloy Juice",
          price: 232,
          description: "Immunity-boosting juice to support fever recovery naturally.",
          image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/13314201a.webp",
        },
        {
          name: "Reusable Cold Compress",
          price: 239,
          description: "Soft gel pack to help reduce body heat and relieve headache during fever.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1ogIapU2e2TNoxp3SGyhpR17VJIs-cTx4w&s",
        },
      ],
    },
    gastritis: {
      name: "Gastritis",
      description:
        "Gastritis is inflammation of the stomach lining, which can be caused by infections, prolonged NSAID use, alcohol, or stress. It may be acute or chronic and leads to discomfort in the upper abdomen.",
      symptoms: [
        "Upper abdominal pain or burning",
        "Bloating",
        "Nausea or vomiting",
        "Loss of appetite",
        "Hiccups or belching",
        "Feeling full after eating a small amount",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda treats gastritis (Amlapitta) by balancing excess Pitta through cooling herbs, diet changes, and detox therapies.",
          remedies: [
            {
              name: "Amalaki (Indian Gooseberry)",
              description: "Soothes stomach lining and reduces acidity.",
              usage: "Take 1 tsp powder with honey or water in the morning.",
              origin: "A rejuvenative herb in Ayurveda used for digestive and antioxidant support.",
            },
            {
              name: "Shatavari",
              description: "Helps in healing stomach ulcers and reducing acid secretion.",
              usage: "Take as powder with milk or in capsule form twice daily.",
              origin: "Traditional Ayurvedic herb for digestive and reproductive wellness.",
            },
          ],
        },
        allopathy: {
          description:
            "Gastritis is treated with antacids, proton pump inhibitors, and antibiotics if caused by H. pylori infection.",
          remedies: [
            {
              name: "Pantoprazole",
              description: "Reduces stomach acid and promotes healing of the lining.",
              usage: "20–40 mg once daily before meals.",
              origin: "Common PPI used for gastritis and acid reflux.",
            },
            {
              name: "Antacids (e.g., Gelusil, Tums)",
              description: "Neutralizes existing stomach acid to provide quick relief.",
              usage: "2 tablets after meals or as needed.",
              origin: "Widely available OTC remedies for indigestion and acidity.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathic remedies address gastritis based on the nature of the pain, triggers, and emotional state of the person.",
          remedies: [
            {
              name: "Nux Vomica 30C",
              description: "For gastritis from overindulgence in food, alcohol, or stress.",
              usage: "3–5 pellets before or after meals, as directed.",
              origin: "Frequently used for digestive upset and irritability.",
            },
            {
              name: "Carbo Veg 30C",
              description: "For bloating, gas, and acidity with belching.",
              usage: "3–5 pellets 2–3 times daily.",
              origin: "Derived from vegetable charcoal; helps sluggish digestion.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional systems use dietary adjustments and herbs known to cool the stomach and ease digestive inflammation.",
          remedies: [
            {
              name: "Coconut Water",
              description: "Soothes the stomach and hydrates while reducing acidity.",
              usage: "Drink fresh coconut water 1–2 times daily.",
              origin: "Used traditionally across tropical cultures for digestion and hydration.",
            },
            {
              name: "Jeera Water (Cumin Water)",
              description: "Improves digestion and reduces stomach discomfort.",
              usage: "Boil 1 tsp cumin seeds in water, let cool, and drink after meals.",
              origin: "Ayurvedic digestive remedy used in Indian households.",
            },
          ],
        },
      },
      lifestyle: [
        "Eat small, frequent meals",
        "Avoid spicy, acidic, and fried foods",
        "Limit alcohol, tobacco, and NSAID use",
        "Manage stress through relaxation practices",
        "Stay hydrated with water and soothing fluids",
        "Chew food thoroughly and eat slowly",
      ],
      relatedProducts: [
        {
          name: "Herbal Antacid Syrup",
          price: 140,
          description: "Ayurvedic syrup blend to soothe acidity and heartburn.",
          image: "https://m.media-amazon.com/images/I/81g+8+RNa7L._SX425_.jpg",
        },
        {
          name: "Ginger Chews",
          price: 351
          description: "Natural digestive aid with soothing ginger extract.",
          image: "https://images-cdn.ubuy.co.in/668249fa39f438575302edfa-reed-39-s-all-natural-ginger-chews.jpg",
        },
        {
          name: "Jeera Water Concentrate",
          price: 225,
          description: "Concentrated cumin extract for quick digestion support.",
          image:
            "https://rukminim3.flixcart.com/image/850/1000/xif0q/syrup/4/j/e/200-1-jeera-ark-beneficial-for-weight-loss-chest-infection-original-imah9rkhyegdbtaj.jpeg?q=20&crop=false",
        },
      ],
    },
    "sleep-disorders": {
      name: "Sleep Disorders",
      description:
        "Sleeping disorders are conditions that affect the quality, timing, and amount of sleep, leading to daytime distress and impaired functioning. Common types include insomnia, sleep apnea, and restless legs syndrome.",
      symptoms: [
        "Difficulty falling or staying asleep",
        "Waking up too early",
        "Daytime fatigue or sleepiness",
        "Irritability or mood changes",
        "Lack of concentration",
        "Snoring or breathing issues during sleep (in some cases)",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda treats Nidranasha (insomnia) through balancing Vata and calming the nervous system using herbs, lifestyle adjustments, and oil therapies.",
          remedies: [
            {
              name: "Ashwagandha",
              description: "Reduces stress and promotes calmness to improve sleep quality.",
              usage: "Take 300–500 mg capsule or 1 tsp powder with warm milk before bed.",
              origin: "Used in Ayurveda as a Rasayana for vitality and stress relief.",
            },
            {
              name: "Brahmi",
              description: "Known to enhance brain function and reduce anxiety-induced sleep issues.",
              usage: "Take as capsule or tea in the evening.",
              origin: "A calming herb traditionally used to support cognitive health and sleep.",
            },
          ],
        },
        allopathy: {
          description:
            "Allopathic treatment includes sleep-inducing medications, cognitive behavioral therapy, and lifestyle recommendations to improve sleep hygiene.",
          remedies: [
            {
              name: "Melatonin",
              description: "A hormone supplement that regulates sleep-wake cycles.",
              usage: "0.5–5 mg 30 minutes before bedtime.",
              origin: "Synthetic version of the body’s natural sleep hormone.",
            },
            {
              name: "Zolpidem",
              description: "Short-term medication for treating insomnia.",
              usage: "5–10 mg at bedtime as prescribed.",
              origin: "Introduced in the 1990s as a non-benzodiazepine hypnotic drug.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathy tailors remedies based on sleep patterns and emotional states to gently restore natural sleep cycles.",
          remedies: [
            {
              name: "Coffea Cruda 30C",
              description: "Used for overactive thoughts and sleeplessness due to excitement.",
              usage: "3–5 pellets at bedtime.",
              origin: "Prepared from unroasted coffee beans.",
            },
            {
              name: "Nux Vomica 30C",
              description: "Helps with insomnia caused by stress, overwork, or stimulants.",
              usage: "3–5 pellets before bedtime.",
              origin: "Derived from the strychnine tree; common in digestive and stress-related conditions.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional approaches focus on natural sedatives, relaxation rituals, and dietary support to promote restful sleep.",
          remedies: [
            {
              name: "Warm Milk with Nutmeg",
              description: "Acts as a natural sedative and soothes the nervous system.",
              usage: "Mix a pinch of nutmeg in a cup of warm milk and drink before bed.",
              origin: "Ancient bedtime remedy in Indian households.",
            },
            {
              name: "Chamomile Tea",
              description: "Helps relax muscles and calm the mind before sleep.",
              usage: "Steep chamomile flowers in hot water and drink 30 minutes before bed.",
              origin: "Used for centuries in Western herbalism as a sleep aid.",
            },
          ],
        },
      },
      lifestyle: [
        "Maintain a consistent sleep schedule",
        "Avoid caffeine and heavy meals before bedtime",
        "Use calming nighttime routines (warm baths, soft music)",
        "Limit screen time before bed",
        "Create a dark, cool, and quiet sleep environment",
        "Engage in daily physical activity",
        "Practice mindfulness or meditation",
      ],
      relatedProducts: [
        {
          name: "Melatonin Gummies",
          price: 799,
          description: "Natural sleep support with melatonin and herbs.",
          image: "https://m.media-amazon.com/images/I/81Bl7+UToQL.jpg",
        },
        {
          name: "Chamomile Sleep Tea",
          price: 270,
          description: "Caffeine-free herbal blend to help induce sleep naturally.",
          image: "https://m.media-amazon.com/images/I/71MAh3y0fAL.jpg",
        },
        {
          name: "Weighted Blanket",
          price: 2050,
          description: "Helps reduce anxiety and improve sleep quality by providing gentle pressure.",
          image: "https://i.etsystatic.com/10582446/r/il/b591f2/2787209267/il_570xN.2787209267_qdtp.jpg",
        },
      ],
    },

    "stomach-ache": {
      name: "Stomach Ache",
      description:
        "Stomach ache refers to discomfort or pain in the abdominal area. It may result from indigestion, gas, infection, acidity, constipation, or underlying medical conditions.",
      symptoms: [
        "Cramping or dull pain in the abdomen",
        "Bloating or gas",
        "Nausea",
        "Loss of appetite",
        "Constipation or diarrhea (sometimes)",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda treats stomach ache based on the root cause — usually by correcting Agni (digestive fire) and balancing doshas, particularly Pitta and Vata.",
          remedies: [
            {
              name: "Hing (Asafoetida)",
              description: "Relieves gas and abdominal bloating by stimulating digestion.",
              usage: "Mix a pinch of hing in warm water and drink after meals.",
              origin: "A key digestive herb used in Indian kitchens and Ayurvedic formulations.",
            },
            {
              name: "Ajwain (Carom Seeds)",
              description: "Effective in relieving indigestion, acidity, and gas.",
              usage: "Chew 1 tsp with a pinch of salt or boil in water and sip slowly.",
              origin: "Widely used in Ayurvedic remedies for digestive issues.",
            },
          ],
        },
        allopathy: {
          description:
            "Allopathic treatment depends on the cause and may include antacids, antispasmodics, or antibiotics.",
          remedies: [
            {
              name: "Antacids (e.g., Gelusil, Tums)",
              description: "Neutralizes stomach acid and provide quick relief from acidity and heartburn.",
              usage: "Take 1-2 tablets after meals or as needed.",
              origin: "Common OTC remedy for stomach discomfort and acid-related pain.",
            },
            {
              name: "Dicyclomine",
              description: "An antispasmodic that relieves cramps and spasms in the gut.",
              usage: "Prescribed 10–20 mg up to 4 times daily before meals.",
              origin: "Used for irritable bowel and stomach cramping relief.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathic remedies are chosen based on the type of pain, its triggers, and associated symptoms.",
          remedies: [
            {
              name: "Nux Vomica 30C",
              description: "For stomach pain due to overeating, acidity, or alcohol.",
              usage: "3-5 pellets twice daily or after meals.",
              origin: "Derived from the seeds of the strychnine tree; classic remedy for digestive distress.",
            },
            {
              name: "Colocynthis 30C",
              description: "For cramping abdominal pain relieved by pressure or bending forward.",
              usage: "3-5 pellets every 2–4 hours during acute pain episodes.",
              origin: "Prepared from the bitter cucumber; used for colic-like pain.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies rely on herbs and spices with carminative and anti-spasmodic effects to ease stomach discomfort.",
          remedies: [
            {
              name: "Ginger Tea",
              description: "Soothes the stomach and helps reduce nausea and cramps.",
              usage: "Boil sliced ginger in water for 5 minutes, strain, and sip warm.",
              origin: "Used across cultures in folk medicine for digestive aid.",
            },
            {
              name: "Peppermint Oil",
              description: "Relieves bloating and stomach cramps.",
              usage: "Add 1-2 drops to warm water or take enteric-coated capsules as directed.",
              origin: "Traditional remedy in Western herbal medicine and TCM.",
            },
          ],
        },
      },
      lifestyle: [
        "Eat small, frequent meals",
        "Avoid spicy and fried foods",
        "Stay hydrated with warm fluids",
        "Practice mindful eating and chew thoroughly",
        "Avoid lying down immediately after eating",
        "Do light walking after meals",
      ],
      relatedProducts: [
        {
          name: "Herbal Digestive Tea",
          price: 315,
          description: "A blend of herbs to support digestion and reduce bloating.",
          image: "https://greateagleinc.com/cdn/shop/files/83836556._800x.jpg?v=1732562192",
        },
        {
          name: "Heating Pad for Abdomen",
          price: 1099,
          description: "Portable heating pad to soothe stomach cramps.",
          image: "https://static.toiimg.com/thumb/msid-70361416,width-1280,height-720,resizemode-4/70361416.jpg",
        },
        {
          name: "Ajwain Churna",
          price: 240,
          description: "Ayurvedic powder for gas, bloating, and stomach ache.",
          image: "https://shilpamonline.com/wp-content/uploads/2020/07/Ajwain-Churan.webp",
        },
      ],
    },
    "common-cold": {
      name: "CommonCold",
      description:
        "Common cold is a viral infection of the upper respiratory tract that affects the nose and throat. It usually resolves on its own but can cause discomfort through congestion, sneezing, and sore throat.",
      symptoms: [
        "Runny or stuffy nose",
        "Sneezing",
        "Sore throat",
        "Mild headache or body ache",
        "Cough",
        "Low-grade fever (sometimes)",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda treats cold (Pratishyaya) by balancing Kapha and enhancing Agni (digestive fire), using warming and decongestant herbs.",
          remedies: [
            {
              name: "Trikatu Churna",
              description: "A blend of ginger, black pepper, and long pepper to reduce Kapha and clear mucus.",
              usage: "Take 1/2 tsp with honey or warm water twice daily after meals.",
              origin: "Classical Ayurvedic formula for cold and respiratory issues.",
            },
            {
              name: "Tulsi Kadha",
              description: "Soothes throat and helps expel phlegm from the respiratory tract.",
              usage: "Boil tulsi leaves with ginger, black pepper, and cloves in water. Drink 2–3 times a day.",
              origin: "Used traditionally in Indian households to treat colds.",
            },
          ],
        },
        allopathy: {
          description:
            "Treatment is symptomatic using decongestants, antihistamines, or pain relievers. Antibiotics are not used unless there’s a bacterial infection.",
          remedies: [
            {
              name: "Cetirizine",
              description: "Antihistamine that relieves runny nose and sneezing.",
              usage: "5–10 mg once daily, preferably at night.",
              origin: "Common OTC medication for allergic and cold symptoms.",
            },
            {
              name: "Paracetamol",
              description: "Helps with fever and body aches associated with cold.",
              usage: "500–1000 mg every 4–6 hours as needed.",
              origin: "Standard remedy in cold-and-flu formulations.",
            },
          ],
        },
        homeopathy: {
          description:
            "Remedies are selected based on specific cold symptoms such as nasal discharge type, body reaction, and time of day symptoms worsen.",
          remedies: [
            {
              name: "Allium Cepa 30C",
              description: "For runny nose with burning discharge and watery eyes.",
              usage: "3–5 pellets every 2–4 hours during cold onset.",
              origin: "Prepared from red onion, known for strong mucosal effects.",
            },
            {
              name: "Arsenicum Album 30C",
              description: "Effective for chills, sneezing, and restlessness during cold.",
              usage: "3–5 pellets 2–3 times daily.",
              origin: "Derived from arsenic; used for flu-like and viral symptoms.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies focus on warming the body, breaking up mucus, and boosting immunity through herbal teas and steam.",
          remedies: [
            {
              name: "Steam Inhalation",
              description: "Clears nasal passages and relieves congestion.",
              usage: "Inhale steam from hot water with eucalyptus or mint oil for 5–10 mins.",
              origin: "Used worldwide as a natural decongestant.",
            },
            {
              name: "Honey with Ginger",
              description: "Soothes throat and supports immunity.",
              usage: "Mix 1 tsp ginger juice with 1 tsp honey. Take twice daily.",
              origin: "Common folk remedy in India and other Asian cultures.",
            },
          ],
        },
      },
      lifestyle: [
        "Stay warm and avoid cold exposure",
        "Drink warm fluids like herbal teas and soups",
        "Rest adequately to boost recovery",
        "Use a humidifier to ease breathing",
        "Avoid dairy and cold drinks",
        "Practice nasal irrigation if needed",
      ],
      relatedProducts: [
        {
          name: "Herbal Cold Relief Tea",
          price: 70,
          description: "Natural blend of tulsi, ginger, and black pepper for cold relief.",
          image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/tra/tra00016/g/75.jpg",
        },
        {
          name: "Steam Vaporizer",
          price: 1799,
          description: "Easy-to-use device for steam inhalation to relieve nasal congestion.",
          image: "https://d29azk3rh443yy.cloudfront.net/static/Products/steam-inhaler-1.webp",
        },
        {
          name: "Trikatu Capsules",
          price: 180,
          description: "Ayurvedic formulation to balance Kapha and relieve cold symptoms.",
          image: "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/him/him40501/g/54.jpg",
        },
      ],
    },
    arthritis: {
      name: "Arthritis",
      description:
        "Arthritis is inflammation of one or more joints, causing pain and stiffness that can worsen with age. The most common types are osteoarthritis and rheumatoid arthritis. Osteoarthritis causes cartilage breakdown, while rheumatoid arthritis is an autoimmune disorder that first targets the joint lining.",
      symptoms: [
        "Joint pain",
        "Stiffness",
        "Swelling",
        "Redness",
        "Decreased range of motion",
        "Morning stiffness",
        "Fatigue and general weakness",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurvedic treatment for arthritis (known as 'Sandhivata') focuses on reducing Vata dosha, improving circulation, and reducing inflammation through herbs, diet, and therapies.",
          remedies: [
            {
              name: "Ashwagandha",
              description:
                "Powerful adaptogenic herb that reduces inflammation and pain while boosting overall immunity.",
              usage: "Take 300-500mg capsule twice daily or as directed by an Ayurvedic practitioner.",
              origin:
                "Used in Ayurvedic medicine for over 3,000 years for its anti-inflammatory and rejuvenating properties.",
            },
            {
              name: "Boswellia (Shallaki)",
              description: "Natural anti-inflammatory that helps reduce joint pain and improve mobility.",
              usage: "Take 300-400mg three times daily of standardized extract.",
              origin:
                "Derived from the gum resin of the Boswellia serrata tree, used in Ayurvedic medicine for centuries.",
            },
          ],
        },
        allopathy: {
          description:
            "Allopathic treatment for arthritis focuses on reducing pain, improving function, and preventing further joint damage through medications and therapies.",
          remedies: [
            {
              name: "NSAIDs (Nonsteroidal Anti-inflammatory Drugs)",
              description: "Reduces pain and inflammation in the joints.",
              usage: "Taken orally as prescribed, typically ibuprofen (400-800mg) or naproxen (220-500mg) twice daily.",
              origin:
                "First developed in the 1960s with ibuprofen, followed by various other NSAIDs for pain management.",
            },
            {
              name: "DMARDs (Disease-Modifying Antirheumatic Drugs)",
              description: "Slows or stops the immune system from attacking the joints in rheumatoid arthritis.",
              usage: "Taken as prescribed by a rheumatologist, often weekly doses for medications like methotrexate.",
              origin: "Developed in the mid-20th century specifically for autoimmune forms of arthritis.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathic treatment for arthritis is individualized based on specific symptoms and constitution, focusing on stimulating the body's natural healing response.",
          remedies: [
            {
              name: "Rhus Toxicodendron 30C",
              description:
                "Particularly effective for arthritis pain that improves with movement and worsens with rest.",
              usage: "Take 3-5 pellets three times daily until improvement is noted.",
              origin:
                "Prepared from poison ivy plant, used in homeopathy since the early 19th century for joint conditions.",
            },
            {
              name: "Bryonia Alba 30C",
              description: "Helpful for joint pain that worsens with movement and is accompanied by stiffness.",
              usage: "Take 3-5 pellets three times daily during acute pain episodes.",
              origin: "Derived from the wild hops plant, a traditional homeopathic remedy for inflammatory conditions.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for arthritis include natural ingredients and practices passed down through generations that help reduce inflammation and manage joint pain.",
          remedies: [
            {
              name: "Ginger",
              description: "Contains anti-inflammatory compounds that help reduce joint pain and inflammation.",
              usage: "Consume fresh ginger tea (1-2 cups daily) or take 500-1000mg of ginger extract daily.",
              origin: "Used in traditional medicine systems worldwide for thousands of years for joint pain.",
            },
            {
              name: "Epsom Salt Baths",
              description:
                "Magnesium sulfate absorbed through the skin helps reduce inflammation and ease muscle tension.",
              usage: "Add 2 cups of Epsom salt to warm bathwater and soak for 20 minutes, 2-3 times weekly.",
              origin:
                "Traditional remedy used since the discovery of mineral-rich waters in Epsom, England in the 1600s.",
            },
          ],
        },
      },
      lifestyle: [
        "Maintain a healthy weight to reduce stress on weight-bearing joints",
        "Engage in low-impact exercises like swimming or cycling",
        "Apply hot and cold therapies to affected joints",
        "Use assistive devices to protect joints during daily activities",
        "Practice gentle stretching and range-of-motion exercises",
        "Follow an anti-inflammatory diet rich in omega-3 fatty acids",
        "Get adequate rest and avoid overexertion of affected joints",
      ],
      relatedProducts: [
        {
          name: "Joint Support Supplement",
          price: 689,
          description: "Comprehensive formula with glucosamine, chondroitin, and MSM for joint health.",
          image: "/placeholder.svg?height=64&width=64&text=Joint+Supplement",
        },
        {
          name: "Heated Compression Gloves",
          price: 1329,
          description: "Provides warmth and compression to relieve arthritis pain in hands and improve circulation.",
          image: "/placeholder.svg?height=64&width=64&text=Compression+Gloves",
        },
        {
          name: "Topical Pain Relief Cream",
          price: 125,
          description: "Fast-acting cream with natural ingredients to soothe arthritis pain and reduce inflammation.",
          image: "/placeholder.svg?height=64&width=64&text=Pain+Relief+Cream",
        },
      ],
    },
    "head-ache": {
      name: "Headache",
      description:
        "Headache is a common condition characterized by pain or discomfort in the head or upper neck. It can be caused by stress, dehydration, tension, migraines, sinus congestion, or underlying health issues.",
      symptoms: [
        "Dull, sharp, or throbbing pain in the head",
        "Pressure around temples or forehead",
        "Nausea (especially in migraines)",
        "Sensitivity to light or sound",
        "Tension in neck and shoulders",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda treats headache based on doshic imbalance — Vata, Pitta, or Kapha — and focuses on lifestyle, diet, and herbal remedies to restore harmony.",
          remedies: [
            {
              name: "Brahmi",
              description: "Calms the mind and nervous system, used for stress and tension headaches.",
              usage: "Take 1 tsp Brahmi powder with warm milk or as capsules daily.",
              origin: "A brain tonic used in classical Ayurvedic medicine for mental clarity.",
            },
            {
              name: "Nasal Oil (Anu Taila)",
              description: "Used in Nasya therapy to relieve sinus-related or Vata-Pitta headaches.",
              usage: "Instill 2 drops in each nostril in the morning after bath.",
              origin: "Classical Ayurvedic formulation with herbs like cinnamon, cardamom, and sandalwood.",
            },
          ],
        },
        allopathy: {
          description:
            "Allopathic treatment depends on the type of headache (tension, migraine, sinus, etc.) and often includes analgesics and preventive medications.",
          remedies: [
            {
              name: "Paracetamol",
              description: "Common painkiller for mild to moderate tension or stress headaches.",
              usage: "500mg–1g every 4-6 hours as needed (max 4g/day).",
              origin: "Widely used OTC drug since the mid-20th century.",
            },
            {
              name: "Sumatriptan",
              description: "Specifically targets migraines by narrowing blood vessels around the brain.",
              usage: "50–100mg at the onset of migraine, as prescribed.",
              origin: "Triptan class drug introduced in the 1990s for migraine relief.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathy selects remedies based on the nature, location, and triggers of the headache, including stress, light sensitivity, or sinus pressure.",
          remedies: [
            {
              name: "Belladonna 30C",
              description: "For sudden, throbbing headaches with sensitivity to light and noise.",
              usage: "3–5 pellets every 2–4 hours during headache episodes.",
              origin: "Derived from the deadly nightshade plant; used in acute, intense headaches.",
            },
            {
              name: "Gelsemium 30C",
              description: "Effective for dull, heavy, and fatigue-induced headaches.",
              usage: "3–5 pellets 2–3 times a day as needed.",
              origin: "Prepared from the yellow jasmine plant, used for nervous headaches.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional approaches for headache relief include cooling or warming therapies, hydration, and natural oils for relaxation.",
          remedies: [
            {
              name: "Peppermint Oil",
              description: "Relieves tension headache by relaxing muscles and improving circulation.",
              usage: "Dilute with carrier oil and massage on temples and forehead.",
              origin: "Popular in European and Middle Eastern traditional remedies.",
            },
            {
              name: "Cold Compress",
              description: "Reduces inflammation and provides relief from throbbing pain.",
              usage: "Apply a cold pack or ice-wrapped cloth to the forehead for 10–15 minutes.",
              origin: "Simple folk remedy used globally for migraines and tension headaches.",
            },
          ],
        },
      },
      lifestyle: [
        "Stay hydrated throughout the day",
        "Get regular sleep (7–8 hours)",
        "Avoid skipping meals",
        "Limit screen time and take eye breaks",
        "Manage stress through yoga or meditation",
        "Limit caffeine and alcohol intake",
        "Exercise regularly to improve circulation",
      ],
      relatedProducts: [
        {
          name: "Herbal Headache Roll-On",
          price: 390,
          description: "Portable essential oil blend for quick headache relief.",
          image: "https://m.media-amazon.com/images/I/71jwFkFsjgL.jpg",
        },
        {
          name: "Eye Mask with Gel Pad",
          price: 169,
          description: "Reusable cold/hot compress for migraine and sinus relief.",
          image: "https://m.media-amazon.com/images/I/613UnclQcRL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          name: "Brahmi Capsules",
          price: 142,
          description: "Ayurvedic brain tonic to relieve stress and tension-related headaches.",
          image: "https://cipzer.in/cdn/shop/files/1_4_a97d2f57-3747-435f-9743-e4fa0905e36e.jpg?v=1742295131&width=600",
        },
      ],
    },
    diarrhea: {
      name: "Diarrhea",
      description:
        "Diarrhea is a condition characterized by frequent, loose, or watery stools, often accompanied by abdominal discomfort or cramps. It can be acute or chronic and may be caused by infections, food intolerances, stress, or underlying diseases. The condition can lead to dehydration if not managed properly, especially in severe cases.",
      symptoms: [
        "Frequent loose or watery stools",
        "Abdominal cramps or pain",
        "Nausea or vomiting",
        "Fever (in some cases)",
        "Dehydration signs like dry mouth, excessive thirst, reduced urine output, and dizziness",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurvedic treatment for diarrhea (Atisara) involves pacifying the aggravated doshas, primarily Pitta or Vata, using diet, herbal remedies, and lifestyle adjustments.",
          remedies: [
            {
              name: "Bael (Bilva)",
              description:
                "Bael fruit pulp is effective in treating diarrhea due to its astringent and digestive properties.",
              usage: "Consume fresh bael pulp or bael sherbet twice daily.",
              origin: "Native to India, extensively used in Ayurveda for gastrointestinal disorders.",
            },
            {
              name: "Nutmeg (Jaiphal)",
              description: "Nutmeg helps in reducing intestinal spasms and controlling loose motions.",
              usage: "Mix a pinch of nutmeg powder in warm water or honey and take once or twice a day.",
              origin: "Used in Ayurveda and traditional medicine for its calming and anti-diarrheal effects.",
            },
          ],
        },
        allopathy: {
          description:
            "Allopathic treatment for diarrhea focuses on rehydration, treating the underlying cause, and relieving symptoms using medication.",
          remedies: [
            {
              name: "Oral Rehydration Salts (ORS)",
              description: "Replenishes fluids and electrolytes lost during diarrhea, preventing dehydration.",
              usage:
                "Mix the contents of one ORS sachet in 1 liter of clean water and drink in small sips throughout the day.",
              origin: "Developed by the WHO and widely used globally to combat dehydration.",
            },
            {
              name: "Loperamide",
              description: "An anti-diarrheal medication that slows down gut movement and helps firm up stools.",
              usage:
                "Typically 2 mg after the first loose stool, followed by 1 mg after each subsequent stool (max 8 mg/day).",
              origin: "Synthesized in the 1970s and used as a first-line anti-diarrheal medication.",
            },
          ],
        },
        homeopathy: {
          description:
            "Homeopathic treatment for diarrhea is individualized and based on the nature of symptoms, causes, and patient constitution.",
          remedies: [
            {
              name: "Arsenicum Album 30C",
              description:
                "Used for diarrhea with burning pain, restlessness, and symptoms worsened by cold drinks or food.",
              usage: "Take 3-5 pellets 2-3 times daily or as prescribed by a homeopath.",
              origin: "Prepared from arsenic trioxide; widely used in homeopathy for digestive issues.",
            },
            {
              name: "Podophyllum 30C",
              description: "Helpful for explosive, watery diarrhea, especially in the morning or after eating.",
              usage: "Take 3-5 pellets every 4 hours during acute episodes.",
              origin: "Derived from the Mayapple plant, native to North America.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for diarrhea focus on natural ingredients with antimicrobial and gut-soothing effects to restore digestive balance.",
          remedies: [
            {
              name: "Ginger Tea",
              description: "Soothes the stomach and reduces inflammation in the gut.",
              usage: "Boil fresh ginger in water and sip slowly 2–3 times daily.",
              origin: "Widely used in traditional Chinese, Indian, and folk medicine.",
            },
            {
              name: "Pomegranate Peel Decoction",
              description: "Has strong astringent and anti-diarrheal properties, helping to firm up stools.",
              usage: "Boil dried pomegranate peel in water, strain, and drink twice a day.",
              origin: "Traditional remedy in Middle Eastern and South Asian households.",
            },
          ],
        },
      },
      lifestyle: [
        "Stay hydrated with ORS, coconut water, or clear fluids",
        "Avoid spicy, oily, and dairy-rich foods",
        "Eat bland foods like rice, bananas, toast, and applesauce (BRAT diet)",
        "Practice good hygiene and wash hands thoroughly",
        "Avoid raw or undercooked foods during episodes",
        "Rest adequately to support the body’s healing process",
      ],
      relatedProducts: [
        {
          name: "ORS Rehydration Powder",
          price: 21,
          description: "Electrolyte replacement solution to prevent and treat dehydration.",
          image:
            "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/48d6acc9768a451b91d741618c64a5d8.jpg",
        },
        {
          name: "Herbal Digestive Tonic",
          price: 316,
          description: "Ayurvedic formulation to support digestion and relieve diarrhea.",
          image: "https://m.media-amazon.com/images/I/61rn42UByDL.jpg",
        },
        {
          name: "Probiotic Supplement",
          price: 352,
          description: "Restores gut flora and supports a healthy digestive system.",
          image: "https://m.media-amazon.com/images/I/819fzkZgMtL.jpg",
        },
      ],
    },
    "body-pains": {
      name: "BodyPains",
      description:
        "Body pain refers to general discomfort, soreness, or aching in muscles and joints. It can result from overexertion, viral infections, inflammation, or chronic conditions like fibromyalgia or arthritis.",
      symptoms: [
        "Muscle soreness or stiffness",
        "Fatigue",
        "Joint pain",
        "Difficulty in movement",
        "Fever (in case of infection)",
      ],
      treatments: {
        ayurveda: {
          description:
            "Ayurveda treats body pain by balancing aggravated Vata dosha and enhancing circulation using herbal oils and internal medicines.",
          remedies: [
            {
              name: "Ashwagandha",
              description: "Reduces inflammation, strengthens muscles, and relieves stress-related pain.",
              usage: "Consume 1 tsp of Ashwagandha powder with warm milk at bedtime.",
              origin: "A powerful adaptogenic herb used for centuries in Ayurveda.",
            },
            {
              name: "Mahanarayan Oil",
              description: "Used externally to relieve joint and muscle pain.",
              usage: "Apply and massage gently on affected areas twice daily.",
              origin: "Ayurvedic classical formulation with herbs like Ashwagandha, Dashmool, and Bala.",
            },
          ],
        },
        allopathy: {
          description: "Allopathic treatment includes pain relievers, muscle relaxants, and anti-inflammatory drugs.",
          remedies: [
            {
              name: "Paracetamol",
              description: "Reduces mild to moderate pain and fever.",
              usage: "500mg to 1g every 4-6 hours, not exceeding 4g/day.",
              origin: "Synthesized in the 19th century; one of the most widely used analgesics.",
            },
            {
              name: "Ibuprofen",
              description: "Non-steroidal anti-inflammatory drug (NSAID) to reduce pain and swelling.",
              usage: "200-400mg every 6-8 hours after meals.",
              origin: "Introduced in the 1960s, widely used for pain management.",
            },
          ],
        },
        homeopathy: {
          description: "Homeopathy treats body pain based on the location, sensation, and associated conditions.",
          remedies: [
            {
              name: "Rhus Toxicodendron 30C",
              description: "Effective for stiffness, soreness, and pain relieved by motion.",
              usage: "3-5 pellets every 4-6 hours during pain episodes.",
              origin: "Prepared from poison ivy plant; commonly used for joint and muscle pains.",
            },
            {
              name: "Bryonia Alba 30C",
              description: "For pain aggravated by motion and relieved by rest.",
              usage: "3-5 pellets twice or thrice daily.",
              origin: "Made from wild hops root; indicated for inflammation and muscular pain.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies involve warm compresses, herbal teas, and rest to reduce pain and inflammation.",
          remedies: [
            {
              name: "Turmeric Milk",
              description: "Contains curcumin, which has anti-inflammatory and pain-relieving effects.",
              usage: "Mix 1/2 tsp turmeric in warm milk and drink before bed.",
              origin: "Used in Indian households for pain and injury for centuries.",
            },
            {
              name: "Epsom Salt Bath",
              description: "Soothes sore muscles and reduces tension.",
              usage: "Add 1-2 cups to a warm bath and soak for 15-20 minutes.",
              origin: "Traditional Western remedy for muscle relaxation.",
            },
          ],
        },
      },
      lifestyle: [
        "Stretch daily and maintain good posture",
        "Stay hydrated",
        "Avoid overexertion",
        "Sleep 7–8 hours regularly",
        "Apply warm compresses or take hot baths for relief",
        "Include anti-inflammatory foods like ginger and turmeric",
      ],
      relatedProducts: [
        {
          name: "Pain Relief Balm",
          price: 88,
          description: "Topical balm for quick relief from muscle and joint pain.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdoS3yVTe5HlbUdqD9qKBRRN5q2bdNkmPdA&s",
        },
        {
          name: "Epsom Salt",
          price: 289,
          description: "Magnesium-rich salt for muscle soak therapy.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdEWWBepz2B4UdnBYV3Ap61A22orQNudDNBA&s",
        },
        {
          name: "Heating Pad",
          price: 1099,
          description: "Reusable heating pad for back, neck, and joint pain.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN2w0zN1eFiUaM2yNgAF6hgfrxTfnsHIrCA&s",
        },
      ],
    },
  }

  // Get the condition data based on the slug
  const condition = conditions[params.condition] || conditions["diabetes"]

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/health" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Health Solutions
        </Link>
        <h1 className="text-3xl font-bold tracking-tight mb-2">{condition.name}</h1>
        <p className="text-muted-foreground max-w-3xl">{condition.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Common Symptoms</CardTitle>
              <CardDescription>
                If you experience these symptoms, consult with a healthcare professional for proper diagnosis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {condition.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Treatment Options</h2>
            <p className="text-muted-foreground mb-6">
              We offer multiple approaches to managing {condition.name.toLowerCase()}. Select a treatment system to
              learn more.
            </p>

            <Tabs defaultValue="ayurveda" className="w-full">
              <TabsList className="grid w-full grid-cols-4 gap-1">
                <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
                <TabsTrigger value="allopathy">Allopathy</TabsTrigger>
                <TabsTrigger value="homeopathy">Homeopathy</TabsTrigger>
                <TabsTrigger value="traditional">Traditional</TabsTrigger>
              </TabsList>
              <TabsContent value="ayurveda" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Ayurvedic Approach</CardTitle>
                    <CardDescription>{condition.treatments.ayurveda.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {condition.treatments.ayurveda.remedies.map((remedy, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">{remedy.name}</h3>
                          <p className="text-sm mb-2">{remedy.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">How to Use</h4>
                              <p className="text-sm">{remedy.usage}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Origin</h4>
                              <p className="text-sm">{remedy.origin}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="allopathy" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Allopathic Approach</CardTitle>
                    <CardDescription>{condition.treatments.allopathy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {condition.treatments.allopathy.remedies.map((remedy, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">{remedy.name}</h3>
                          <p className="text-sm mb-2">{remedy.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">How to Use</h4>
                              <p className="text-sm">{remedy.usage}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Origin</h4>
                              <p className="text-sm">{remedy.origin}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="homeopathy" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Homeopathic Approach</CardTitle>
                    <CardDescription>{condition.treatments.homeopathy.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {condition.treatments.homeopathy.remedies.map((remedy, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">{remedy.name}</h3>
                          <p className="text-sm mb-2">{remedy.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">How to Use</h4>
                              <p className="text-sm">{remedy.usage}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Origin</h4>
                              <p className="text-sm">{remedy.origin}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="traditional" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Traditional Remedies</CardTitle>
                    <CardDescription>
                      {condition.treatments.traditional?.description ||
                        "Traditional remedies focus on natural ingredients and practices passed down through generations."}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {condition.treatments.traditional.remedies.map((remedy, index) => (
                        <div key={index} className="p-4 border rounded-lg">
                          <h3 className="font-semibold text-lg mb-2">{remedy.name}</h3>
                          <p className="text-sm mb-2">{remedy.description}</p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">How to Use</h4>
                              <p className="text-sm">{remedy.usage}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground mb-1">Origin</h4>
                              <p className="text-sm">{remedy.origin}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Lifestyle Recommendations</CardTitle>
              <CardDescription>
                In addition to medical treatments, these lifestyle changes can help manage{" "}
                {condition.name.toLowerCase()}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {condition.lifestyle.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="sticky top-20">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Consult a Specialist</CardTitle>
                <CardDescription>Get personalized advice from our healthcare professionals.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium">Virtual Consultation</h3>
                      <p className="text-sm text-muted-foreground">30-minute video call</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Starting from</span>
                    <span className="font-semibold">₹300</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/consult">
                  <Button className="w-full">Book Appointment</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Products</CardTitle>
                <CardDescription>Products that may help manage {condition.name.toLowerCase()}.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {condition.relatedProducts.map((product, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="h-16 w-16 rounded-md bg-muted flex items-center justify-center">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={64}
                          height={64}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="font-semibold">₹{product.price}</span>
                          <Button variant="outline" size="sm">
                            <ShoppingCart className="h-3 w-3 mr-1" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    View All Products
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

