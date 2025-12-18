"use client";

import { Toaster } from "@/components/ui/sonner";
import { WaitlistSignup } from "@/components/waitlist-signup";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-radial from-white dark:from-gray-800 to-gray-200 dark:to-gray-900">
      <div className="content relative z-10 w-full">
        <WaitlistSignup />
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(23 23 23)",
            color: "white",
            border: "1px solid rgb(63 63 70)",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
    </main>
  );
}
