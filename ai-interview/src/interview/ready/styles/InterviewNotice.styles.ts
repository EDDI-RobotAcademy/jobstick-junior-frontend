import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    max-width: 1200px;
    margin: 50px auto;
    padding: 40px 16px;
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;

    @media (max-width: 800px) {
        font-size: 1.25rem;
    }
`;

export const NoticeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f4f6fa;
    border-radius: 10px;
    padding: 24px 24px;
    min-width: 600px;
    max-width: 900px;
    margin: 32px auto;
    box-shadow: 2px 2px 15px rgba(0,0,0,0.05);
    font-family: 'Roboto', sans-serif;

    @media (max-width: 800px) {
        padding: 16px;
        min-width: unset;
    }
`;

export const NoticeTitle = styled.h3`
  margin-top: 10px;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

export const NoticeList = styled.div`
  p {
    font-size: 16px;
    color: #333;
    margin: 8px 0;
    line-height: 1.6;
    text-align: left;

    strong {
      font-weight: 700;
      color: #1976d2;
    }
  }
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  padding: 8px 16px;
  max-width: 100px;
  background-color: #1976d2;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 2px 2px 15px rgba(0,0,0,0.1);
  border: none;

  &:hover {
    background-color: #1565c0;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;
