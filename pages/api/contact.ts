import type { ContactBody, ContactResponseData } from "@/shared-data/api/contact/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { subjectMap } from "@/shared-data/api/contact";

export default async function (
  req: NextApiRequest, 
  res: NextApiResponse<ContactResponseData>
) {
  const nodemailer = require("nodemailer");

  if (req.method != "POST") {
    res.status(404).json({ success: false, message: "Metodo non consentito"});
    return;
  }

  const { subject = "website", name, email, message } = JSON.parse(req.body) as Partial<ContactBody>;

  if (subjectMap[subject] == null) {
    res.status(500).send({ success: false, message: "Oggetto non valido" });
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const mailDiRichiesta = {
    from: `Work Request <no-reply@andrealosavio.com>`,
    to: `business@andrealosavio.com`,
    subject: `[Richiesta] - ${subjectMap[subject]}`,
    html: `<b>${name}</b> - ${email}<br><br>
    ${message}`,
  };
  
  const mailOkRicezione = {
    from: `No-Reply <no-reply@andrealosavio.com>`,
    to: email,
    subject: `[Andrea Losavio] - Richiesta ricevuta correttamente!`,
    html: `<img src="https://www.andrealosavio.com/images/favicon.png" height="30"><br><br>
    Ciao <b>${name}</b>,<br><br>
    Grazie per avermi contattato.<br><br>
    La tua richiesta: "<b>${subjectMap[subject]}</b>" è stata ricevuta correttamente!<br><br>
    Riceverai presto una risposta alla tua richiesta di servizio.<br><br>
    N.B.: Tieni d'occhio la casella "<b>Spam</b>"!<br><br>
    --------------------<br><br>
    Questo è un messaggio automatico.<br>
    Non rispondere a questa mail.`,
  };

  try {
    await transporter.sendMail(mailDiRichiesta);
    await transporter.sendMail(mailOkRicezione);
    res.status(200).send({ success: true });
    return;
  } catch (e) {
    res.status(500).send({ success: false, message: e });
    return;
  }
}
