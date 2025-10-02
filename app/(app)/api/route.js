import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, otp } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail", // or another SMTP service
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family:Arial, sans-serif; padding:20px;">
        <h2>🔐 Your OTP Code</h2>
        <p>Hello,</p>
        <p>Your OTP for completing the transfer is:</p>
        <h1 style="color:#2b6cb0;">${otp}</h1>
        <p>This code will expire in 10 minutes.</p>
        <br/>
        <p>Thanks,<br/>Your Bank</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Bank Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Your OTP Code",
      html: htmlTemplate,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
}
