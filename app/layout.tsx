import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jonathan Merlo Apuril | Full Stack Web Developer',
  description: 'Full Stack Web Developer based in Asunción, Paraguay. Specializing in React, Next.js, TypeScript, and modern backend technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}