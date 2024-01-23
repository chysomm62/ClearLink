import {
  Advantage,
  Companies,
  FAQs,
  Hero,
  Shopify,
  Subscribe,
} from "@/components/pages/HomePage";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Advantage />
      <Shopify />
      <FAQs />
      <Subscribe />
    </main>
  );
}
