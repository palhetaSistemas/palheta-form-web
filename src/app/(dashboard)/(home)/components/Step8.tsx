"use client";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

export function Step8() {
  const { formData, setFormData } = useFormContext();
  const options = [
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 7 E 12 MIL REAIS"
          : "ENTRE 3 E 5 MIL REAIS",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 7 E 12 MIL REAIS"
          : "ENTRE 3 E 5 MIL REAIS",
    },
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 15 E 30 MIL REAIS"
          : "ENTRE 5 E 7 MIL REAIS",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 15 E 30 MIL REAIS"
          : "ENTRE 5 E 7 MIL REAIS",
    },
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 30 E 50 MIL REAIS"
          : "MAIS DE 7 MIL REAIS",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 30 E 50 MIL REAIS"
          : "MAIS DE 7 MIL REAIS",
    },
  ];
  return (
    <>
      <span className="font-bold text-lg text-[#123262] text-center mx-auto">
        QUAL VALOR VOCÊ ESPERA INVESTIR NO PROJETO?
      </span>
      <div className="flex flex-col gap-4">
        <label className="text-default-600 w-max font-semibold text-sm">
          Selecione abaixo*:
        </label>
        {options.map((opt) => (
          <label key={opt.value} className="cursor-pointer">
            <input
              type="radio"
              name="expectedInvestment"
              value={opt.value}
              checked={formData.expectedInvestment === opt.value}
              onChange={() =>
                setFormData({ ...formData, expectedInvestment: opt.value })
              }
              className="hidden peer"
            />

            <div
              className={cn(
                "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 transition duration-150 relative",
                "peer-checked:border-[#123262] peer-checked:shadow-lg"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded-full flex items-center justify-center",
                  "peer-checked:border-none"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded-full   transition duration-150",
                    formData.expectedInvestment === opt.value && "bg-[#123262]"
                  )}
                />
              </div>
              <span className="text-[#123262] font-bold">{opt.label}</span>
            </div>
          </label>
        ))}
      </div>
    </>
  );
}
