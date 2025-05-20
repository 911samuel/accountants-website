import { NextApiRequest, NextApiResponse } from "next";

// Dummy data for illustration
const subscribers = [
  { id: 1, email: "user1@example.com", subscribed: true },
  { id: 2, email: "user2@example.com", subscribed: false },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const index = subscribers.findIndex((sub) => sub.id === Number(id));

    if (index === -1) {
      return res
        .status(404)
        .json({ success: false, message: "Subscriber not found" });
    }

    // Remove subscriber from the list (replace with database logic)
    subscribers.splice(index, 1);

    return res
      .status(200)
      .json({ success: true, message: "Subscriber deleted" });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
