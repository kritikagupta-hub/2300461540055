const BASE_URL = "http://4.224.186.213/evaluation-service/logs";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJrcml0aWthZ3VwdGExNjEwMjAwNUBnbWFpbC5jb20iLCJleHAiOjE3ODExNjcwMjYsImlhdCI6MTc4MTE2NjEyNiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNiOTVjMGQ1LTI5NzktNDM4Yi1iNGNmLTRlYjMyMjlhMGI5NiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImtyaXRpa2EgZ3VwdGEiLCJzdWIiOiIwZDkxNDRhOC02ZWY0LTRhOTUtYWFhMS0xZTY3MWEwNTIzM2EifSwiZW1haWwiOiJrcml0aWthZ3VwdGExNjEwMjAwNUBnbWFpbC5jb20iLCJuYW1lIjoia3JpdGlrYSBndXB0YSIsInJvbGxObyI6IjIzMDA0NjE1NDAwNTUiLCJhY2Nlc3NDb2RlIjoiQkFWRFNoIiwiY2xpZW50SUQiOiIwZDkxNDRhOC02ZWY0LTRhOTUtYWFhMS0xZTY3MWEwNTIzM2EiLCJjbGllbnRTZWNyZXQiOiJ0SHJSU2dNQlhlRlBtcWJVIn0.Nd7OTw40IrcnXwlzhXk8b0NHNQCuRF5JBn_ASbHI5Cc";
export async function Log(stack, level, packageName, message) {
  const logData = {
    stack,
    level,
    package: packageName,
    message
  };

  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`
      },
      body: JSON.stringify(logData)
    });

    console.log("Status:", response.status);

    const responseText = await response.text();
    console.log("Response:", responseText);

    if (response.ok) {
      console.log(`Log Sent: [${stack}] ${level} - ${message}`);
    } else {
      console.log("Log failed");
    }
  } catch (err) {
    console.error("Logging Error:", err);
  }
}