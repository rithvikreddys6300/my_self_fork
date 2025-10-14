import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ThemeToggle } from '@/components/ThemeToggle';

export function TopMenu() {
  return (
    <>
      <header className="w-full py-4 md:px-0 px-6 flex justify-between items-center max-w-4xl mx-auto h-[67px]">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Self.so Logo" className="h-[30px] w-auto logo-adaptive" />
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <SignedIn>
            {/* User is signed in */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex flex-row gap-3 font-mono ">
              <a
                href="https://github.com/nutlope/self.so"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className=" flex flex-row gap-1.5 py-2 px-4 border-gray-300 text-gray-600 dark:text-gray-300 text-sm font-medium"
                >
                  <img
                    src="/github.svg"
                    alt="Github Logo"
                    className="size-[14px]"
                  />
                  <span>Github</span>
                </Button>
              </a>
              <Link href="/upload">
                <Button
                  variant="default"
                  className="text-sm font-medium py-2 px-4 bg-gray-900 dark:bg-gray-100 hover:bg-gray-900/95 dark:hover:bg-gray-100/95 text-white dark:text-gray-900"
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
