import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { name, email, password },
  } = req;
  const user = await db.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  res.json({ ok: true, user });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
