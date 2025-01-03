import type { Metadata } from "next";
import { BaseShell } from "@/components/layouts/base-shell";

// TODO: Update the metadata accordingly
export const metadata: Metadata = {
  title: "EDA | Event-Driven Architectures",
  description: "Event-Driven Architectures | A modern approach to building scalable and resilient systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseShell>{children}</BaseShell>
  );
}
