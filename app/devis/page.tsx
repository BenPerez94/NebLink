/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Devis = () => {
  return (
    <main>
      <div className="max-w-5xl m-auto py-6 px-5">
        <h2>Demande de devis</h2>
        <p className="my-3 pb-3">
          Pour recevoir un devis personnalisé il vous suffit de renseigner vos
          informations et répondre au questionnaire ci dessous.
        </p>
        <form action="" className="bg-secondary flex flex-col p-6">
          <h4>Informations de contact</h4>
          <div className="flex flex-col md:flex-row gap-12 mb-4">
            <div>
              <Label htmlFor="name" className="text-lg">
                Nom
              </Label>
              <Input placeholder="Votre nom complet" id="name" />
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">
                Email
              </Label>
              <Input placeholder="Votre adresse mail" id="email" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-12 mb-4">
            <div>
              <Label htmlFor="tel" className="text-lg">
                Numéro
              </Label>
              <Input placeholder="Votre nom complet" id="tel" />
            </div>
            <div>
              <Label htmlFor="entreprise" className="text-lg">
                Entreprise
              </Label>
              <Input placeholder="Votre adresse mail" id="entreprise" />
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
                name="question1"
                className="mt-1"
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
                name="question2"
                className="mt-1"
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
                name="question3"
                className="mt-1"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="question4" className="text-lg">
                <span className="font-bold">#4 :</span> Souhaitez-vous améliorer
                un site web existant ou créer un site web à partir de zéro ?
              </Label>
              <Textarea
                placeholder="Votre réponse"
                id="question4"
                name="question4"
                className="mt-1"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="question5" className="text-lg">
                <span className="font-bold">#5 :</span> Souhaitez-vous que votre
                site soit optimisé pour le référencement SEO ? Avez-vous une
                liste de mots-clés que vous aimeriez cibler ?
              </Label>
              <Textarea
                placeholder="Votre réponse"
                id="question5"
                name="question5"
                className="mt-1"
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
                name="question6"
                className="mt-1"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="question7" className="text-lg">
                <span className="font-bold">#7 :</span> Quelle est l'URL de 2 ou
                3 sites web de référence que vous appréciez ? Qu'est-ce qui vous
                plaît dans ces sites web ?
              </Label>
              <Textarea
                placeholder="Votre réponse"
                id="question7"
                name="question7"
                className="mt-1"
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
                name="question8"
                className="mt-1"
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
                name="question9"
                className="mt-1"
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
                name="question10"
                className="mt-1"
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
                name="question11"
                className="mt-1"
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
                name="question12"
                className="mt-1"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="question13" className="text-lg">
                <span className="font-bold">#13 :</span> Votre entreprise
                dispose-t-elle d'une charte graphique couvrant des aspects tels
                que les couleurs et les polices de caractères ?
              </Label>
              <Textarea
                placeholder="Votre réponse"
                id="question13"
                name="question13"
                className="mt-1"
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
                name="question14"
                className="mt-1"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="question14" className="text-lg">
                <span className="font-bold">#14 :</span> Quel est votre budget
                pour le site web ?
              </Label>
              <Textarea
                placeholder="Votre réponse"
                id="question14"
                name="question14"
                className="mt-1"
              />
            </div>
            <div className="mb-8">
              <Label htmlFor="question15" className="text-lg">
                <span className="font-bold">#15 :</span>Avez-vous besoin d'aide
                pour la mise à jour et la maintenance de votre site web ?
              </Label>
              <Textarea
                placeholder="Votre réponse"
                id="question15"
                name="question15"
                className="mt-1"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="m-auto">Soumettre</Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Devis;
