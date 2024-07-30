import { navigate } from "astro:transitions/client";
import { useState } from "react";
import type { FormEvent } from "react";
export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const values = Object.fromEntries(formData);
    const response = await fetch("/api/insert", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
      navigate("/");
    }
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="name">
        Name
        <input type="text" id="name" name="name" autoComplete="name" required />
      </label>
      <label htmlFor="description">
        description
        <input
          type="text"
          id="description"
          name="description"
          autoComplete="description"
          required
        />
      </label>
      <button>Send</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}
