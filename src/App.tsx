import React from "react";
import "./App.css";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  css,
} from "styled-components";
import img from "./assets/img.png";
import { GlobalStyles } from "./global.styles";
import { CardDescription } from "./components/CardDescription";
import { Title } from "./components/Title";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Wrapper>
        <CardIMG />
        <Title>Headline</Title>
        <CardDescription>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </CardDescription>
        <Button colored>See more</Button>
        <Button colorless>Save</Button>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  vertical-align: middle;
  width: 300px;
  height: 350px;
  margin: 0 auto;
  padding: 10px 10px 22px 10px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.1);
`;

const CardIMG = styled.img.attrs((props) => ({
  src: img,
}))`
  border-radius: 10px;
  width: 280px;
  height: 170px;
  margin: 0 0 20px 0;
  border-radius: 10px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
