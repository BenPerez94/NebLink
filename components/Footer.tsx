import logo from "@/public/logo.png";
import instagramLogo from "@/public/instagram.png";
import facebookLogo from "@/public/facebook.png";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

const textFooter = `Notre mission consiste à fournir des solutions numériques sur mesure, de qualité supérieure, qui répondent précisément à vos besoins. Avec notre expertise et notre engagement envers votre succès, nous vous accompagnons à chaque étape de votre parcours en ligne. Contactez-nous dès aujourd'hui pour concrétiser votre vision digitale !`;

export function Footer() {
  return (
    <footer className="bg-foreground">
      <div className="px-14 py-4 flex md:flex-row flex-col justify-start md:justify-between max-w-7xl mx-auto pt-14">
        <div>
          <div className="flex items-center">
            <Image src={logo} alt="logo du site" className="w-12 h-12" />
            <h2 className="text-white text-4xl ml-2 font-semibold">NebLink</h2>
          </div>
          <p className="text-white text-lg max-w-2xl p-1 mt-3.5 mb-6 mr-6">
            {textFooter}
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-white text-lg font-semibold py-5">Contact</h3>
          <Link href="" className="text-white py-2 flex">
            <Mail size={20} className="mt-[2px] mr-2" />{" "}
            Benjamin.perez@neblink.fr
          </Link>
          <Link href="" className="text-white py-2 flex">
            <Phone size={20} className="mt-[2px] mr-2" /> 07.44.47.69.07
          </Link>
          <div className="flex mt-2">
            <Link href="" className="py-3 mr-2">
              <Image
                src={instagramLogo}
                alt="logo instagram"
                width={50}
                height={50}
                className="w-12 h-12 mt-2 mr-3 transform transition duration-300 hover:scale-110"
              />
            </Link>
            <Link href="" className="py-3">
              <Image
                src={facebookLogo}
                alt="logo facebook"
                width={50}
                height={50}
                className="w-12 h-12 mt-2 mr-3 transform transition duration-300 hover:scale-110"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#222222] text-accent py-2 text-center text-xs text-light">
        <p className="text-accent text-lg">
          NebLink 2024 © Tous droits réservés{" "}
        </p>
      </div>
    </footer>
  );
}
