import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "ForgeSight | Manufacturing Order Execution Intelligence",
  description:
    "See which manufacturing orders may be at risk, why they need attention, and what to investigate next with ForgeSight.",
  openGraph: {
    title: "ForgeSight | Manufacturing Order Execution Intelligence",
    description:
      "Bring order, production, quality, and dispatch information into one execution-visibility layer.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
