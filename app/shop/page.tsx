"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingCart, Filter, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ShopPage() {
  const [cart, setCart] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleAddToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const isProductInCart = (productId: number) => cart.includes(productId)

  // Added skin care products from skin solutions page
  const skinCareProducts = [
    {
      id: 101,
      name: "Tea Tree Oil Acne Treatment",
      description: "Natural antibacterial treatment that targets acne-causing bacteria and reduces inflammation.",
      price: 249,
      category: "Skin Care",
      image: "https://m.media-amazon.com/images/I/71gbUExc6PL.jpg",
      condition: "Acne",
    },
    {
      id: 102,
      name: "Neem & Turmeric Face Wash",
      description: "Ayurvedic cleanser that helps control acne and balance oily skin.",
      price: 164,
      category: "Skin Care",
      image: "https://m.media-amazon.com/images/I/61Qh-UGPaDL.jpg",
      condition: "Acne",
    },
    {
      id: 103,
      name: "Salicylic Acid Spot Treatment",
      description: "Targeted treatment that penetrates pores to clear stubborn acne.",
      price: 224,
      category: "Skin Care",
      image: "https://m.media-amazon.com/images/I/512IhBQ7PyL._AC_UF1000,1000_QL80_.jpg",
      condition: "Acne",
    },
    {
      id: 104,
      name: "Vitamin C Brightening Serum",
      description: "Powerful antioxidant serum that fades dark spots and evens skin tone.",
      price: 145,
      category: "Skin Care",
      image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/fairness/q/l/4/10-vitamin-c-brightening-face-serum-10ml-1-good-vibes-original-imagvyzyug2zdjeq.jpeg?q=20&crop=false",
      condition: "Dark Spots",
    },
    {
      id: 105,
      name: "Alpha Arbutin & Kojic Acid Cream",
      description: "Dual-action formula that inhibits melanin production to reduce hyperpigmentation.",
      price: 495,
      category: "Skin Care",
      image: "https://bakecosmetic.com/cdn/shop/files/1_47356e85-57fd-48d7-9d01-2c5c66bdca93.png?v=1716979696&width=1946",
      condition: "Dark Spots",
    },
    {
      id: 106,
      name: "Licorice Root Extract Serum",
      description: "Natural brightening agent that reduces dark spots without irritation.",
      price: 172,
      category: "Skin Care",
      image: "https://m.media-amazon.com/images/I/51UMuDbAX1L.jpg",
      condition: "Dark Spots",
    },
    {
      id: 107,
      name: "Coal Tar Psoriasis Shampoo",
      description: "Medicated shampoo that helps slow skin cell growth and reduce scaling.",
      price: 162,
      category: "Skin Care",
      image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ed610dee3e5a4cc4a0756f204acb55eb.jpg",
      condition: "Psoriasis",
    },
    {
      id: 108,
      name: "Aloe Vera & Oatmeal Moisturizer",
      description: "Soothing moisturizer that calms irritated skin and reduces redness.",
      price: 599,
      category: "Skin Care",
      image: "https://www.sngcosmetics.in/cdn/shop/files/image00001.jpg?v=1693052339",
      condition: "Eczema",
    },
    {
      id: 109,
      name: "Ceramide Repair Cream",
      description: "Intensive moisturizer that restores the skin barrier and prevents moisture loss.",
      price: 314,
      category: "Skin Care",
      image: "https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/7/7/779e8518904417311327_1.jpg",
      condition: "Dry Skin",
    },
    {
      id: 110,
      name: "Charcoal Pore Strips",
      description: "Deep cleansing strips that remove blackheads and unclog pores.",
      price: 195,
      category: "Skin Care",
      image: "https://www.hiphopskincare.com/cdn/shop/files/15-02.jpg?v=1708670326",
      condition: "Blackheads",
    },
    {
      id: 111,
      name: "Hypoallergenic Calming Lotion",
      description: "Gentle formula designed for sensitive, allergy-prone skin.",
      price: 642,
      category: "Skin Care",
      image: "https://www.netmeds.com/images/product-v1/600x600/840180/physiogel_ai_calming_relief_lotion_100ml_120530_0_6.jpg",
      condition: "Skin Allergies",
    },
    {
      id: 112,
      name: "Aloe Vera After-Sun Gel",
      description: "Cooling gel that soothes sunburned skin and accelerates healing.",
      price: 277,
      category: "Skin Care",
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTndPsicPkl5Y-peidyQ8_LGpHtn1BtgC4pj-cPE-SsCEvJ5VhzXLoOEJ9CQPBa_82E44HnJ5kB39G9d0fcvvU4lK7JLJiyPe7VE00AYfZpSPJXt2hK6ZoE",
      condition: "Sunburn",
    },
    {
      id: 13,
      name: "Kumkumadi Brightening Face Oil",
      description: "Ayurvedic facial oil that brightens complexion and reduces hyperpigmentation.",
      price: 689,
      category: "Skin Care",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/ayurvedic/a/o/t/kumkumadi-oil-for-skin-radiance-brightening-1-lavaya-original-imah5gb7bhqb7ggf.jpeg?q=20&crop=false",
    },
    
  ]

  const products = [
    {
      id: 1,
      name: "Triphala Tablets",
      description: "Supports digestive health and detoxification.",
      price: 299,
      category: "Ayurveda",
      image:
        "https://m.media-amazon.com/images/I/71jvAIxYwkL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      name: "Neem Capsules",
      description: "Promotes healthy skin and immune function.",
      price: 204,
      category: "Ayurveda",
      image:
        "https://m.media-amazon.com/images/I/71frSTC2ybL.jpg",
    },
    {
      id: 3,
      name: "Tulsi Tea",
      description: "Reduces stress and supports respiratory health.",
      price: 139,
      category: "Ayurveda",
      image:
        "https://www.bigbasket.com/media/uploads/p/xxl/40099254_6-tulsi-tea-dana.jpg",
    },
    {
      id: 4,
      name: "Arnica Cream",
      description: "Relieves muscle pain and reduces inflammation.",
      price: 68,
      category: "Homeopathy",
      image: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_400/https://www.arnicare.com/wp-content/uploads/2022/09/202108-Website-Arnicare-Products-Bruise_Topical-NOBG-400x400.jpg",
    },
    {
      id: 5,
      name: "Belladonna Pills",
      description: "Treats fever and inflammation.",
      price: 85,
      category: "Homeopathy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNuERlR9Wn0xBxnD3RcGpZ78bdlcZWv_mJSA&s",
    },
    {
      id: 6,
      name: "Calendula Ointment",
      description: "Heals wounds and soothes skin irritations.",
      price: 192,
      category: "Homeopathy",
      image: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/ec22476b3b39467e912b2d69727927d0.jpg",
    },
    {
      id: 7,
      name: "Paracetamol Tablets",
      description: "Relieves pain and reduces fever.",
      price: 11.51,
      category: "Allopathy",
      image: "https://www.stelonbiotech.com/wp-content/uploads/2022/04/PYREMUST-650-TAB.jpg",
    },
    {
      id: 8,
      name: "Ibuprofen Capsules",
      description: "Reduces inflammation and relieves pain.",
      price: 129,
      category: "Allopathy",
      image: "https://m.media-amazon.com/images/I/71yEtXkI2uL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 9,
      name: "Antacid Liquid",
      description: "Neutralizes stomach acid and relieves heartburn.",
      price: 148.99,
      category: "Allopathy",
      image:
        "https://cdn01.pharmeasy.in/dam/products_otc/Z63893/liveasy-wellness-antacid-mint-flavour-sugar-free-bottle-of-200ml-oral-liquid-7-1695206780.jpg",
    },
  ]

  const hairCareProducts = [
    {
      id: 201,
      name: "Dutasteride",
      description:
        "A stronger alternative to Finasteride, Dutasteride inhibits more enzymes responsible for converting testosterone to DHT, which contributes to hair loss.",
      price: 85.3,
      category: "Hair Care",
      image: "https://tse4.mm.bing.net/th?id=OIP.C3UYVOEU7LLO19tWl7TU5wHaIi&pid=Api&P=0&h=180",
      condition: "Hair Loss",
    },
    {
      id: 202,
      name: "Fenugreek Hair Mask",
      description: "A protein-rich mask that strengthens hair roots and improves scalp condition.",
      price: 19.99,
      category: "Hair Care",
      image: "https://tse1.mm.bing.net/th?id=OIP.fx6XRwDJKMSN2P6mmZilVwHaFE&pid=Api&P=0&h=180",
      condition: "Hair Loss",
    },
    {
      id: 203,
      name: "Onion Juice",
      description:
        "Rich in sulfur, onion juice boosts collagen production and improves blood flow to the hair follicles.",
      price: 23.0,
      category: "Hair Care",
      image: "https://tse2.mm.bing.net/th?id=OIP.y9jFSorI855VEshosSVN2AHaFA&pid=Api&P=0&h=180",
      condition: "Hair Loss",
    },
  ]

  // Add health products categorized by treatment type
  const healthProducts = {
    ayurveda: [
      {
        id: 301,
        name: "Gymnema Sylvestre (Gurmar)",
        description: "Known as 'sugar destroyer' in Ayurveda, it helps reduce blood sugar levels and sugar cravings.",
        price: 299,
        category: "Ayurveda",
        image: "https://statics.docmorris.de/static/produkte/TY65W34Y/docmorris/ps420r/vitasanum-gymnema-sylvestre-gurmar-400-mg-100-kaps-TY65W34Y-default-1734955787898262.jpeg",
        condition: "Diabetes",
      },
      {
        id: 302,
        name: "Bitter Gourd (Karela) Capsules",
        description: "Contains compounds that act like insulin, helping to reduce blood glucose levels.",
        price: 169,
        category: "Ayurveda",
        image: "https://m.media-amazon.com/images/I/61B4HwA3kfL._AC_UF1000,1000_QL80_.jpg",
        condition: "Diabetes",
      },
    ],
    allopathy: [
      {
        id: 321,
        name: "Metformin",
        description: "First-line medication for type 2 diabetes that reduces glucose production in the liver.",
        price: 43.01,
        category: "Allopathy",
        image: "https://www.netmeds.com/images/product-v1/600x600/916665/metform_500mg_tablet_20s_0_0.jpg",
        condition: "Diabetes",
      },
      {
        id: 322,
        name: "Insulin",
        description:
          "Hormone that helps glucose enter cells for energy. Used when the body doesn't produce enough insulin.",
        price: 57,
        category: "Allopathy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTEWLXDfmRAtq_qAkPsQjqI2RLMGpkmDx19w&s",
        condition: "Diabetes",
      },
    ],
    homeopathy: [
      {
        id: 341,
        name: "Uranium Nitricum 30C",
        description: "Used for diabetes with excessive urination, great thirst, and emaciation.",
        price: 10.0,
        category: "Homeopathy",
        image: "https://m.media-amazon.com/images/I/31VXMyuA5EL._AC_UF1000,1000_QL80_.jpg",
        condition: "Diabetes",
      },
      {
        id: 342,
        name: "Syzygium Jambolanum 30C",
        description: "Particularly effective for reducing blood sugar levels and excessive urination.",
        price: 70,
        category: "Homeopathy",
        image: "https://i.ebayimg.com/images/g/09YAAOSwuahk1h~d/s-l400.jpg",
        condition: "Diabetes",
      },
    ],
    traditional: [],
  }

  // Combine all products for the "All Products" tab
  const allProducts = [
    ...products,
    ...skinCareProducts,
    ...hairCareProducts,
    ...healthProducts.ayurveda,
    ...healthProducts.allopathy,
    ...healthProducts.homeopathy,
    ...healthProducts.traditional,
  ]

  const filteredProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container px-4 py-12 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Shop Natural Health Products</h1>
        <p className="text-muted-foreground">
          Discover high-quality products from Ayurveda, Homeopathy, and other natural healing traditions.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-64 space-y-6 bg-muted p-4 rounded-lg">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Categories</h3>
              <Button variant="ghost" size="sm" className="h-8 px-2">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            <div className="space-y-1">
              {categories.map((category) => (
                <Button key={category} variant="ghost" className="w-full justify-start h-8 px-2">
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Health Concerns</h3>
            <div className="space-y-1">
              {healthConcerns.map((concern) => (
                <Button key={concern} variant="ghost" className="w-full justify-start h-8 px-2">
                  {concern}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>
            <div className="grid grid-cols-2 gap-2">
              <Input type="number" placeholder="Min" />
              <Input type="number" placeholder="Max" />
            </div>
            <Button className="w-full mt-2">Apply</Button>
          </div>
        </div>

        <div className="flex-1">
          <Tabs defaultValue="all" className="w-full mb-8">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="ayurveda">Ayurveda</TabsTrigger>
              <TabsTrigger value="homeopathy">Homeopathy</TabsTrigger>
              <TabsTrigger value="traditional">Allopathy</TabsTrigger>
              <TabsTrigger value="skin-care">Skin Care</TabsTrigger>
              <TabsTrigger value="hair-care">Hair Care</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden">
                    <div className="aspect-square relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">{product.category}</span>
                        <span className="font-semibold">₹{product.price.toFixed(2)}</span>
                      </div>
                      <CardTitle className="text-base mt-2">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full"
                        onClick={() => handleAddToCart(product.id)}
                        disabled={isProductInCart(product.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ayurveda" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...products.filter((product) => product.category === "Ayurveda"), ...healthProducts.ayurveda]
                  .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                            {product.category}
                          </span>
                          <span className="font-semibold">₹{product.price.toFixed(2)}</span>
                        </div>
                        <CardTitle className="text-base mt-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full"
                          onClick={() => handleAddToCart(product.id)}
                          disabled={isProductInCart(product.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="homeopathy" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...products.filter((product) => product.category === "Homeopathy"), ...healthProducts.homeopathy]
                  .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                            {product.category}
                          </span>
                          <span className="font-semibold">₹{product.price.toFixed(2)}</span>
                        </div>
                        <CardTitle className="text-base mt-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full"
                          onClick={() => handleAddToCart(product.id)}
                          disabled={isProductInCart(product.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="traditional" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...products.filter((product) => product.category === "Allopathy"), ...healthProducts.allopathy]
                  .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                            {product.category}
                          </span>
                          <span className="font-semibold">₹{product.price.toFixed(2)}</span>
                        </div>
                        <CardTitle className="text-base mt-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full"
                          onClick={() => handleAddToCart(product.id)}
                          disabled={isProductInCart(product.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            <TabsContent value="skin-care" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skinCareProducts
                  .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                            {product.category}
                          </span>
                          <span className="font-semibold">₹{product.price.toFixed(2)}</span>
                        </div>
                        <CardTitle className="text-base mt-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full"
                          onClick={() => handleAddToCart(product.id)}
                          disabled={isProductInCart(product.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="hair-care" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {hairCareProducts
                  .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((product) => (
                    <Card key={product.id} className="overflow-hidden">
                      <div className="aspect-square relative">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                            {product.category}
                          </span>
                          <span className="font-semibold">₹{product.price.toFixed(2)}</span>
                        </div>
                        <CardTitle className="text-base mt-2">{product.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          className="w-full"
                          onClick={() => handleAddToCart(product.id)}
                          disabled={isProductInCart(product.id)}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          {isProductInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
          {cart.length > 0 && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
              Product Added to Cart!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const categories = [
  "All Categories",
  "Herbs & Supplements",
  "Oils & Extracts",
  "Teas & Beverages",
  "Skin Care",
  "Hair Care",
  "Personal Care",
  "Health Devices",
]

const healthConcerns = [
  "Diabetes",
  "Arthritis",
  "Digestive Health",
  "Skin Problems",
  "Hair Care",
  "Stress & Anxiety",
  "Immunity",
]

