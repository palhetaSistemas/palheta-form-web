"use client";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

export function Step4() {
  const { formData, setFormData } = useFormContext();

  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        QUAL A CAPACIDADE ESPERADA?
      </span>
      <div className="flex flex-col gap-4">
        <label className="text-default-600 w-max font-semibold text-sm">
          Selecione abaixo*:
        </label>
        <label
          onClick={() => {
            if (formData.expectedCapacity === "ENTRE 100 E 200 PESSOAS") {
              setFormData({ ...formData, expectedCapacity: null });
            } else {
              setFormData({
                ...formData,
                expectedCapacity: "ENTRE 100 E 200 PESSOAS",
              });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCapacity === "ENTRE 100 E 200 PESSOAS" &&
              "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCapacity === "ENTRE 100 E 200 PESSOAS" &&
                "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCapacity === "ENTRE 100 E 200 PESSOAS" &&
                  "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            ENTRE 100 E 200 PESSOAS
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCapacity === "ATÉ 400 PESSOAS") {
              setFormData({ ...formData, expectedCapacity: null });
            } else {
              setFormData({ ...formData, expectedCapacity: "ATÉ 400 PESSOAS" });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCapacity === "ATÉ 400 PESSOAS" &&
              "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCapacity === "ATÉ 400 PESSOAS" && "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCapacity === "ATÉ 400 PESSOAS" && "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">ATÉ 400 PESSOAS</span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCapacity === "ENTRE 500 E 900 PESSOAS") {
              setFormData({ ...formData, expectedCapacity: null });
            } else {
              setFormData({
                ...formData,
                expectedCapacity: "ENTRE 500 E 900 PESSOAS",
              });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCapacity === "ENTRE 500 E 900 PESSOAS" &&
              "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCapacity === "ENTRE 500 E 900 PESSOAS" &&
                "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCapacity === "ENTRE 500 E 900 PESSOAS" &&
                  "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            ENTRE 500 E 900 PESSOAS
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCapacity === "ENTRE 1000 E 2000 PESSOAS") {
              setFormData({ ...formData, expectedCapacity: null });
            } else {
              setFormData({
                ...formData,
                expectedCapacity: "ENTRE 1000 E 2000 PESSOAS",
              });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCapacity === "ENTRE 1000 E 2000 PESSOAS" &&
              "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCapacity === "ENTRE 1000 E 2000 PESSOAS" &&
                "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCapacity === "ENTRE 1000 E 2000 PESSOAS" &&
                  "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            ENTRE 1000 E 2000 PESSOAS
          </span>
        </label>
        <label
          onClick={() => {
            if (formData.expectedCapacity === "ENTRE 3000 E 5000 PESSOAS") {
              setFormData({ ...formData, expectedCapacity: null });
            } else {
              setFormData({
                ...formData,
                expectedCapacity: "ENTRE 3000 E 5000 PESSOAS",
              });
            }
          }}
          className={cn(
            "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
            formData.expectedCapacity === "ENTRE 3000 E 5000 PESSOAS" &&
              "border-[#123262] shadow-lg"
          )}
        >
          <div
            className={cn(
              "w-5 h-5 border rounded-full flex items-center justify-center",
              formData.expectedCapacity === "ENTRE 3000 E 5000 PESSOAS" &&
                "border-none"
            )}
          >
            <div
              className={cn(
                "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                formData.expectedCapacity === "ENTRE 3000 E 5000 PESSOAS" &&
                  "opacity-100"
              )}
            />
          </div>
          <span className="text-[#123262] text-bold">
            ENTRE 3000 E 5000 PESSOAS
          </span>
        </label>
      </div>
    </>
  );
}
