"use client";

import { createContext, useContext, useState } from "react";
import { FormProps } from "../@types/forms";

interface FormContextProps {
  formData: FormProps;
  setFormData: React.Dispatch<React.SetStateAction<FormProps>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

export const FormContextProvider = ({ children }: ProviderProps) => {
  const [formData, setFormData] = useState<FormProps>({
    name: "",
    surname: "",
    country: "",
    state: "",
    city: "",
    churchPosition: "",
    churchName: "",
    objective: null,
    expectedCapacity: "",
    expectedCost: "",
    churchWidth: "",
    churchLength: "",
    firstBudget: null,
    expectedInvestment: "",
    description: "",
    mobilePhone: "",
    selectedDate: {
      date: null,
      time: null,
    },
  });

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error(
      "useFormContext deve ser usado dentro de um FormContextProvider"
    );
  }
  return context;
}
