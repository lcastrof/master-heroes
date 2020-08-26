import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  max-width: 1000px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
  animation: ${fadeIn} 2s;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: linear-gradient(to top, var(--secondary), var(--primary));
  border-radius: 10px;
  box-shadow: 0 4px 8px #00000029;
  padding: 50px;
  color: var(--quaternary);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 70px;
    margin-bottom: 40px;

    color: var(--tertiary);
    text-shadow: 0 4px 8px #00000029;

    &:first-child {
      color: var(--success);
    }
  }

  span {
    font-size: 80px;
    color: var(--quaternary);
    text-shadow: 0 4px 8px #00000029;
  }

  a {
    margin-top: 40px;
    background: var(--primary);
    text-decoration: none;
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--tertiary);

    padding: 15px;
    border-radius: 5px;

    font-size: 24px;

    box-shadow: 0 4px 8px #00000029;

    transition: opacity 0.2s, color 0.2s;

    > svg {
      margin-right: 10px;
      flex-shrink: 0;
    }

    &:hover {
      opacity: 0.8;

      color: var(--quaternary);
    }
  }

  @media (max-width: 570px) {
    h1 {
      font-size: 40px;
    }

    span {
      font-size: 30px;
    }
  }
`;

export const Percentage = styled.div`
  margin-bottom: 40px;
`;
