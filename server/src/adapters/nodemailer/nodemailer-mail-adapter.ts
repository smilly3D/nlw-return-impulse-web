import { MailAdapter, SandMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a45daae933ff9a",
    pass: "59d9eaa8aeb971"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SandMailData) {
    await transport.sendMail({
    from: 'Equipe Deedget <oi@feedget.com>',
    to: 'Smilly Delmondes <smilly.3d@gmail.com>',
    subject,
    html: body,

  })
  }

}