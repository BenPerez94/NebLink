"use server";
import Devis from "@/emails/devis";
import { resend } from "./resend";

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

export const SendDevis = async (dataForm: FormData) => {
  const { data, error } = await resend.emails.send({
    from: "contact@creafannym.fr",
    to: "benjamin.perez@outlook.fr",
    subject: "Formulaire de devis du site",
    react: Devis(dataForm),
  });

  if (error) {
    console.log(error);
  }
  console.log(data);
};
