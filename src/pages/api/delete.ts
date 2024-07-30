export const prerender = false;
import type { APIRoute } from "astro";
import prisma from "../../lib/db";

export const DELETE: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const id = url.pathname.split("/").pop(); // Extrae el último segmento de la ruta

  if (!id) {
    return new Response(JSON.stringify({ message: "error" }));
  }
  const response = await prisma.house.delete({
    where: {
      id: id,
    },
  });
  console.log(response);
  return new Response(JSON.stringify({ data: response }));
};
