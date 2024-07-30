export const prerender = false;
import type { APIRoute } from "astro";
import prisma from "../../lib/db";

export const GET: APIRoute = async ({ params, request }) => {
  const response = await prisma.house.findMany();

  if (response) {
    return new Response(
      JSON.stringify({
        message: "success",
        data: response,
      }),
      { status: 200 }
    );
  }

  return new Response(
    JSON.stringify({
      message: "error",
    }),
    { status: 500 }
  );
};
