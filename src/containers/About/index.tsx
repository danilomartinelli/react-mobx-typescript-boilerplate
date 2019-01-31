import * as React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

import * as reactImg from "../../assets/img/react.svg";
import * as mobxImg from "../../assets/img/mobx.png";

const Container = styled.div`
  padding: 20px;
`;
const Features = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Content = styled.div`
  color: ${colors.gray};
`;
const Title = styled.span`
  font-size: 20px;
  color: ${colors.blue};
`;
const ImgContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  height: auto;
  width: auto;
`;

export class About extends React.Component<{}, {}> {
  public render() {
    return (
      <Container>
        <Features>
          <Content>
            <Title>Features</Title>
            <ul>
              <li>React 16</li>
              <li>React Hot Loader</li>
              <li>Mobx 5</li>
              <li>Styled Components</li>
              <li>React Router 4</li>
              <ul>
                <li>React Router DOM</li>
              </ul>
              <li>Hot Reload</li>
              <li>Source Map</li>
              <li>Typescript 3</li>
              <ul>
                <li>ESNEXT</li>
                <li>Linter</li>
              </ul>
              <li>Webpack 4</li>
              <ul>
                <li>Uglify</li>
                <li>Imagemin</li>
                <li>Favicon Plugin</li>
              </ul>
            </ul>
          </Content>
          <ImgContent>
            <Image src={reactImg} alt="Logo React" />
            <Image src={mobxImg} alt="Logo Mobx" />
          </ImgContent>
        </Features>
      </Container>
    );
  }
}
