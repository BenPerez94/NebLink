import { Tailwind, Html } from "@react-email/components";

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

export default function Devis(dataForm: FormData) {
  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#007291",
              },
            },
          },
        }}
      >
        <div className="flex flex-col px-6 py-3">
          <div className="flex gap-6 justify-start">
            <div className="mr-3">
              <p className="m-0">
                <strong>Nom:</strong>
              </p>
              <p className="m-0 mb-6">{dataForm.nameDevis}</p>
            </div>
          </div>
          <div>
            <p className="m-0">
              <strong>Numéro:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.phoneDevis}</p>
          </div>

          <div className="mr-3">
            <p className="m-0">
              <strong>Email:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.emailDevis}</p>
          </div>

          <div>
            <p className="m-0">
              <strong>Entreprise:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.entrepriseDevis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 1:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question1Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 2:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question2Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 3:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question3Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 4:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question4Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 5:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question5Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 6:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question6Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 7:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question7Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 8:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question8Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 9:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question9Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 10:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question10Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 11:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question11Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 12:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question12Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 13:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question13Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 14:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question14Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 15:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question15Devis}</p>
          </div>
          <div>
            <p className="m-0">
              <strong>Question 16:</strong>
            </p>
            <p className="m-0 mb-6">{dataForm.question16Devis}</p>
          </div>
        </div>
      </Tailwind>
    </Html>
  );
}
