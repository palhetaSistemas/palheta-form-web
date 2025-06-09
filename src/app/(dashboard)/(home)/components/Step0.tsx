"use client";

import { useFormContext } from "@/src/context/Contex";
import { useEffect, useState } from "react";

export function Step0() {
  const { formData, setFormData } = useFormContext();
  const [readyToShowInputs, setReadyToShowInputs] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReadyToShowInputs(true);
    }, 100); // ou tente 200ms

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        SOLICITE SEU ORÇAMENTO
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-default-600 w-max font-semibold text-sm">
            Insira seu nome aqui*
          </label>
          {readyToShowInputs && (
            <input
              className="w-full text-[16px] rounded-xl border-2 border-[#123262] h-12 px-4 focus:outline-none placeholder:text-default-400"
              placeholder="Seu nome aqui"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              value={formData.name}
            />
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-default-600 w-max font-semibold text-sm">
            Seu sobrenome aqui*
          </label>
          {readyToShowInputs && (
            <input
              className="w-full rounded-xl text-[16px] border-2 border-[#123262] h-12 px-4 focus:outline-none placeholder:text-default-400"
              placeholder="Seu sobrenome aqui"
              onChange={(e) =>
                setFormData({ ...formData, surname: e.target.value })
              }
              value={formData.surname}
            />
          )}
        </div>
      </div>
    </>
  );
}
