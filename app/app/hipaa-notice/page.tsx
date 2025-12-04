"use client"

import { ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HIPAANoticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-teal-600" />
            <h1 className="text-3xl font-bold text-blue-900">HIPAA Notice of Privacy Practices</h1>
          </div>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-semibold text-blue-900 mb-3">Joe&apos;s Pharmacy</h2>
              <p>27691 Capshaw Road, Harvest, AL 35749</p>
              <p>Phone: (256) 230-3416</p>
              <p>Email: thejoespharmacy@gmail.com</p>
              <p className="mt-3 font-medium">Effective Date: January 1, 2025</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
