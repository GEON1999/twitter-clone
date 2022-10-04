import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import { withApiSession } from "../../../../lib/withSession";
import db from "../../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;
  const tweet = await db.tweet.findUnique({
    where: {
      id: Number(id),
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
  const isLiked = db.like.findFirst({
    where: {
      tweetId: Number(id),
      userId: user?.id,
    },
    select: {
      id: true,
    },
  });
  res.json({ ok: true, tweet, isLiked });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
