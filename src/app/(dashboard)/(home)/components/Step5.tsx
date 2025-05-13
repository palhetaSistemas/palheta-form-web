"use client";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

export function Step5() {
  const { formData, setFormData } = useFormContext();

  return (
    <>
      <span className="font-bold text-lg text-[#123262] text-center mx-auto">
        QUANTO PRETENDE INVESTIR NA EXECUÇÃO DA OBRA?
      </span>
      <div className="flex flex-col gap-4">
        <label className="text-default-600 w-max font-semibold text-sm">
          Selecione abaixo*:
        </label>
        <label
          onClick={() => {
            if (formData.expectedCost === 0) {
              setFormData({ ...formData, expectedCost: null });
            } else {
              setFormData({ ...formData, expectedCost: 0 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCost === 0 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCost === 0 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCost === 0 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {formData.objective !== 2 ? "ATÉ 100 MIL" : "ATÉ 20 MIL"}
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCost === 1) {
              setFormData({ ...formData, expectedCost: null });
            } else {
              setFormData({ ...formData, expectedCost: 1 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCost === 1 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCost === 1 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCost === 1 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {formData.objective !== 2 ? "ATÉ 300 MIL" : "ATÉ 50 MIL"}
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCost === 2) {
              setFormData({ ...formData, expectedCost: null });
            } else {
              setFormData({ ...formData, expectedCost: 2 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCost === 2 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCost === 2 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCost === 2 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {" "}
            {formData.objective !== 2 ? "ATÉ 500 MIL" : "ATÉ 100 MIL"}
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCost === 3) {
              setFormData({ ...formData, expectedCost: null });
            } else {
              setFormData({ ...formData, expectedCost: 3 });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCost === 3 && "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCost === 3 && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCost === 3 && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            {formData.objective !== 2
              ? "ENTRE 700 MIL E 1 MILHÃO"
              : "100 MIL +"}
          </span>
        </label>
        {formData.objective !== 2 && (
          <>
            <label
              onClick={() => {
                if (formData.expectedCost === 4) {
                  setFormData({ ...formData, expectedCost: null });
                } else {
                  setFormData({ ...formData, expectedCost: 4 });
                }
              }}
              className={cn(
                "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
                formData.expectedCost === 4 && "border-[#123262] shadow-lg"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded-full flex items-center justify-center",
                  formData.expectedCost === 4 && "border-none"
                )}
              >
                <div
                  className={cn(
                    "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                    formData.expectedCost === 4 && "opacity-100"
                  )}
                />
              </div>
              <span className="text-[#123262] text-bold">
                ENTRE 1 E 3 MILHÕES
              </span>
            </label>
            <label
              onClick={() => {
                if (formData.expectedCost === 5) {
                  setFormData({ ...formData, expectedCost: null });
                } else {
                  setFormData({ ...formData, expectedCost: 5 });
                }
              }}
              className={cn(
                "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
                formData.expectedCost === 5 && "border-[#123262] shadow-lg"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 border rounded-full flex items-center justify-center",
                  formData.expectedCost === 5 && "border-none"
                )}
              >
                <div
                  className={cn(
                    "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                    formData.expectedCost === 5 && "opacity-100"
                  )}
                />
              </div>
              <span className="text-[#123262] text-bold">
                MAIS DE 3 MILHÕES
              </span>
            </label>
          </>
        )}
      </div>
    </>
  );
}
