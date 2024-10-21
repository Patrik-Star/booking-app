"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { addDays, format, isSameDay, isSameMonth, startOfMonth } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface Event {
  id: string
  title: string
  datetime: Date
  description: string
  location?: string
}

interface EventCalendarProps {
  events?: Event[]
  className?: string
}

export default function EventCalendar({ events = [], className }: EventCalendarProps) {
  const [currentMonth, setCurrentMonth] = React.useState(new Date())

  const firstDayOfMonth = startOfMonth(currentMonth)
  const daysInMonth = Array.from({ length: 35 }, (_, i) => addDays(firstDayOfMonth, i - firstDayOfMonth.getDay()))

  const goToPreviousMonth = () => setCurrentMonth(prev => addDays(prev, -prev.getDate()))
  const goToNextMonth = () => setCurrentMonth(prev => addDays(prev, 32 - prev.getDate()))

  return (
    <Card className={cn("w-[300px] p-4", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{format(currentMonth, "MMMM yyyy")}</h2>
        <div className="flex space-x-1">
          <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {["M", "T", "W", "T", "F", "S", "S"].map(day => (
          <div key={day} className="text-sm font-medium text-muted-foreground">
            {day}
          </div>
        ))}
        {daysInMonth.map((date, index) => {
          const isCurrentMonth = isSameMonth(date, currentMonth)
          const isToday = isSameDay(date, new Date())
          const dayEvents = events.filter(event => isSameDay(event.datetime, date))
          const hasEvent = dayEvents.length > 0

          return (
            <Popover key={index}>
              <PopoverTrigger asChild>
                <div
                  className={cn(
                    "aspect-square flex flex-col items-center justify-center relative cursor-pointer",
                    !isCurrentMonth && "text-muted-foreground",
                    isToday && "bg-accent text-accent-foreground rounded-full"
                  )}
                >
                  <span className="text-sm">{format(date, "d")}</span>
                  {hasEvent && (
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                  )}
                </div>
              </PopoverTrigger>
              {hasEvent && (
                <PopoverContent className="w-64 p-0" align="start">
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{format(date, "MMMM d, yyyy")}</h3>
                    <ul className="space-y-2">
                      {dayEvents.map(event => (
                        <li key={event.id} className="text-sm">
                          <span className="font-medium">{format(event.datetime, "h:mm a")}</span>
                          <p className="text-muted-foreground">{event.location}</p>
                          <p className="font-semibold">{event.title}</p>
                          <p className="text-muted-foreground">{event.description}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </PopoverContent>
              )}
            </Popover>
          )
        })}
      </div>
    </Card>
  )
}