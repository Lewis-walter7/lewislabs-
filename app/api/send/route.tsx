import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';
import { render } from '@react-email/render';

export async function POST(req: NextRequest) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey || apiKey === 're_123') {
            console.error('RESEND_API_KEY is missing or using default');
            return NextResponse.json({ error: 'Config Error: API Key missing' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const emailHtml = await render(<EmailTemplate name={name} email={email} message={message} />);

        const { data, error } = await resend.emails.send({
            from: 'Lewis Labs <onboarding@resend.dev>',
            to: ['lewisindusa@gmail.com'], // Updated to requested inbox email
            subject: `New Contact from ${name}`,
            html: emailHtml,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json({ error, message: 'Resend failed to send email' }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('API Send Catch Error:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined
        }, { status: 500 });
    }
}
