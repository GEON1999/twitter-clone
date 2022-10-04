import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import { withApiSession } from "../../../lib/withSession";
import db from "../../../lib/db";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { email, password },
  } = req;
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (user && user?.password == password) {
    req.session.user = {
      id: user?.id,
    };
    await req.session.save();
    return res.json({ ok: true, user });
  }
  res.json({ ok: false });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
