'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder to avoid hydration mismatch
    return (
      <Button variant="outline" size="sm" className="w-9 h-9 p-0">
        <div className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-9 h-9 p-0 border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-900/95 dark:hover:bg-gray-100/95"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-slate-600" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
