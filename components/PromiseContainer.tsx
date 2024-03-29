/* eslint-disable react/no-unescaped-entities */
import responsive from "@/public/responsive.png";
import seo from "@/public/seo.png";
import shield from "@/public/shield.png";
import Image from "next/image";

export const PromiseContainer = () => {
  return (
    <div className="flex md:flex-row flex-col py-24 text-center bg-justify-center w-full gap-2">
      <div className="p-3 grow ">
        <div className="p-1">
          <Image
            src={responsive}
            alt="responsive design"
            width={200}
            height={200}
            className="w-52 h-52 m-auto p-2"
          />
        </div>
        <div className="p-1">
          <p className="text-xl pt-6 px-6">
            Nos solutions Web offrent une expérience utilisateur optimale sur
            tous les appareils grâce à leur caractère responsive, assurant une
            navigation fluide pour vos visiteurs, quel que soit leur dispositif.
          </p>
        </div>
      </div>
      <div className="p-3 grow  ">
        <div className="p-1">
          <Image
            src={seo}
            alt="seo design"
            width={200}
            height={200}
            className="w-52 h-52 m-auto p-2"
          />
        </div>
        <div className="p-1">
          <p className="text-xl pt-6 px-6">
            Améliorez votre référencement pour une meilleure visibilité ! Avec
            nos techniques et expertise, boostez votre présence en ligne,
            touchez un public plus large.
          </p>
        </div>
      </div>
      <div className="p-3 grow  ">
        <div className="p-1">
          {" "}
          <Image
            src={shield}
            alt="shield design"
            width={200}
            height={200}
            className="w-52 h-52 m-auto p-2"
          />
        </div>
        <div className="p-1">
          <p className="text-xl pt-6 px-6">
            Nos solutions assurent une sécurité optimale à chaque étape. Avec
            notre approche proactive et nos outils de pointe, bénéficiez d'une
            tranquillité d'esprit totale.
          </p>
        </div>
      </div>
    </div>
  );
};
