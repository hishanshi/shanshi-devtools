export type Province = {
  name: string;
  codes: string[];
  postalPrefix: string;
};

export type Bank = {
  name: string;
  bins: string[];
  length: 16 | 19;
};

export type Profile = {
  name: string;
  province: string;
  idCard: string;
  phone: string;
  address: string;
  postalCode: string;
  bankName: string;
  bankCard: string;
};

export const RANDOM_OPTION = "随机";
export const DEFAULT_PROFILE_COUNT = 1;

export const DEFAULT_PROFILE: Profile = {
  name: "张安",
  province: "北京",
  idCard: "110101199001011237",
  phone: "13800138000",
  address: "北京市朝阳区望京街道云杉路 128 号",
  postalCode: "100102",
  bankName: "中国工商银行",
  bankCard: "6222021234567890128",
};

export const PROVINCES: Province[] = [
  { name: "北京", codes: ["110101", "110105", "110108"], postalPrefix: "100" },
  { name: "天津", codes: ["120101", "120103", "120104"], postalPrefix: "300" },
  { name: "河北", codes: ["130102", "130104", "130202"], postalPrefix: "050" },
  { name: "山西", codes: ["140105", "140106", "140202"], postalPrefix: "030" },
  { name: "内蒙古", codes: ["150102", "150103", "150202"], postalPrefix: "010" },
  { name: "辽宁", codes: ["210102", "210104", "210202"], postalPrefix: "110" },
  { name: "吉林", codes: ["220102", "220104", "220202"], postalPrefix: "130" },
  { name: "黑龙江", codes: ["230102", "230103", "230202"], postalPrefix: "150" },
  { name: "上海", codes: ["310101", "310104", "310115"], postalPrefix: "200" },
  { name: "江苏", codes: ["320102", "320106", "320312"], postalPrefix: "210" },
  { name: "浙江", codes: ["330102", "330106", "330110"], postalPrefix: "310" },
  { name: "安徽", codes: ["340102", "340103", "340202"], postalPrefix: "230" },
  { name: "福建", codes: ["350102", "350104", "350203"], postalPrefix: "350" },
  { name: "江西", codes: ["360102", "360103", "360202"], postalPrefix: "330" },
  { name: "山东", codes: ["370102", "370105", "370212"], postalPrefix: "250" },
  { name: "河南", codes: ["410102", "410105", "410311"], postalPrefix: "450" },
  { name: "湖北", codes: ["420102", "420106", "420111"], postalPrefix: "430" },
  { name: "湖南", codes: ["430102", "430105", "430111"], postalPrefix: "410" },
  { name: "广东", codes: ["440103", "440305", "440106"], postalPrefix: "510" },
  { name: "广西", codes: ["450102", "450103", "450202"], postalPrefix: "530" },
  { name: "海南", codes: ["460105", "460106", "460107"], postalPrefix: "570" },
  { name: "重庆", codes: ["500101", "500103", "500106"], postalPrefix: "400" },
  { name: "四川", codes: ["510104", "510107", "510112"], postalPrefix: "610" },
  { name: "贵州", codes: ["520102", "520103", "520201"], postalPrefix: "550" },
  { name: "云南", codes: ["530102", "530103", "530111"], postalPrefix: "650" },
  { name: "西藏", codes: ["540102", "540121", "540202"], postalPrefix: "850" },
  { name: "陕西", codes: ["610102", "610113", "610116"], postalPrefix: "710" },
  { name: "甘肃", codes: ["620102", "620103", "620302"], postalPrefix: "730" },
  { name: "青海", codes: ["630102", "630103", "630202"], postalPrefix: "810" },
  { name: "宁夏", codes: ["640104", "640105", "640202"], postalPrefix: "750" },
  { name: "新疆", codes: ["650102", "650103", "650202"], postalPrefix: "830" },
];

export const BANKS: Bank[] = [
  { name: "中国工商银行", bins: ["622202", "622208", "621226"], length: 19 },
  { name: "中国农业银行", bins: ["622848", "622845", "621336"], length: 19 },
  { name: "中国银行", bins: ["621661", "621666", "622752"], length: 19 },
  { name: "中国建设银行", bins: ["621700", "622700", "436742"], length: 19 },
  { name: "交通银行", bins: ["622260", "622262", "458123"], length: 19 },
  { name: "招商银行", bins: ["622588", "622575", "621483"], length: 16 },
  { name: "浦发银行", bins: ["622521", "621351", "621390"], length: 16 },
  { name: "中信银行", bins: ["622690", "621768", "621771"], length: 16 },
  { name: "兴业银行", bins: ["622909", "622908", "621626"], length: 16 },
  { name: "中国民生银行", bins: ["622622", "622617", "621691"], length: 16 },
  { name: "平安银行", bins: ["622155", "622156", "621626"], length: 16 },
  { name: "广发银行", bins: ["622568", "622555", "621462"], length: 16 },
];

export const PROFILE_COUNT_OPTIONS = [1, 5, 10, 20, 50, 100];

export const PROFILE_COLUMNS: { key: keyof Profile; label: string }[] = [
  { key: "name", label: "姓名" },
  { key: "province", label: "省份" },
  { key: "idCard", label: "身份证号" },
  { key: "phone", label: "手机号" },
  { key: "address", label: "地址" },
  { key: "postalCode", label: "邮编" },
  { key: "bankName", label: "银行" },
  { key: "bankCard", label: "银行卡号" },
];

const FAMILY_NAMES = [
  "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
  "刘", "杨", "黄", "张", "林", "何", "郭", "罗", "高", "许",
];

const GIVEN_CHARS = [
  "一", "安", "辰", "川", "航", "禾", "嘉", "景", "可", "朗",
  "宁", "然", "睿", "森", "思", "桐", "晚", "言", "屿", "知",
];

const PHONE_PREFIXES = [
  "130", "131", "132", "135", "136", "137", "138", "139", "150",
  "151", "152", "157", "158", "159", "166", "172", "178", "182",
  "183", "185", "186", "187", "188", "198",
];

const AREA_NAMES = [
  "中心区", "新城区", "开发区", "高新区", "滨河区",
  "临湖区", "东城区", "西城区", "南城区", "北城区",
];

const STREETS = [
  "望京街道", "软件园街道", "科技园街道", "滨河街道",
  "长安街道", "湖滨街道", "解放路街道", "星河街道",
];

const ROADS = [
  "云杉路", "青枫路", "科创路", "文汇路",
  "海棠路", "星河路", "明德路", "春晓路",
];

const ID_WEIGHTS = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
const ID_CHECK_CODES = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];

export function generateProfiles({
  provinceName,
  bankName,
  count,
}: {
  provinceName: string;
  bankName: string;
  count: number;
}): Profile[] {
  return Array.from({ length: clampProfileCount(count) }, () =>
    generateProfile(resolveProvince(provinceName), resolveBank(bankName)),
  );
}

export function profileToText(profile: Profile): string {
  return [
    `姓名：${profile.name}`,
    `省份：${profile.province}`,
    `身份证号：${profile.idCard}`,
    `手机号：${profile.phone}`,
    `地址：${profile.address}`,
    `邮编：${profile.postalCode}`,
    `银行：${profile.bankName}`,
    `银行卡号：${profile.bankCard}`,
  ].join("\n");
}

export function csvCell(value: string): string {
  if (/[",\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}

export function clampProfileCount(value: number): number {
  if (!Number.isFinite(value) || value < 1) return 1;
  return Math.min(Math.floor(value), 100);
}

function resolveProvince(name: string): Province {
  if (name === RANDOM_OPTION) return pick(PROVINCES);
  return PROVINCES.find((item) => item.name === name) ?? PROVINCES[0];
}

function resolveBank(name: string): Bank {
  if (name === RANDOM_OPTION) return pick(BANKS);
  return BANKS.find((item) => item.name === name) ?? BANKS[0];
}

function generateProfile(province: Province, bank: Bank): Profile {
  return {
    name: generateName(),
    province: province.name,
    idCard: generateIdCard(province),
    phone: generatePhone(),
    address: generateAddress(province),
    postalCode: generatePostalCode(province),
    bankName: bank.name,
    bankCard: generateBankCard(bank),
  };
}

function generateName(): string {
  const length = randomInt(1, 2);
  return `${pick(FAMILY_NAMES)}${Array.from({ length }, () => pick(GIVEN_CHARS)).join("")}`;
}

function generateIdCard(province: Province): string {
  const addressCode = pick(province.codes);
  const birthDate = generateBirthDate();
  const sequence = randomDigits(3);
  const body = `${addressCode}${birthDate}${sequence}`;
  return `${body}${getIdCheckCode(body)}`;
}

function generateBirthDate(): string {
  const year = randomInt(1970, 2005);
  const month = randomInt(1, 12);
  const day = randomInt(1, getDaysInMonth(year, month));
  return `${year}${pad2(month)}${pad2(day)}`;
}

function getIdCheckCode(body: string): string {
  const sum = body
    .split("")
    .reduce((total, digit, index) => total + Number(digit) * ID_WEIGHTS[index], 0);
  return ID_CHECK_CODES[sum % 11];
}

function generatePhone(): string {
  return `${pick(PHONE_PREFIXES)}${randomDigits(8)}`;
}

function generateAddress(province: Province): string {
  return `${province.name}${pick(AREA_NAMES)}${pick(STREETS)}${pick(ROADS)} ${randomInt(1, 399)} 号`;
}

function generatePostalCode(province: Province): string {
  return `${province.postalPrefix}${randomDigits(3)}`;
}

function generateBankCard(bank: Bank): string {
  const bin = pick(bank.bins);
  const bodyLength = bank.length - 1;
  const body = `${bin}${randomDigits(bodyLength - bin.length)}`;
  return `${body}${getLuhnCheckDigit(body)}`;
}

function getLuhnCheckDigit(value: string): string {
  let sum = 0;
  const reversed = value.split("").reverse();

  for (let index = 0; index < reversed.length; index += 1) {
    let digit = Number(reversed[index]);
    if (index % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }

  return String((10 - (sum % 10)) % 10);
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function randomDigits(length: number): string {
  return Array.from({ length }, () => randomInt(0, 9)).join("");
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick<T>(items: T[]): T {
  return items[randomInt(0, items.length - 1)];
}

function pad2(value: number): string {
  return String(value).padStart(2, "0");
}
