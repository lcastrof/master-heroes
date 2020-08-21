import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background: linear-gradient(
    to top,
    var(--secondary),
    var(--primary),
    var(--primary),
    #1b6894
  );
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

    &:first-child {
      color: var(--success);
    }
  }

  span {
    font-size: 80px;
    color: var(--quaternary);
  }

  a {
    margin-top: 40px;
    background: var(--primary);
    text-decoration: none;
    width: 50%;

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
    }

    &:hover {
      opacity: 0.8;

      color: var(--quaternary);
    }
  }
`;

export const Percentage = styled.div`
  margin-bottom: 40px;
`;
