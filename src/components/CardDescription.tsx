import styled from "styled-components";
import { myTheme } from "../Theme.styled";

export const CardDescription = styled.div`
  color: ${myTheme.textColor.text};
  font-family: Inter;
  font-size: ${myTheme.fontSize.text};
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
  margin: 0 0 19px 0;
`;
