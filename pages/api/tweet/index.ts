import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tweets = await db.tweet.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      _count: {
        select: {
          like: true,
        },
      },
    },
  });
  res.json({ ok: true, tweets });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
