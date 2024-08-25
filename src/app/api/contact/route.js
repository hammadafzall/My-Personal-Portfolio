const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();
    // For testing
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send email", { status: 500 });
  }
}
