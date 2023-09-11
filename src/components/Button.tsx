import styled, { css } from "styled-components";
import { myTheme } from "../Theme.styled";

type ButtonPropsType = {
  backColor?: string;
  fontSize?: string;
  colored?: boolean;
  colorless?: boolean;
};

export const Button = styled.button<ButtonPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 200% */
  ${(props) =>
    props.colorless &&
    css<ButtonPropsType>`
      background-color: transparent;
      border: 2px solid ${myTheme.btnColor};
      color: ${myTheme.btnColor};
    `}

  ${(props) =>
    props.colored &&
    css<ButtonPropsType>`
      border: none;
      color: #fff;
      background-color: ${myTheme.btnColor};
      margin: 0 12px 0 0;
    `}
`;
