import "./globals.css";

export const metadata = {
  title: "Sunny",
  description: "",
  icons: {
    icon: '/assets/sunnylogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
