export interface Transaction {
  id: number;
  type: "Payment" | "Credit";
  name: string;
  description: string;
  amount: number;
  previousAmount: number;
  date: string;
  pending?: boolean;
  authorizedUser?: string;
}
