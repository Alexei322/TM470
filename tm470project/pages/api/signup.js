import client from "@/lib/mongodb";
export default async (req, res) => {
  try {
    await client.connect();
    const db = client.db("tm470_database");

    if (req.method === "POST") {
      const { username, password } = req.body;
      const existingUsername = await db.collection("customers").findOne({
        username: username,
      });
      console.log(existingUsername);
      return res.json(existingUsername);
    }
  } catch (error) {
    console.error("Failed to connect to client", error);
    return res.status(500).json({ message: "Failed to connect" });
  }
};
