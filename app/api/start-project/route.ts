import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, projectType, budget, message } = body;

        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: 'Lewis Labs <onboarding@lewislabs.co>', // Update with verified domain
                to: ['lewis@lewislabs.co'], // Update with admin email
                subject: `New Project Inquiry: ${name} (${company})`,
                html: `
                <h1>New Project Inquiry</h1>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Type:</strong> ${projectType}</p>
                <p><strong>Budget:</strong> ${budget}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
            });
        } else {
            console.log("Resend API Key missing. Logging inquiry:", body);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
    }
}
