import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Work_Sans } from "next/font/google"
import "./globals.css"

const font = Work_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Muhammad Rafif | %s",
    default: "Muhammad Rafif | Data Scientist",
  },
  description:
    "A computer Science Student with a passion for Data.",
  metadataBase: new URL("https://rafif-portfolio.netlify.app/"),
  openGraph: {
    title: {
      template: "Muhammad Rafif| %s",
      default: "Muhammad Rafif | Data Scientist",
    },
    description:
      "A computer Science Student with a passion for Data.",
    url: "https://rafif-portfolio.netlify.app/",
    siteName: "Muhammad Rafif",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "muhammad rafif",
    "rafif",
    "computer science",
    "data analyst",
    "data scientist",
    "machine learning",
    "business intelligence",
    "bi",
    "creative",
    "creative data analyst",
    "creative data scientist",
    "machine learning engineer",
    "tech",
    "indonesia",
    "indonesian",
    "indonesian data analyst",
    "indonesian data scientist",
    "indonesian machine learning engineer",
    "indonesian computer science",
    "indonesian business intelligence",
    "portfolio",
    "portfolio data analyst",
    "portfolio data scientist",
    "portfolio machine learning",
    "portfolio business intelligence",
    "portfolio computer science",
    "portfolio bi",
    "data analytics portfolio",
    "data science portfolio"
  ],

  twitter: {
    card: "summary_large_image",
    title: {
      template: "Muhammad Rafif | %s",
      default: "Muhammad Rafif | Data Scientist",
    },
    description:
      "A computer Science Student with a passion for Data.",
    creator: "@rafiff23",
    images: [
      {
        url: "/public/images/og-images.jpg",
        width: 1000,
        height: 1200,
      },
    ],
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-zinc-50 text-zinc-800 antialiased dark:bg-neutral-900 dark:text-zinc-50",
          font.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme-mode"
        >
          <SmoothScrollProvider
            options={{
              smooth: true,
              mobile: {
                smooth: true,
              },
              tablet: {
                smooth: true,
              },
            }}
          >
            {children}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
