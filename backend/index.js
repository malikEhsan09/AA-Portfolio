import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST endpoint to receive form data
app.post("/send", (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).send("All fields are required.");
  }

  // Create Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook)
    auth: {
      user: "appKaEMailAddes.com", // Replace with your email
      pass: "appKa password.com", // Replace with your email password
    },
  });

  const mailOptions = {
    from: email, // Sender's email
    to: "aminaanjum13@gmail.com", // Your email to receive feedback
    subject: subject || "New Feedback from Contact Form",
    text: `You received a new message from ${name} (${email}):\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Something went wrong.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Your message has been sent!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
