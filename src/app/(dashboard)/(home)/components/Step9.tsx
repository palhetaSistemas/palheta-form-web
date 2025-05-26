"use client";

import { useFormContext } from "@/src/context/Contex";

export function Step9() {
  const { formData, setFormData } = useFormContext();

  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        DESCREVA O QUE VOCÊ PRECISA:
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-default-600 w-max font-semibold text-sm">
            Descreva com suas Palavras
          </label>
          <textarea
            className="resize-none w-full text-[16px] h-52 rounded-xl border px-4 py-2 focus:outline-none placeholder:text-default-400"
            placeholder='DESCREVA AQUI O QUE VOCÊ DESEJA PARA SEU PROJETO ARQUITETÔNICO, APÓS ISSO APENAS CLIQUE EM "PRÓXIMO"'
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData.description}
          />
        </div>
      </div>
    </>
  );
}
