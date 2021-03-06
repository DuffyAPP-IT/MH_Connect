import React from "react";
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import styled from "styled-components";
import Card from "../components/Card";
import * as Icon from "@expo/vector-icons";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import OpenCard from "../components/OpenCard";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { action: state.action };
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () =>
      dispatch({
        type: "OPEN_MENU",
      }),
  };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
  };

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.action == "openMenu") {
      Animated.spring(this.state.scale, {
        toValue: 0.9,
      }).start();
    }
  };
  render() {
    return (
      <AnimatedContainer style={{ transform: [{ scale: this.state.scale }] }}>
        <Menu />
        <TitleBar>
          <TouchableOpacity onPress={this.props.openMenu}>
            <Avatar source={require("../assets/avatar.jpg")} />
          </TouchableOpacity>
          <Title>Welcome to HealthConnectX,</Title>
          <Name>James</Name>
          <Icon.Ionicons
            name="ios-sunny"
            size={32}
            color="#3775f2"
            style={{ position: "absolute", right: 20, top: 5 }}
          />
        </TitleBar>
        <ScrollView style={{ height: "100%" }}>
          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            horizontal={true}
          >
            <Logo image={require("../assets/mind.png")} text="Mind" />
            <Logo image={require("../assets/acro.png")} text="Body" />
            <Logo image={require("../assets/heart.png")} text="SOS" />
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            style={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                caption={card.caption}
                logo={card.logo}
                subtitle={card.subtitle}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </AnimatedContainer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const cards = [
  {
    title: "Managing Anxiety",
    image: require("../assets/background9.jpg"),
    subtitle: "18% complete",
    caption: "Class 1",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Negative Thoughts",
    image: require("../assets/background8.jpg"),
    subtitle: "42% Complete",
    caption: "Class 6",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Improving Sleep Quality",
    image: require("../assets/background4.jpg"),
    subtitle: "Not started",
    caption: "Class 1",
    logo: require("../assets/logo-react.png"),
  },
  {
    title: "Social Connections",
    image: require("../assets/background7.jpg"),
    subtitle: "Not Started",
    caption: "Class 1",
    logo: require("../assets/logo-react.png"),
  },
];

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Container = styled.View`
  flex: 1;
  background-color: whitesmoke;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;
