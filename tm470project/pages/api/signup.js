import client from "@/lib/mongodb";
import bcrypt from "bcrypt";

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

      const hashedPassword = await bcrypt.hash(password, 10);

      const result = await db.collection("customers").insertOne({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: hashedPassword,
        orders: [],
      });

      return res.status(201).json({message: "User registered!"});
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Failed to connect to client", error);
    return res.status(500).json({ message: "Failed to connect" });
  }
};
