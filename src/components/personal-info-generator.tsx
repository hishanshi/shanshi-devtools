"use client";

import { useState } from "react";
import {
  BANKS,
  DEFAULT_PROFILE,
  DEFAULT_PROFILE_COUNT,
  PROFILE_COLUMNS,
  PROFILE_COUNT_OPTIONS,
  PROVINCES,
  RANDOM_OPTION,
  csvCell,
  generateProfiles,
  profileToText,
  type Profile,
} from "@/lib/personal-info-generator";

export function PersonalInfoGenerator() {
  const [provinceName, setProvinceName] = useState(RANDOM_OPTION);
  const [bankName, setBankName] = useState(RANDOM_OPTION);
  const [count, setCount] = useState(DEFAULT_PROFILE_COUNT);
  const [profiles, setProfiles] = useState<Profile[]>([DEFAULT_PROFILE]);
  const [copied, setCopied] = useState<"none" | "all" | "csv" | "error">("none");

  const regenerate = () => {
    const next = generateProfiles({ provinceName, bankName, count });
    setProfiles(next);
    setCopied("none");
  };

  const copyAll = async () => {
    const text = profiles.map(profileToText).join("\n\n");
    if (await writeClipboard(text)) {
      setCopied("all");
    } else {
      setCopied("error");
    }
  };

  const copyCsv = async () => {
    const header = PROFILE_COLUMNS.map((column) => column.label).join(",");
    const rows = profiles.map((profile) =>
      PROFILE_COLUMNS.map((column) => csvCell(profile[column.key])).join(","),
    );
    if (await writeClipboard([header, ...rows].join("\n"))) {
      setCopied("csv");
    } else {
      setCopied("error");
    }
  };

  const isBatch = profiles.length > 1;

  return (
    <div className="grid gap-5 lg:grid-cols-[18rem_minmax(0,1fr)]">
      <aside className="surface-panel h-fit p-5">
        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-foreground">身份证省份</span>
            <select
              value={provinceName}
              onChange={(event) => setProvinceName(event.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            >
              <option value={RANDOM_OPTION}>随机</option>
              {PROVINCES.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">银行卡银行</span>
            <select
              value={bankName}
              onChange={(event) => setBankName(event.target.value)}
              className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            >
              <option value={RANDOM_OPTION}>随机</option>
              {BANKS.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">生成数量</span>
            <select
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
              className="mt-2 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-accent"
            >
              {PROFILE_COUNT_OPTIONS.map((value) => (
                <option key={value} value={value}>
                  {value} 条
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          onClick={regenerate}
          className="mt-5 w-full rounded-md bg-accent px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
        >
          生成
        </button>

        <div className="mt-2 flex gap-2">
          <button
            onClick={copyAll}
            className="flex-1 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {copied === "all" ? "已复制" : "复制全部"}
          </button>
          <button
            onClick={copyCsv}
            className="flex-1 rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {copied === "csv" ? "已复制" : "复制 CSV"}
          </button>
        </div>

        <p role="status" className="mt-3 text-xs leading-5 text-muted">
          {copied === "error"
            ? "复制失败，请在 localhost 或 HTTPS 页面允许剪贴板权限后重试。也可以手动选择结果复制。"
            : copied === "all"
              ? "已复制全部测试资料。"
              : copied === "csv"
                ? "已复制带表头的 CSV。"
                : ""}
        </p>

        <p className="mt-4 text-xs leading-5 text-muted">
          随机组合的资料仅用于测试表单、Mock 数据和界面调试，不代表已核验的真实身份。
        </p>
      </aside>

      <section className="surface-panel overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-semibold text-foreground">测试资料</h2>
          <p className="text-sm text-muted">共 {profiles.length} 条</p>
        </div>

        {isBatch ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-border text-left text-muted">
                  <th className="px-3 py-2.5 font-medium">#</th>
                  {PROFILE_COLUMNS.map((column) => (
                    <th key={column.key} className="px-3 py-2.5 font-medium whitespace-nowrap">
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile, index) => (
                  <tr
                    key={`${profile.idCard}-${index}`}
                    className="border-b border-border last:border-0 align-top"
                  >
                    <td className="px-3 py-2.5 text-muted">{index + 1}</td>
                    {PROFILE_COLUMNS.map((column) => (
                      <td
                        key={column.key}
                        className="px-3 py-2.5 font-mono text-foreground whitespace-nowrap"
                      >
                        {profile[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <dl className="grid divide-y divide-border">
            {PROFILE_COLUMNS.map((column) => (
              <div
                key={column.key}
                className="grid gap-2 px-5 py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center"
              >
                <dt className="text-sm text-muted">{column.label}</dt>
                <dd className="break-all font-mono text-base text-foreground">
                  {profiles[0][column.key]}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </section>
    </div>
  );
}

async function writeClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
