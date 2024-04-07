import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  btnContent: string;
  icon?: ReactNode;
  btnStyle?: string;
  btnConStyle?: string;
  iconStyle?: string;
}

const Button = ({
  btnContent,
  icon,
  btnStyle,
  btnConStyle,
  iconStyle,
}: ButtonProps) => {
  return (
    <ButtonWrapper className={btnConStyle}>
      <button className={btnStyle}>
        <span className={iconStyle}>{btnContent}</span>
        {icon}
      </button>
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.div`
  /* border: 2px solid red; */

  > button {
    background-color: #edf0f5;
    padding-block: 10px;
    padding-inline: 25px;
    display: flex;
    align-items: center;
    gap: 6px;
    border-radius: 30px;
    font-weight: 700;
  }
`;
