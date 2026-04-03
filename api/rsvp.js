export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("Incoming RSVP:", req.body);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxN3UzLGp0s9JkW0xwFfNYVpDOri52LhhhCjS4JGn3vAvjdjQPj_S9jrnICZJqD1yIv/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const text = await response.text(); // 👈 IMPORTANT (not json yet)
    console.log("Google Script response:", text);

    return res.status(200).json({ success: true, raw: text });
  } catch (error) {
    console.error("API ERROR:", error);
    return res.status(500).json({ message: "Error saving RSVP" });
  }
}