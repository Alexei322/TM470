import client from "@/lib/mongodb";
import bcrypt from "bcrypt";
export default async (req, res) => {
  try {
    await client.connect();
    const db = client.db("tm470_database");

    if (req.method === "POST") {
      const { username, password } = req.body;
      console.log(username);

      const existingUsername = await db.collection("customers").findOne({
        username: username,
      });
      if (existingUsername) {
        const matched = await bcrypt.compare(
          password,
          existingUsername.password
        );
        if (matched) {
          return res.json(existingUsername);
        } else {
          return res.status(401).json({ message: "Password error" });
        }
      } else {
        console.error("Failed to connect to client", error);
        return res.status(500).json({ message: "Failed to connect" });
      }
    }
  } catch (error) {
    console.error("Failed to connect to client", error);
    return res.status(500).json({ message: "Failed to connect" });
  }
};
