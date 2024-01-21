"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export function UiProviders({ children }) {
  const router = useRouter();
  return <NextUIProvider navigate={router}>{children}</NextUIProvider>;
}
