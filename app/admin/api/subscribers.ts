import { NextApiRequest, NextApiResponse } from "next";

// Dummy data for illustration
const subscribers = [
  {
    id: 1,
    email: "user1@example.com",
    subscribed: true,
    createdAt: "2023-01-01",
  },
  {
    id: 2,
    email: "user2@example.com",
    subscribed: false,
    createdAt: "2023-02-01",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json({ subscribers });
  } else if (req.method === "POST") {
    const { email } = req.body;

    // Add subscriber to dummy data (replace with database logic)
    const newSubscriber = {
      id: subscribers.length + 1,
      email,
      subscribed: true,
      createdAt: new Date().toISOString(),
    };
    subscribers.push(newSubscriber);

    return res
      .status(201)
      .json({
        success: true,
        message: "Subscriber added",
        subscriber: newSubscriber,
      });
  } else {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}
