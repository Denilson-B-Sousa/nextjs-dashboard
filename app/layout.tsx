import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";

/**The layout file is the best way to create a shared layout that all pages in your application can use. */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={` ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
