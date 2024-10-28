/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import bgSectionOne from "@/public/backgroundSectionOne.jpg";
import { Reveal } from "./utils/Reveal";
import Image from "next/image";
import logoSite from "@/public/logo.png";

export const CtaContainer = () => {
  console.log(bgSectionOne);
  return (
    <div className="px-6  py-8 pb-24  text-left backdrop h-screen justify-center items-center flex">
      <div className="flex flex-col mx-auto max-w-4xl">
        <Reveal delay={0}>
          <div className=" items-center my-12 hidden md:flex">
            <Image src={logoSite} alt="logo du site" className="w-24 h-24" />
            <h1 className="text-white ml-2 text-8xl">NebLink</h1>
          </div>
        </Reveal>
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
        ease-in-out mt-20 px-6 py-3 bg-primary text-white rounded-md inline-block  hover:bg-green-600"
          >
            Demander un devis
          </Link>
        </Reveal>
      </div>
    </div>
  );
};
