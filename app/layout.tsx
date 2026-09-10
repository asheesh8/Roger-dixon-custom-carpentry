import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://roger-dixon-custom-carpentry.dear-rhino-4065.chatgpt.site',
  ),
  title: 'Roger Dixon | Custom Carpentry in Burlington, VT',
  description:
    'Custom carpentry, trim, decks, flooring, and remodeling by Roger Dixon in Burlington, Vermont. Browse project photos and call (786) 691-5247.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
