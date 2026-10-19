import { steps } from "@/lib/content";

const numerals = ["۱", "۲", "۳"];

export function BuySteps() {
  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="rounded-2xl border border-cyan/20 bg-[#132336]/75 px-5 py-6 shadow-[0_16px_40px_rgb(0_0_0/0.18)]"
        >
          <p className="text-sm text-cyan">گام {numerals[index]}</p>
          <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
          <p className="mt-2 max-w-xs leading-8 text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
