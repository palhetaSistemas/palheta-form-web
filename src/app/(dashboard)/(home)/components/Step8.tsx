"use client";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

export function Step8() {
  const { formData, setFormData } = useFormContext();

  return (
    <>
      <span className="font-bold text-lg text-[#123262] text-center mx-auto">
        QUAL VALOR VOCÊ ESPERA INVESTIR NO PROJETO?
      </span>
      <div className="flex flex-col gap-4">
        <label className="text-default-600 w-max font-semibold text-sm">
          Selecione abaixo*:
        </label>
        <label
          onClick={() => {
            if (formData.expectedInvestment === 0) {
              setFormData({ ...formData, expectedInvestment: null });
            } else {
              setFormData({ ...formData, expectedInvestment: 0 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedInvestment === 0 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedInvestment === 0 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedInvestment === 0 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {formData.objective !== 2
              ? "ENTRE 7 E 12 MIL REAIS"
              : "ENTRE 3 E 5 MIL REAIS"}
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedInvestment === 1) {
              setFormData({ ...formData, expectedInvestment: null });
            } else {
              setFormData({ ...formData, expectedInvestment: 1 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedInvestment === 1 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedInvestment === 1 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedInvestment === 1 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {formData.objective !== 2
              ? "ENTRE 15 E 30 MIL REAIS"
              : "ENTRE 5 E 7 MIL REAIS"}
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedInvestment === 2) {
              setFormData({ ...formData, expectedInvestment: null });
            } else {
              setFormData({ ...formData, expectedInvestment: 2 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedInvestment === 2 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedInvestment === 2 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedInvestment === 2 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {formData.objective !== 2
              ? "ENTRE 30 E 50 MIL REAIS"
              : "MAIS DE 7 MIL REAIS"}
          </span>
        </label>
      </div>
    </>
  );
}
