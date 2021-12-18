import { v2 as cloudinary } from "cloudinary";

export enum MEMBER {
  dad = "dad",
  holly = "holly",
  mum = "mum",
}

export interface ICloudinaryImage {
  public_id: string;
}

export default async function getImages(
  member: MEMBER
): Promise<ICloudinaryImage[]> {
  return cloudinary.search
    .expression(`folder=family-soundboard/${member}/* AND resource_type=image`)
    .sort_by("public_id", "desc")
    .max_results(30)
    .execute()
    .then(({ resources }) => resources);
}
