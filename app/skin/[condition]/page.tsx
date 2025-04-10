import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Calendar } from "lucide-react"

export default function SkinConditionPage({ params }: { params: { condition: string } }) {
  // In a real application, you would fetch this data from an API or database
  // based on the condition slug in params.condition
  const conditions = {
    acne: {
      name: "Acne",
      description:
        "Acne is a common inflammatory skin condition that occurs when hair follicles become clogged with oil, dead skin cells, and bacteria. It often affects the face, back, chest, and shoulders, and is most common in teenagers, though it can occur at any age.",
      symptoms: [
        "Whiteheads (closed plugged pores)",
        "Blackheads (open plugged pores)",
        "Small red, tender bumps (papules)",
        "Pimples (pustules) with pus at their tips",
        "Large, solid, painful lumps under the skin (nodules)",
        "Painful, pus-filled lumps under the skin (cystic lesions)",
        "Redness and inflammation around the affected areas",
        "Possible scarring after healing",
      ],
      treatments: {
        medicine: {
          description:
            "Acne treatment focuses on reducing oil production, removing dead skin cells, killing bacteria, and reducing inflammation. It can include topical treatments, oral medications, and lifestyle adjustments. Treatment varies depending on the severity of the acne.",
          remedies: [
            {
              name: "Benzoyl Peroxide Gel",
              description: "A topical antibacterial that helps kill acne-causing bacteria and unclog pores.",
              usage: "Apply to affected areas once or twice daily.",
              origin:
                "Benzoyl Peroxide was first synthesized in 1905 and became widely used in dermatology in the 1960s for its antibacterial and keratolytic properties.",
            },
            {
              name: "Clindamycin (Topical Antibiotic)",
              description: "An antibiotic gel or lotion that reduces bacterial growth and inflammation.",
              usage: "Applied to the skin once or twice daily as prescribed.",
              origin: "Discovered in the 1960s from Streptomyces lincolnensis (soil bacteria).",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies aim to balance hormones, cleanse the blood, and reduce skin inflammation using natural plant-based ingredients.",
          remedies: [
            {
              name: "Neem Capsules or Paste",
              description:
                "Neem has antibacterial and anti-inflammatory properties, purifies blood and treats skin disorders.",
              usage: "Apply neem paste on the skin or take neem capsules orally.",
              origin: "Ancient Indian Ayurvedic medicine.",
            },
            {
              name: "Honey & Cinnamon Mask",
              description:
                "Both honey and cinnamon have antibacterial properties that help reduce acne-causing bacteria.",
              usage: "Mix 2 tbsp honey with 1 tsp cinnamon and apply for 10–15 minutes.",
              origin: "Used in traditional Chinese and Ayurvedic medicine.",
            },
          ],
        },
      },
      lifestyle: [
        "Cleanse your face twice daily with a mild cleanser.",
        "Avoid touching or picking at pimples to prevent scarring.",
        "Use non-comedogenic (non-pore-clogging) skincare products.",
        "Follow a balanced diet and stay hydrated.",
        "Avoid excessive use of makeup or greasy products.",
        "Wash pillowcases and towels frequently.",
      ],
      relatedProducts: [
        {
          name: "Benzoyl Peroxide 5% Gel",
          price: 209,
          description: "Topical treatment that kills bacteria and helps dry up excess oil.",
          image: "https://tse1.mm.bing.net/th?id=OIP.JklsHKrt0hTD1yDqa46D5gHaFj&pid=Api&P=0&h=180",
        },
        {
          name: "Clindamycin (Topical Antibiotic)",
          price: 189,
          description: "An antibiotic gel or lotion that reduces bacterial growth and inflammation.",
          image: "https://tse3.mm.bing.net/th?id=OIP.kp7V9tIW1zD-C6doLn69gwAAAA&pid=Api&P=0&h=180",
        },
        {
          name: "Honey & Cinnamon Mask",
          price: 249,
          description: "Both honey and cinnamon have antibacterial properties that help reduce acne-causing bacteria.",
          image: "https://tse1.mm.bing.net/th?id=OIP.qkbz1tvvqwSJwwrevwWNIQHaEs&pid=Api&P=0&h=180",
        },
      ],
    },
    "dark-spots": {
      name: "Dark Spots",
      description:
        "Dark spots, also known as hyperpigmentation, are patches of skin that appear darker than the surrounding areas due to excess melanin production. They can be caused by sun exposure, acne scars, hormonal changes, aging, or inflammation.",
      symptoms: [
        "Flat, dark patches (Brown, black, or grayish spots appearing on the skin)",
        "Uneven skin tone (Areas of skin appear darker than the surrounding complexion)",
        "Spots vary in size and shape (Can be small like freckles or larger patches)",
        "Common on sun-exposed areas (Face, hands, shoulders, and arms are most affected)",
        "No pain, itching, or irritation (Unlike rashes or infections, dark spots are usually painless)",
        "Slow fading over time (May take months or years to lighten naturally without treatment)",
        "Can worsen with sun exposure (UV rays can darken existing spots further)",
      ],
      treatments: {
        medicine: {
          description:
            "Medical treatment for dark spots involves topical and oral medications that target different aspects of dark spots formation.",
          remedies: [
            {
              name: "Hydroquinone Cream",
              description: "A skin-lightening agent that reduces melanin production.",
              usage: "Apply a thin layer to the affected area once or twice daily.",
              origin:
                "Hydroquinone is a synthetic compound that was first discovered in the 19th century and has been widely used in dermatology since the 1960s for skin-lightening purposes.",
            },
            {
              name: "Retinol (Vitamin A derivative)",
              description: "Stimulates skin cell turnover to fade dark spots.",
              usage: "Apply at night daily, followed by sunscreen in the morning.",
              origin:
                "Discovered in the early 20th century, Vitamin A was identified as essential for skin health and vision.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for dark spots focus on natural ingredients with skin-brightening, anti-inflammatory, and healing properties. These remedies have been used for centuries in Ayurveda, Homeopathy, and other herbal medicine systems to reduce hyperpigmentation and improve skin tone.",
          remedies: [
            {
              name: "Kumkumadi Tailam",
              description:
                "A luxurious herbal oil blend known for its skin-brightening properties, reducing pigmentation, and promoting an even complexion",
              usage: "Apply a few drops to the face at night and massage gently before bedtime.",
              origin:
                "Rooted in Ayurveda, India, this oil has been used for centuries in traditional skincare treatments.",
            },
            {
              name: "Turmeric & Milk Paste",
              description:
                "Turmeric contains curcumin, a powerful anti-inflammatory and antioxidant that helps reduce pigmentation, while milk has lactic acid, which gently exfoliates dead skin cells and lightens dark spots",
              usage:
                "Mix ½ teaspoon of turmeric powder with 1 tablespoon of milk to form a smooth paste. Apply the paste evenly to dark spots or the entire face. Leave it on for 15-20 minutes until it dries. Rinse with lukewarm water and pat dry. Use 2-3 times a week for best results.",
              origin:
                "Turmeric originates from India and Southeast Asia, widely used in Ayurveda for its healing and skin-brightening properties. Milk-based skincare has been used in ancient Egyptian and Indian beauty traditions, known for its exfoliating and hydrating benefits.",
            },
          ],
        },
      },
      lifestyle: [
        "Use sunscreen daily (SPF 30+)",
        "Stay hydrated and maintain a balanced diet",
        "Avoid excessive sun exposure",
        "Avoid touching your face throughout the day",
        "Use gentle skincare products",
        "Exfoliate 2-3 times a week",
      ],
      relatedProducts: [
        {
          name: "Vitamin C Brightening Serum",
          price: 499,
          description: "A lightweight serum infused with Vitamin C to reduce dark spots and even skin tone.",
          image: "https://tse4.mm.bing.net/th?id=OIP.xXiz1nieASoH_2WoyHkHHAHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Turmeric & Honey Face Mask",
          price: 299,
          description: "A nourishing face mask with turmeric and honey to brighten skin and reduce dark spots.",
          image: "https://tse2.mm.bing.net/th?id=OIP.mpldqwldVleiLnOn0YGsnAHaJ4&pid=Api&P=0&h=180",
        },
        {
          name: "Aloe Vera Soothing Gel",
          price: 150,
          description: "Hydrating gel with pure aloe vera to soothe skin and reduce pigmentation.",
          image: "https://tse4.mm.bing.net/th?id=OIP.8pS6RRUUEfikMoHJwQ7ChAHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    psoriasis: {
      name: "Psoriasis",
      description:
        "Psoriasis is a chronic autoimmune skin disorder that causes rapid skin cell turnover, leading to scaly, red, and inflamed patches on the skin. It can be triggered by stress, infections, certain medications, or environmental factors.",
      symptoms: [
        "Red, inflamed patches covered with silvery-white scales",
        "Dry, cracked skin that may bleed",
        "Itching, burning, or soreness in affected areas",
        "Thickened, ridged, or pitted nails",
        "Stiff and swollen joints (in cases of psoriatic arthritis)",
        "Flare-ups triggered by stress, infections, or injuries",
      ],
      treatments: {
        medicine: {
          description:
            "Psoriasis treatments focus on reducing inflammation, slowing down skin cell overgrowth, and relieving symptoms. Treatments range from topical applications to systemic medications depending on severity.",
          remedies: [
            {
              name: "Calcipotriol (Vitamin D Analogue)",
              description: "A synthetic form of Vitamin D that slows down skin cell overgrowth.",
              usage: "Applied once or twice daily to affected skin.",
              origin: "Developed in the 1990s, used in dermatology.",
            },
            {
              name: "Betamethasone Cream (Corticosteroid)",
              description: "A strong steroid cream that reduces inflammation and scaling.",
              usage: "Applied once or twice daily on affected areas.",
              origin: "Synthesized in the 1960s, widely used for skin conditions.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for psoriasis, including Ayurveda and Homeopathy, focus on natural healing, reducing inflammation, and restoring skin balance. These treatments aim to soothe symptoms, prevent flare-ups, and improve overall skin health without the side effects of conventional medicines.",
          remedies: [
            {
              name: "Neem Oil",
              description: "Has antibacterial and anti-inflammatory properties that help soothe itchy, scaly skin.",
              usage: "Apply directly to affected areas or mix with a moisturizer.",
              origin: "Ayurveda, India.",
            },
            {
              name: "Arsenicum Album",
              description: "Used for chronic psoriasis with dry, scaly, and itchy skin.",
              usage:
                "It has been used to treat chronic skin conditions like psoriasis, eczema, and allergic reactions.",
              origin:
                "Derived from arsenic trioxide, a naturally occurring mineral, and prepared through homeopathic dilution to make it safe for medicinal use.",
            },
          ],
        },
      },
      lifestyle: [
        "Manage stress through meditation, yoga, or deep breathing exercises.",
        "Moisturize daily with thick, fragrance-free creams to prevent dryness.",
        "Take lukewarm baths with oatmeal or Epsom salts to soothe skin.",
        "Eat an anti-inflammatory diet rich in omega-3 fatty acids, fruits, and vegetables.",
        "Avoid triggers like smoking, alcohol, and processed foods that may worsen symptoms.",
        "Wear soft, breathable fabrics like cotton to reduce skin irritation.",
        "Use sunscreen and get moderate sun exposure to help control psoriasis.",
        "Exercise regularly to improve circulation and boost overall health.",
        "Get 7-9 hours of quality sleep to aid skin repair and reduce inflammation.",
      ],
      relatedProducts: [
        {
          name: "Neutrogena T/Gel Therapeutic Shampoo",
          price: 1100,
          description: "Coal tar-based formula for scalp psoriasis and dandruff control.",
          image: "https://tse3.mm.bing.net/th?id=OIP.KCoOlT_eruu4xCnFj3YZBwHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Vanicream Gentle Facial Cleanser",
          price: 150,
          description: "A mild, non-irritating facial cleanser perfect for sensitive and psoriasis-prone skin.",
          image: "https://tse2.mm.bing.net/th?id=OIP.FNupN2odmYBFShyBJAgVDwHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Cetaphil Moisturizing Cream",
          price: 320,
          description: "Hydrating cream designed for sensitive and dry skin, ideal for psoriasis care.",
          image: "https://tse1.mm.bing.net/th?id=OIP.0VrnqYX4pyAyB7y7SBgdQgAAAA&pid=Api&P=0&h=180",
        },
      ],
    },
    "black-heads": {
      name: "Blackheads",
      description:
        "Blackheads are a common type of acne caused by clogged pores filled with excess oil (sebum), dead skin cells, and bacteria. When the clogged pore remains open, oxidation occurs, turning the debris black. They typically appear on the nose, chin, forehead, and cheeks but can also be found on the back and chest.",
      symptoms: [
        "Small, dark, or black spots on the skin",
        "Slightly raised, non-inflamed bumps",
        "Commonly found on the nose, forehead, and chin",
        "Mild rough texture on affected areas",
        "Pores appear visibly enlarged",
        "No pain or swelling (unlike pimples)",
      ],
      treatments: {
        medicine: {
          description:
            "Blackhead treatment medicines focus on unclogging pores, reducing excess oil, and preventing bacterial buildup. These medicines come in the form of topical creams, cleansers, serums, and exfoliants.",
          remedies: [
            {
              name: "Differin Gel (Adapalene 0.1%)",
              description: "A topical retinoid that unclogs pores and prevents new blackheads.",
              usage: "Apply once daily at night on affected areas.",
              origin: "Developed by Galderma (USA), FDA-approved for acne treatment.",
            },
            {
              name: "Salicylic Acid Cleanser (CeraVe, Neutrogena, La Roche-Posay)",
              description: "A gentle exfoliating cleanser that dissolves excess oil and dead skin cells.",
              usage: "Apply once daily at night on affected areas.",
              origin: "Developed by Galderma (USA), FDA-approved for acne treatment.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for blackheads focus on natural ingredients that cleanse pores, reduce excess oil, and prevent future breakouts. These remedies are derived from Ayurveda, Homeopathy, and Herbal Medicine, offering gentle yet effective solutions.",
          remedies: [
            {
              name: "Neem Face Pack (Ayurveda)",
              description: "Neem has antibacterial and oil-controlling properties that help clear blackheads.",
              usage: "Apply a paste of neem powder and water for 10-15 minutes.",
              origin: "Ayurveda, India.",
            },
            {
              name: "Multani Mitti",
              description: "A natural clay that absorbs excess oil, removes dead skin, and unclogs pores.",
              usage:
                "Mix 1 tablespoon of Multani Mitti with rose water to form a smooth paste. Apply to blackhead-prone areas and leave for 15 minutes before rinsing.",
              origin: "Ayurveda & Middle Eastern Herbal Medicine.",
            },
          ],
        },
      },
      lifestyle: [
        "Use non-comedogenic skincare and makeup products to prevent clogged pores.",
        "Exfoliate regularly with salicylic acid or gentle scrubs.",
        "Avoid squeezing blackheads to prevent scarring and infection.",
        "Wash your face twice daily to remove excess oil.",
        "Use sunscreen to prevent skin damage and enlarged pores.",
      ],
      relatedProducts: [
        {
          name: "Aztec Secret Indian Healing Clay",
          price: 199,
          description: "A deep-cleansing bentonite clay mask that removes impurities and blackheads.",
          image: "https://tse4.mm.bing.net/th?id=OIP.Kh-ICLCsV2IIccr9z0Ig6QHaFj&pid=Api&P=0&h=180",
        },
        {
          name: "The Ordinary Niacinamide 10% + Zinc 1%",
          price: 129,
          description: "A serum that reduces oil production and minimizes pores.",
          image: "https://tse1.mm.bing.net/th?id=OIP.8Nd0ErkkEW6FqFXWulRbCAHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Multani Mitti",
          price: 269,
          description: "A natural clay that absorbs excess oil, removes dead skin, and unclogs pores.",
          image: "https://tse2.mm.bing.net/th?id=OIP.YF5grbEvr-teObGXIqKPewHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    dermatitis: {
      name: "Dermatitis",
      description:
        "Dermatitis refers to inflammation of the skin, causing redness, itching, swelling, and irritation. It is a broad term that includes eczema, contact dermatitis, and seborrheic dermatitis. It can be triggered by allergens, irritants, stress, or genetic factors.",
      symptoms: [
        "Red, inflamed skin",
        "Itching and irritation",
        "Dry, flaky, or scaly patches",
        "Swelling and tenderness",
        "Blisters or oozing lesions in severe cases",
        "Cracking or thickening of the skin",
        "Burning or stinging sensation",
      ],
      treatments: {
        medicine: {
          description:
            "Dermatitis is a broad term for inflammation of the skin, causing redness, itching, irritation, and swelling. It can occur due to allergies, irritants, genetic factors, or immune system dysfunction.",
          remedies: [
            {
              name: "Cetirizine (Oral Antihistamine)",
              description:
                "A second-generation antihistamine used to relieve itching and allergic reactions in dermatitis.",
              usage: "Taken as a tablet or syrup once daily, depending on the severity.",
              origin:
                "Developed through pharmaceutical research as a second-generation antihistamine, derived from hydroxyzine.",
            },
            {
              name: "Tacrolimus Ointment (Topical Immunosuppressant)",
              description:
                "A non-steroidal immunosuppressant that helps control moderate to severe dermatitis, especially for sensitive skin areas.",
              usage: "Apply a small amount twice daily, as prescribed by a doctor.",
              origin: "Derived from a bacterial fermentation process and introduced for dermatological use.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for dermatitis focus on reducing inflammation, soothing itching, and promoting skin healing. Ayurveda and Homeopathy offer natural solutions to manage symptoms and prevent flare-ups.",
          remedies: [
            {
              name: "Oatmeal Bath (Home Remedy)",
              description:
                "Oatmeal is rich in beta-glucans and antioxidants that help relieve itching, irritation, and dryness.",
              usage: "Add 1 cup of finely ground oatmeal to warm bathwater and soak for 15-20 minutes.",
              origin: "Ancient Egyptian and Ayurvedic skincare practices.",
            },
            {
              name: "Manjistha",
              description:
                "An Ayurvedic herb known for its blood-purifying and anti-inflammatory effects, which help in managing chronic skin conditions.",
              usage: "Taken as herbal powder, tea, or capsules as per Ayurvedic recommendations.",
              origin: "Ayurveda, India.",
            },
          ],
        },
      },
      lifestyle: [
        "Use fragrance-free and hypoallergenic skincare products.",
        "Moisturize daily to prevent dry and irritated skin.",
        "Wear soft, breathable fabrics like cotton to reduce irritation.",
        "Avoid hot showers and opt for lukewarm water to prevent dryness.",
        "Manage stress through meditation, yoga, or deep breathing exercises.",
        "Identify and avoid allergens or irritants triggering dermatitis flare-ups.",
      ],
      relatedProducts: [
        {
          name: "Mustela Stelatopia Emollient Cream",
          price: 240,
          description:
            "Specially formulated for babies and children, this plant-based cream soothes and protects eczema-prone skin.",
          image: "https://tse1.mm.bing.net/th?id=OIP.wehLKeNLGwjawn8TQC29fAHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Shea Moisture Raw Shea Butter Healing Lotion",
          price: 211,
          description:
            "Infused with shea butter and frankincense extract, this lotion deeply hydrates and soothes irritated skin.",
          image: "https://tse1.mm.bing.net/th?id=OIP.22t38NyRXI3gD3S1yTLWUgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Aveeno Eczema Therapy Balm",
          price: 290,
          description:
            "Enriched with colloidal oatmeal and ceramides, this balm soothes and protects eczema-prone skin.",
          image: "https://tse2.mm.bing.net/th?id=OIP.r7aAnShFNMT7BF6MHTRPaQHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "skin-allergies": {
      name: "Skin Allergies",
      description:
        "Skin allergies occur when the immune system overreacts to a substance (allergen) that comes into contact with the skin. This triggers itching, redness, swelling, rashes, and irritation. Common allergens include pollen, pet dander, certain foods, chemicals, metals, and insect bites.",
      symptoms: [
        "Red, inflamed, or itchy skin",
        "Raised bumps or hives (urticaria)",
        "Dry, scaly, or cracked skin",
        "Burning or stinging sensation",
        "Swelling in affected areas",
        "Blistering or oozing rashes",
        "Skin peeling or flaking",
        "Increased sensitivity to touch",
      ],
      treatments: {
        medicine: {
          description:
            "Skin allergy treatments focus on reducing inflammation, soothing irritation, and preventing allergic reactions. Treatment options include medications, lifestyle adjustments, and natural remedies.",
          remedies: [
            {
              name: "Cetirizine (Oral Antihistamine)",
              description: "A non-drowsy antihistamine that relieves itching, swelling, and allergic reactions.",
              usage: "Take one tablet daily as directed.",
              origin:
                "Developed for allergy treatment worldwide, synthesized by UCB Pharma (Belgium) and later co-developed with Pfizer(USA).",
            },
            {
              name: "Hydrocortisone Cream (Topical Corticosteroid)",
              description: "A mild steroid cream that reduces itching, redness, and inflammation.",
              usage: "Apply a thin layer on affected areas 1-2 times daily.",
              origin: "Developed in the 1950s, first synthesized by Upjohn Company (USA).",
            },
          ],
        },
        traditional: {
          description:
            "Traditional medicine focuses on natural healing, reducing hypersensitivity, and balancing the body's immune response to allergens.",
          remedies: [
            {
              name: "Neem Paste",
              description:
                "Neem has antibacterial, antifungal, and anti-inflammatory properties that soothe allergic skin reactions.",
              usage: "Apply neem paste to affected areas for 20 minutes, then rinse.",
              origin: "Ayurveda, India.",
            },
            {
              name: "Yashtimadhu (Licorice Root)",
              description:
                "Known for its anti-inflammatory and cooling properties, it helps relieve itching and redness caused by allergies.",
              usage: "Can be applied as a paste or consumed as herbal tea.",
              origin: "Ayurveda, India—used for centuries to heal skin conditions.",
            },
          ],
        },
      },
      lifestyle: [
        "Avoid triggers (pollen, dust, pet dander, certain foods).",
        "Use mild, fragrance-free skincare products.",
        "Moisturize daily to prevent flare-ups.",
        "Wear loose, cotton clothing to prevent irritation.",
        "Use antihistamines during allergy seasons.",
      ],
      relatedProducts: [
        {
          name: "Benadryl Itch Stopping Gel",
          price: 460,
          description: "Provides fast relief from rashes, bug bites, and allergic skin reactions.",
          image: "https://tse3.mm.bing.net/th?id=OIP.-1h36ELk5VzabemH6T2AsQAAAA&pid=Api&P=0&h=180",
        },
        {
          name: "Aveeno Eczema Therapy Moisturizing Cream",
          price: 150,
          description: "Colloidal oatmeal-based cream that soothes and protects irritated skin.",
          image: "https://tse4.mm.bing.net/th?id=OIP.Bfe2jWHQSjlBGg3WsS6s7gHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Neutrogena Hydro Boost Gel-Cream",
          price: 900,
          description: "Lightweight hyaluronic acid moisturizer that hydrates allergy-prone skin without irritation.",
          image: "https://tse3.mm.bing.net/th?id=OIP.XR7o8fxxuKvxHwqJFbXd_QHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "sun-burn": {
      name: "Sunburn",
      description:
        "Sunburn is a skin condition caused by overexposure to ultraviolet (UV) radiation from the sun or artificial sources like tanning beds. It results in redness, inflammation, and peeling of the skin.",
      symptoms: [
        "Red, inflamed skin (Affected areas appear warm and tender)",
        "Pain or burning sensation (The skin feels sensitive to touch)",
        "Swelling (In some cases, sunburned areas may swell)",
        "Peeling skin (After a few days, the damaged skin starts to peel)",
        "Itching and dryness (As the skin heals, it may become dry and flaky)",
        "Headache and dizziness (Due to dehydration from excessive sun exposure)",
        "Fever and chills (Severe sunburns may cause flu-like symptoms)",
      ],
      treatments: {
        medicine: {
          description:
            "The severity of sunburn determines the treatment approach, ranging from home remedies to medical treatments for faster recovery.",
          remedies: [
            {
              name: "Ibuprofen (Advil, Motrin)",
              description:
                "A nonsteroidal anti-inflammatory drug (NSAID) that helps reduce pain, swelling, and redness.",
              usage: "Take one tablet every 6–8 hours as needed.",
              origin: "Synthesized in the 1960s and widely used in modern medicine.",
            },
            {
              name: "Hydrocortisone Cream",
              description: "A mild topical steroid that relieves itching, swelling, and inflammation.",
              usage: "Apply a thin layer to the affected area 2-3 times a day.",
              origin:
                "Hydrocortisone was first isolated in 1951 by Dr. Edward Kendall and Dr. Philip Hench, developed as a synthetic corticosteroid for skin conditions.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for sunburn focus on natural ingredients with cooling, anti-inflammatory, and skin-healing properties. These remedies have been used for centuries in Ayurveda, Homeopathy, and herbal medicine to soothe burns, reduce redness, and accelerate skin recovery.",
          remedies: [
            {
              name: "Aloe Vera Gel",
              description:
                "Contains compounds that reduce inflammation, promote healing, and moisturize sunburned skin.",
              usage: "Apply fresh aloe vera gel directly to sunburned areas several times a day.",
              origin: "Used for thousands of years across various cultures for its healing properties.",
            },
            {
              name: "Coconut Oil",
              description: "Rich in fatty acids that moisturize and repair damaged skin cells.",
              usage: "Apply a thin layer to sunburned areas after the initial heat has subsided.",
              origin: "Traditional remedy in tropical regions where coconut palms grow naturally.",
            },
          ],
        },
      },
      lifestyle: [
        "Wear sunscreen (SPF 30+) before sun exposure.",
        "Stay hydrated to help the skin recover faster.",
        "Avoid peak sun hours (10 AM – 4 PM).",
        "Wear protective clothing, such as long sleeves and a hat.",
        "Use a cooling moisturizer after sun exposure to prevent dryness.",
      ],
      relatedProducts: [
        {
          name: "Aloe Vera Cooling Gel",
          price: 350,
          description: "Soothing gel with pure aloe vera to cool and heal sunburned skin.",
          image: "https://tse3.mm.bing.net/th?id=OIP.QE423LVotdWuWeX-stywGgHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Hydrating After-Sun Lotion",
          price: 500,
          description: "A moisturizing lotion infused with coconut oil and aloe vera to repair sunburned skin.",
          image: "https://tse1.mm.bing.net/th?id=OIP.TBTx3iy-pLWf3kMWljpTfQHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Cetaphil Soothing Lotion with Aloe & Calendula",
          price: 799,
          description: "A gentle, fragrance-free moisturizer designed to soothe sunburned and sensitive skin",
          image: "https://tse1.mm.bing.net/th?id=OIP.3zjuewK-zfhHY7yS33jqfgHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    "dry-skin": {
      name: "Dry Skin (Xerosis)",
      description:
        "Dry skin, or Xerosis, occurs when the skin loses moisture, leading to roughness, flaking, itchiness, and tightness. It can be triggered by weather changes, harsh soaps, dehydration, and underlying health conditions.",
      symptoms: [
        "Rough, scaly, or flaky skin",
        "Tightness, especially after washing",
        "Mild to severe itching",
        "Redness and irritation",
        "Cracks or fine lines on the skin",
        "Peeling or chapped areas",
        "Possible skin infections from excessive dryness",
        "Increased sensitivity or burning sensation",
      ],
      treatments: {
        medicine: {
          description:
            "Treatment medicines for dry skin aim to restore moisture, repair the skin barrier, and relieve irritation. These medicines include moisturizing creams, prescription ointments, and natural remedies that help maintain skin hydration and prevent excessive dryness.",
          remedies: [
            {
              name: "Cetaphil Moisturizing Cream",
              description: "A dermatologist-recommended fragrance-free moisturizer that restores skin hydration.",
              usage: "Apply twice daily to dry areas, especially after bathing.",
              origin:
                "Cetaphil was developed in 1947 by a Texas-based pharmacist, originally formulated for dermatologists and healthcare professionals to treat dry, sensitive, and eczema-prone skin.",
            },
            {
              name: "Eucerin Urea Repair Cream (5%-10% Urea)",
              description: "A medicated lotion with urea to soften extremely dry, scaly skin.",
              usage: "Apply once or twice daily on rough skin patches.",
              origin: "Germany, developed by Eucerin dermatologists.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional remedies for dry skin focus on natural ingredients that deeply moisturize, nourish, and protect the skin barrier. These remedies have been used for centuries in various traditional medicine systems to combat dryness and restore skin health.",
          remedies: [
            {
              name: "Honey & Milk Mask",
              description:
                "Honey is a natural humectant (retains moisture), while milk softens and nourishes dry skin.",
              usage: "Mix 1 tablespoon honey + 2 tablespoons milk, apply for 10 minutes, and rinse.",
              origin:
                "The Honey & Milk Mask is a traditional skincare remedy used for centuries across various cultures, particularly in Ayurveda, Ancient Egyptian, and Greek medicine.",
            },
            {
              name: "Petroleum Jelly",
              description: "Forms a protective layer to lock in moisture and prevent further dryness.",
              usage: "Apply twice daily, especially before sleeping.",
              origin: "Derived from natural mineral waxes.",
            },
          ],
        },
      },
      lifestyle: [
        "Use a humidifier in dry environments to add moisture to the air.",
        "Take shorter, lukewarm showers instead of hot baths.",
        "Apply moisturizer immediately after bathing while skin is still damp.",
        "Drink plenty of water to hydrate from within.",
        "Avoid harsh soaps and opt for gentle, fragrance-free cleansers.",
      ],
      relatedProducts: [
        {
          name: "CeraVe Moisturizing Cream",
          price: 361,
          description:
            "A dermatologist-developed moisturizer with ceramides and hyaluronic acid for long-lasting hydration.",
          image: "https://tse3.mm.bing.net/th?id=OIP.CDpSfJ73q3OZbl5fCAhb5gHaIB&pid=Api&P=0&h=180",
        },
        {
          name: "Eucerin Advanced Repair Lotion",
          price: 999,
          description: "A fast-absorbing, fragrance-free lotion that hydrates and strengthens dry skin.",
          image: "https://tse4.mm.bing.net/th?id=OIP.5nRGuosCAz2G1POFniOvRQHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Aquaphor Healing Ointment",
          price: 299,
          description: "A thick, petroleum-based balm that repairs and protects extremely dry or cracked skin.",
          image: "https://tse2.mm.bing.net/th?id=OIP.cpYMK9bP1IaZ8oS1lQZJpAHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
    eczema: {
      name: "Eczema (Atopic Dermatitis)",
      description:
        "Eczema, also known as atopic dermatitis, is a chronic skin condition that causes red, dry, itchy, and inflamed skin. It is not contagious but often linked to allergies, asthma, or genetic factors. Triggers include irritants, allergens, weather changes, and stress.",
      symptoms: [
        "Dry, cracked, and scaly skin",
        "Red or brownish patches on the skin",
        "Severe itching, especially at night",
        "Swelling and inflammation in affected areas",
        "Oozing or crusting blisters (in severe cases)",
        "Sensitive and raw skin from frequent irritation",
        "Thickened, leathery skin due to prolonged scratching",
      ],
      treatments: {
        medicine: {
          description:
            "Eczema treatments focus on reducing inflammation, relieving itching, repairing the skin barrier, and preventing flare-ups.",
          remedies: [
            {
              name: "Hydrocortisone Cream",
              description: "A mild corticosteroid cream used to reduce itching, redness, and inflammation.",
              usage: "Apply a thin layer on affected areas 1-2 times daily.",
              origin: "Developed for dermatology use worldwide.",
            },
            {
              name: "Betamethasone Cream (Topical Corticosteroid)",
              description:
                "A stronger steroid cream used for moderate to severe eczema, reducing redness, swelling, and itching.",
              usage: "Apply a thin layer to affected areas once or twice daily, as prescribed.",
              origin: "Developed in the 1960s as a synthetic corticosteroid for treating inflammatory skin conditions.",
            },
          ],
        },
        traditional: {
          description:
            "Traditional and homeopathic treatments for eczema focus on natural ingredients that soothe inflammation, restore the skin barrier, and reduce itching without the side effects of steroids. These remedies come from Ayurveda, Homeopathy, and Herbal Medicine.",
          remedies: [
            {
              name: "Kumkumadi Tailam",
              description: "A herbal oil blend that nourishes dry, inflamed skin and reduces pigmentation.",
              usage: "Apply a few drops at night for deep skin hydration.",
              origin: "Ayurveda, India.",
            },
            {
              name: "Coconut Oil",
              description: "Rich in fatty acids, coconut oil deeply hydrates dry skin and prevents infections.",
              usage: "Apply virgin coconut oil after a bath to lock in moisture.",
              origin: "Traditional remedy in South Asia and Polynesian medicine.",
            },
          ],
        },
      },
      lifestyle: [
        "Use fragrance-free moisturizers and skincare products.",
        "Avoid hot showers and use lukewarm water.",
        "Wear soft, breathable fabrics (cotton is best).",
        "Identify and avoid triggers (dust, stress, harsh soaps).",
        "Keep nails short to prevent skin damage from scratching.",
        "Use a humidifier in dry environments to retain skin moisture.",
      ],
      relatedProducts: [
        {
          name: "Vaseline Healing Jelly",
          price: 99,
          description: "A petroleum-based moisturizer that locks in moisture and protects sensitive skin.",
          image: "https://tse3.mm.bing.net/th?id=OIP.L44Bge3Hm-ZInRoM_6PAGwHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Eucerin Eczema Relief Cream",
          price: 150,
          description: "Formulated with ceramides and colloidal oatmeal to strengthen the skin barrier.",
          image: "https://tse3.mm.bing.net/th?id=OIP.MAlIChvMa-raOhu2U3cW3AHaHa&pid=Api&P=0&h=180",
        },
        {
          name: "Aquaphor Healing Ointment",
          price: 219,
          description:
            "A petrolatum-based ointment that locks in moisture and helps repair cracked, dry skin caused by eczema.",
          image: "https://tse2.mm.bing.net/th?id=OIP.fDrPF3ZuQ0CSh7lJWMMghgHaHa&pid=Api&P=0&h=180",
        },
      ],
    },
  }

  // Default to acne if the condition doesn't exist in our data
  const conditionKey = params.condition.toLowerCase()
  const condition = conditions[conditionKey] || conditions["acne"]

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <Link href="/skin" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Skin Solutions
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

