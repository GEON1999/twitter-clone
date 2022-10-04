import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
  } = req;
  const foundUser = await db.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (foundUser) {
    res.json({ ok: true });
  } else {
    res.json({ ok: false });
  }
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
