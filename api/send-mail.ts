// /api/send-email.ts
import { Resend } from 'resend';
import ContactEmail from '../src/emails/contact-email'; // Your React Email component

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
   const data = await resend.emails.send({
      from: 'Contact Form <info@frightzoneengineers.com>',
      to: ['your-personal-email@gmail.com'],
      subject: `New Inquiry from ${name}`,
      // FIXED: Moved reply-to inside headers to fix the TypeScript error
      headers: {
        'Reply-To': email,
      },
      react: ContactEmail({ name, message }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}