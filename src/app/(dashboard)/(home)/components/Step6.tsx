"use client";

import { useFormContext } from "@/src/context/Contex";

export function Step6() {
  const { formData, setFormData } = useFormContext();
  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        QUAIS AS MEDIDAS DA IGREJA?
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-default-600 w-max font-semibold text-sm">
            Largura
          </label>
          <input
            className="w-full rounded-xl text-[16px] border-2 border-[#123262] h-12 px-4 focus:outline-none placeholder:text-default-400"
            placeholder="Insira a Largura"
            onChange={(e) =>
              setFormData({ ...formData, churchWidth: e.target.value })
            }
            value={formData.churchWidth}
            autoFocus
          />
        </div>
        {formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA." && (
          <div className="flex flex-col">
            <label className="text-default-600 w-max font-semibold text-sm">
              Comprimento
            </label>
            <input
              className="w-full rounded-xl text-[16px] border-2 border-[#123262] h-12 px-4 focus:outline-none placeholder:text-default-400"
              placeholder="Insira o Comprimento"
              onChange={(e) =>
                setFormData({ ...formData, churchLength: e.target.value })
              }
              value={formData.churchLength}
            />
          </div>
        )}
      </div>
    </>
  );
}
