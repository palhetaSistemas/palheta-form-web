"use client";

import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useMemo, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { DatesProps } from "./FormSheet";

moment.locale("pt-br");

interface DateInfo {
  day: number;
  weekDay: string;
  date: string; // YYYY-MM-DD
  hours: { time: string; isAvailable: boolean }[];
}

interface Step11Props {
  dates: DatesProps[] | { slots: DatesProps[] }; // aceita array direto ou objeto com slots
}

// garante que sempre retornamos um array de { date, hours }
function normalizeDates(input: any): DatesProps[] {
  if (Array.isArray(input)) return input;
  if (input?.slots && Array.isArray(input.slots)) return input.slots;
  return [];
}

export function Step11({ dates }: Step11Props) {
  const { formData, setFormData } = useFormContext();
  const [dateRange, setDateRange] = useState<DateInfo[]>([]);

  useEffect(() => {
    const base = normalizeDates(dates);
    if (!base.length) {
      setDateRange([]);
      return;
    }

    const processed: DateInfo[] = base.map((d) => {
      const m = moment(d.date, "YYYY-MM-DD", true); // parse estrito da ISO
      return {
        day: m.date(),
        weekDay: m.format("dddd"),
        date: m.format("YYYY-MM-DD"),
        hours: d.hours,
      };
    });

    setDateRange(processed);

    // Seleciona a primeira data por padrão, se nada estiver selecionado
    if (!formData?.selectedDate?.date && processed.length) {
      setFormData({
        ...formData,
        selectedDate: { date: processed[0].date, time: "" },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dates]);

  // Horários da data selecionada
  const selectedHours = useMemo(() => {
    const sel = formData?.selectedDate?.date;
    if (!sel) return [];
    return dateRange.find((d) => d.date === sel)?.hours ?? [];
  }, [formData?.selectedDate?.date, dateRange]);

  return (
    <>
      <span className="font-bold text-lg mb-4 text-[#123262] w-max mx-auto">
        AGENDAMENTO:
      </span>
      <span className="font-semibold text-default-600 mx-auto">
        PARA FINALIZAR, ESCOLHA O MELHOR HORÁRIO PARA VOCÊ RECEBER UMA LIGAÇÃO
        MINHA COM O SEU ORÇAMENTO
      </span>

      <div className="flex flex-col gap-4">
        {/* Datas */}
        <div className="flex flex-col">
          <label className="text-[#123262] w-max font-semibold text-sm">
            DATA*:
          </label>
          <div className="w-full">
            <Swiper spaceBetween={10} slidesPerView={5}>
              {dateRange.map((item) => (
                <SwiperSlide key={item.date}>
                  <div
                    onClick={() =>
                      setFormData({
                        ...formData,
                        selectedDate: { date: item.date, time: "" },
                      })
                    }
                    className={cn(
                      "flex flex-col text-default-600 items-center rounded-xl p-2 transition duration-300 cursor-pointer",
                      formData?.selectedDate?.date === item.date &&
                        "bg-[#123262] text-white"
                    )}
                  >
                    <span className="text-xs capitalize">
                      {item.weekDay.split("-")[0]}
                    </span>
                    <span className="font-bold text-base">{item.day}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Horários */}
        <div className="flex flex-col">
          <label className="text-[#123262] w-max font-semibold text-sm">
            HORÁRIO*:
          </label>
          <div className="flex flex-wrap items-center justify-center w-full gap-2">
            {formData?.selectedDate?.date &&
              selectedHours.map((timeSlot) => (
                <button
                  key={timeSlot.time}
                  onClick={() =>
                    setFormData({
                      ...formData,
                      selectedDate: {
                        ...formData.selectedDate,
                        time: timeSlot.time,
                      },
                    })
                  }
                  disabled={!timeSlot.isAvailable}
                  className={cn(
                    "w-2/5 px-2 text-center py-1 rounded-md border transition duration-300 border-[#123262] text-[#123262]",
                    !timeSlot.isAvailable &&
                      "bg-[#123262] bg-opacity-40 cursor-not-allowed",
                    formData?.selectedDate?.time === timeSlot.time &&
                      "bg-[#123262] text-white"
                  )}
                >
                  {timeSlot.time}
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
