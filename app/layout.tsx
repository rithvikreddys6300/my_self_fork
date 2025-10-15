import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import { ReactQueryClientProvider } from '@/components/ReactQueryClientProvider';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';
import { siteConfig } from '@/config/site';

const mono = JetBrains_Mono({ subsets: ['latin'] });

/**
 * Site metadata configuration
 * Dynamically generated from site config
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.displayName,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.displayName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.displayName,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <PlausibleProvider domain={siteConfig.analytics?.domain || "localhost"}>
        <ReactQueryClientProvider>
          <html lang="en" suppressHydrationWarning>
            <head>
              {/* {process.env.NODE_ENV === "development" && (
              <script
                crossOrigin="anonymous"
                src="//unpkg.com/react-scan/dist/auto.global.js"
              />
            )} */}
              {/* rest of your scripts go under */}
            </head>
            <body className={`${mono.className} min-h-screen flex flex-col`}>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem={false}
                disableTransitionOnChange
              >
                <main className="flex-1 flex flex-col">{children}</main>
                <Toaster richColors position="bottom-center" />
              </ThemeProvider>
            </body>
          </html>
        </ReactQueryClientProvider>
      </PlausibleProvider>
    </ClerkProvider>
  );
}
