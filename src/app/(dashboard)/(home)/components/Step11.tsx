"use client";

import { useFormContext } from "@/src/context/Contex";
import { cn } from "@/src/lib/utils";
import moment from "moment";
import "moment/locale/pt-br";
import { useEffect, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { DatesProps } from "./FormSheet";

interface DateInfo {
  day: number;
  weekDay: string;
  date: string;
  hours: {
    time: string;
    isAvailable: boolean;
  }[];
}

interface Step11Props {
  dates: DatesProps[];
}

export function Step11({ dates }: Step11Props) {
  const { formData, setFormData } = useFormContext();
  const [dateRange, setDateRange] = useState<DateInfo[]>([]);
  const [selectedDate, setSelectedDate] = useState<DateInfo | null>(null);

  const processApiDates = (): DateInfo[] => {
    const processedDates: DateInfo[] = dates.map((dateItem) => {
      // Create a date from the current month and the provided day
      const currentDate = moment().date(dateItem.day);

      return {
        day: dateItem.day,
        weekDay: currentDate.format("dddd"),
        date: currentDate.format("YYYY-MM-DD"),
        hours: dateItem.hours,
      };
    });

    setDateRange(processedDates);
    return processedDates;
  };

  useEffect(() => {
    if (dates && dates.length > 0) {
      processApiDates();
    }
  }, [dates]);

  // Find the selected date's hours when a date is selected
  const getSelectedDateHours = () => {
    if (!formData.selectedDate.date) return [];

    const selected = dateRange.find(
      (item) => item.date === formData.selectedDate.date
    );
    return selected?.hours || [];
  };

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
        <div className="flex flex-col">
          <label className="text-[#123262] w-max font-semibold text-sm">
            DATA*:
          </label>
          <div className="w-full">
            <Swiper spaceBetween={10} slidesPerView={5}>
              {dateRange.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      setFormData({
                        ...formData,
                        selectedDate: {
                          date: item.date,
                          time: "",
                        },
                      });
                    }}
                    className={cn(
                      "flex flex-col text-default-600 items-center rounded-xl p-2 transition duration-300 cursor-pointer",
                      formData.selectedDate.date === item.date &&
                        "bg-[#123262] text-white"
                    )}
                  >
                    <span className="text-xs">
                      {item.weekDay.includes("-")
                        ? item.weekDay.split("-")[0]
                        : item.weekDay}
                    </span>
                    <span className="font-bold text-base">{item.day}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#123262] w-max font-semibold text-sm">
            HORÁRIO*:
          </label>
          <div className="flex flex-wrap items-center justify-center w-full gap-2">
            {formData.selectedDate.date &&
              getSelectedDateHours().map((timeSlot, index) => (
                <button
                  key={index}
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
                    formData.selectedDate.time === timeSlot.time &&
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
