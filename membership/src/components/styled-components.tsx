// styled-components.tsx
import styled from "styled-components";

export const Container = styled.div`
    padding: 40px 16px;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 32px;
`;

export const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
`;

export const SubTitle = styled.p`
    font-size: 16px;
    color: #000;
`;

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
`;

export const Card = styled.div<{ gradient: string }>`
    padding: 24px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    color: white;
    background: ${({ gradient }) =>
            gradient === "lightblue"
                    ? "linear-gradient(135deg, #b3e5fc, #4fc3f7)"
                    : gradient === "midblue"
                            ? "linear-gradient(135deg, #81d4fa, #29b6f6)"
                            : gradient === "darkblue"
                                    ? "linear-gradient(135deg, #4fc3f7, #0288d1)"
                                    : "#ccc"};
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-6px);
    }
`;

export const CardTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
`;

export const PriceBox = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    text-align: center;
`;

export const OriginalPrice = styled.span`
    text-decoration: line-through;
    color: #000;
    font-weight: 600;
    margin-right: 8px;
    font-size: 16px;
`;

export const DiscountedPrice = styled.span`
    color: red;
    font-weight: 900;
    font-size: 24px;
`;

export const Divider = styled.div`
    border-top: 1px solid white;
    margin: 16px 0;
`;

export const FeatureList = styled.ul`
    list-style: none;
    padding-left: 1rem;
    color: white;
    font-size: 15px;

    li {
        margin-bottom: 8px;
    }
`;

export const SubscribeButton = styled.button`
    width: 100%;
    margin-top: auto;
    padding: 12px 0;
    font-weight: bold;
    color: #1976d2;
    background-color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        opacity: 0.9;
    }
`;
