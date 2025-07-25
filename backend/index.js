// Simple Express backend for handling demo scheduling
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const excelFilePath = path.join(process.cwd(), 'backend', 'demo-schedule.xlsx');

// Helper: Append data to Excel file
async function appendToExcel(data) {
  let workbook;
  let worksheet;
  if (fs.existsSync(excelFilePath)) {
    workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);
    worksheet = workbook.getWorksheet('DemoRequests');
  } else {
    workbook = new ExcelJS.Workbook();
    worksheet = workbook.addWorksheet('DemoRequests');
    worksheet.addRow(['Name', 'Email', 'Phone', 'Company', 'Message', 'Timestamp']);
  }
  worksheet.addRow([
    data.name,
    data.email,
    data.phone,
    data.company,
    data.message,
    new Date().toISOString()
  ]);
  await workbook.xlsx.writeFile(excelFilePath);
}

// Helper: Send email
async function sendEmail(data) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jithenderkanna@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || 'YOUR_APP_PASSWORD'
    }
  });
  await transporter.sendMail({
    from: 'jithenderkanna@gmail.com',
    to: 'jithenderkanna@gmail.com',
    subject: 'New Cloud Demo Request',
    text: `New demo request received:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCompany: ${data.company}\nMessage: ${data.message}`
  });
}

// API endpoint to receive demo requests
app.post('/api/schedule-demo', async (req, res) => {
  const { name, email, phone, company, message } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }
  try {
    await appendToExcel({ name, email, phone, company, message });
    await sendEmail({ name, email, phone, company, message });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to process request.' });
  }
});

// Endpoint to download the Excel file
app.get('/api/download-demo-excel', (req, res) => {
  if (fs.existsSync(excelFilePath)) {
    res.download(excelFilePath);
  } else {
    res.status(404).send('No data found.');
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
