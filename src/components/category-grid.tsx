import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { categories } from "@/lib/content";

const numerals = ["۱", "۲", "۳", "۴"];

export function CategoryGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {categories.map((category, index) => (
        <li key={category.title}>
          <Card className="h-full border border-cyan/20 bg-[#132336]/80 text-base shadow-[0_18px_50px_rgb(0_0_0/0.22)]">
            <CardHeader className="gap-2">
              <p className="text-sm text-peach" aria-hidden="true">
                {numerals[index]}
              </p>
              <h3 className="text-2xl font-medium text-foreground">{category.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="max-w-prose leading-8 text-muted-foreground">
                {detailed ? category.detail : category.summary}
              </p>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
}
