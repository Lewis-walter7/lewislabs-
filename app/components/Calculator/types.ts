export type CalculatorState = {
    service: string | null;
    features: string[];
    timeline: string | null;
    name: string;
    email: string;
};

export const INITIAL_STATE: CalculatorState = {
    service: null,
    features: [],
    timeline: "standard",
    name: "",
    email: "",
};
