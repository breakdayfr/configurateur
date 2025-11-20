import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Configurateur 3D - Hoodies Personnalisés',
  description: 'Configurateur 3D de vêtements personnalisés pour équipes et particuliers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
