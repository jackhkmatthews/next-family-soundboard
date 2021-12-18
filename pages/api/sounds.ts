// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const result = await cloudinary.search
    .expression(
      `folder=family-soundboard/${req.query.member}/* AND resource_type=video`
    )
    .sort_by("public_id", "desc")
    .execute();

  res.status(200).json(result);
}
