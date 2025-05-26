"use client";

import { useFormContext } from "@/src/context/Contex";
import countryCodes from "@/src/lib/countryCodes.json";
import { maskPhone } from "@/src/lib/masks";
import { cn } from "@/src/lib/utils";
import { useEffect, useState } from "react";

export function Step10() {
  const { formData, setFormData } = useFormContext();
  const [countryPhoneCode, setCountryPhoneCode] = useState("+55");
  const [countryCode, setCountryCode] = useState("BR");

  const handleCountryCodeUpdate = () => {
    const foundCountry = countryCodes.countries.find(
      (country) => country.phone_code === countryPhoneCode
    );
    console.log("foundCountry: ", foundCountry);
    if (foundCountry) {
      setCountryCode(foundCountry.country_code);
    } else {
      setCountryCode("");
    }
  };

  useEffect(() => {
    handleCountryCodeUpdate();
  }, [countryPhoneCode]);

  useEffect(() => {
    if (countryCode === "") {
      setFormData({
        ...formData,
        mobilePhone: "",
      });
    }
  }, [countryCode]);

  return (
    <>
      <span className="font-bold text-lg text-[#123262] w-max mx-auto">
        TELEFONE (WHATSAPP):
      </span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="text-default-600 w-max font-semibold text-sm">
            Insira seu Telefone*
          </label>
          <div className="flex items-center gap-4 w-full">
            <label className="h-12 w-28 border rounded-xl px-4 flex items-center gap-2">
              {countryCode !== "" ? (
                <img
                  src={`https://flagsapi.com/${countryCode}/shiny/64.png`}
                  className="w-8 max-w-8 min-w-8 h-auto"
                />
              ) : (
                <div className="w-8 max-w-8 min-w-8 h-6 bg-[#123262]" />
              )}
              <input
                className="w-[calc(100%-2.5rem)] text-[16px] h-12 focus:outline-none border-none bg-transparent placeholder:text-default-400"
                placeholder="+55"
                value={countryPhoneCode}
                onChange={(e) => setCountryPhoneCode(e.target.value)}
              />
            </label>
            <label
              className={cn(
                "h-12 border rounded-xl px-4 flex items-center gap-2",
                countryCode === "" &&
                  "cursor-not-allowed opacity-70 bg-default-300"
              )}
            >
              <input
                disabled={countryCode === ""}
                className="w-full h-12 text-[16px] focus:outline-none border-none bg-transparent placeholder:text-default-400"
                placeholder="(99) 9 9999-9999"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    mobilePhone: maskPhone(e.target.value),
                  })
                }
                value={formData.mobilePhone}
                maxLength={15}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
