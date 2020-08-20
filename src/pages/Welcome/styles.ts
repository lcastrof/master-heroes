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
  justify-content: space-around;

  img {
    width: 100%;
    height: 300px;
  }

  h1 {
    @media (max-width: 720px) {
      font-size: 30px;
    }

    margin-top: 10px;
    font-size: 50px;
    font-weight: 700;
    color: #1b6894;
  }

  h2 {
    @media (max-width: 720px) {
      font-size: 20px;
      line-height: 20px;
      margin-top: 5px;
    }

    font-size: 30px;
    font-weight: 400;
    max-width: 700px;
    line-height: 40px;
    margin-top: 20px;
  }

  .playButton {
    width: 100%;
    display: flex;
    justify-content: center;
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