'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function CreateEventPage() {
  const router = useRouter()
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const eventData = Object.fromEntries(formData.entries())
    
    // Here you would typically send the data to your API
    console.log(eventData)

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Event Created",
      description: "Your event has been successfully created.",
    })

    // Clear the form
    if (formRef.current) {
      formRef.current.reset()
    }

    // Optionally, redirect to another page
    // router.push('/events')
  }

  return (
    
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-4" 
        onClick={() => router.back()}
        aria-label="Go back"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <h1 className="text-2xl font-bold mb-6">Create New Event</h1>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" type="date" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="time">Time</Label>
          <Input id="time" name="time" type="time" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input id="location" name="location" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" name="description" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="maxAttendees">Maximum Attendees</Label>
          <Input id="maxAttendees" name="maxAttendees" type="number" min="1" required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" placeholder="$0.00" required />
        </div>
        
        <Button type="submit" className="w-full">Create Event</Button>
      </form>
    </div>
  )
}