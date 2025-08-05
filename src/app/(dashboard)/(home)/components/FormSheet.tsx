"use client";
import { ProposalStatus, ProposalType } from "@/src/@types/forms";
import { Sheet, SheetContent } from "@/src/components/ui/sheet";
import { useFormContext } from "@/src/context/Contex";
import { getAPI, PostAPI } from "@/src/lib/axios";
import { cn } from "@/src/lib/utils";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Step0 } from "./Step0";
import { Step1 } from "./Step1";
import { Step10 } from "./Step10";
import { Step11 } from "./Step11";
import { Step12 } from "./Step12";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";
import { Step7 } from "./Step7";
import { Step8 } from "./Step8";
import { Step9 } from "./Step9";

interface FormSheetProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCompleted: boolean;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DatesProps {
  day: number;
  hours: {
    time: string;
    isAvailable: boolean;
  }[];
}

export function FormSheet({
  open,
  setOpen,
  isCompleted,
  setIsCompleted,
}: FormSheetProps) {
  const { formData } = useFormContext();
  const [currentStep, setCurrentStep] = useState(0);
  const moment = require("moment");
  const [allowNextStep, setAllowNextStep] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [proposalStatus, setProposalStatus] = useState<ProposalStatus | null>(
    null
  );
  const [proposalType, setProposalType] = useState<ProposalType[] | null>(null);
  const [selectedProposalType, setSelectedProposalType] =
    useState<ProposalType | null>(null);
  const [dates, setDates] = useState<DatesProps[]>([]);

  async function handleGetProposalType() {
    const response = await getAPI("proposal-type");
    setProposalType(response.body.types);
  }

  async function handleGetProposalStatus() {
    const response = await getAPI("/proposal-status/first");
    setProposalStatus(response.body.status);
  }

  async function GetAvailableSchedule() {
    const schedule = await getAPI("/schedule-event/available");
    if (schedule.status === 200) {
      setDates(schedule.body.slots);
    }
  }

  useEffect(() => {
    handleGetProposalType();
    handleGetProposalStatus();
    GetAvailableSchedule();
  }, []);

  async function SendForm() {
    setIsLoading(true);
    const payload = {
      name: formData.name,
      lastName: formData.surname,
      country: formData.country,
      role: formData.churchPosition,
      churchName: formData.churchName,
      goal: formData.objective?.name,
      description: formData.description,
      phone: formData.mobilePhone,
      proposalStatusId: proposalStatus?.id,
      proposalTypeId: formData.objective?.id,
      callDate: moment(formData.selectedDate.date).toDate(),
      callTime: formData.selectedDate.time,
      capacity: formData.expectedCapacity,
      city: formData.city,
      state: formData.state,
      targetValue: formData.expectedCost,
      expectedProjectValue: formData.expectedInvestment,
      churchWidth: formData.churchWidth,
      churchHeight: formData.churchLength,
      haveOtherProposals: !formData.firstBudget,
    };
    const result = await PostAPI("/proposal/form", payload);
    if (result.status === 200) {
      setIsLoading(false);
      setCurrentStep(currentStep + 1);
      return toast.success("Formulário enviado com sucesso!");
    } else {
      setIsLoading(false);
      return toast.error(
        "Erro ao enviar formulário, tente novamente mais tarde"
      );
    }
  }

  console.log("formData", formData);

  const HandleNextStep = () => {
    if (currentStep === 0) {
      if (formData.name === "" || formData.surname === "") {
        return toast.error("Preencha seu nome e sobrenome");
      } else if (formData.name !== "" && formData.surname !== "") {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 1) {
      if (formData.country === "" || formData.city === "") {
        return toast.error("Preencha seu estado, cidade e país");
      } else if (formData.country !== "BRASIL" && formData.city === "") {
        return toast.error("Preencha sua cidade");
      } else {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 2) {
      if (
        formData.churchPosition === "" ||
        formData.churchPosition === null ||
        formData.churchName === ""
      ) {
        return toast.error("Preencha sua função na igreja");
      } else if (
        formData.churchPosition !== "" &&
        formData.churchPosition !== null &&
        formData.churchName !== ""
      ) {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 3) {
      if (formData.objective === null) {
        return toast.error("Preencha seu objetivo");
      } else if (formData.objective !== null) {
        if (formData.objective?.name === "QUERO REFORMAR SOMENTE A  FACHADA.") {
          return setCurrentStep(currentStep + 2);
        } else if (
          formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
        ) {
          return setCurrentStep(currentStep + 1);
        }
      }
    } else if (currentStep === 4) {
      if (formData.expectedCapacity === "") {
        return toast.error("Preencha sua capacidade esperada");
      } else if (formData.expectedCapacity !== "") {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 5) {
      if (formData.expectedCost === "") {
        return toast.error("Preencha seu orçamento esperado");
      } else if (formData.expectedCost !== "") {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 6) {
      if (formData.objective?.name === "QUERO REFORMAR SOMENTE A  FACHADA.") {
        if (formData.churchWidth === "") {
          return toast.error("Preencha a largura da igreja");
        } else if (formData.churchWidth !== "") {
          return setCurrentStep(currentStep + 1);
        }
      } else if (
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
      ) {
        if (formData.churchWidth === "" || formData.churchLength === "") {
          return toast.error("Preencha a largura e comprimento da igreja");
        } else if (
          formData.churchWidth !== "" &&
          formData.churchLength !== ""
        ) {
          return setCurrentStep(currentStep + 1);
        }
      }
    } else if (currentStep === 7) {
      if (formData.firstBudget === null) {
        return toast.error("Preencha se já fez outros orçamentos");
      } else if (formData.firstBudget !== null) {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 8) {
      if (formData.expectedInvestment === "") {
        return toast.error("Preencha seu investimento esperado");
      } else if (formData.expectedInvestment !== "") {
        if (formData.objective?.name === "QUERO REFORMAR SOMENTE A  FACHADA.") {
          return setCurrentStep(currentStep + 2);
        } else if (
          formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
        ) {
          return setCurrentStep(currentStep + 1);
        }
      }
    } else if (currentStep === 9) {
      return setCurrentStep(currentStep + 1);
    } else if (currentStep === 10) {
      if (formData.mobilePhone === "") {
        return toast.error("Preencha seu telefone");
      } else if (formData.mobilePhone !== "") {
        return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 11) {
      if (
        formData.selectedDate.date === null ||
        formData.selectedDate.time === null
      ) {
        return toast.error("Preencha sua data e hora");
      } else if (
        formData.selectedDate.date !== null &&
        formData.selectedDate.time !== null
      ) {
        setIsLoading(true);
        return SendForm();
        // return setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 12) {
      setIsCompleted(true);
      return setOpen(false);
    }
  };

  const HandlePreviousStep = () => {
    if (isCompleted) return;
    if (currentStep <= 2) {
      return setCurrentStep(currentStep - 1);
    } else if (currentStep > 2) {
      if (formData.objective?.name === "QUERO REFORMAR SOMENTE A  FACHADA.") {
        if (currentStep === 5) {
          return setCurrentStep(currentStep - 2);
        } else if (currentStep === 10) {
          return setCurrentStep(8);
        } else {
          return setCurrentStep(currentStep - 1);
        }
      } else {
        return setCurrentStep(currentStep - 1);
      }
    }
  };

  useEffect(() => {
    if (currentStep === 0) {
      if (formData.name === "" || formData.surname === "") {
        setAllowNextStep(false);
      } else if (formData.name !== "" && formData.surname !== "") {
        setAllowNextStep(true);
      }
    } else if (currentStep === 1) {
      if (formData.country === "" || formData.city === "") {
        setAllowNextStep(false);
      } else if (formData.country !== "" && formData.city !== "") {
        setAllowNextStep(true);
      }
    } else if (currentStep === 2) {
      if (
        formData.churchPosition === "" ||
        formData.churchPosition === null ||
        formData.churchName === ""
      ) {
        setAllowNextStep(false);
      } else if (
        formData.churchPosition !== "" &&
        formData.churchPosition !== null &&
        formData.churchName !== ""
      ) {
        setAllowNextStep(true);
      }
    } else if (currentStep === 3) {
      if (formData.objective === null) {
        setAllowNextStep(false);
      } else if (formData.objective !== null) {
        setAllowNextStep(true);
      }
    } else if (currentStep === 4) {
      if (formData.expectedCapacity === "") {
        setAllowNextStep(false);
      } else if (formData.expectedCapacity !== "") {
        setAllowNextStep(true);
      }
    } else if (currentStep === 5) {
      if (formData.expectedCost === "") {
        setAllowNextStep(false);
      } else if (formData.expectedCost !== "") {
        setAllowNextStep(true);
      }
    } else if (currentStep === 6) {
      if (formData.objective?.name === "QUERO REFORMAR SOMENTE A  FACHADA.") {
        if (formData.churchWidth === "") {
          setAllowNextStep(false);
        } else if (formData.churchWidth !== "") {
          setAllowNextStep(true);
        }
      } else if (
        formData.objective?.name !== "QUERO REFORMAR SOMENTE A  FACHADA."
      ) {
        if (formData.churchWidth === "" || formData.churchLength === "") {
          setAllowNextStep(false);
        } else if (
          formData.churchWidth !== "" &&
          formData.churchLength !== ""
        ) {
          setAllowNextStep(true);
        }
      }
    } else if (currentStep === 7) {
      if (formData.firstBudget === null) {
        setAllowNextStep(false);
      } else if (formData.firstBudget !== null) {
        setAllowNextStep(true);
      }
    } else if (currentStep === 8) {
      if (formData.expectedInvestment === "") {
        setAllowNextStep(false);
      } else if (formData.expectedInvestment !== "") {
        setAllowNextStep(true);
      }
    } else if (currentStep === 9) {
      setAllowNextStep(true);
    } else if (currentStep === 10) {
      if (formData.mobilePhone === "") {
        setAllowNextStep(false);
      } else if (
        formData.mobilePhone !== "" &&
        formData.mobilePhone.length === 11
      ) {
        setAllowNextStep(true);
      }
    } else if (currentStep === 11) {
      if (
        formData.selectedDate.date === null ||
        formData.selectedDate.time === null
      ) {
        setAllowNextStep(false);
      } else if (
        formData.selectedDate.date !== null &&
        formData.selectedDate.time !== null
      ) {
        setAllowNextStep(true);
      }
    }
  }, [formData, currentStep]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="bottom"
        className="min-h-1/2 flex flex-col w-full lg:w-[500px] lg:mx-auto justify-between "
        onKeyDown={(e) => e.key === "Enter" && HandleNextStep()}
      >
        {currentStep > 0 && !isCompleted && (
          <ArrowLeft
            className="text-[#123262] absolute top-2 left-2 w-6 h-6"
            onClick={HandlePreviousStep}
          />
        )}
        {currentStep === 0 ? (
          <Step0 />
        ) : currentStep === 1 ? (
          <Step1 />
        ) : currentStep === 2 ? (
          <Step2 />
        ) : currentStep === 3 ? (
          <Step3 proposalTypes={proposalType} />
        ) : currentStep === 4 ? (
          <Step4 />
        ) : currentStep === 5 ? (
          <Step5 />
        ) : currentStep === 6 ? (
          <Step6 />
        ) : currentStep === 7 ? (
          <Step7 />
        ) : currentStep === 8 ? (
          <Step8 />
        ) : currentStep === 9 ? (
          <Step9 />
        ) : currentStep === 10 ? (
          <Step10 />
        ) : currentStep === 11 ? (
          <Step11 dates={dates} />
        ) : (
          <Step12 />
        )}
        <button
          onClick={HandleNextStep}
          disabled={isLoading}
          className={cn(
            "w-full h-12 bg-gradient-to-b from-[#123262dd] to-[#123262] shadow-md border border-[#123262] text-white font-bold text-lg rounded-xl transition duration-300",
            !allowNextStep && "opacity-50 cursor-not-allowed"
          )}
        >
          {isLoading ? (
            <div className="w-full flex items-center justify-center">
              <Loader2 className="animate-spin" />
            </div>
          ) : currentStep !== 12 ? (
            "PRÓXIMO"
          ) : (
            "FINALIZAR"
          )}
        </button>
      </SheetContent>
    </Sheet>
  );
}
