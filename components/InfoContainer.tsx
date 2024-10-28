/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import bgWatter from "@/public/bgWatter.jpg";
import visible from "@/public/visible.png";
import stat from "@/public/stat.png";
import jalon from "@/public/jalon.png";
import discuter from "@/public/discuter.png";
import { Reveal } from "./utils/Reveal";

export const InfoContainer = () => {
  return (
    <div className="backdrop1 md:px-36 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-12 justify-between ">
          <Reveal>
            <div className="w-full md:w-full px-4 mb-8 flex lg:flex-row flex-col">
              <Image src={visible} alt="" className="my-9 mr-12 w-36 h-36" />
              <div className="text-white">
                <h2 className="mb-4">Boostez votre visibilité en ligne</h2>
                <p className="text-background">
                  Un site web bien conçu renforce l'image de votre entreprise et
                  crée une première impression positive auprès des visiteurs. Il
                  est un outil puissant pour le marketing en ligne, vous
                  permettant de promouvoir vos produits ou services, de partager
                  du contenu pertinent et d'attirer de nouveaux clients via les
                  moteurs de recherche et les réseaux sociaux.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-full md:w-full px-4 mb-8 flex lg:flex-row flex-col">
              <Image src={stat} alt="" className="my-9 mr-12 w-36 h-36" />
              <div className="text-white">
                <h2 className="mb-4">Démarquez-vous de la concurrence</h2>
                <p className="text-background">
                  Profitez d'un site web moderne et fonctionnel pour rester
                  compétitif dans votre secteur d'activité. De plus en plus de
                  clients recherchent des informations en ligne avant de prendre
                  une décision d'achat, faites en sorte d'être présent et de
                  marquer les esprits.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-full md:w-full px-4 mb-8 flex lg:flex-row flex-col">
              <Image src={jalon} alt="" className="my-9 mr-12 w-36 h-36" />
              <div className="text-white">
                <h2 className="mb-4">Évoluez avec votre entreprise</h2>
                <p className="text-background">
                  Votre site web peut être facilement mis à jour et évoluer au
                  fil du temps, vous permettant d'ajouter de nouvelles
                  fonctionnalités et de répondre aux besoins changeants de votre
                  entreprise et de vos clients.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-full md:w-full px-4 mb-8 flex lg:flex-row flex-col">
              <Image src={discuter} alt="" className="my-9 mr-12 w-36 h-36" />
              <div className="text-white">
                <h2 className="mb-4">Restez accessible en tout temps</h2>
                <p className="text-background">
                  Disponible 24/7, votre site web offre une accessibilité totale
                  à vos produits ou services. Vos clients potentiels peuvent
                  vous trouver et consulter vos offres à tout moment, même en
                  dehors des heures d'ouverture.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};
