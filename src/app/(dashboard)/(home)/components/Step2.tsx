"use client";
import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";

export function Step2() {
  const { formData, setFormData } = useFormContext();

  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        QUAL SUA FUNÇÃO NA IGREJA?
      </span>
      {!formData.churchPosition ? (
        <div className="flex flex-col gap-4">
          <label className="text-default-600 w-max font-semibold text-sm">
            Selecione abaixo*:
          </label>
          <label
            onClick={() => {
              if (formData.churchPosition === "Pastor") {
                setFormData({ ...formData, churchPosition: null });
              } else {
                setFormData({ ...formData, churchPosition: "Pastor" });
              }
            }}
            className={cn(
              "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
              formData.churchPosition === "Pastor" &&
                "border-[#123262] shadow-lg"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 border rounded-full flex items-center justify-center",
                formData.churchPosition === "Pastor" && "border-none"
              )}
            >
              <div
                className={cn(
                  "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                  formData.churchPosition === "Pastor" && "opacity-100"
                )}
              />
            </div>
            <span className="text-[#123262] text-bold">Pastor</span>
          </label>
          <label
            onClick={() => {
              if (formData.churchPosition === "Pastora") {
                setFormData({ ...formData, churchPosition: null });
              } else {
                setFormData({ ...formData, churchPosition: "Pastora" });
              }
            }}
            className={cn(
              "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
              formData.churchPosition === "Pastora" &&
                "border-[#123262] shadow-lg"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 border rounded-full flex items-center justify-center",
                formData.churchPosition === "Pastora" && "border-none"
              )}
            >
              <div
                className={cn(
                  "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                  formData.churchPosition === "Pastora" && "opacity-100"
                )}
              />
            </div>
            <span className="text-[#123262] text-bold">Pastora</span>
          </label>
          <label
            onClick={() => {
              if (formData.churchPosition === "Cooperador") {
                setFormData({ ...formData, churchPosition: null });
              } else {
                setFormData({ ...formData, churchPosition: "Cooperador" });
              }
            }}
            className={cn(
              "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
              formData.churchPosition === "Cooperador" &&
                "border-[#123262] shadow-lg"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 border rounded-full flex items-center justify-center",
                formData.churchPosition === "Cooperador" && "border-none"
              )}
            >
              <div
                className={cn(
                  "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                  formData.churchPosition === "Cooperador" && "opacity-100"
                )}
              />
            </div>
            <span className="text-[#123262] text-bold">Cooperador</span>
          </label>
          <label
            onClick={() => {
              if (formData.churchPosition === "Cooperadora") {
                setFormData({ ...formData, churchPosition: null });
              } else {
                setFormData({ ...formData, churchPosition: "Cooperadora" });
              }
            }}
            className={cn(
              "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
              formData.churchPosition === "Cooperadora" &&
                "border-[#123262] shadow-lg"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 border rounded-full flex items-center justify-center",
                formData.churchPosition === "Cooperadora" && "border-none"
              )}
            >
              <div
                className={cn(
                  "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                  formData.churchPosition === "Cooperadora" && "opacity-100"
                )}
              />
            </div>
            <span className="text-[#123262] text-bold">Cooperadora</span>
          </label>
          <label
            onClick={() => {
              if (formData.churchPosition === "Outro(a)") {
                setFormData({ ...formData, churchPosition: null });
              } else {
                setFormData({ ...formData, churchPosition: "Outro(a)" });
              }
            }}
            className={cn(
              "w-full flex items-center gap-2 rounded-xl border-2 h-12 px-4 relative transition duration-150",
              formData.churchPosition === "Outro(a)" &&
                "border-[#123262] shadow-lg"
            )}
          >
            <div
              className={cn(
                "w-5 h-5 border rounded-full flex items-center justify-center",
                formData.churchPosition === "Outro(a)" && "border-none"
              )}
            >
              <div
                className={cn(
                  "opacity-0 w-4 h-4 rounded-full bg-[#123262] transition duration-150",
                  formData.churchPosition === "Outro(a)" && "opacity-100"
                )}
              />
            </div>
            <span className="text-[#123262] text-bold">Outro(a)</span>
          </label>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="text-default-600 w-max font-semibold text-sm">
              Selecione abaixo:
            </label>
            <button
              onClick={() => setFormData({ ...formData, churchPosition: null })}
              className="w-full flex items-center rounded-xl bg-[#123262] h-12 px-4 text-white"
            >
              {formData.churchPosition}
            </button>
          </div>
          <div className="flex flex-col">
            <label className="text-default-600 w-max font-semibold text-sm">
              Qual o Nome da sua Igreja?
            </label>
            <input
              className="w-full text-[16px] rounded-xl border-2 border-[#123262] h-12 px-4 focus:outline-none placeholder:text-default-400"
              placeholder="Insira o nome aqui"
              onChange={(e) =>
                setFormData({ ...formData, churchName: e.target.value })
              }
              value={formData.churchName}
              autoFocus
            />
          </div>
        </div>
      )}
    </>
  );
}
