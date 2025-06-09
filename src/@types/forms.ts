export interface ProposalStatus {
  id: string;
  name: string;
  color: string;
  position: number;
}
export interface ProposalType {
  id: string;
  name: string;
  color: string;
  description: string;
  position: number;
}
export interface FormProps {
  name: string;
  surname: string;
  country: string;
  state: string;
  city: string;
  churchPosition: string | null;
  churchName: string;
  objective: ProposalType | null;
  expectedCapacity: string | null;
  expectedCost: string | null;
  churchWidth?: string;
  churchLength?: string;
  firstBudget: boolean | null;
  expectedInvestment: string | null;
  description: string;
  mobilePhone: string;
  selectedDate: {
    date: string | null;
    time: string | null;
  };
}

export interface LocationProps {
  label: string;
  value: string;
  id: number;
}
