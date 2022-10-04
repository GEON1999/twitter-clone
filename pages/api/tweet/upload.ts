import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    body,
  } = req;
  await db.tweet.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      tweet: body.tweet,
    },
  });
  res.json({ ok: true });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
