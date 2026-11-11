import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SHANSHI 开发者工具箱",
    template: "%s | SHANSHI 开发者工具箱",
  },
  description: "按实际需要积累的开发者工具，帮助完成日常开发与调试。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="flex min-h-screen flex-col antialiased">
        <a href="#main-content" className="skip-link">
          跳到主要内容
        </a>
        <header className="border-b border-border">
          <div className="site-frame flex flex-wrap items-center justify-between gap-4 py-5">
            <Link href="/" className="text-sm font-semibold tracking-wide">
              SHANSHI <span className="ml-2 font-normal text-muted">开发者工具箱</span>
            </Link>
            <nav aria-label="主导航">
              <Link href="/" className="text-sm text-muted transition-colors hover:text-foreground">
                全部工具
              </Link>
            </nav>
          </div>
        </header>
        <main id="main-content" className="min-w-0 flex-1" tabIndex={-1}>
          {children}
        </main>
        <footer className="site-frame border-t border-border py-6 text-xs text-muted">
          SHANSHI · 为日常开发积累实用工具
        </footer>
      </body>
    </html>
  );
}
