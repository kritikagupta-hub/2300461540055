const express = require("express");
const axios = require("axios");

const app = express();

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcml0aWthZ3VwdGExNjEwMjAwNUBnbWFpbC5jb20iLCJleHAiOjE3ODExNjgwODQsImlhdCI6MTc4MTE2NzE4NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjZhODFhZGM3LWU4NjgtNDgwMi1iYzMxLTRmOTVlODk0NmJmMyIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImtyaXRpa2EgZ3VwdGEiLCJzdWIiOiIwZDkxNDRhOC02ZWY0LTRhOTUtYWFhMS0xZTY3MWEwNTIzM2EifSwiZW1haWwiOiJrcml0aWthZ3VwdGExNjEwMjAwNUBnbWFpbC5jb20iLCJuYW1lIjoia3JpdGlrYSBndXB0YSIsInJvbGxObyI6IjIzMDA0NjE1NDAwNTUiLCJhY2Nlc3NDb2RlIjoiQkFWRFNoIiwiY2xpZW50SUQiOiIwZDkxNDRhOC02ZWY0LTRhOTUtYWFhMS0xZTY3MWEwNTIzM2EiLCJjbGllbnRTZWNyZXQiOiJ0SHJSU2dNQlhlRlBtcWJVIn0.M0J_fVvQrqDL42fn55WAifhCTGlLRYjmC2oi65wbA-0";

app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch notifications" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});