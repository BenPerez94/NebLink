/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "@/components/utils/Reveal";
import { SendDevis } from "@/lib/sendDevis";
import { MailCheck } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
  nameDevis: string;
  emailDevis: string;
  phoneDevis: string;
  entrepriseDevis: string;
  question1Devis: string;
  question2Devis: string;
  question3Devis: string;
  question4Devis: string;
  question5Devis: string;
  question6Devis: string;
  question7Devis: string;
  question8Devis: string;
  question9Devis: string;
  question10Devis: string;
  question11Devis: string;
  question12Devis: string;
  question13Devis: string;
  question14Devis: string;
  question15Devis: string;
  question16Devis: string;
}

const Devis = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (dataForm) => {
    SendDevis(dataForm);
    reset();
    toast.success(
      <div className="flex ">
        <MailCheck className="mr-3" />
        <p className="text-base text-primary-foreground ">Message envoyé !</p>
      </div>
    );
  };

  return (
    <main>
      <div className="max-w-5xl m-auto py-6 px-5">
        <Reveal color={"#186538"}>
          <h2>Demande de devis</h2>
        </Reveal>
        <Reveal color={"#186538"}>
          <p className="my-3 pb-3">
            Pour recevoir un devis personnalisé il vous suffit de renseigner vos
            informations et répondre au questionnaire ci dessous.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <form
            action=""
            className="bg-secondary flex flex-col p-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h4>Informations de contact</h4>
            <div className="flex flex-col md:flex-row gap-12 mb-4">
              <div className="grow">
                <Label htmlFor="name" className="text-lg">
                  Nom
                </Label>
                <Input
                  placeholder="Votre nom complet"
                  id="name"
                  {...register("nameDevis", { required: true })}
                />
              </div>
              <div className="grow">
                <Label htmlFor="email" className="text-lg">
                  Email
                </Label>
                <Input
                  placeholder="Votre adresse mail"
                  id="email"
                  {...register("emailDevis", { required: true })}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 mb-4">
              <div className="grow">
                <Label htmlFor="tel" className="text-lg">
                  Numéro
                </Label>
                <Input
                  placeholder="Votre nom complet"
                  id="tel"
                  {...register("phoneDevis", { required: true })}
                />
              </div>
              <div className="grow">
                <Label htmlFor="entreprise" className="text-lg">
                  Entreprise
                </Label>
                <Input
                  placeholder="Votre adresse mail"
                  id="entreprise"
                  {...register("entrepriseDevis", { required: true })}
                />
              </div>
            </div>
            <h4>Questionnaire</h4>
            <p className="text-lg mb-6">
              Visez la précision pour obtenir un devis précis. Chaque détail
              compte pour une estimation fidèle.
            </p>
            <div>
              <div className="mb-8">
                <Label htmlFor="question1" className="text-lg">
                  <span className="font-bold">#1 :</span> Que fait votre
                  entreprise ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question1"
                  className="mt-1"
                  {...register("question1Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question2" className="text-lg">
                  <span className="font-bold">#2 :</span> Quel est votre public
                  cible ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question2"
                  className="mt-1"
                  {...register("question2Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question3" className="text-lg">
                  <span className="font-bold">#3 :</span> Quelle est votre
                  proposition de vente unique (USP) ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question3"
                  className="mt-1"
                  {...register("question3Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question4" className="text-lg">
                  <span className="font-bold">#4 :</span> Souhaitez-vous
                  améliorer un site web existant ou créer un site web à partir
                  de zéro ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question4"
                  className="mt-1"
                  {...register("question4Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question5" className="text-lg">
                  <span className="font-bold">#5 :</span> Souhaitez-vous que
                  votre site soit optimisé pour le référencement SEO ? Avez-vous
                  une liste de mots-clés que vous aimeriez cibler ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question5"
                  className="mt-1"
                  {...register("question5Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question6" className="text-lg">
                  <span className="font-bold">#6 :</span> Quelle est l'URL de
                  votre site web actuel (le cas échéant) ? Qu'est-ce que vous
                  aimez et n'aimez pas dans votre site web existant ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question6"
                  className="mt-1"
                  {...register("question6Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question7" className="text-lg">
                  <span className="font-bold">#7 :</span> Quelle est l'URL de 2
                  ou 3 sites web de référence que vous appréciez ? Qu'est-ce qui
                  vous plaît dans ces sites web ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question7"
                  className="mt-1"
                  {...register("question7Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question8" className="text-lg">
                  <span className="font-bold">#8 :</span> Savez-vous quelle
                  plateforme vous souhaitez utiliser pour votre site ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question8"
                  className="mt-1"
                  {...register("question8Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question9" className="text-lg">
                  <span className="font-bold">#9 :</span> De quelles pages
                  avez-vous besoin sur votre site web ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question9"
                  className="mt-1"
                  {...register("question9Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question10" className="text-lg">
                  <span className="font-bold">#10 :</span> De quelles
                  fonctionnalités avez-vous besoin sur votre site web ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question10"
                  className="mt-1"
                  {...register("question10Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question11" className="text-lg">
                  <span className="font-bold">#11 :</span> Quel est l'objectif
                  sous-jacent de votre site web ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question11"
                  className="mt-1"
                  {...register("question11Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question12" className="text-lg">
                  <span className="font-bold">#12 :</span> Le contenu de votre
                  site est-il prêt ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question12"
                  className="mt-1"
                  {...register("question12Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question13" className="text-lg">
                  <span className="font-bold">#13 :</span> Votre entreprise
                  dispose-t-elle d'une charte graphique couvrant des aspects
                  tels que les couleurs et les polices de caractères ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question13"
                  className="mt-1"
                  {...register("question13Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question14" className="text-lg">
                  <span className="font-bold">#14 :</span> Quand souhaitez-vous
                  lancer votre nouveau site ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question14"
                  className="mt-1"
                  {...register("question14Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question15" className="text-lg">
                  <span className="font-bold">#15 :</span> Quel est votre budget
                  pour le site web ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question15"
                  className="mt-1"
                  {...register("question15Devis", { required: true })}
                />
              </div>
              <div className="mb-8">
                <Label htmlFor="question16" className="text-lg">
                  <span className="font-bold">#16 :</span>Avez-vous besoin
                  d'aide pour la mise à jour et la maintenance de votre site web
                  ?
                </Label>
                <Textarea
                  placeholder="Votre réponse"
                  id="question16"
                  className="mt-1"
                  {...register("question16Devis", { required: true })}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="m-auto">Soumettre</Button>
            </div>
          </form>
        </Reveal>
      </div>
    </main>
  );
};

export default Devis;
