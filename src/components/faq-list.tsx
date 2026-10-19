import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/content";

export function FaqList({ items }: { items: readonly FaqItem[] }) {
  return (
    <Accordion keepMounted className="max-w-3xl">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="py-4 text-start text-base leading-8">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-base leading-8 text-muted-foreground">
            <p className="max-w-2xl">{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
