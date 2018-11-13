import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  VrButton
} from "react-360";
import { Easing } from "react-native";
import AnimatedTypingText from "./AnimatedTypingText";
import AnimatedPulse from "./AnimatedPulse";
import SelectCategoryScreen from "./SelectCategoryScreen";

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValueLeftView = new Animated.Value(0);
    this.opacityAnimationLeftView = new Animated.Value(0);
    this.animatedValueRightView = new Animated.Value(0);
    this.animatedValueRightView1 = new Animated.Value(0);
    this.opacityAnimationRightView = new Animated.Value(0);
    this.state = {
      showSelectCategoryScreen: false
    };
  }
  componentDidMount() {
    this.animateParallel();
  }

  reverseAnimateRightView() {
    this.animatedValueRightView.setValue(1);

    Animated.timing(this.animatedValueRightView, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear
    }).start(() => this.setState({ showSelectCategoryScreen: true }));
  }

  animateParallel() {
    Animated.parallel([
      Animated.timing(this.animatedValueLeftView, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValueRightView, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.opacityAnimationLeftView, {
        toValue: 1,
        duration: 1000
      }),
      Animated.timing(this.opacityAnimationRightView, {
        toValue: 1,
        duration: 1000
      })
    ]).start();
  }
  render() {
    const movingMargin = this.animatedValueLeftView.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-400, 0, 0]
    });

    const movingMarginLeft = this.animatedValueRightView.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1700, 0, 0]
    });

    if (this.state.showSelectCategoryScreen) {
      return <SelectCategoryScreen />;
    }
    return (
      <View style={styles.panel}>
        <Animated.View
          style={{
            marginLeft: movingMargin,
            height: 600,
            width: 350,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "black",
            opacity: this.opacityAnimationLeftView
          }}
        >
          <View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri:
                      "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
                  }}
                />
                <AnimatedPulse
                  color="orange"
                  numPulses={1}
                  diameter={200}
                  speed={20}
                  duration={2000}
                />
              </View>
              <View style={styles.verticalSeperator} />
            </View>
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>Freda</Text>
            </View>
          </View>
          <View>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri:
                      "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
                  }}
                />
                <View style={styles.verticalSeperator} />
              </View>
            </View>
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>Melissa</Text>
              <Text style={styles.greeting}>Pentacorp</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            marginLeft: movingMarginLeft,
            height: 600,
            width: 650,
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "black",
            opacity: this.opacityAnimationRightView
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >
            <AnimatedTypingText
              text="Good Morning Melissa.Welcome to work.Lets get started by setting up the mood for today.Please choose from the menu available on your right"
              TextColor="#00E676"
              AnimatedTextSize={30}
            />
          </View>
          <View>
            <VrButton
              style={styles.greetingBox}
              onClick={this.reverseAnimateRightView.bind(this)}
            >
              <Text style={styles.greeting}>Get Started</Text>
            </VrButton>
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "flex-end",
              alignItems: "flex-start",
              marginBottom: 20
            }}
          >
            <View style={styles.greetingBox}>
              <Text style={styles.greeting}>Melissa</Text>
              <Text style={styles.greeting}>Pentacorp Industries</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    flexDirection: "row",
    backgroundColor: "black",
    //backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 30
  },
  profilePic: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  verticalSeperator: {
    height: 200,
    width: 5,
    backgroundColor: "#D81458",
    marginLeft: 30
  }
});
