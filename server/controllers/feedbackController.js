import { google } from "googleapis";
const client_email = process.env.GOOGLE_CLIENT_EMAIL;
const private_key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

// ✅ Create a modern JWT auth client (recommended method)
const auth = new google.auth.JWT({
  email: client_email,
  key: private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

export const sendFeedback = async (req, res) => {
  try {
    const { name, email, feedback } = req.body;

    if (!name || !feedback) {
      return res.status(400).json({
        success: false,
        message: "Name & feedback required",
      });
    }

    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
    const RANGE = "Sheet1!A:D";

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toLocaleString(), name, email || "", feedback]],
      },
    });

    res.json({ success: true, message: "Feedback submitted successfully!" });
  } catch (error) {
    console.error("❌ Error sending feedback:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Check console for details.",
    });
  }
};
