import '../styles/globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="w-full h-full bg-[#22272e]">{children}</body>
    </html>
  )
}
