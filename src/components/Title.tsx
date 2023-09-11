import styled from "styled-components";
import { myTheme } from "../Theme.styled";

export const Title = styled.h1`
  color: ${myTheme.textColor.title};
  font-family: Inter;
  font-size: ${myTheme.fontSize.title};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0 0 20px 0;
`;
