import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export interface SpinnerProps {
  size?: number;
}

const Spinner = styled(({ size, ...props }: any) => (
  <div {...props} />
))<SpinnerProps>`
  display: inline-block;
  width: ${({ size = 40 }) => size}px;
  height: ${({ size = 40 }) => size}px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #000;
  border-radius: 50%;
  animation: ${spinAnimation} 0.5s linear infinite;
`;

export default Spinner;
