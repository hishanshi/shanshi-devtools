import type { Metadata } from "next";
import Link from "next/link";
import { PersonalInfoGenerator } from "@/components/personal-info-generator";

export const metadata: Metadata = {
  title: "个人信息生成",
  description: "按省份、银行批量生成测试用姓名、身份证号、手机号、地址、邮编和银行卡号，支持复制文本或 CSV。",
};

export default function PersonalInfoGeneratorPage() {
  return (
    <div className="page-shell">
      <header className="mb-8">
        <div className="mb-5 flex flex-wrap items-center gap-4 text-xs text-muted">
          <Link href="/" className="hover:text-foreground">← 全部工具</Link>
          <span>开发测试</span>
          <span>浏览器本地生成</span>
        </div>
        <h1 className="page-title">个人信息生成</h1>
        <p className="page-description">
          批量生成姓名、身份证号、手机号、地址、邮编和银行卡号，可复制为文本或 CSV。数据在浏览器本地生成。
        </p>
      </header>
      <PersonalInfoGenerator />
      <section className="mt-10 border-t border-border pt-6" aria-labelledby="usage-heading">
        <h2 id="usage-heading" className="text-sm font-medium">使用说明</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
          <li>选择省份、银行及数量后点击“生成”，支持单条或 5、10、20、50、100 条批量生成。</li>
          <li>身份证号和银行卡号包含格式校验位；地址与邮编为组合样例，不保证真实地理对应关系。</li>
          <li>随机结果仅供开发测试，不代表已核验身份或可用账户，请勿用于真实业务或身份认证。</li>
        </ul>
      </section>
    </div>
  );
}
