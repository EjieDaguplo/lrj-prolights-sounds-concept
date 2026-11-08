import { Archivo, Public_Sans } from "next/font/google";
import "./globals.css";

const display = Archivo({
  subsets: ["latin"],
  weight: ["800", "900"],
  variable: "--f-display",
});
const body = Public_Sans({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: "LRJ Pro Lights & Sound Concepts | Sound and lighting rental",
  description:
    "Sound system and stage lighting for weddings, birthdays, corporate events and concerts. Request a quote.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
