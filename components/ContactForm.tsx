/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import poster from "@/public/poster.png";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export const ContactForm = () => {
  return (
    <div className="md:py-20 py-8 px-4 md:px-16">
      <div className="max-w-5xl m-auto ">
        <h2>Besoin d'informations supplémentaires ?</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="py-6">
            <h3 className="text-foreground font-semibold my-6 text-2xl">
              Contactez-nous !
            </h3>
            <p>
              Si vous avez des questions supplémentaires ou si vous souhaitez
              simplement en savoir plus sur nos services, n'hésitez pas à nous
              contacter en utilisant le formulaire ci-dessous. Nous serons ravis
              de répondre à toutes vos interrogations dans les plus brefs
              délais.
            </p>
            <Image
              src={poster}
              alt="mail send"
              width={150}
              height={150}
              className="mt-12"
            />
          </div>
          <div className="md:p-12 md:pr-0 pb-0">
            <form
              action=""
              className="rounded-sm bg-secondary p-6 flex flex-col"
            >
              <Input className="my-2" placeholder="Nom " />
              <Input className="my-2" placeholder="Email" />
              <Input className="my-2" placeholder="Numéro" />
              <Textarea
                className="my-2 h-36 resize-none"
                placeholder="Message"
              />
              <Button className=" max-w-24 m-auto mt-3 ">Envoyer</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
