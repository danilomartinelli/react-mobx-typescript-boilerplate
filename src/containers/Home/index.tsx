import * as React from "react";
import { inject, observer } from "mobx-react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

import { CounterStore } from "../../stores";

interface IProps {
  counterStore: CounterStore;
}

const Container = styled.div`
  padding: 20px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Count = styled.span`
  font-size: 50px;
  color: ${colors.gray};
`;
const RowButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 480px;
`;
const Button = styled.button`
  height: 50px;
  width: 150px;
  text-align: center;
`;

@inject("counterStore")
@observer
export class Home extends React.Component<IProps, {}> {
  private incrementCount = () => {
    this.props.counterStore.incrementCount();
  };

  private decrementCount = () => {
    this.props.counterStore.decrementCount();
  };

  private resetCount = () => {
    this.props.counterStore.resetCount();
  };

  public render() {
    const formatedCount = this.props.counterStore.formatedCount;

    return (
      <Container>
        <Content>
          <Counter>
            <Count>{formatedCount}</Count>
            <RowButton>
              <Button onClick={this.decrementCount}>Decrement</Button>
              <Button onClick={this.resetCount}>Reset</Button>
              <Button onClick={this.incrementCount}>Increment</Button>
            </RowButton>
          </Counter>
        </Content>
      </Container>
    );
  }
}
