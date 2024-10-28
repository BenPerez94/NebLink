import { ContactForm } from "@/components/ContactForm";
import { InfoContainer } from "@/components/InfoContainer";
import { ProductContainer } from "@/components/ProductContainer";
import { PromiseContainer } from "@/components/PromiseContainer";
import { RealisationContainer } from "@/components/Realisations";
import { CtaContainer } from "@/components/ctaContainer";

export default function Home() {
  return (
    <main>
      <CtaContainer />
      <PromiseContainer />
      <InfoContainer />
      <ProductContainer />
      <RealisationContainer />
      <ContactForm />
    </main>
  );
}
