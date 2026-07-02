import { NextStudioLayout } from "next-sanity/studio";

export default function StudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextStudioLayout>{children}</NextStudioLayout>;
}
