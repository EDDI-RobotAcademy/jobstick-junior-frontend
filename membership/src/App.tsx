// membership/src/App.tsx
import React from "react";
import MembershipPricing from "./components/MembershipPricing";

const plans = [
    {
        id: 1,
        name: "베이직",
        originalPrice: 9900,
        price: 4900,
        period: "1개월",
        features: ["기본 모의면접", "이력서 첨삭"],
    },
    {
        id: 2,
        name: "프리미엄",
        originalPrice: 19900,
        price: 14900,
        period: "1개월",
        features: ["심화 모의면접", "전문가 피드백", "무제한 이용"],
    },
    {
        id: 3,
        name: "프로",
        price: 29900,
        period: "3개월",
        features: ["전체 서비스 이용 가능", "1:1 코칭 포함"],
    },
];

const MembershipPage: React.FC = () => {
    return <MembershipPricing plans={plans} />;
};

export default MembershipPage;
