"use client"
import * as React from "react"
import { addDays } from "date-fns"
import { Card } from "@/components/ui/card"
import EventCalender, { Event } from "@/components/eventCalender"
import EventCard from "@/components/layout/eventCard"

// Mock data for events
export const EVENTS: Event[] = [
  {
    id: 1,
    title: "Badminton",
    date: new Date('22 oct 2024'),
    time: "6pm-7pm",
    location: "Main Hall",
    description: "Yearly meeting to discuss club progress and future plans.",
    maxAttendees: 10,
    price: "TBC"
  },
  {
    id: 2,
    title: "Summer BBQ",
    date: addDays(new Date(), 2),
    time: "12:00",
    location: "99 Gillies Avenue",
    description: "Join us for our annual summer barbecue and social gathering.",
    maxAttendees: 12,
    price: "TBC"
  },
  {
    id: 3,
    title: "Workshop: Public Speaking",
    date: addDays(new Date(), 7),
    time: "18:30",
    location: "99 Gillies Avenue",
    description: "Improve your public speaking skills with our expert trainer.",
    maxAttendees: 4,
    price: "TBC"
  },
]

export default function ClubDashboard() {

  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 overflow-auto p-4">
        <div className="flex gap-4">
          <div className="md:col-span-2 space-y-4 flex-1 w-full">
            <h2 className="text-2xl font-bold border-b border-gray-200 pb-3">Upcoming Events</h2>
            {EVENTS.map((event) => (
              <EventCard
                key={event.id}
                id={event.id}
                title={event.title}
                date={event.date}
                time={event.time}
                description={event.description}
                location={event.location}
                maxAttendees={event.maxAttendees}
                price={event.price}
              />
            ))}
          </div>
          <div className="space-y-4 ">
            <h2 className="text-2xl font-bold">Calendar</h2>
            <Card className="w-min">
              <EventCalender events={EVENTS} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}


{/* <EventCalender events={[
                {id: "", title: "my title", datetime: new Date('22 oct 2024'), description: "a smol description", location: "the location"}, 
                {id: "", title: "my title", datetime: addDays(new Date(), 2), description: "a smol description", location: "the location"},
                {id: "", title: "my title", datetime: addDays(new Date(), 7), description: "a smol description", location: "the location"}, 
                ]} /> */}