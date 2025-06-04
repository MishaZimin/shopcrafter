import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';
import { AuthGuard } from '@/features/auth/ui/AuthGuard';

export const metadata: Metadata = {
  title: 'Shopcrafter',
  description: 'Shopcrafter',
  icons: {
    icon: '/minilogo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Providers>
          <AuthGuard>{children} </AuthGuard>
        </Providers>
      </body>
    </html>
  );
}
