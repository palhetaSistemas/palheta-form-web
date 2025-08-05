"use client";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

export function Step5() {
  const { formData, setFormData } = useFormContext();

  const options = [
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ATÉ 100 MIL"
          : "ATÉ 20 MIL",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ATÉ 100 MIL"
          : "ATÉ 20 MIL",
    },
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ATÉ 300 MIL"
          : "ATÉ 50 MIL",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ATÉ 300 MIL"
          : "ATÉ 50 MIL",
    },
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ATÉ 500 MIL"
          : "ATÉ 100 MIL",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ATÉ 500 MIL"
          : "ATÉ 100 MIL",
    },
    {
      value:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 700 MIL E 1 MILHÃO"
          : "100 MIL +",
      label:
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
          ? "ENTRE 700 MIL E 1 MILHÃO"
          : "100 MIL +",
    },
    // opções extras apenas se não for Fachada
    ...(formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
      ? [
          {
            value: "ENTRE 1 E 3 MILHÕES",
            label: "ENTRE 1 E 3 MILHÕES",
          },
          {
            value: "MAIS DE 3 MILHÕES",
            label: "MAIS DE 3 MILHÕES",
          },
        ]
      : []),
  ];

  return (
    <>
      <span className="font-bold text-lg text-[#123262] text-center mx-auto">
        QUANTO PRETENDE INVESTIR NA EXECUÇÃO DA OBRA?
      </span>
      <div className="flex flex-col gap-4">
        <label className="text-default-600 w-max font-semibold text-sm">
          Selecione abaixo*:
        </label>

        {options.map((opt) => (
          <label key={opt.value} className="cursor-pointer">
            <input
              type="radio"
              name="expectedCost"
              value={opt.value}
              checked={formData.expectedCost === opt.value}
              onChange={() =>
                setFormData({
                  ...formData,
                  expectedCost:
                    formData.expectedCost === opt.value ? null : opt.value,
                })
              }
              className="hidden"
            />

            <div
              className={cn(
                "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 transition duration-150 relative",
                formData.expectedCost === opt.value &&
                  "border-[#123262] shadow-lg"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded-full flex items-center justify-center",
                  formData.expectedCost === opt.value && "border-none"
                )}
              >
                <div
                  className={cn(
                    "w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                    formData.expectedCost !== opt.value && "opacity-0"
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
