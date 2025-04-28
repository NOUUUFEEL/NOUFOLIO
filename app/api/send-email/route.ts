import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate the form data
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // In a real implementation, you would use a service like SendGrid, Nodemailer, etc.
    // For now, we'll simulate a successful email send

    // Example of what the email sending code might look like:
    // const emailData = {
    //   to: "noufelouan@gmail.com",
    //   from: email,
    //   subject: `Portfolio Contact from ${name}`,
    //   text: message,
    //   html: `<div>
    //     <p><strong>From:</strong> ${name} (${email})</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   </div>`,
    // };
    // await sendEmail(emailData);

    // For demonstration purposes, we'll just return a success response
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
