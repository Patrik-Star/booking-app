"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"
import { Minus, UserPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

interface Attendee {
  id: string
  name: string
  avatar: string
}

interface EventCardProps {
  id: number
  title: string
  date: Date
  time: string
  description: string
  location: string
  maxAttendees: number
  price: string
}

export default function EventCard({ id, title, date, time, description, location, maxAttendees, price }: EventCardProps) {
  const [attendees, setAttendees] = useState<Attendee[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulating a database call to get attendees
    const fetchAttendees = async () => {
      setIsLoading(true)
      try {
        // Replace this with your actual database call
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating network delay
        const fetchedAttendees: Attendee[] = [
          { id: "user1", name: "Alice Johnson", avatar: "/placeholder.svg?height=32&width=32" },
          { id: "user2", name: "Bob Smith", avatar: "/placeholder.svg?height=32&width=32" },
        ]
        setAttendees(fetchedAttendees)
      } catch (error) {
        console.error("Error fetching attendees:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAttendees()
  }, [id]) // Fetch attendees when the event id changes

  const handleAddMe = async () => {
    setIsLoading(true)
    try {
      // Replace this with your actual database call to add an attendee
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulating network delay
      const newAttendee: Attendee = {
        id: `user-${attendees.length + 1}`,
        name: `User ${attendees.length + 1}`,
        avatar: `/placeholder.svg?height=32&width=32`,
      }
      setAttendees(prevAttendees => [...prevAttendees, newAttendee])
    } catch (error) {
      console.error("Error adding attendee:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full ">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 border-r">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
              {format(date, "MMMM d, yyyy")}
              <p>Time: {time}</p>
              <p className="text-sm text-muted-foreground">
                Location: {location}
              </p>
              <p>Price: {price}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
        </div>
        <div className="w-full md:w-72 p-4">
          <div className="flex gap-2 justify-between items-center">
            <h3 className="font-semibold mb-2">Attendees ({attendees.length}/{maxAttendees})</h3>
            <Button variant="destructive" className="text-white text-xs">
              remove me
            </Button>
          </div>
          {isLoading ? (
            <p className="text-sm text-muted-foreground">Loading attendees...</p>
          ) : (
            <div className="space-y-2 mb-4 max-h-40 overflow-y-auto grid grid-cols-2">
              {attendees.map((attendee) => (
                <div key={attendee.id} className="flex items-center justify-start">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={attendee.avatar} alt={attendee.name} />
                    <AvatarFallback>{attendee.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{attendee.name}</span>
                </div>
              ))}
            </div>
          )}
          <Separator className="my-4" />
          <Button onClick={handleAddMe} className="w-full" disabled={isLoading || attendees.length >= maxAttendees}>
            {!isLoading && !(attendees.length >= maxAttendees) && (<>
              <UserPlus className="mr-2 h-4 w-4" />
              <p>Add</p>
            </>
            )}
            {isLoading && "Adding..."}
            {attendees.length >= maxAttendees && "Full"}

          </Button>
        </div>
      </div>
    </Card>
  )
}