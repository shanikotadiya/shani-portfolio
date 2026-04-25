import nodemailer from "nodemailer";
import { env } from "../../constant";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                { success: false, message: "All fields required" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: env.EMAIL_USER,
                pass: env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `${env.USER_NAME} <${env.EMAIL_USER}>`,
            to: env.RECIPIENT_EMAIL,
            subject: `Portfolio Contact: ${subject}`,
            html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>

<body style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 15px;">
    <tr>
      <td align="center">

        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:650px;background:#ffffff;border-radius:18px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(90deg,#06b6d4,#7c3aed);padding:28px 30px;text-align:center;">
              <h1 style="margin:0;font-size:28px;color:#ffffff;">
                New Portfolio Inquiry
              </h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.9);font-size:14px;">
                Someone contacted you through your website
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:30px;">

              <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Name</p>
                    <p style="margin:5px 0 0;font-size:16px;color:#111827;font-weight:600;">
                      ${name}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Email</p>
                    <p style="margin:5px 0 0;font-size:16px;color:#111827;font-weight:600;">
                      ${email}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #eef2f7;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Subject</p>
                    <p style="margin:5px 0 0;font-size:16px;color:#111827;font-weight:600;">
                      ${subject}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="padding:18px 0 0;">
                    <p style="margin:0;font-size:13px;color:#64748b;">Message</p>

                    <div style="margin-top:10px;padding:18px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;color:#111827;font-size:15px;line-height:1.7;">
                      ${message}
                    </div>
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:22px 30px;background:#f8fafc;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;font-size:13px;color:#6b7280;">
                Sent from your portfolio contact form
              </p>

              <p style="margin:8px 0 0;font-size:14px;color:#06b6d4;font-weight:600;">
                Shani Kotadiya Portfolio
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`,
        });

        return Response.json({
            success: true,
            message: "Message sent successfully",
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}