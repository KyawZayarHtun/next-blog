import { NextResponse } from "next/server";
import prisma from "@/utils/connect";

export const GET = async req => {
  const {searchParams} = new URL(req.url)

  const page = searchParams.get("page")
  const category = searchParams.get("cat")

  const POST_PER_PAGE = 2;

  try {

    const query = {
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * ( page - 1 ),
      where: {
        ...(category && {catSlug: category})
      }
    }

    /*const posts = await prisma.post.findMany({
      take: POST_PER_PAGE,
      skip: POST_PER_PAGE * (page - 1)
    });*/
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({where: query.where}),
    ]);

    return new NextResponse(JSON.stringify({posts, count}, {status: 200}));

  } catch (e) {
    alert(e);
    return new NextResponse(JSON.stringify(
      {message: "Something went wrong!"},
      {status: 500}));
  }
}