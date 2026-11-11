import assert from "node:assert/strict";
import test from "node:test";
import { loadTypeScriptModule } from "../scripts/load-typescript-module.mjs";

const {
  DEFAULT_PROFILE,
  clampProfileCount,
  csvCell,
  generateProfiles,
} = loadTypeScriptModule("src/lib/personal-info-generator.ts");

const ID_WEIGHTS = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
const ID_CHECK_CODES = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];

function hasValidIdChecksum(idCard) {
  const body = idCard.slice(0, 17);
  const sum = [...body].reduce(
    (total, digit, index) => total + Number(digit) * ID_WEIGHTS[index],
    0,
  );
  return ID_CHECK_CODES[sum % 11] === idCard[17];
}

function hasValidLuhnChecksum(value) {
  const sum = [...value]
    .reverse()
    .reduce((total, character, index) => {
      let digit = Number(character);
      if (index % 2 === 1) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      return total + digit;
    }, 0);

  return sum % 10 === 0;
}

test("生成数量始终限制在 1 到 100", () => {
  assert.equal(clampProfileCount(Number.NaN), 1);
  assert.equal(clampProfileCount(0), 1);
  assert.equal(clampProfileCount(5.8), 5);
  assert.equal(clampProfileCount(101), 100);
});

test("指定省份和银行时生成有效格式与校验码", () => {
  const profiles = generateProfiles({
    provinceName: "北京",
    bankName: "中国工商银行",
    count: 10,
  });

  assert.equal(profiles.length, 10);
  for (const profile of profiles) {
    assert.equal(profile.province, "北京");
    assert.equal(profile.bankName, "中国工商银行");
    assert.match(profile.idCard, /^\d{17}[\dX]$/);
    assert.match(profile.phone, /^1\d{10}$/);
    assert.equal(hasValidIdChecksum(profile.idCard), true);
    assert.equal(hasValidLuhnChecksum(profile.bankCard), true);
  }
});

test("默认样例和 CSV 转义保持有效", () => {
  assert.equal(hasValidIdChecksum(DEFAULT_PROFILE.idCard), true);
  assert.equal(hasValidLuhnChecksum(DEFAULT_PROFILE.bankCard), true);
  assert.equal(csvCell("普通文本"), "普通文本");
  assert.equal(csvCell('带,和"引号'), '"带,和""引号"');
});
