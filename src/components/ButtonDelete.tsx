import { navigate } from "astro/virtual-modules/transitions-router.js";
import type { FormEvent } from "react";

export function ButtonDelete(props: any) {
  async function submit() {
    const response = await fetch(`/api/delete/${props.id}`, {
      method: "DELETE",
    });
    const {message} = await response.json()

    console.log(message)
  }

  return (
    <button onClick={submit} className="bg-red-500 text-white">
      Eliminar
    </button>
  );
}
