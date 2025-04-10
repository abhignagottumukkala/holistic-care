"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Calendar } from "lucide-react"

export default function HairConditionPage({ params }: { params: { condition: string } }) {
  // In a real application, you would fetch this data from an API or database
  // based on the condition slug in params.condition
  const conditions = {
    "hair-loss": {
      name: "Hair Loss",
      description:
        "Hair loss refers to a decrease in hair density on the scalp or body. It can result from nutritional deficiencies, stress, hormonal imbalances, medical treatments, autoimmune disorders, or genetics. It can be sudden or gradual, affecting different age groups and both genders.",
      symptoms: [
        "Noticeable thinning hair over time",
        "Bald patches or receding hairline",
        "Increased hair shedding while brushing or showering",
        "Itchy or irritated scalp",
        "Scalp visible through thinning hair",
        "Hair breaks easily or lacks volume",
        "Loss of eyebrow, eyelash, or body hair in some cases",
        "Slow hair regrowth after shedding",
      ],
      treatments: {
        medicine: {
          description:
            "Medical treatments for hair loss include topical, oral, and injectable medications designed to reduce inflammation, block hormonal causes, or nourish follicles to encourage regrowth.",
          remedies: [
            {
              name: "Dutasteride",
              description:
                "A stronger alternative to Finasteride, Dutasteride inhibits more enzymes responsible for converting testosterone to DHT, which contributes to hair loss.",
              usage: "Taken orally, typically once daily, under medical supervision.",
              origin:
                "Initially developed for benign prostatic hyperplasia; later found effective in androgenetic alopecia treatment.",
            },
            {
              name: "Platelet-Rich Plasma (PRP) Therapy",
              description:
                "Involves injecting concentrated platelets from your own blood into the scalp to stimulate hair follicles and encourage regrowth.",
              usage: "Administered by a dermatologist in multiple sessions over several months.",
              origin:
                "Used in regenerative medicine; adapted for hair restoration due to its growth factor properties.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional and home remedies use herbal oils, extracts, and lifestyle practices that have been used for centuries to enhance scalp health and support hair strength.",
          remedies: [
            {
              name: "Onion Juice",
              description:
                "Rich in sulfur, onion juice boosts collagen production and improves blood flow to the hair follicles.",
              usage:
                "Apply fresh onion juice to the scalp, leave on for 15–20 minutes, then rinse off with mild shampoo.",
              origin: "Used in Ayurvedic and folk remedies across Asia for natural hair strengthening.",
            },
            {
              name: "Fenugreek Seeds",
              description:
                "Packed with proteins and nicotinic acid, fenugreek strengthens hair roots and treats dandruff-related hair fall.",
              usage: "Soak seeds overnight, grind into a paste, apply to the scalp for 30 minutes, then rinse.",
              origin: "An Ayurvedic staple found in Indian kitchens and wellness traditions.",
            },
          ],
        },
      },
      lifestyle: [
        "Increase protein and iron intake through eggs, spinach, and lentils",
        "Avoid excessive heat styling and chemical treatments",
        "Use gentle hair care products free of parabens and sulfates",
        "Get regular exercise to improve blood circulation to the scalp",
        "Avoid tight hairstyles like ponytails or braids",
        "Reduce stress with yoga, meditation, or journaling",
        "Get enough sleep (7–8 hours per night)",
        "Protect hair from direct sun with hats or scarves",
      ],
      relatedProducts: [
        {
          name: "Dutasteride",
          price: 853,
          description:
            "A stronger alternative to Finasteride, Dutasteride inhibits more enzymes responsible for converting testosterone to DHT, which contributes to hair loss.",
          image: "https://tse4.mm.bing.net/th?id=OIP.C3UYVOEU7LLO19tWl7TU5wHaIi&pid=Api&P=0&h=180",
        },
        {
          name: "Fenugreek Hair Mask",
          price: 199,
          description: "A protein-rich mask that strengthens hair roots and improves scalp condition.",
          image: "https://tse1.mm.bing.net/th?id=OIP.fx6XRwDJKMSN2P6mmZilVwHaFE&pid=Api&P=0&h=180",
        },
        {
          name: "Onion Juice",
          price: 230,
          description:
            "Rich in sulfur, onion juice boosts collagen production and improves blood flow to the hair follicles.",
          image: "https://tse2.mm.bing.net/th?id=OIP.y9jFSorI855VEshosSVN2AHaFA&pid=Api&P=0&h=180",
        },
      ],
    },
    "scalp-psoriasis": {
      name: "Scalp Psoriasis",
      description:
        "Scalp psoriasis is a chronic autoimmune condition that results in the rapid buildup of skin cells on the scalp. This leads to scaling, inflammation, itching, and sometimes painful sores. It can range from mild scaling to severe crusted plaques that cover large areas of the scalp.",
      symptoms: [
        "Red patches on the scalp covered with silvery-white scales",
        "Itchy, dry scalp",
        "Burning or soreness in the affected areas",
        "Flaking that resembles dandruff",
        "Temporary hair loss due to scratching or treatment irritation",
        "Cracked skin that may bleed",
        "Thickened or crusted plaques on the scalp",
        "Scalp tenderness and sensitivity",
      ],
      treatments: {
        medicine: {
          description:
            "Medical treatments for scalp psoriasis aim to reduce inflammation, slow skin cell growth, and remove scales through topical applications, shampoos, and systemic medications.",
          remedies: [
            {
              name: "Clobetasol Propionate Shampoo",
              description:
                "A potent corticosteroid that reduces inflammation and itching while helping to remove scaling on the scalp.",
              usage:
                "Apply to wet scalp, lather, and leave on for 15 minutes before rinsing. Use as directed by a doctor.",
              origin:
                "Formulated as a topical steroid treatment commonly prescribed for inflammatory scalp conditions.",
            },
            {
              name: "Coal Tar Shampoo",
              description: "Slows down excessive skin cell production and reduces inflammation, itching, and scaling.",
              usage: "Massage into scalp and leave for several minutes before rinsing. Use 2–3 times per week.",
              origin:
                "Derived from coal processing, coal tar has been used for over a century in dermatology to manage psoriasis and eczema.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for scalp psoriasis include herbal treatments and natural oils that help soothe the scalp, reduce inflammation, and moisturize dry patches.",
          remedies: [
            {
              name: "Neem Oil",
              description:
                "Antibacterial and anti-inflammatory oil that helps relieve itching and reduce flaking on the scalp.",
              usage: "Apply directly to the scalp and leave overnight or for a few hours before washing off.",
              origin:
                "Used in Ayurveda for centuries for its healing and soothing properties for skin and scalp issues.",
            },
            {
              name: "Aloe Vera Gel",
              description: "Soothes inflammation and helps moisturize the scalp while reducing redness and irritation.",
              usage: "Apply fresh aloe vera gel to affected areas of the scalp. Leave for 30 minutes and rinse.",
              origin:
                "Aloe vera has long been used in traditional Indian and Middle Eastern medicine to treat various skin conditions.",
            },
          ],
        },
      },
      lifestyle: [
        "Avoid scratching the scalp to prevent irritation and hair loss",
        "Use gentle, medicated shampoos regularly",
        "Moisturize the scalp with oils or emollients",
        "Manage stress through yoga, meditation, or exercise",
        "Avoid hair products with alcohol or harsh chemicals",
        "Eat an anti-inflammatory diet rich in omega-3 and antioxidants",
        "Get adequate sleep to support immune balance",
        "Limit sun exposure to short durations for natural vitamin D",
      ],
      relatedProducts: [
        {
          name: "Coal Tar Medicated Shampoo",
          price: 269,
          description: "Therapeutic shampoo that relieves itching, scaling, and inflammation of the scalp.",
          image: "https://tse2.mm.bing.net/th?id=OIP.dk37pcq3neraVuetZfv26gHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Clobetasol Propionate Shampoo",
          price: 347,
          description:
            "A potent corticosteroid that reduces inflammation and itching while helping to remove scaling on the scalp.",
          image: "https://tse2.mm.bing.net/th?id=OIP.0lrcu-Wwndk6mFBrNcL4BgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Neem Oil",
          price: 182,
          description:
            "Antibacterial and anti-inflammatory oil that helps relieve itching and reduce flaking on the scalp.",
          image: "https://tse3.mm.bing.net/th?id=OIP.pIO4NYA09m8X8SMJ62L7xQHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "oily-scalp": {
      name: "Oily Scalp",
      description:
        "An oily scalp occurs when the sebaceous glands produce excess sebum, leading to greasy hair, scalp buildup, and sometimes clogged hair follicles. It can result from hormonal imbalances, stress, poor hygiene, or the overuse of hair products. If untreated, it may contribute to dandruff or hair loss.",
      symptoms: [
        "Greasy hair shortly after washing",
        "Scalp feels sticky or heavy",
        "Flat, lifeless hair",
        "Itchiness or irritation",
        "Scalp odor or buildup",
        "Hair clumping together",
        "Frequent need to shampoo",
        "Possible acne or breakouts near hairline",
      ],
      treatments: {
        medicine: {
          description:
            "Treatment for oily scalp includes medicated shampoos, topical treatments, and scalp balancing formulas that control excess oil without drying out the scalp.",
          remedies: [
            {
              name: "Salicylic Acid Shampoo",
              description: "Helps exfoliate the scalp, remove excess oil, and prevent pore clogging.",
              usage: "Apply to wet hair, lather, and massage into the scalp. Leave for 3–5 minutes before rinsing.",
              origin:
                "Derived from willow bark, salicylic acid has been used in dermatology to treat oily skin and scalp conditions.",
            },
            {
              name: "Zinc Pyrithione Shampoo",
              description:
                "Antimicrobial and antifungal agent that helps reduce oiliness and dandruff caused by oily scalp.",
              usage: "Use 2–3 times per week on the scalp. Lather and leave for a few minutes before rinsing.",
              origin:
                "Commonly found in dandruff and scalp care products, zinc pyrithione was developed for its ability to regulate oil and reduce scalp inflammation.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies focus on natural ingredients that help balance oil production, cleanse the scalp, and improve overall scalp health.",
          remedies: [
            {
              name: "Lemon Juice Rinse",
              description: "Naturally astringent and rich in vitamin C, lemon helps reduce oil and refresh the scalp.",
              usage: "Mix 2 tablespoons of lemon juice in a cup of water and rinse through the scalp after shampooing.",
              origin: "Used in traditional Indian and Mediterranean remedies to cleanse and purify the scalp.",
            },
            {
              name: "Amla (Indian Gooseberry)",
              description: "Regulates oil production and strengthens hair follicles with its high vitamin C content.",
              usage: "Apply Amla powder paste or oil to the scalp weekly. Leave for 30 minutes before rinsing.",
              origin: "A revered herb in Ayurveda, Amla has been used for centuries for oily scalp and hair health.",
            },
          ],
        },
      },
      lifestyle: [
        "Avoid washing hair with hot water; use lukewarm or cool water instead",
        "Use lightweight, sulfate-free shampoos regularly",
        "Avoid heavy conditioners or applying them directly on the scalp",
        "Wash hair 2–3 times a week or as needed to control oil buildup",
        "Eat a balanced diet low in greasy and sugary foods",
        "Avoid overbrushing or over-touching your hair",
        "Rinse hair after workouts or sweating",
        "Reduce stress through mindfulness or physical activity",
      ],
      relatedProducts: [
        {
          name: "Zinc Pyrithione Shampoo",
          price: 599,
          description:
            "Antimicrobial and antifungal agent that helps reduce oiliness and dandruff caused by oily scalp.",
          image: "https://tse1.mm.bing.net/th?id=OIP.NSz25uMhc0jRTzHQc2_cDgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Lemon & Amla Herbal Rinse",
          price: 249,
          description: "Herbal tonic that balances scalp oil and promotes fresh, clean hair.",
          image: "https://tse4.mm.bing.net/th?id=OIP.pBnldsuDBOAaizbdGOXddwHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Salicylic Acid Shampoo",
          price: 447,
          description: "Exfoliating treatment that removes excess oil, flakes, and buildup for a clean scalp.",
          image: "https://tse2.mm.bing.net/th?id=OIP.Hy1_5dJiuZPGhTJRyI3c_wHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "hair-thinning": {
      name: "Hair Thinning",
      description:
        "Hair thinning is a gradual reduction in hair density that can affect both men and women. It often starts with a wider part, receding hairline, or thinner ponytail and is caused by genetics, stress, poor diet, aging, or underlying medical conditions.",
      symptoms: [
        "Noticeable decrease in hair volume",
        "Wider hair part or visible scalp",
        "Thinner ponytail",
        "Increased hair shedding during washing or brushing",
        "Slow hair regrowth",
        "Receding hairline or crown thinning",
        "Hair breakage",
        "Loss of hair shine or strength",
      ],
      treatments: {
        medicine: {
          description:
            "Medical treatments for hair thinning aim to strengthen existing hair, stimulate growth, and reduce further hair loss using topical or oral medications.",
          remedies: [
            {
              name: "Minoxidil (Topical Solution)",
              description:
                "FDA-approved treatment that stimulates hair follicles and increases blood flow to promote hair growth.",
              usage: "Apply the solution or foam to the affected scalp area twice daily.",
              origin:
                "Originally developed as a blood pressure medication, Minoxidil's hair growth properties were discovered in the late 20th century.",
            },
            {
              name: "Biotin (Vitamin B7) Supplements",
              description:
                "Supports keratin production, strengthens hair strands, and encourages hair growth when taken regularly.",
              usage: "Take 1 capsule (5,000–10,000 mcg) daily with meals, as recommended by a physician.",
              origin:
                "Biotin is a naturally occurring B-vitamin found in foods like eggs and nuts and commonly used in hair care supplements.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies focus on nourishing the scalp, strengthening roots, and improving circulation using natural ingredients.",
          remedies: [
            {
              name: "Brahmi Oil",
              description:
                "Herbal oil that calms the nervous system and stimulates hair growth by strengthening follicles.",
              usage: "Massage gently into the scalp before bed and wash off the next morning. Use 2–3 times per week.",
              origin:
                "An Ayurvedic herb used for centuries in India to promote hair health and relieve stress-induced hair fall.",
            },
            {
              name: "Fenugreek (Methi) Seed Paste",
              description: "Rich in protein and nicotinic acid, it strengthens hair and prevents thinning.",
              usage: "Soak seeds overnight, grind into a paste, apply to scalp and hair, and rinse after 30 minutes.",
              origin:
                "Fenugreek has long been used in Ayurvedic and Unani medicine for scalp nourishment and hair regeneration.",
            },
          ],
        },
      },
      lifestyle: [
        "Consume a diet rich in iron, protein, omega-3 fatty acids, and vitamins A, C, D, and E",
        "Avoid excessive heat styling, bleaching, or harsh chemical treatments",
        "Minimize stress through yoga, meditation, or exercise",
        "Use gentle, sulfate-free shampoos and avoid daily hair washing",
        "Sleep on a silk pillowcase to reduce hair breakage",
        "Get regular trims to avoid split ends",
        "Avoid tight hairstyles that pull on the roots",
        "Stay hydrated by drinking plenty of water",
      ],
      relatedProducts: [
        {
          name: "Biotin (Vitamin B7) Supplements",
          price: 1339,
          description: "A lightweight tonic enriched with Biotin and herbs to strengthen thinning hair.",
          image: "https://tse3.mm.bing.net/th?id=OIP._qKvi8pnUPlv8XXQQWK1twHaJ4&pid=Api&P=0&h=180",
        },
        {
          name: "Minoxidil (Topical Solution)",
          price: 899,
          description:
            "FDA-approved treatment that stimulates hair follicles and increases blood flow to promote hair growth.",
          image: "https://tse4.mm.bing.net/th?id=OIP.DqMHc3HFknaSbjFoH5fz-QHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Brahmi Herbal Hair Oil",
          price: 282,
          description: "Nourishing Ayurvedic oil that supports thicker and stronger hair.",
          image: "https://tse3.mm.bing.net/th?id=OIP.IkvlFFfQYaFrke6_OlguvwHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "frizzy-hair": {
      name: "Frizzy Hair",
      description:
        "Frizzy hair occurs when the outer layer of hair (cuticle) is raised, allowing moisture to pass through and swell the hair strands. It often results from humidity, dryness, heat damage, or lack of proper hair care. Frizz makes hair look rough, dull, and unmanageable.",
      symptoms: [
        "Dry, rough texture",
        "Lack of smoothness and shine",
        "Flyaways and static strands",
        "Unmanageable or puffy hair",
        "Increased tangles and knots",
        "Hair appears dull and damaged",
        "Hair reacts to humidity",
        "Ends appear frayed or split",
      ],
      treatments: {
        medicine: {
          description:
            "Frizzy hair is often managed with moisturizing and smoothing products, including conditioners and serums that restore the hair's natural oils and seal the cuticle.",
          remedies: [
            {
              name: "Keratin Treatment (Topical Smoothing)",
              description:
                "A salon treatment that infuses keratin into hair strands to smooth frizz and add shine for weeks.",
              usage: "Applied by professionals and sealed in with heat; lasts up to 3 months.",
              origin:
                "Developed in Brazil and popularized worldwide as a semi-permanent solution for frizz-prone hair.",
            },
            {
              name: "Argan Oil Serum",
              description: "Rich in vitamin E and fatty acids, it helps seal moisture, smoothen frizz, and add shine.",
              usage: "Apply a few drops to damp or dry hair, focusing on the mid-lengths and ends.",
              origin:
                "Derived from the kernels of the argan tree native to Morocco; traditionally used for hair and skin nourishment.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies aim to deeply condition hair and lock in moisture using natural oils and ingredients with high nourishing value.",
          remedies: [
            {
              name: "Coconut Oil Massage",
              description:
                "Deeply moisturizing oil that penetrates the hair shaft, reducing protein loss and taming frizz.",
              usage: "Warm the oil and massage into the scalp and hair; leave for 1–2 hours before washing.",
              origin:
                "Widely used in Indian and Southeast Asian cultures for centuries for hair conditioning and repair.",
            },
            {
              name: "Banana & Honey Hair Mask",
              description:
                "Banana provides natural oils and potassium, while honey acts as a humectant to retain moisture.",
              usage: "Mash 1 banana with 1 tablespoon honey, apply as a mask, and rinse after 30 minutes.",
              origin: "Commonly used in traditional beauty practices for softening and revitalizing dry, frizzy hair.",
            },
          ],
        },
      },
      lifestyle: [
        "Avoid washing hair with hot water; use lukewarm or cool water instead",
        "Use a wide-tooth comb instead of brushes to avoid breakage",
        "Sleep on a silk pillowcase to reduce friction",
        "Limit heat styling and always use a heat protectant",
        "Use sulfate-free, moisturizing shampoos and conditioners",
        "Apply leave-in conditioner or hair serum after washing",
        "Protect hair from sun and wind with scarves or hats",
        "Avoid towel-drying harshly; pat hair gently with a microfiber towel",
      ],
      relatedProducts: [
        {
          name: "Anti-Frizz Argan Serum",
          price: 264,
          description: "Lightweight serum that smooths hair cuticles and tames frizz instantly.",
          image: "https://tse4.mm.bing.net/th?id=OIP.T_zJ-QFWklfpQG5tJn-bWgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Keratin Shampoo",
          price: 670,
          description:
            "A salon treatment that infuses keratin into hair strands to smooth frizz and add shine for weeks.",
          image: "https://tse3.mm.bing.net/th?id=OIP.B1MZ5a8P5gDK93XEC9-PxwHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Banana & Honey Hair Mask",
          price: 399,
          description: "Pure cold-pressed coconut oil ideal for deep conditioning and shine.",
          image: "https://tse4.mm.bing.net/th?id=OIP.4zmKu6S25tnmgf1NUEQKbQHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "slow-hair-growth": {
      name: "Slow Hair Growth",
      description:
        "Slow hair growth occurs when hair follicles are not functioning optimally due to factors like poor nutrition, hormonal imbalance, stress, or scalp issues. Hair may appear to grow very slowly or stall altogether, impacting hair length and fullness over time.",
      symptoms: [
        "Hair takes a long time to grow",
        "Visible lack of length over months",
        "Hair feels weak or thin",
        "Increased hair fall with less regrowth",
        "Dry or unhealthy scalp",
        "Lack of volume or density",
        "Split ends and breakage hindering growth",
        "Hair appears stuck at a certain length",
      ],
      treatments: {
        medicine: {
          description:
            "Treatments for slow hair growth focus on improving scalp health, stimulating hair follicles, and supporting hair with nutrients or topical solutions.",
          remedies: [
            {
              name: "Minoxidil (Topical Solution)",
              description:
                "A topical medication that improves blood circulation to the scalp and revitalizes shrunken hair follicles.",
              usage: "Apply directly to the scalp twice daily; consistent use needed for visible results.",
              origin:
                "Originally developed as a blood pressure medication, its hair-regrowth properties were discovered in the 1970s.",
            },
            {
              name: "Biotin Supplements",
              description:
                "Biotin (Vitamin B7) supports keratin production, helping strengthen hair and promote faster growth.",
              usage: "Take 1 capsule (as per recommended dosage) daily with meals.",
              origin:
                "Biotin is a water-soluble B vitamin found in foods like eggs and nuts, commonly used in hair health supplements.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies aim to stimulate the scalp, nourish hair roots, and enhance blood circulation using natural herbs and oils.",
          remedies: [
            {
              name: "Rosemary Oil",
              description:
                "Stimulates circulation in the scalp, promoting hair growth and improving follicle strength.",
              usage: "Dilute with a carrier oil and massage into the scalp 2–3 times per week.",
              origin: "Rosemary has long been used in Mediterranean cultures for enhancing hair strength and vitality.",
            },
            {
              name: "Amla & Brahmi Herbal Oil",
              description: "Amla nourishes hair follicles, while Brahmi calms the scalp and promotes growth.",
              usage: "Warm the oil and massage into the scalp before bedtime, then wash off in the morning.",
              origin: "A classic Ayurvedic combination used in India for centuries to support hair health.",
            },
          ],
        },
      },
      lifestyle: [
        "Eat a balanced diet rich in protein, iron, and vitamins (especially B-complex, zinc, and vitamin D)",
        "Get regular scalp massages to stimulate hair follicles",
        "Stay hydrated to keep hair and scalp healthy",
        "Trim split ends regularly to prevent breakage",
        "Avoid excessive heat styling and harsh chemical treatments",
        "Get 7–8 hours of sleep to support hormonal balance and cell repair",
        "Manage stress with yoga, meditation, or breathing exercises",
        "Use gentle, sulfate-free shampoos and conditioners",
      ],
      relatedProducts: [
        {
          name: "Hair Growth Rosemary Oil",
          price: 369,
          description: "Stimulates scalp circulation to boost natural hair growth.",
          image: "https://tse3.mm.bing.net/th?id=OIP.rL1SNvUylSrmO1o0Rp9JMgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Biotin Gummies",
          price: 225,
          description: "Delicious supplements with biotin and other vitamins for stronger, longer hair.",
          image: "https://tse4.mm.bing.net/th?id=OIP.WAdqZj0dgCKDb7EmQfuFHgHaG-&pid=Api&P=0&h=180",
        },
        {
          name: "Scalp Stimulating Shampoo",
          price: 999,
          description: "Infused with caffeine and essential oils to wake up dormant hair follicles.",
          image: "https://tse1.mm.bing.net/th?id=OIP.zwnxovnp-T_yyFbyKkL0vwHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "dry-damaged-hair": {
      name: "Dry & Damaged Hair",
      description:
        "Dry and damaged hair lacks moisture and natural oils, often resulting in brittleness, split ends, and frizziness. It can be caused by overexposure to heat, chemical treatments, harsh shampoos, or environmental factors such as sun and wind. Without proper care, the hair may break easily and appear dull.",
      symptoms: [
        "Brittle or rough texture",
        "Split ends",
        "Frizziness and unmanageability",
        "Lack of shine or luster",
        "Dry scalp or dandruff",
        "Increased breakage during brushing",
        "Tangling and knots",
        "Thinning hair over time",
      ],
      treatments: {
        medicine: {
          description:
            "Medical and cosmetic treatments for dry and damaged hair aim to restore moisture, protect hair shafts, and improve hair strength using conditioners, masks, or active ingredients.",
          remedies: [
            {
              name: "Deep Conditioning Mask",
              description:
                "Intensive treatment that hydrates and repairs hair by penetrating deep into the strands with nourishing ingredients.",
              usage: "Apply to clean, damp hair once a week. Leave for 10–15 minutes before rinsing thoroughly.",
              origin:
                "Modern hair masks have evolved from traditional hair packs and use advanced formulations including proteins, ceramides, and oils.",
            },
            {
              name: "Leave-In Conditioner with Argan Oil",
              description:
                "Provides lasting moisture, smoothens frizz, and protects hair from environmental stressors.",
              usage: "Apply a small amount to towel-dried hair, focusing on the ends. Do not rinse.",
              origin:
                "Derived from Moroccan Argan oil traditions, modern leave-in conditioners combine natural oils with lightweight conditioners for daily use.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies focus on nourishing hair naturally with herbal oils and nutrient-rich ingredients that help moisturize and repair damage over time.",
          remedies: [
            {
              name: "Coconut Oil Treatment",
              description:
                "Coconut oil penetrates deep into the hair shaft to nourish and strengthen from within, reducing protein loss and breakage.",
              usage:
                "Massage warm coconut oil into scalp and hair. Leave for 30 minutes or overnight, then wash with a mild shampoo.",
              origin: "Widely used in Ayurveda and tropical cultures for centuries to treat dry and brittle hair.",
            },
            {
              name: "Aloe Vera Gel",
              description:
                "Aloe vera soothes the scalp and hydrates dry hair while providing a protective layer that helps retain moisture.",
              usage:
                "Apply fresh aloe vera gel directly to the scalp and hair. Leave for 20–30 minutes before rinsing.",
              origin: "Traditionally used in Indian and Middle Eastern herbal medicine for hair and skin hydration.",
            },
          ],
        },
      },
      lifestyle: [
        "Avoid excessive heat styling and use of blow dryers",
        "Use sulfate-free and alcohol-free shampoos",
        "Trim hair regularly to remove split ends",
        "Cover hair when exposed to sun, wind, or chlorinated water",
        "Drink plenty of water and eat a diet rich in omega-3 and vitamin E",
        "Use a wide-tooth comb to avoid breakage",
        "Oil hair regularly with natural oils",
        "Avoid frequent coloring, bleaching, or perming",
      ],
      relatedProducts: [
        {
          name: "Argan Oil Leave-In Conditioner",
          price: 1162,
          description: "Hydrating leave-in formula that softens dry, frizzy hair and adds shine.",
          image: "https://tse4.mm.bing.net/th?id=OIP.qeX5np-hcUMznMR47SoUdAHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Deep Conditioning Mask",
          price: 299,
          description: "Intensive repair mask with keratin and natural oils for damaged hair.",
          image: "https://tse1.mm.bing.net/th?id=OIP.7BNYdMPC0neoVP2l42-zxgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Aloe Vera Gel",
          price: 89,
          description:
            "Aloe vera soothes the scalp and hydrates dry hair while providing a protective layer that helps retain moisture.",
          image: "https://tse3.mm.bing.net/th?id=OIP.Ps8piLYTWpo2NCBE_9ieVAHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "premature-graying": {
      name: "Premature Graying",
      description:
        "Premature graying of hair occurs when hair loses its natural pigment (melanin) earlier than usual. It can be influenced by genetics, stress, nutritional deficiencies, or underlying health issues. While it's typically harmless, it can be a cosmetic concern for many people.",
      symptoms: [
        "Early appearance of gray or white strands before age 30",
        "Loss of natural hair color starting at temples or crown",
        "Hair becomes dull or loses luster",
        "Dryness or coarseness in gray strands",
        "Gradual increase in number of white hairs",
        "No associated hair loss or thinning initially",
      ],
      treatments: {
        medicine: {
          description:
            "Medical and supplement-based treatments aim to slow down or reverse pigment loss by addressing nutritional deficiencies and oxidative stress.",
          remedies: [
            {
              name: "Biotin + B-Complex Supplements",
              description:
                "Support hair pigmentation and strength by improving keratin infrastructure and boosting vitamin levels.",
              usage: "Take one capsule daily or as recommended by a healthcare provider.",
              origin:
                "B-complex vitamins have long been used to support hair and skin health, particularly in addressing early pigment loss.",
            },
            {
              name: "Melanin Support Formula",
              description:
                "A blend of nutrients like copper, catalase, and folic acid that aim to boost melanin production in hair follicles.",
              usage: "Take daily with meals to support melanin levels and slow graying.",
              origin:
                "These formulas are based on research linking melanin loss with oxidative damage and mineral deficiencies.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for premature graying involve herbs and oils that nourish the scalp, restore pigment, and strengthen hair roots.",
          remedies: [
            {
              name: "Amla (Indian Gooseberry)",
              description:
                "Rich in vitamin C and antioxidants, amla helps delay graying and promotes healthy hair growth.",
              usage: "Apply amla oil to the scalp regularly or consume fresh/dried amla or amla juice daily.",
              origin:
                "Amla is a revered Ayurvedic remedy known for rejuvenating hair and promoting natural pigmentation.",
            },
            {
              name: "Curry Leaves Oil",
              description:
                "Curry leaves are believed to restore melanin in the hair, thus helping darken gray strands naturally.",
              usage: "Boil curry leaves in coconut oil, strain, and apply to the scalp 2-3 times a week.",
              origin:
                "Used traditionally in South Indian households for decades as a natural way to maintain black, strong hair.",
            },
          ],
        },
      },
      lifestyle: [
        "Include iron, folate, B12, and copper-rich foods in your diet",
        "Avoid smoking, as it accelerates oxidative stress and graying",
        "Manage stress through yoga, meditation, or breathing exercises",
        "Avoid excessive use of harsh chemical hair dyes",
        "Oil your hair regularly to keep follicles nourished",
        "Protect hair from UV exposure using hats or protective products",
        "Get regular sleep to allow body repair and balance hormone levels",
        "Stay hydrated and consume antioxidant-rich foods",
      ],
      relatedProducts: [
        {
          name: "Amla Hair Oil",
          price: 207,
          description: "Nourishing oil enriched with Amla to delay graying and promote strong hair.",
          image: "https://tse4.mm.bing.net/th?id=OIP.HWzc9qfieYc7F67qrrBROAHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Melanin Boost Capsules",
          price: 499,
          description: "Dietary supplement that supports melanin production and slows down premature graying.",
          image: "https://tse4.mm.bing.net/th?id=OIP.UQKpl6LnlAaaAfwDvwcPGAHaP0&pid=Api&P=0&h=180",
        },
        {
          name: "Biotin + B-Complex Supplements",
          price: 199,
          description:
            "Support hair pigmentation and strength by improving keratin infrastructure and boosting vitamin levels.",
          image: "https://tse3.mm.bing.net/th?id=OIP.FOObr6EFeDX6fAD0eCZQDgHaLn&pid=Api&P=0&h=180",
        },
      ],
    },
    dandruff: {
      name: "Dandruff",
      description:
        "Dandruff is a common scalp condition that causes flaking of the skin on the scalp. It can be accompanied by itching and irritation. While it is not contagious or serious, it can be embarrassing and sometimes difficult to treat.",
      symptoms: [
        "White flakes of dead skin in hair or on shoulders",
        "Itchy scalp",
        "Dryness and tightness of the scalp",
        "Red and irritated patches on the scalp",
        "Scalp acne or bumps",
        "Worsening symptoms during cold, dry weather",
        "Oily or greasy patches on the scalp",
        "Mild hair thinning in some cases",
      ],
      treatments: {
        medicine: {
          description:
            "Medical treatment for dandruff usually involves medicated shampoos and topical treatments that reduce flaking, control fungal growth, and soothe the scalp.",
          remedies: [
            {
              name: "Ketoconazole Shampoo",
              description:
                "An antifungal shampoo that helps control dandruff by reducing the yeast on the scalp that contributes to flaking and inflammation.",
              usage: "Use 2-3 times a week, leaving it on the scalp for 5-10 minutes before rinsing.",
              origin:
                "Developed in the 1970s, Ketoconazole was introduced as an antifungal agent and later adapted for dandruff treatment.",
            },
            {
              name: "Zinc Pyrithione Shampoo",
              description:
                "An over-the-counter medicated shampoo that treats dandruff by slowing down yeast growth and reducing skin cell turnover.",
              usage:
                "Apply to wet hair, lather, leave for several minutes, and rinse thoroughly. Use 2-3 times per week.",
              origin:
                "Zinc Pyrithione was introduced in the 1960s as an antibacterial and antifungal agent and is commonly found in anti-dandruff shampoos.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for dandruff often focus on balancing scalp health, reducing fungal growth, and soothing irritation using natural ingredients.",
          remedies: [
            {
              name: "Neem Oil",
              description:
                "Neem has strong antifungal and antibacterial properties that help in reducing dandruff and soothing an itchy scalp.",
              usage: "Warm neem oil slightly and massage into the scalp. Leave for 30 minutes before washing off.",
              origin:
                "Used in Ayurvedic practices for centuries, neem is a key ingredient in many traditional Indian scalp treatments.",
            },
            {
              name: "Fenugreek (Methi) Paste",
              description:
                "Fenugreek seeds have anti-inflammatory and moisturizing properties that help reduce flakes and scalp irritation.",
              usage:
                "Soak seeds overnight, grind into a paste, apply to scalp for 30 minutes, then wash with a mild shampoo.",
              origin:
                "Fenugreek has long been used in Ayurvedic and Unani medicine for treating skin and scalp disorders.",
            },
          ],
        },
      },
      lifestyle: [
        "Wash hair regularly with a mild or medicated shampoo",
        "Avoid harsh hair products with alcohol and sulfates",
        "Keep scalp hydrated and avoid excessive heat styling",
        "Eat a balanced diet rich in zinc and B vitamins",
        "Reduce stress through regular physical activity and relaxation",
        "Avoid scratching the scalp to prevent further irritation",
        "Brush hair daily to evenly distribute natural oils",
        "Rinse hair thoroughly to remove product buildup",
      ],
      relatedProducts: [
        {
          name: "Ketoconazole Shampoo",
          price: 599,
          description:
            "An antifungal shampoo that helps control dandruff by reducing the yeast on the scalp that contributes to flaking and inflammation.",
          image: "https://tse2.mm.bing.net/th?id=OIP.-BnfIDuXG0JDabTK2TDAggHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Zinc Pyrithione Shampoo",
          price: 799,
          description:
            "An over-the-counter medicated shampoo that treats dandruff by slowing down yeast growth and reducing skin cell turnover.",
          image: "https://tse1.mm.bing.net/th?id=OIP.A-C7P6ZQqv3hFUgBhXeixgHaRW&pid=Api&P=0&h=180",
        },
        {
          name: "Fenugreek Hair Mask",
          price: 299,
          description: "Natural mask that hydrates the scalp and combats flaking using fenugreek extract.",
          image: "https://tse2.mm.bing.net/th?id=OIP.P0-AuBwKpS4NDNhcRcp7SwHaE8&pid=Api&P=0&h=180",
        },
      ],
    },
  }

  const conditionKey = params.condition.toLowerCase()
  const condition = conditions[conditionKey] || conditions["hair-loss"]

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/hair" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Hair Solutions
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

            <Tabs defaultValue="medicine" className="w-full">
              <TabsList className="grid w-full grid-cols-2 gap-1">
                <TabsTrigger value="medicine">Medicine</TabsTrigger>
                <TabsTrigger value="traditional">Traditional Remedies</TabsTrigger>
              </TabsList>
              <TabsContent value="medicine" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Approach</CardTitle>
                    <CardDescription>{condition.treatments.medicine.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {condition.treatments.medicine.remedies.map((remedy, index) => (
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
                    <CardDescription>{condition.treatments.traditional.description}</CardDescription>
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

