import client from "@/lib/mongodb";
export default (async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("tm470_database");

    if (req.method === "POST") {
      const { username, orders } = req.body;
      console.log(username);
      console.log(orders);
      
      const existingCustomer = await db
        .collection("customers")
        .updateOne({ username: username }, { $set: { orders: orders } });
      return res.json(existingCustomer);
    }
  } catch (error) {
    console.error("Failed to connect to client", error);
    return res.status(500).json({ message: "Failed to connect" });
  }
});
