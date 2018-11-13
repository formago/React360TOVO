import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  VrButton,
  Environment,
  asset,
  NativeModules,
  staticResourceURL
} from "react-360";
import { Easing } from "react-native";
const { VideoModule } = NativeModules;
const vidModule = NativeModules.videoModule;

export default class ChooseTheme extends React.Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.setBG = this.setBG.bind(this);

    this.state = {
      sceneButtonClicked: false
    };
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 3000,
      //delay: 8500,
      easing: Easing.ease
    }).start();
  }

  setBG(number) {
    console.log("Set BG called");
    this.setState({
      sceneButtonClicked: true
    });
    if (number === 1) {
      Environment.setBackgroundImage(asset("sunrise_paris_2.jpg"));
      //  vidModule.muteAudio("image");
    } else if (number === 2) {
      Environment.setBackgroundImage(asset("homebase.png"));
      //  vidModule.muteAudio("image");
    } else if (number === 3) {
      //Environment.setBackgroundImage(asset("horseshoe_bend.jpg"));
      //   vidModule.muteAudio("video");
      Environment.setBackgroundVideo("myplayer");
      VideoModule.resume("myplayer");
    }
  }

  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    });
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 200,
            width: 227
          }}
        >
          <View
            style={{
              width: 227,
              height: 200,
              backgroundColor: "violet",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <VrButton
              onClick={() => {
                this.setBG(1);
              }}
              style={styles.greetingBox}
            >
              <Text style={styles.greeting}>Sunrise</Text>
            </VrButton>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 200,
            width: 227
          }}
        >
          <View
            style={{
              width: 227,
              height: 200,
              backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <VrButton
              onClick={() => {
                this.setBG(2);
              }}
              style={styles.greetingBox}
            >
              <Text style={styles.greeting}>Space</Text>
            </VrButton>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            opacity,
            marginTop: 10,
            height: 200,
            width: 227
          }}
        >
          <View
            style={{
              width: 227,
              height: 200,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <VrButton
              onClick={() => {
                this.setBG(3);
              }}
              style={styles.greetingBox}
            >
              <Text style={styles.greeting}>Mountain</Text>
            </VrButton>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  greeting: {
    fontSize: 30
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  }
});
