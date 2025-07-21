import { cn } from "@/src/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FormSheet } from "./FormSheet";

export function StartView() {
  const [openFormSheet, setOpenFormSheet] = useState(false);
  const [isIphone, setIsIphone] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isIphonee = navigator.userAgent.includes("iPhone");
      if (isIphonee) setIsIphone(true);
    }
  }, []);

  return (
    <>
      <div
        className={cn(
          "flex w-11/12 flex-col gap-2 h-full my-auto -translate-y-1/4 justify-center transition duration-700",
          openFormSheet && "-translate-y-full"
        )}
      >
        <Image
          src="/images/logo/logo-white.png"
          alt=""
          width={400}
          height={1200}
          className="w-24 h-40 mx-auto object-contain"
          quality={100}
        />
        <div
          className={cn(
            "flex flex-col transition duration-700 gap-2",
            openFormSheet && "opacity-0"
          )}
        >
          <span className="font-bold text-2xl text-center text-white">
            {isCompleted ? "ORÇAMENTO SOLICITADO" : "SOLICITE SEU ORÇAMENTO"}
          </span>
          <span className="text-white text-center">
            {isCompleted
              ? "Obrigado por solicitar um orçamento, aguarde que a Palheta Arquitetura entraremos em contato em breve."
              : "Por favor, preencha e envie este formulário para receber seu orçamento de projeto."}
          </span>
        </div>
      </div>
      <button
        onClick={() => setOpenFormSheet(true)}
        className={`${isCompleted && "hidden"} ${
          isIphone ? "bottom-40" : "bottom-20 md:bottom-10"
        } absolute  mx-auto w-11/12 h-12 bg-white border border-[#123262] text-[#123262] font-bold text-lg rounded-lg`}
      >
        COMEÇAR
      </button>
      <FormSheet
        open={openFormSheet}
        setOpen={setOpenFormSheet}
        isCompleted={isCompleted}
        setIsCompleted={setIsCompleted}
      />
    </>
  );
}
