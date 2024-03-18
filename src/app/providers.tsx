"use client"

import { NextUIProvider } from "@nextui-org/react";
import React from "react";

interface IProviders {
  children: React.ReactNode
}

export default function Providers({ children }: IProviders) {
  return <NextUIProvider> { children } </NextUIProvider>
};
