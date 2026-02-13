import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    message,
}) => (
    <div style={{
        fontFamily: 'sans-serif',
        padding: '20px',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '16px'
    }}>
        <h1 style={{ color: '#8b5cf6' }}>New Contact Message from {name}!</h1>
        <p><strong>Email:</strong> {email}</p>
        <div style={{
            marginTop: '20px',
            padding: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '8px',
            lineHeight: '1.6'
        }}>
            {message}
        </div>
        <p style={{ marginTop: '20px', fontSize: '12px', color: '#a1a1aa' }}>
            Sent from Lewis Labs Contact Form
        </p>
    </div>
);
