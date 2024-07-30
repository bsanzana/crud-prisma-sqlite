import { useEffect, useState } from "react";
import prisma from "../lib/db";
import { ButtonDelete } from "./ButtonDelete";
export function Houses() {
  const [houses, setHouses] = useState([]);

  const fechData = async () => {
    const response = await fetch("/api/get");
    const data = await response.json();
    console.log(data);
    setHouses(data.data);
  };

  useEffect(() => {
    fechData();
  }, []);

  return (
    <div className="grid grid-cols-4">
      {houses.length > 0 ? (
        houses.map((house: any) => (
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg"
            key={house?.id}
          >
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Nombre: {house?.name}</div>
              <p className="text-gray-700 text-base">Descripción: {house?.description}</p>
              <ButtonDelete id={house?.id} />
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
