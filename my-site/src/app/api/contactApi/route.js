import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, phone, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', // یا هر سرویس ایمیل که استفاده می‌کنید
      auth: {
        user: 'somdr0889@gmail.com', // ایمیل شما
        pass: 'linkedin1403!@#$%^&*', // رمز عبور ایمیل شما
      },
    });

    const mailOptions = {
      from: email, // ایمیل ارسال‌کننده
      to: 'somdr0889@gmail.com', // ایمیل شما که پیام دریافت می‌کند
      subject: `پیام از ${fullName}`,
      text: `پیام: ${message}\nشماره تماس: ${phone}\nایمیل: ${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'ایمیل ارسال شد' });
    } catch (error) {
      res.status(500).json({ error: error.toString() });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
``