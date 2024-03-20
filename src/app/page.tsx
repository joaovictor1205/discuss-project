"use client"

import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import { useSession } from "next-auth/react";
import Profile from "@/components/profile";

export default function Home() {
  const session = useSession();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit"> Sign In </Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit"> Sign Out </Button>
      </form>

      <Profile />
    </div>
  );
}
