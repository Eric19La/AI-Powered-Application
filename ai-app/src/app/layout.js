import "./globals.css";
import Navbar from "../components/Navbar/Navbar.jsx";

export const metadata = {
  title: "My AI-Powered App",
  description: "An application that generates creative AI Content",
  keywords: ["AI", "Next.js", "Flask"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
