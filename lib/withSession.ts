import { withIronSessionApiRoute } from "iron-session/next";

// iron session에 sesstion type 정의
declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: "CarotSession",
  password:
    "4df5g4f65s4g5f61hs0f5g6hgf65j8754854656476574bt65e464v4t65240v54624v62465v0446v40245v65s46505665460",
};

export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions);
}
