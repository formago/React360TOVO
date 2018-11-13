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
  asset
} from "react-360";
import { Easing } from "react-native";
import AnimatedTypingText from "./AnimatedTypingText";
import AnimatedPulse from "./AnimatedPulse";
import Collections from "./Collections";
const { AudioModule } = NativeModules;

export default class WelcomeByFreda extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValueFreda = new Animated.Value(0);
    this.animatedValueText1 = new Animated.Value(0);
    this.animatedValueText2 = new Animated.Value(0);
    this.animatedValueGetStartedBtn = new Animated.Value(0);
    this.animatedValuePointingHand = new Animated.Value(0);
    this.springValueMelissa = new Animated.Value(0);
    this.springValuePointingHand = new Animated.Value(0);
    this.springValueFreda2 = new Animated.Value(0);
    this.springValueCollections = new Animated.Value(0);
    this.springValueDeductions = new Animated.Value(0);
    this.springValueCM = new Animated.Value(0);
    this.state = {
      showPointingHand: true,
      showCollections: false,
      showDeductions: false,
      showCM: false
    };
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.sequence([
      Animated.spring(this.springValueMelissa, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.parallel([
        Animated.timing(this.animatedValueFreda, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear
        }),
        Animated.timing(this.animatedValueText1, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear
        })
      ]),
      Animated.spring(this.springValuePointingHand, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 7500
      }),
      Animated.timing(this.animatedValueGetStartedBtn, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      })
    ]).start(() => this.pointingHandAnim());
  }
  pointingHandAnim() {
    this.animatedValuePointingHand.setValue(0);
    Animated.timing(this.animatedValuePointingHand, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear
    }).start(() => this.pointingHandAnim());
  }

  startShowMainMenuAnim() {
    this.animatedValuePointingHand.setValue(1);
    this.animatedValueGetStartedBtn.setValue(1);
    this.animatedValueText1.setValue(1);
    this.springValuePointingHand.setValue(1);
    this.animatedValueFreda.setValue(1);
    Animated.parallel([
      Animated.spring(this.springValuePointingHand, {
        toValue: 0,
        friction: 5,
        tension: 5
      }),
      // Animated.timing(this.animatedValuePointingHand, {
      //   toValue: 0,
      //   duration: 500,
      //   easing: Easing.linear
      // }),
      Animated.timing(this.animatedValueGetStartedBtn, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValueText1, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear
      }),
      Animated.timing(this.animatedValueFreda, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear
      })
    ]).start(() => this.showMenu());
  }
  showMenu() {
    this.setState({
      showPointingHand: false
    });
    AudioModule.playOneShot({
      source: asset("/Voices/speech_20181112102844541.mp3")
    });
    Animated.parallel([
      Animated.spring(this.springValueFreda2, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.timing(this.animatedValueText2, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      })
    ]).start(() => this.showCategoryButtons());
  }

  showCategoryButtons() {
    Animated.sequence([
      Animated.spring(this.springValueCollections, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 2000
      }),
      Animated.spring(this.springValueDeductions, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValueCM, {
        toValue: 1,
        friction: 5,
        tension: 5
      })
    ]).start();
  }
  getHandStyle(showPointingHand) {
    const movingMargin4 = this.animatedValuePointingHand.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -60, 0]
    });
    if (showPointingHand == true) {
      return {
        position: "absolute",
        top: 260,
        left: 900,
        // width: 500,
        // height: 500,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: movingMargin4,
        transform: [{ scale: this.springValuePointingHand }]
      };
    } else {
      const movingMargin5 = this.animatedValuePointingHand.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 0]
      });
      return {
        position: "absolute",
        top: 260,
        left: 1000,
        // width: 500,
        // height: 500,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: movingMargin5,
        transform: [{ scale: this.springValuePointingHand }]
      };
    }
  }

  reverseAnimate(type) {
    console.log("reverseAnim:::::::::");
    this.springValueFreda2.setValue(1);
    this.springValueCollections.setValue(1);
    this.springValueDeductions.setValue(1);
    this.springValueCM.setValue(1);
    this.springValueMelissa.setValue(1);
    this.animatedValueText2.setValue(1);

    Animated.parallel([
      Animated.spring(this.springValueFreda2, {
        toValue: 0,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValueCollections, {
        toValue: 0,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValueDeductions, {
        toValue: 0,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValueCM, {
        toValue: 0,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValueMelissa, {
        toValue: 0,
        friction: 5,
        tension: 5
      }),
      Animated.timing(this.animatedValueText2, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear
      })
    ]).start();
    if (type == "collections") {
      console.log("Selected collections");
      this.setState({
        showCollections: true
      });
    } else if (type == "deductions") {
      this.setState({
        showDeductions: true
      });
    } else if (type == "CM") {
      this.setState({
        showCM: true
      });
    }
  }
  render() {
    const movingMargin1 = this.animatedValueFreda.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1700, 1700]
    });
    const movingMargin2 = this.animatedValueText1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -600, -600]
    });
    const movingMargin3 = this.animatedValueGetStartedBtn.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -400, -400]
    });
    const movingMargin4 = this.animatedValuePointingHand.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -60, 0]
    });
    const movingMargin5 = this.animatedValueText2.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -600, -600]
    });
    if (this.state.showCollections) {
      return <Collections />;
    }
    return (
      <View style={styles.panel}>
        <Animated.View
          style={{
            position: "absolute",
            bottom: 20,
            left: 10,
            flexDirection: "row",
            transform: [{ scale: this.springValueMelissa }]
          }}
        >
          <Image
            style={styles.profilePic}
            source={{
              uri:
                "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
            }}
          />
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Melissa</Text>
            <Text style={styles.greeting}>Pentacorp Industries</Text>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 150,
            left: -1500,
            justifyContent: "flex-start",
            //backgroundColor: "grey",
            alignItems: "center",
            marginLeft: movingMargin1,
            flexDirection: "row"
          }}
        >
          <View>
            <Image
              style={styles.fredaPic}
              source={{
                uri:
                  "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
              }}
            />
            <Text style={styles.textFreda}>Freda</Text>
          </View>
          <View style={styles.lineStyle} />
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 160,
            left: 1000,
            width: 500,
            height: 500,
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: movingMargin2
          }}
        >
          <AnimatedTypingText
            text="Good Morning Melissa.Welcome to work.Lets get started by setting up the mood for today.You could choose from the themes available on your right"
            TextColor="#00E676"
            AnimatedTextSize={30}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 850,
            left: 550,
            justifyContent: "center",
            alignItems: "center",
            marginTop: movingMargin3
          }}
        >
          <VrButton
            style={styles.getStartedBtn}
            onClick={this.startShowMainMenuAnim.bind(this)}
          >
            <Text style={styles.getStartedBtnTxt}>Get Started</Text>
          </VrButton>
        </Animated.View>
        <Animated.View style={this.getHandStyle(this.state.showPointingHand)}>
          <Image
            style={styles.profilePic}
            source={{
              uri: "/static_assets/hand1.jpg"
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 10,
            left: 200,
            justifyContent: "flex-start",
            alignItems: "center",
            transform: [{ scale: this.springValueFreda2 }],
            flexDirection: "row"
          }}
        >
          <View>
            <Image
              style={styles.fredaPic}
              source={{
                uri:
                  "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
              }}
            />
            <Text style={styles.textFreda}>Freda</Text>
          </View>
          <View style={styles.lineStyle} />
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 80,
            left: 1000,
            width: 500,
            height: 500,
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: movingMargin5
          }}
        >
          <AnimatedTypingText
            text="What would to like to work on today? You could choose from Collections,Deductions or Credit Management."
            TextColor="#00E676"
            AnimatedTextSize={30}
          />
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 260,
            left: 350,
            flexDirection: "row",
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
            transform: [{ scale: this.springValueCollections }]
          }}
        >
          <VrButton
            style={styles.getStartedBtn}
            onClick={() => this.reverseAnimate("collections")}
          >
            <Text style={styles.getStartedBtnTxt}>Collections</Text>
          </VrButton>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 260,
            left: 570,
            flexDirection: "row",
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "darkblue",
            transform: [{ scale: this.springValueDeductions }]
          }}
        >
          <VrButton
            style={styles.getStartedBtn}
            onClick={this.startShowMainMenuAnim.bind(this)}
          >
            <Text style={styles.getStartedBtnTxt}>Deductions</Text>
          </VrButton>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 260,
            left: 790,
            flexDirection: "row",
            width: 200,
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightblue",
            transform: [{ scale: this.springValueCM }]
          }}
        >
          <VrButton
            style={styles.getStartedBtn}
            onClick={this.startShowMainMenuAnim.bind(this)}
          >
            <Text
              style={{
                fontSize: 28,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              Credit Management
            </Text>
          </VrButton>
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
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  getStartedBtn: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  getStartedBtnTxt: {
    fontSize: 30
  },
  greetingBox: {
    padding: 3,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    marginLeft: 10
  },
  greeting: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue"
  },
  textFreda: {
    marginLeft: 45,
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
    color: "white"
  },
  profilePic: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  fredaPic: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 200,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  verticalSeperator: {
    height: 200,
    width: 5,
    backgroundColor: "#D81458",
    marginLeft: 30
  },
  lineStyle: {
    borderWidth: 2.5,
    borderColor: "orange",
    width: 580,
    marginTop: 180
  }
});
