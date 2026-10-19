import { Container } from "@/components/container";
import { TextLink } from "@/components/text-link";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <h1 className="text-4xl font-medium">این صفحه پیدا نشد</h1>
        <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
          آدرس را دوباره ببینید، یا از خانه ادامه دهید.
        </p>
        <p className="mt-8">
          <TextLink href="/">خانه</TextLink>
        </p>
      </Container>
    </section>
  );
}
