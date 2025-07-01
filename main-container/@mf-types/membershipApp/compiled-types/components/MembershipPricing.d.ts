import React from "react";
interface Plan {
    id: number;
    name: string;
    originalPrice?: number;
    price: number;
    period: string;
    features: string[];
}
interface Props {
    plans: Plan[];
}
declare const MembershipPricing: React.FC<Props>;
export default MembershipPricing;
