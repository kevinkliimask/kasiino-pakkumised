import { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';

import './globals.css';
import Header from '@/components/header';

export const metadata: Metadata = {
  metadataBase: new URL('https://kasiinopakkumised.ee'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: 'Kasiinopakkumised',
    template: '%s | Kasiinopakkumised',
  },
  description: 'Kasiinopakkumised, kust saab võita reaalselt raha',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="et">
        <body className="antialiased">
          <Header />
          <main className="flex flex-col max-w-6xl mx-auto px-8 py-16">{children}</main>
        </body>
      </html>
    </ViewTransitions>
  );
}
