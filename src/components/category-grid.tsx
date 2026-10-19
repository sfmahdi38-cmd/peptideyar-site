import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { categories } from "@/lib/content";

export function CategoryGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {categories.map((category) => (
        <li key={category.title}>
          <Card className="h-full border border-cyan/15 text-base shadow-[0_0_32px_rgb(157_221_229/0.06)]">
            <CardHeader>
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
