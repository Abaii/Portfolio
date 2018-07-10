import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
const TimeText = styled.p`
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right: 0;
  margin-right: 20px;
`;
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick(), 1000;
    });
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return <TimeText>{this.state.date.toLocaleTimeString()}</TimeText>;
  }
}
export default Timer;
