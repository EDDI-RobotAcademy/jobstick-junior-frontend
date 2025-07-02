import styled from "styled-components";

export const ControlMargin = styled.div`
    margin-top: 5%;
`;

export const TabContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-bottom: 24px;
`;

export const TabButton = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    padding: 2px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${({ active }) => (active ? "#1976d2" : "#555")};
    cursor: pointer;
    border-bottom: ${({ active }) =>
            active ? "3px solid #1976d2" : "3px solid transparent"};
    transition: color 0.3s ease, border-color 0.3s ease;

    @media (max-width: 800px) {
        min-width: 70px;
        font-size: 12px;
        padding: 6px 10px;
    }
`;

export  const ChipContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    padding: 0 20px;
    margin: 20px auto 0;
    max-width: 1200px;
`;

export const ChipButton = styled.button<{ selected?: boolean }>`
    padding: 8px 16px;
    border-radius: 9999px;
    font-size: 14px;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? "#1976d2" : "#e0e0e0")};
    color: ${({ selected }) => (selected ? "white" : "black")};
    transition: all 0.3s ease;
    border: none;
    
    @media (max-width: 800px) {
        font-size: 12px;
        padding: 6px 12px;
    }
`;