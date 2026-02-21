import "./globals.css"
import Link from "next/link"
import { Header } from "@/components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main className="flex-1 min-h-[calc(100vh-4rem-6rem)]">
          {children}
        </main>
        <footer className="py-12 border-t bg-muted/30">
          <div className="container flex flex-col items-center justify-between gap-8 md:flex-row max-w-7xl mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:items-start items-center gap-2">
              <p className="text-sm font-bold tracking-tight">OSS Opportunities</p>
              <p className="text-xs text-muted-foreground max-w-[250px] leading-relaxed">
                Built by the community. Data maintained via YAML and GitHub.
              </p>
            </div>
            <div className="flex gap-8 text-xs text-muted-foreground uppercase tracking-widest font-bold">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="https://github.com" className="hover:text-primary transition-colors">GitHub</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
