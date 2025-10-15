import { siteConfig } from '@/config/site';

/**
 * Footer component
 * Displays site footer with powered by information and social links
 */
export function Footer() {
  const { github } = siteConfig;

  return (
    <footer className="w-full py-4 px-6 mt-auto border-t border-gray-200">
      <div className="max-w-4xl justify-between items-center mx-auto w-full flex flex-col-reverse md:flex-row gap-2">
        <div className="text-sm text-design-gray font-mono font-bold">
          Powered by{' '}
          <a
            target="_blank"
            href="https://togetherai.link"
            className="text-foreground underline underline-offset-2"
          >
            Together.ai
          </a>{' '}
          &{' '}
          <a
            target="_blank"
            href="https://togetherai.link"
            className="text-foreground underline underline-offset-2"
          >
            Llama 3.3
          </a>
        </div>

        <div className="flex gap-2">
          {/* GitHub link - conditionally rendered */}
          {github?.enabled && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={github.url}
              className="size-6 flex items-center justify-center border-design-gray border rounded-md"
            >
              <img src="/footer/github.svg" className="size-4" alt="GitHub" />
              <span className="sr-only">GitHub</span>
            </a>
          )}
          
          {/* Social link - could be made configurable in the future */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/nutlope"
            className="size-6 flex items-center justify-center border-design-gray border rounded-md"
          >
            <img src="/footer/x.svg" className="size-4" alt="Social" />
            <span className="sr-only">Social</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
