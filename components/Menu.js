import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import * as Icon from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  componentDidMount() {
    Animated.spring(this.state.top, {
      toValue: 0,
    }).start();
  }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: screenHeight,
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={require("../assets/background2.jpg")} />
          <Title>James Duffy</Title>
          <Subtitle>Content Creator</Subtitle>
        </Cover>
        <TouchableOpacity
          onPress={this.toggleMenu}
          style={{
            position: "absolute",
            top: 120,
            left: "50%",
            marginLeft: -22,
            zIndex: 1,
          }}
        >
          <CloseView>
            <Icon.Ionicons name="ios-close" size={44} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content />
      </AnimatedContainer>
    );
  }
}

export default Menu;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 8px;
`;

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
  position: absolute;
  background: white;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: 142px;
  background: black;
  align-items: center;
  justify-content: center;
`;

const Content = styled.View`
  height: ${screenHeight};
  background: #f0f3f5;
`;
