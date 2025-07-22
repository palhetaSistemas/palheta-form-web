"use client";
import { Loader2 } from "lucide-react";
import Image from "next/image";
const LayoutLoader = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col space-y-2">
      <Image
        src="/images/logo/icon.png"
        alt=""
        width={100}
        height={100}
        className=" h-10 w-10"
      />
      <span className=" inline-flex gap-1">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Carregando...
      </span>
    </div>
  );
};

export default LayoutLoader;
