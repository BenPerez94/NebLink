/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import bgSectionOne from "@/public/backgroundSectionOne.jpg";
import { Reveal } from "./utils/Reveal";

export const CtaContainer = () => {
  console.log(bgSectionOne);
  return (
    <div className="px-6 md:py-36 py-8 pb-24  text-left backdrop h-screen justify-center items-center flex">
      <div className=" mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-white ">
            Besoin d’une solution Web pour plus de visibilité ?
          </h2>
        </Reveal>
        <Reveal>
          <p className="text-white mt-8 max-w-3xl">
            Nous transformons vos idées en une présence en ligne percutante.
            Nous allions expertise technique et créativité pour vous offrir des
            solutions Web sur mesure qui propulseront votre entreprise vers de
            nouveaux sommets. Découvrez comment nous pouvons donner vie à votre
            vision numérique dès aujourd'hui !
          </p>
        </Reveal>
        <Reveal>
          <Link
            href="/devis"
            className="transition
        ease-in-out mt-20 px-6 py-3 bg-primary text-white rounded-md inline-block hover:scale-105 hover:bg-green-600"
          >
            Demander un devis
          </Link>
        </Reveal>
      </div>
    </div>
  );
};
