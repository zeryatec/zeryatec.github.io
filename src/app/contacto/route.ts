import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { nombre, email, sector, mensaje } = await request.json();

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY as string,
            },
            body: JSON.stringify({
                sender: { email: "contacto@zeryatec.es", name: "Zeryatec Web" },
                to: [{ email: "contacto@zeryatec.es" }], // Aquí te llegarán los correos
                replyTo: { email: email },
                subject: `Nuevo contacto web de ${nombre}`,
                htmlContent: `
          <h3>Nuevo mensaje desde la web</h3>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sector:</strong> ${sector}</p>
          <p><strong>Mensaje:</strong> ${mensaje}</p>
        `,
            }),
        });

        if (!response.ok) throw new Error('Fallo al conectar con Brevo');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Fallo al enviar el correo' }, { status: 500 });
    }
}