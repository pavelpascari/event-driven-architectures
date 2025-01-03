import { BaseShell } from "@/components/layouts/base-shell";
import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <BaseShell>{children}</BaseShell>
  );
}
