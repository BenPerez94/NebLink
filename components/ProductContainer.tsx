/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import bgSectionOne from "@/public/backgroundSectionOne.jpg";

export const ProductContainer = () => {
  console.log(bgSectionOne);
  return (
    <div className="px-6 py-36 mt-90 text-left backdrop ">
      <div className=" mx-auto max-w-4xl">
        <h2 className="text-white pb-12 ">
          Notre engagement envers votre succès en ligne
        </h2>
        <p className="text-white mt-4">
          En choisissant nos services, vous bénéficiez d'une expérience de
          création sur mesure, parfaitement adaptée à vos besoins uniques. Nous
          travaillons en étroite collaboration avec vous pour concevoir une
          solution qui reflète l'identité de votre entreprise et répond à vos
          objectifs spécifiques.
        </p>
        <p className="text-white mt-4">
          De plus, nous assurons un suivi complet de la mise en production de
          votre projet. Notre équipe dévouée reste à votre disposition tout au
          long du processus, veillant à ce que chaque étape soit réalisée de
          manière efficace et professionnelle.
        </p>
        <p className="text-white mt-4">
          Enfin, pour garantir le bon fonctionnement de votre site à long terme,
          nous incluons une formule de maintenance d'un an. Cette maintenance
          couvre les problèmes techniques et les changements mineurs nécessaires
          pour assurer le bon fonctionnement de votre site.
        </p>
        <p className="text-white mt-4">
          Avec notre approche complète et notre engagement envers votre succès,
          vous pouvez avoir l'assurance que vous êtes entre de bonnes mains.
          Contactez-nous dès aujourd'hui pour commencer votre voyage vers une
          présence en ligne exceptionnelle.
        </p>
      </div>
    </div>
  );
};
