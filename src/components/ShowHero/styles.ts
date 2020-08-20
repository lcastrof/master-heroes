import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 320px;

  button {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background: var(--secondary);
    color: var(--quaternary);
  }

  button:focus {
    &.isWrong {
      background: var(--error);
    }

    &.isWright {
      background: var(--success);
    }
  }
`;
