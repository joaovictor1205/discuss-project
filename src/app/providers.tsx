"use client"

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface IProviders {
  children: React.ReactNode
}

export default function Providers({ children }: IProviders) {
  return (
    <SessionProvider> 
      <NextUIProvider> 
        { children } 
      </NextUIProvider> 
    </SessionProvider>
  );
};
