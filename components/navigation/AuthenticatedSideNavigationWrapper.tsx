// components/navigation/AuthenticatedSideNavigation.tsx
"use client"; // This is necessary to make the component a client-side component.

import { useUser } from '@clerk/clerk-react';
import SideNavigationBar from './side-navigation-bar';

export default function AuthenticatedSideNavigation() {
  const { isLoaded, isSignedIn } = useUser();

  // Don't render anything until the user data is loaded
  if (!isLoaded) return null;

  return isSignedIn ? <SideNavigationBar /> : null;
}
