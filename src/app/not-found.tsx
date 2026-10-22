import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-4xl font-black">این صفحه در دانشنامه نیست</h1>
      <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">نام را در کاتالوگ جستجو کنید.</p>
      <p className="mt-8">
        <Link href="/catalog" className="font-bold text-teal-700">
          کاتالوگ
        </Link>
      </p>
    </section>
  );
}
