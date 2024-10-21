"use client"
import { Button } from "@/components/ui/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "@/convex/_generated/api";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import Hero from "@/components/layout/hero";
import Overview from "@/components/layout/overview";
import Updates from "@/components/layout/updates";
import EventCalender from "@/components/eventCalender";
import { EVENTS } from "../[clubId]/page";


export default function Home() {
  return (
    <main className="w-full min-h-[calc(100vh-(3.25rem+1px))]">
      <main className="w-full flex flex-col gap-8 p-5">
        <Authenticated>
          <div className="w-full flex justify-between">
            {/* <SignedInContent /> */}
            <Updates />
            <EventCalender events={EVENTS}/>
          </div>
        </Authenticated>
        <Unauthenticated>
          <Hero />
          <Overview />

        </Unauthenticated>
      </main>
    </main>
  );
}


function SignedInContent() {
  const { viewer, numbers } = useQuery(api.myFunctions.listNumbers, { count: 10, }) ?? {};
  const addNumber = useMutation(api.myFunctions.addNumber);

  if (viewer === undefined || numbers === undefined) {
    return (
      <>
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-full" />
      </>
    );
  }

  return (
    <>

      <p>
        <Button onClick={() => { void addNumber({ value: Math.floor(Math.random() * 10) }); }}>
          Add a random number
        </Button>
      </p>
      <p>
        Numbers:{" "}
        {numbers?.length === 0
          ? "Click the button!"
          : numbers?.join(", ") ?? "..."}
      </p>

      <p>
        To build a full page layout copy one of the included{" "}
        <Link target="_blank" href="/layouts">
          layouts
        </Link>
      </p>
    </>
  );
}
