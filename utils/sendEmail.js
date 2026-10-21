import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, html) => {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("⚠️ SMTP not configured, email skipped:", subject);
    return;
  }
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  await transporter.sendMail({
    from: `"AUCTECH MARCOM" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
};
