import client from "@/lib/mongodb";

export default async (req, res) => {
  try {
    await client.connect();
    const db = client.db("tm470_database");

    if (req.method === "POST") {
      const { firstName, lastName, email, username, password } = req.body;
      const existingEmail = await db.collection("customers").findOne({
        email: email,
      });
      const existingUsername = await db.collection("customers").findOne({
        username: username,
      });
      if (existingEmail) {
        return res.status(400).json({ message: "Email already taken" });
      }
      if (existingUsername) {
        return res.status(400).json({ message: "Username already taken" });
      }
      const result = await db.collection("customers").insertOne({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
      });
      return res.json(result);
    }
  } catch (error) {
    console.error("Failed to connect to client", error);
    return res.status(500).json({ message: "Failed to connect" });
  }
};
