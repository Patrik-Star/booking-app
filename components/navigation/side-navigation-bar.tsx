"use client"
import React from 'react'
import { StickySidebar } from './sticky-sidebar';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';

const sidebar_data = [
    { title: "Badminton", id: 1 },
    { title: "PickelBall", id: 2 },
]

export const SidebarContents = () => {

    const router = useRouter();

    return (
        <div className='flex flex-col gap-1 p-2'>
            {sidebar_data.map(({ title, id }) => (
                <Button
                    key={id}
                    className='w-full'
                    onClick={() => router.push(`/${id}`)}
                >{title}</Button>
            ))}
        </div>
    )
};


function SideNavigationBar() {
    const { isLoaded, isSignedIn } = useUser();

    if (!isLoaded) return null;
    if(!isSignedIn) return null;

    return (
        <StickySidebar className="hidden bg-blue-100 sm:block top-[calc(3.25rem+1px)] h-[calc(100vh-(3.25rem+1px))] md:w-72">
            <SidebarContents />
        </StickySidebar>
    )
}

export default SideNavigationBar
