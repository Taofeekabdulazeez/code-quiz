import styled, { css } from "styled-components";

export const Button = styled.button<{ $type?: string }>`
  background: none;
  border: 0;
  padding: 1.2rem 1.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  border: 0.2rem solid var(--color-primary);
  background-color: var(--color-primary);
  color: #fff;
  border-radius: 13px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  ${(props) =>
    props.$type === "inverted" &&
    css`
      background-color: var(--color-bg-900);
      color: var(--color-text);
      border: 0.2rem solid transparent;
    `}
`;
