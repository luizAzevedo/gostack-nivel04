import nodemailer, { Transporter } from 'nodemailer';

import IMailProvider from '../models/IMailProvider';

export default class EtherealMailProvider implements IMailProvider {
  private cliente: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.cliente = transporter;
    });
  }

  public async sendMail(to: string, body: string): Promise<void> {
    const messge = await this.cliente.sendMail({
      from: 'lfaazevedo@Hotmail.com',
      to,
      subject: 'Recuperação de senha',
      text: body,
    });

    console.log('Message sent: %s', messge.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(messge));
  }
}
