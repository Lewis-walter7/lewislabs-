import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Lewis Labs <onboarding@resend.dev>',
            to: ['lewisindusa12@gmail.com'], // The user's email based on social links provided earlier
            subject: `New Contact from ${name}`,
            react: <EmailTemplate name={ name } email = { email } message = { message } />,
        });

    if (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
} catch (error) {
    return NextResponse.json({ error }, { status: 500 });
}
}
