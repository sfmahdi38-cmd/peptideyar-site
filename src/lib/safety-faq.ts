export type SafetyQuestion = {
  id: string;
  faQ: string;
  enQ: string;
  faA: string;
  enA: string;
};

export const safetyQuestions: SafetyQuestion[] = [
  {
    id: "sell",
    faQ: "آیا پپتیدیار می‌فروشد؟",
    enQ: "Does PeptideYar sell anything?",
    faA: "نه. قیمت، سبد خرید، موجودی و لینک فروشنده ندارد. چیدمان کاتالوگ فقط برای پیدا کردن نام شیمیایی است.",
    enA: "No. There is no price, basket, stock count, or seller link. The catalog layout exists so a chemical name can be found.",
  },
  {
    id: "contact",
    faQ: "برای سؤال بیشتر یا معرفی مرکز مجاز چه کنم؟",
    enQ: "Where can I ask more, or find a licensed source?",
    faA: "در تلگرام پپتیدیار به نشانی @peptideyar پیام بدهید. پپتیدیار خودش چیزی نمی‌فروشد و فقط به داروخانه یا مرکز دارای مجوز ارجاع می‌دهد.",
    enA: "Message PeptideYar on Telegram at @peptideyar. PeptideYar sells nothing itself and only refers people to a licensed pharmacy or centre.",
  },
  {
    id: "human",
    faQ: "می‌شود این مواد را مصرف کرد؟",
    enQ: "Can these substances be taken?",
    faA: "این دانشنامه مصرف انسانی را توصیه نمی‌کند و روش آن را هم نمی‌نویسد. برچسب پژوهشی «نه برای مصرف انسان» ادعای خودِ فهرست تجاری است، نه یک مجوز.",
    enA: "This encyclopedia does not recommend human use and does not describe a method. A “not for human consumption” label is the trade list’s own claim, not a licence.",
  },
  {
    id: "dose",
    faQ: "دوزها کجا هستند؟",
    enQ: "Where are the doses?",
    faA: "هیچ‌جا. محاسبه‌گر فقط رابطهٔ جرم و حجم را حساب می‌کند و عدد داخل آن مقدار پیشنهادی نیست.",
    enA: "Nowhere. The calculator only computes the mass-volume relation, and the number you type is not a suggested amount.",
  },
  {
    id: "uk",
    faQ: "وضعیت بریتانیا و اروپا چیست؟",
    enQ: "What about the UK and Europe?",
    faA: "بسیاری از پپتیدهای این فهرست داروی مجاز MHRA یا EMA نیستند. استروئیدهای آنابولیک در بریتانیا کلاس C هستند و عرضهٔ آن‌ها جرم است. این صفحه استثناهای قانون و روش واردات را شرح نمی‌دهد.",
    enA: "Many peptides on this list are not MHRA or EMA authorised medicines. Anabolic steroids are Class C in the UK and supplying them is a crime. This page does not explain legal exceptions or how to import them.",
  },
  {
    id: "iran",
    faQ: "وضعیت ایران چیست؟",
    enQ: "What about Iran?",
    faA: "در ایران، عرضهٔ دارو به ثبت و مجوز سازمان غذا و دارو نیاز دارد. پپتیدیار وضعیت ثبت تک‌تک این نام‌ها را در ایران بررسی نکرده است. ویال پژوهشی، حتی اگر نامش با یک داروی ثبت‌شده یکی باشد، همان فراوردهٔ مجاز نیست. برای فراوردهٔ دارویی، فهرست رسمی سازمان غذا و دارو یا پزشک و داروساز را ملاک بگیرید.",
    enA: "In Iran, supplying a medicine requires registration and approval by the Iran Food and Drug Administration. PeptideYar has not checked the Iranian registration status of each name. A research vial is not the authorised product, even when it shares a registered medicine's name. For a medicine, rely on the official IFDA list or on a doctor or pharmacist.",
  },
  {
    id: "dnp",
    faQ: "چرا دی‌نیتروفنول این‌قدر کوتاه توضیح داده شده؟",
    enQ: "Why is dinitrophenol described so briefly?",
    faA: "چون مادهٔ صنعتی است و سوءمصرفش برای لاغری بارها کشنده بوده. شناسایی خطر کافی است. دوز، تهیه و کنترل تب نوشته نمی‌شود.",
    enA: "Because it is an industrial chemical and misuse for weight loss has repeatedly been fatal. Identifying the hazard is enough. Dose, preparation, and temperature control are not written.",
  },
  {
    id: "licensed",
    faQ: "اگر دارو جای دیگری مجاز است، ویال پژوهشی همان است؟",
    enQ: "If a drug is licensed elsewhere, is the research vial the same thing?",
    faA: "نه. سماگلوتاید، تستوسترون، ایزوترتینوئین و مانند این‌ها فراوردهٔ دارای پروانه و زنجیرهٔ تأمین جدا دارند. جنس بدون پروانه همان قرص یا قلم نیست و جای نسخه را نمی‌گیرد.",
    enA: "No. Semaglutide, testosterone, isotretinoin, and similar drugs have a licensed product and a separate supply chain. Unlicensed material is not that tablet or pen, and it does not replace a prescription.",
  },
];
