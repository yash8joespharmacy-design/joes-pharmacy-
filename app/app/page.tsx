"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PharmacyApp() {
  const [activeTab, setActiveTab] = useState("prescriptions")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <header className="bg-teal-700 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Joe's Pharmacy</h1>
            <p className="text-sm text-teal-100">Your Health, Our Priority</p>
          </div>
          <Button onClick={() => setIsLoggedIn(!isLoggedIn)} variant="secondary">
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 max-w-6xl">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Prescriptions Tab */}
          <TabsContent value="prescriptions" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>My Prescriptions</CardTitle>
                <CardDescription>View and manage your medications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Lisinopril 10mg</h3>
                    <p className="text-sm text-muted-foreground">Dr. Smith - Last filled: Nov 15, 2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">2 refills left</Badge>
                    <Button size="sm">Request Refill</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Metformin 500mg</h3>
                    <p className="text-sm text-muted-foreground">Dr. Johnson - Last filled: Dec 1, 2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">1 refill left</Badge>
                    <Button size="sm">Request Refill</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-4 mt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Pharmacist Consultation</CardTitle>
                  <CardDescription>Talk to our pharmacist about your medications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Schedule Consultation</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Immunizations</CardTitle>
                  <CardDescription>Get your flu shots and other vaccines</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Book Immunization</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-4 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Appointment</CardTitle>
                <CardDescription>Book a consultation with our pharmacy team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(256) 230-3416" />
                </div>
                <Button className="w-full">Schedule Appointment</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-4 mt-6">
            {isLoggedIn ? (
              <Card>
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>View your account information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Personal Information</h3>
                    <p className="text-sm">John Doe</p>
                    <p className="text-sm text-muted-foreground">john.doe@example.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">PioneerRx Integration</h3>
                    <Badge variant="outline" className="bg-green-50">
                      Connected
                    </Badge>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">HIPAA Compliance</h3>
                    <p className="text-sm text-muted-foreground">All your data is encrypted and HIPAA compliant</p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Login Required</CardTitle>
                  <CardDescription>Please login to view your profile</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setIsLoggedIn(true)} className="w-full">
                    Login
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-12 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">27691 Capshaw Road</p>
              <p className="text-sm">Harvest, AL 35749</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Hours</h3>
              <p className="text-sm">Mon-Fri: 9am-6pm</p>
              <p className="text-sm">Sat: 10am-6pm</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Get in Touch</h3>
              <p className="text-sm">Phone: (256) 230-3416</p>
              <p className="text-sm">Email: thejoespharmacy@gmail.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
