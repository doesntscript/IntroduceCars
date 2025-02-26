import './globals.css'

export const metadata = {
  title: 'IntroduceCars',
  description: '......wait soon',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
