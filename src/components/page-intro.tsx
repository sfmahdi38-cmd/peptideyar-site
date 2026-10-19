export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm tracking-normal text-peach">{kicker}</p>
      <div className="mt-3 h-px w-16 bg-linear-to-l from-cyan to-peach" aria-hidden="true" />
      <h1 className="mt-3 text-[2.35rem] leading-[1.28] font-medium text-balance sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{children}</div>
    </div>
  );
}
