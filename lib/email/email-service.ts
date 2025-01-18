import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);


const email = {
  send: async ({
    to,
    subject,
    mail,
  }: {
    to: string;
    subject: string;
    mail: string;
  }) => {
    return await resend.emails.send({
      from: process.env.NEXT_EMAIL_SENDER_EMAIL!,
      to,
      subject,
      html: mail,
    });
  },
};

export default email;
