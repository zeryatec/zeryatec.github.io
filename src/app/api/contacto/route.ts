import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      console.error("BREVO_API_KEY no está configurada.");
      return NextResponse.json(
        { error: "Error de configuración del servidor." },
        { status: 500 }
      );
    }

    // Llamada a la API de Brevo (Sendinblue) para enviar email transaccional
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "ZeryaTec Web",
          email: "zeryatec@gmail.com",
        },
        to: [
          {
            email: "zeryatec@gmail.com",
            name: "ZeryaTec",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Web ZeryaTec] Nueva solicitud de ${name}`,
        htmlContent: `
          <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; border-radius: 16px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #006593, #003852); padding: 32px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 800;">Nueva Solicitud de Contacto</h1>
            </div>
            <div style="padding: 32px;">
              <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #006593;">
                <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Nombre</p>
                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1e293b;">${name}</p>
              </div>
              <div style="background: white; border-radius: 12px; padding: 24px; margin-bottom: 16px; border-left: 4px solid #006593;">
                <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Email</p>
                <p style="margin: 0; font-size: 16px; font-weight: 600; color: #1e293b;">${email}</p>
              </div>
              <div style="background: white; border-radius: 12px; padding: 24px; border-left: 4px solid #006593;">
                <p style="margin: 0 0 4px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8;">Mensaje</p>
                <p style="margin: 0; font-size: 16px; color: #1e293b; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="background: #f1f5f9; padding: 16px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">Puedes responder directamente a este email para contactar con ${name}.</p>
            </div>
          </div>
        `,
      }),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json();
      console.error("Error de Brevo:", errorData);
      return NextResponse.json(
        { error: "Error al enviar el mensaje. Inténtalo de nuevo." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en /api/contacto:", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
