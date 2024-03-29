/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import bgSectionOne from "@/public/backgroundSectionOne.jpg";

export const CtaContainer = () => {
  console.log(bgSectionOne);
  return (
    <div className="px-6 md:py-36 py-8 pb-24 mt-90 text-left backdrop ">
      <div className=" mx-auto max-w-4xl">
        <h2 className="text-white ">
          Besoin d’une solution Web pour plus de visibilité ?
        </h2>
        <p className="text-white mt-4 max-w-3xl">
          Nous transformons vos idées en une présence en ligne percutante. Nous
          allions expertise technique et créativité pour vous offrir des
          solutions Web sur mesure qui propulseront votre entreprise vers de
          nouveaux sommets. Découvrez comment nous pouvons donner vie à votre
          vision numérique dès aujourd'hui !
        </p>
        <Link
          href="/devis"
          className="transition
        ease-in-out mt-12 px-6 py-3 bg-primary text-white rounded-md inline-block hover:scale-105 hover:bg-green-600"
        >
          Demander un devis
        </Link>
      </div>
    </div>
  );
};
