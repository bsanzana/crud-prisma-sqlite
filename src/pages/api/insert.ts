export const prerender = false;
import type { APIRoute } from "astro";
import prisma from "../../lib/db";
export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  // Validate the data - you'll probably want to do more than this
  if (!data.name || !data.description) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }

  const house = await prisma.house.create({
    data: {
      description: data.description,
      name: data.name,
    },
  });
  
  console.log(house);
  return new Response(
    JSON.stringify({
      message: "Success!",
      data: house,
    }),
    {
      status: 200,
      headers: {
        Location: "/", 
      },
    }

  );

};
