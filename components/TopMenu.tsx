import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { SimpleToggle } from '@/components/ui/simple-toggle';
import { siteConfig } from '@/config/site';

/**
 * Top navigation menu component
 * Displays site logo, navigation items, and user authentication controls
 */
export function TopMenu() {
  const { branding, github } = siteConfig;

  return (
    <>
      <header className="w-full py-4 md:px-0 px-6 flex justify-between items-center max-w-4xl mx-auto h-[67px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src={branding.logo} 
            alt={`${siteConfig.name} Logo`} 
            className="h-[30px] w-auto" 
          />
        </Link>

        {/* Right side navigation */}
        <div className="flex items-center gap-3">
          <SimpleToggle />
          <SignedIn>
            {/* User is signed in */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-row gap-3 font-mono">
              {/* GitHub link - conditionally rendered */}
              {github?.enabled && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    variant="outline"
                    className="flex flex-row gap-1.5 py-2 px-4 border-gray-300 text-design-gray text-sm font-medium"
                  >
                    <img
                      src="/github.svg"
                      alt="Github Logo"
                      className="size-[14px]"
                    />
                    <span>Github</span>
                  </Button>
                </a>
              )}
              
              {/* Sign up button */}
              <Link href="/upload">
                <Button
                  variant="default"
                  className="text-sm font-medium py-2 px-4 bg-foreground hover:bg-foreground/95 text-background"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </SignedOut>
        </div>
      </header>
    </>
  );
}
