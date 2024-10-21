"use client"
import React from 'react'
import { StickyHeader } from "@/components/navigation/sticky-header";
import SignInAndSignUpButtons from './signInAndSignOutButtons';
import { ResponsiveSidebarButton } from './responsive-sidebar-button';
import { ScrollArea } from '../ui/scroll-area';
import { SidebarContents } from './side-navigation-bar';

import { House } from 'lucide-react';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

function TopNavigationBar() {
    const router = useRouter()

    const handleClick = () => {
        router.push('/');
    }

    return (
        <StickyHeader className="p-2 flex items-center justify-between h-14 bg-blue-900 text-white">
            <div className="h-full flex items-center">
                Datacom Clubs
                <Button variant="ghost" className='flex-1' onClick={handleClick}>
                    <House />
                </Button>
            </div>
            <ResponsiveSidebarButton className="sm:hidden">
                <div className="sm:hidden fixed bg-background w-screen top-[calc(3.25rem+1px)] h-[calc(100vh-(3.25rem+1px))]">
                    <ScrollArea className="h-full">
                        <SidebarContents />
                    </ScrollArea>
                </div>
            </ResponsiveSidebarButton>

            <SignInAndSignUpButtons />
            
        </StickyHeader>
    )
}

export default TopNavigationBar