import { steps } from "@/lib/content";

const numerals = ["۱", "۲", "۳"];

export function BuySteps() {
  return (
    <ol className="grid gap-10 md:grid-cols-3">
      {steps.map((step, index) => (
        <li key={step.title} className="border-t border-border pt-5">
          <p className="text-3xl font-medium text-peach" aria-hidden="true">
            {numerals[index]}
          </p>
          <h3 className="mt-3 text-xl font-medium">{step.title}</h3>
          <p className="mt-2 max-w-xs leading-8 text-muted-foreground">{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
