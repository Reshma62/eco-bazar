"use client";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Toaster } from "react-hot-toast";

export function UiProviders({ children }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router}>
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </NextUIProvider>
  );
}
