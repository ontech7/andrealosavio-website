import Image from "next/image";
import { useState, type FormEvent } from "react";

import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import FormCheckbox from "./elements/checkbox";
import FormInput from "./elements/input";
import FormSelect from "./elements/select";
import FormTextarea from "./elements/textarea";
import FormFieldset from "./fieldset";
import FormLabel from "./label";

import Button from "../core/button";
import Link from "../core/link";
import Text from "../core/text";

import { subjectMap } from "@/shared-data/api/contact";
import type { ContactBody, ContactResponseData } from "@/shared-data/api/contact/types";

import successSvg from "./elements/images/success.svg";

export default function ContactForm() {
  const [formValues, setFormValues] = useState<ContactBody>({
    subject: "website",
    name: "",
    email: "",
    message: "",
    privacy: false
  });

  const setValue = (name: string, value: string) => {
    setFormValues(prevValues => ({ 
      ...prevValues, 
      [name]: value 
    }))
  }

  const [isSuccess, setSuccess] = useState<boolean | undefined>();

  const submitContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formValues)
    })

    const data: ContactResponseData = await response.json();

    setSuccess(data.success)
  }

  return (
    <>

      {isSuccess == undefined &&
        <form
          onSubmit={submitContactForm}
          sx={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            mx: "auto"
          }}
        >
          <Text as="h3" ssx={{ textAlign: "center" }}>
            Contattami oggi.
          </Text>

          <FormFieldset>
            <FormLabel 
              name="subject" 
              text="Oggetto *" 
            />
            <FormSelect 
              name="subject" 
              required
              options={Object.entries(subjectMap)}
              value={formValues.subject} 
              setValue={setValue} 
            />
          </FormFieldset>

          <FormFieldset>
            <FormLabel 
              name="name" 
              text="Nome *" 
            />
            <FormInput 
              name="name"
              required 
              type="text"
              adornment="user"
              value={formValues.name} 
              setValue={setValue} 
            />
          </FormFieldset>

          <FormFieldset>
            <FormLabel 
              name="email" 
              text="Email *" 
            />
            <FormInput 
              name="email" 
              required
              type="email"
              adornment="mail"
              value={formValues.email} 
              setValue={setValue} 
            />
          </FormFieldset>

          <FormFieldset>
            <FormLabel 
              name="message" 
              text="Messaggio *" 
            />
            <FormTextarea 
              name="message" 
              required
              value={formValues.message} 
              setValue={setValue} 
            />
          </FormFieldset>

          <FormFieldset>
            <FormCheckbox
              text={
                <>
                  Acconsento al trattamento dei miei dati personali al fine di 
                  ricevere una risposta al mio messaggio, come indicato 
                  nella <Link target="_blank" href="/privacy-policy">Privacy Policy</Link>. *
                </>
              }
              name="privacy"
              required
              value={String(formValues.privacy)}
              setValue={setValue}
            />
          </FormFieldset>

          <Button
            type="submit"
            variant="secondary"
            sx={{ alignSelf: "flex-end", mt: "10px" }}
          >
            INVIA

            <PaperAirplaneIcon 
              width={24}
              sx={{ color: "black", ml: 2 }}
            />
          </Button>

        </form>
      }

      {isSuccess == true &&
        <div
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <Image 
            src={successSvg} 
            alt="Messaggio inviato correttamente" 
            sx={{ height: "30px", mb: "20px" }}
          />
          <Text color="black">
            <b>Messaggio inviato correttamente!</b>
          </Text>
          <Text color="black">
            Riceverai al più presto una risposta alla tua richiesta.
          </Text>
          <Text color="black">
            Ricordati di tenere d'occhio la casella "<b>Spam</b>".
          </Text>
        </div>
      }

      {isSuccess == false &&
        <div
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
            gap: "10px"
          }}
        >
          <Image 
            src={successSvg} 
            alt="Messaggio non inviato"
            sx={{ height: "30px", mb: "20px", filter: "grayscale(1)" }}
          />
          <Text color="black">
            <b>Messaggio non inviato :(</b>
          </Text>
          <Text color="black">
            Ricarica la pagina o riprova più tardi.
          </Text>
        </div>
      }

    </>
  )
}
