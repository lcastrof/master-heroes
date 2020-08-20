import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 360px) {
    margin-top: 10px;
  }

  max-width: 320px;

  img {
    border-radius: 3px;
    box-shadow: 0 4px 8px #00000029;
  }

  button {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    background: var(--secondary);
    color: var(--quaternary);
    transition: background-color 0.2s ease-in-out;
    box-shadow: 0 4px 8px #00000029;

    &:last-child {
      margin-bottom: 20px;
    }

    &:hover {
      background-color: ${lighten(0.2, '#393e46')};
    }

    &:focus {
      &.isWrong {
        background: var(--error);
      }

      &.isWright {
        background: var(--success);
      }
    }
  }
`;
