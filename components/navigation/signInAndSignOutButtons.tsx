import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "../ui/button";


function SignInAndSignUpButtons() {
    return (
      <div className="flex gap-4">
        <Authenticated>
          <UserButton afterSignOutUrl="#" />
        </Authenticated>
        <Unauthenticated>
          <SignInButton mode="modal">
            <Button variant="ghost">Sign in</Button>
          </SignInButton>
          <SignUpButton mode="modal">
            <Button>Sign up</Button>
          </SignUpButton>
        </Unauthenticated>
      </div>
    );
  }

export default SignInAndSignUpButtons;