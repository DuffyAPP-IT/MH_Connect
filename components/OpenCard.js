import React from "react";
import styled from "styled-components";
import {
  Animated,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import * as Icon from "@expo/vector-icons";

const screenHeight = Dimensions.get("window").height;

class OpenCard extends React.Component {
  state = {
    top: new Animated.Value(screenHeight),
  };

  compone;
  //   componentDidMount() {
  //     Animated.spring(this.state.top, {
  //       toValue: 100,
  //     }).start();
  //   }

  toggleMenu = () => {
    Animated.spring(this.state.top, {
      toValue: screenHeight,
    }).start();
  };

  render() {
    return (
      <AnimatedContainer style={{ top: this.state.top }}>
        <Cover>
          <Image source={this.props.headherimg} />
          <Title>{this.props.title}</Title>
          <Subtitle>{this.props.sub}</Subtitle>
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
        <Header
          style={{
            paddingTop: 40,
            padding: 15,
          }}
        >
          {this.props.paraheadertxt}
        </Header>
        <Sub
          style={{
            paddingTop: 10,
            padding: 15,
          }}
        >
          {this.props.para1}
        </Sub>

        <Sub
          style={{
            padding: 15,
          }}
        >
          {this.props.para2}
        </Sub>

        <SubPic source={this.props.parapic} />

        <Cred
          style={{
            padding: 15,
            paddingTop: 25,
          }}
        >
          HealthConnectX
        </Cred>

        <Content />
      </AnimatedContainer>
    );
  }
}
export default OpenCard;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 28px;
  font-weight: 600;
`;

const Header = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: 600;
  color: #3c4560;
  font-weight: bold;
  background: whitesmoke;
`;

const Sub = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 400;
  color: #3c4560;
  background: whitesmoke;
`;

const Cred = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 400;
  color: #3c4560;
  background: whitesmoke;
  text-align: center;
`;

const SubPic = styled.Image`
  width: 100px;
  height: 100px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  align-self: center;
  background-color: white;
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
  background: whitesmoke;
`;
