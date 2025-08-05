"use client";
import { ProposalType } from "@/src/@types/forms";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

interface Step3Props {
  proposalTypes: ProposalType[] | null;
}
export function Step3({ proposalTypes }: Step3Props) {
  const { formData, setFormData } = useFormContext();

  console.log("proposalTypes", proposalTypes);

  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        QUAL SEU OBJETIVO?
      </span>
      <div className="flex flex-col gap-4">
        <label className="text-default-600 w-max font-semibold text-sm">
          Selecione abaixo*:
        </label>
        {proposalTypes && proposalTypes.length > 0 && (
          <div className="flex flex-col gap-2">
            {proposalTypes.map((proposalType) => (
              <label
                key={proposalType.id}
                onClick={() => {
                  if (formData.objective === proposalType) {
                    setFormData({ ...formData, objective: null });
                  } else {
                    setFormData({ ...formData, objective: proposalType });
                  }
                }}
                className={cn(
                  "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
                  formData.objective === proposalType &&
                    "border-[#123262] shadow-lg"
                )}
              >
                <div
                  className={cn(
                    "w-5 h-5 border rounded-full flex items-center justify-center",
                    formData.objective === proposalType && "border-none"
                  )}
                >
                  <div
                    className={cn(
                      "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                      formData.objective === proposalType && "opacity-100"
                    )}
                  />
                </div>
                <span className="text-[#123262] font-bold text-xs">
                  {proposalType.name}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
