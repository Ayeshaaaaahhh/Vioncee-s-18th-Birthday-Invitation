export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, attendance, timestamp } = req.body;

    const payload = {
      timestamp: timestamp || new Date().toISOString(),
      attendance,
      name,
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbyNoTXeyKTYVZrP-7NEhaJYpv5p9c0MxWbYoMTAKEFxY2Nb_X2sKi6UQSHZCB4AFYPi/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error saving RSVP" });
  }
}