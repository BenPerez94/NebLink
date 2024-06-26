"use server";
import Email from "@/emails";
import { resend } from "./resend";

interface FormData {
  nameContact: string;
  emailContact: string;
  numberContact: string;
  messageContact: string;
}
export const SendEmail = async (dataForm: FormData) => {
  const { data, error } = await resend.emails.send({
    from: "contact@creafannym.fr",
    to: "benjamin.perez@outlook.fr",
    subject: "Formulaire de contact du site",
    react: Email(dataForm),
  });

  if (error) {
    console.log(error);
  }
  console.log(data);
};
