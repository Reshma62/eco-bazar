import { Poppins } from "next/font/google";
import "./globals.css";
import { UiProviders } from "@/Providers/UiProviders";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Eco bazar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <UiProviders>{children}</UiProviders>
      </body>
    </html>
  );
}
