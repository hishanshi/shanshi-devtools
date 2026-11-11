import Link from "next/link";

export default function HomePage() {
  return (
    <div className="page-shell">
      <header className="mb-10">
        <h1 className="page-title">开发者工具箱</h1>
        <p className="page-description">把日常用到的工具放在一起，按需要逐步添加。</p>
      </header>
      <section aria-labelledby="tools-heading">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="tools-heading" className="text-sm font-medium">全部工具</h2>
          <span className="text-xs text-muted">1 个工具</span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/tools/personal-info-generator"
            className="surface-panel group block p-6 transition-colors hover:border-accent"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded border border-border bg-surface-muted px-2 py-1 font-mono text-sm" aria-hidden="true">ID</span>
              <span className="text-xs text-muted">开发测试 · 本地处理</span>
            </div>
            <h3 className="text-lg font-semibold">个人信息生成</h3>
            <p className="mt-2 text-sm leading-7 text-muted">
              按省份、银行批量生成测试资料，支持复制为文本或 CSV。
            </p>
            <span className="mt-6 inline-block text-sm group-hover:underline">打开工具 →</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
