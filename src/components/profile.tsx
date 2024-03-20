"use client"

import { useSession } from "next-auth/react"

export default function Profile() {
  const session = useSession();

  if (session.data) {
    return (
      session.data.user
        ? <div> { JSON.stringify(session.data.user) } </div> 
        : <div> Signed Out </div>
    );
  }
  return <p>Please, sign in</p>
}
