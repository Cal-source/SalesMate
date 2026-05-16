import "./globals.css";

export const metadata = {
  title: "SalesMate",
  description: "Smart CRM for tracking leads and sales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B1220] text-white">
        {children}
      </body>
    </html>
  );
}
