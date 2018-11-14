import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  VrButton,
  NativeModules,
  Environment,
  asset
} from "react-360";
import { Easing } from "react-native";
import AnimatedTypingText from "./AnimatedTypingText";
import AnimatedPulse from "./AnimatedPulse";
import WelcomeByFreda from "./WelcomeByFreda";

const { AudioModule } = NativeModules;

export default class RecognizeUser extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(0);
    this.springValue1 = new Animated.Value(0);
    this.state = {
      showWelcomeScreen: false
    };
  }

  componentDidMount() {
    this.startAnimation();
    this.startVoice();
  }

  startVoice() {
    AudioModule.playOneShot({
      source: asset("/Voices/speech_20181112102227129.mp3")
    });
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112102251269.mp3")
      });
    }, 2000);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112102719291.mp3")
      });
    }, 7000);
  }
  startAnimation() {
    Animated.sequence([
      Animated.timing(this.animatedValue1, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }),
      Animated.spring(this.springValue1, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 1000
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValue4, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }),
      Animated.delay(1000)
    ]).start(() => this.reverseAnim());
  }

  reverseAnim() {
    this.animatedValue1.setValue(1);
    this.animatedValue2.setValue(1);
    this.animatedValue4.setValue(1);
    this.springValue1.setValue(1);

    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValue2, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValue4, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear
      }),
      Animated.spring(this.springValue1, {
        toValue: 0,
        friction: 5,
        tension: 5,
        delay: 1000
      })
    ]).start(() =>
      this.setState({
        showWelcomeScreen: true
      })
    );
  }

  render() {
    const movingMargin1 = this.animatedValue1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -1000, -1000]
    });
    const movingMargin2 = this.animatedValue2.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -1000, -1000]
    });
    const movingMargin4 = this.animatedValue4.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 750, 750]
    });
    if (this.state.showWelcomeScreen) {
      return <WelcomeByFreda />;
    }
    return (
      <View style={styles.panel}>
        <Animated.View
          style={{
            position: "absolute",
            top: 250,
            left: 1500,
            justifyContent: "flex-start",
            //backgroundColor: "grey",
            alignItems: "center",
            marginLeft: movingMargin1
          }}
        >
          <AnimatedTypingText
            text="// Recognizing User.........."
            TextColor="#00E676"
            AnimatedTextSize={30}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 320,
            left: 1500,
            justifyContent: "flex-start",
            //backgroundColor: "grey",
            alignItems: "center",
            marginLeft: movingMargin2
          }}
        >
          <AnimatedTypingText
            text="// User identified"
            TextColor="#00E676"
            AnimatedTextSize={30}
          />
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 50,
            left: 180,
            height: 450,
            width: 400,
            //backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            transform: [{ scale: this.springValue1 }]
          }}
        >
          <Image
            style={styles.profilePic}
            source={{
              uri: "/static_assets/assets/Melissa_small.png"
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 350,
            left: -500,
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: movingMargin4
          }}
        >
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Melissa Greene</Text>
            <Text style={styles.greeting}>Receivables Specialist</Text>
            <Text style={styles.greeting}>Pentacorp Industries</Text>
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
    //  backgroundColor: "black",
    backgroundColor: "rgba(0, 0, 0,0.9)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 10,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    marginTop: 30
  },
  greeting: {
    fontSize: 30,
    color: "blue"
  },
  profilePic: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 170,
    height: 190,
    backgroundColor: "black",
    borderRadius: 100
  },
  verticalSeperator: {
    height: 200,
    width: 5,
    backgroundColor: "#D81458",
    marginLeft: 30
  }
});
