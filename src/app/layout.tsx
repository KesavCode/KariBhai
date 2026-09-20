import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

// 1. ADVANCED SEO METADATA
export const metadata: Metadata = {
  title: "KariBhai | Premium Halal Mutton & Chicken in Tiruppur",
  description: "Experience the finest, freshest, and most hygienic Halal Mutton and Chicken cuts. Located at Pudur Pirivu Bus Stop, Dharapuram Road, Tiruppur.",
  keywords: "Mutton shop Tiruppur, Halal chicken Tiruppur, KariBhai, fresh meat delivery, premium mutton, Kari Bhai butcher",
  openGraph: {
    title: "KariBhai | Premium Halal Meat in Tiruppur",
    description: "100% Halal Certified Mutton & Chicken. Freshly cut and ethically sourced.",
    url: "https://karibhai.com", // Change to your actual domain later
    siteName: "KariBhai",
    images: [{ url: "/karibhai-logo.png", width: 800, height: 800, alt: "KariBhai Logo" }],
    locale: "en_IN",
    type: "website",
  },
};

// 2. GOOGLE LOCAL BUSINESS SCHEMA (Helps Google Maps & Search ranking)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MeatStore",
  "name": "KariBhai",
  "image": "https://karibhai.com/karibhai-logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pudur Pirivu Bus Stop, Dharapuram Road",
    "addressLocality": "Tiruppur",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0827", // Example lat - update to exact if you have it
    "longitude": "77.3400" // Example long - update to exact if you have it
  },
  "url": "https://maps.app.goo.gl/jL7j6HJ4jG67DxX78?g_st=aw",
  "telephone": "Add Phone Number Here",
  "servesCuisine": ["Halal Meat", "Mutton", "Chicken"],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "06:00",
      "closes": "21:00"
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inject Schema into the head */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-sans bg-kari-dark text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}