import { auth } from "@/auth";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from "@nextui-org/react";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          { 
            session?.user 
              ? <div>Signed In</div> 
              : <div>Signed out</div>
          }
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
