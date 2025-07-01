import React from "react";
import {
    Container,
    Header,
    Title,
    SubTitle,
    CardGrid,
    Card,
    CardTitle,
    PriceBox,
    OriginalPrice,
    DiscountedPrice,
    Divider,
    FeatureList,
    SubscribeButton,
} from "./styled-components";
import { useNavigate } from "react-router-dom";

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

const MembershipPricing: React.FC<Props> = ({ plans }) => {
    const navigate = useNavigate();

    const formatPrice = (price: number) => {
        return price.toLocaleString();
    };

    const selectPlan = (plan: Plan) => {
        localStorage.setItem("selectedPlanId", String(plan.id));
        localStorage.setItem("selectedPlanPrice", String(plan.price));
        navigate("/payments/confirm");
    };

    const getGradient = (id: number) => {
        if (id === 1) return "lightblue";
        if (id === 2) return "midblue";
        if (id === 3) return "darkblue";
        return "";
    };

    return (
        <Container>
            <Header>
                <Title>멤버십 요금제</Title>
                <SubTitle>AI 모의 면접 서비스를 요금제에 맞게 선택해보세요.</SubTitle>
            </Header>
            <CardGrid>
                {plans.map((plan) => (
                    <Card key={plan.id} gradient={getGradient(plan.id)}>
                        <CardTitle>{plan.name}</CardTitle>
                        <PriceBox>
                            {plan.originalPrice && (
                                <OriginalPrice>{formatPrice(plan.originalPrice)}원</OriginalPrice>
                            )}
                            <DiscountedPrice>{formatPrice(plan.price)}원</DiscountedPrice> / {plan.period}
                        </PriceBox>
                        <Divider />
                        <FeatureList>
                            {plan.features.map((feature, i) => (
                                <li key={i}>✅ {feature}</li>
                            ))}
                        </FeatureList>
                        <SubscribeButton onClick={() => selectPlan(plan)}>구독하기</SubscribeButton>
                    </Card>
                ))}
            </CardGrid>
        </Container>
    );
};

export default MembershipPricing;
