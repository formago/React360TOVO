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
  NativeModules
} from "react-360";
import { Easing } from "react-native";
import AnimatedTypingText from "./AnimatedTypingText";
import AnimatedPulse from "./AnimatedPulse";
import CallCriticalAccounts from "./CallCriticalAccounts";
import TypeWriter from "./TypeWriter";
const { AudioModule } = NativeModules;

export default class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.animatedValue3 = new Animated.Value(0);
    this.springValue1 = new Animated.Value(0);
    this.springValue2 = new Animated.Value(0);
    this.springValue3 = new Animated.Value(0);
    this.springValue4 = new Animated.Value(0);
    this.springValue5 = new Animated.Value(0);

    this.state = {
      anim1: true,
      anim2: true,
      showCallCriticalAccounts: false,
      FredaConvo:
        "Alright! Lets take a look at what impact you could make with Collections today."
    };
  }

  componentDidMount() {
    this.spring();
    this.startVoice();
    this.startFredaText();
  }
  startFredaText() {
    let that = this;
    setTimeout(function() {
      that.setState({
        FredaConvo:
          "You could call a list of accounts that i have identified as critical"
      });
    }, 13000);
    setTimeout(function() {
      that.setState({
        FredaConvo:
          "or you could send out a batch of standardized reminders and dunning emails."
      });
    }, 18000);
    setTimeout(function() {
      that.setState({
        FredaConvo:
          "Finally, there are a few disputed invoices that need your review."
      });
    }, 22000);
  }
  startVoice() {
    AudioModule.playOneShot({
      source: asset("/Voices/speech_20181112102938014.mp3")
    });
  }

  spring() {
    Animated.spring(this.springValue1, {
      toValue: 1,
      friction: 5,
      tension: 5
    }).start(() => this.move());
  }
  spring2() {
    Animated.spring(this.springValue2, {
      toValue: 1,
      friction: 5,
      tension: 5
    }).start(() => this.move2());
  }

  spring3() {
    this.setState({
      FredaConvo:
        "Looks like you have the opportunity to impact $3.1 million in working capital today."
    });
    AudioModule.playOneShot({
      source: asset("/Voices/speech_20181112103208020.mp3")
    });
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112103303037.mp3")
      });
    }, 6500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112103350669.mp3")
      });
    }, 10500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112103430089.mp3")
      });
    }, 14500);
    Animated.sequence([
      Animated.spring(this.springValue3, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 7500
      }),
      Animated.spring(this.springValue4, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 3000
      }),
      Animated.spring(this.springValue5, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 3000
      })
    ]).start();
  }

  move() {
    this.setState({
      anim1: false
    });
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1000,
      delay: 2000,
      easing: Easing.back()
    }).start(() => this.spring2());
  }

  move2() {
    this.setState({
      anim2: false
    });
    Animated.sequence([
      Animated.timing(this.animatedValue2, {
        toValue: 1,
        duration: 1000,
        easing: Easing.back()
      }),
      Animated.timing(this.animatedValue3, {
        toValue: 1,
        duration: 1000,
        easing: Easing.back()
      })
    ]).start(() => this.spring3());
  }
  callCriticalAccountSelected() {
    this.setState({ showCallCriticalAccounts: true });
  }
  getTextStyle(anim1) {
    if (anim1 == true) {
      return {
        position: "absolute",
        top: 200,
        left: 350,
        height: 400,
        width: 300,
        backgroundColor: "black",
        // justifyContent: "center",
        // alignItems: "center",
        transform: [{ scale: this.springValue1 }]
      };
    } else {
      const movingMarginLeft = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -340, -340]
      });
      return {
        marginLeft: movingMarginLeft,
        position: "absolute",
        top: 200,
        left: 350,
        height: 400,
        width: 300,
        backgroundColor: "black"
        // justifyContent: "center",
        // alignItems: "center"
      };
    }
  }

  getTextStyle2(anim2) {
    if (anim2 == true) {
      return {
        position: "absolute",
        top: 200,
        left: 400,
        height: 400,
        width: 300,
        backgroundColor: "black",
        // justifyContent: "center",
        // alignItems: "center",
        transform: [{ scale: this.springValue2 }]
      };
    } else {
      const movingMarginTop = this.animatedValue2.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -190, -190]
      });
      return {
        marginTop: movingMarginTop,
        position: "absolute",
        top: 200,
        left: 400,
        height: 400,
        width: 300,
        backgroundColor: "black"

        // justifyContent: "center",
        // alignItems: "center"
      };
    }
  }

  render() {
    const getStartValue = () => "180deg";
    const getEndValue = () => "0deg";

    const movingMarginAmount = this.animatedValue3.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 130, 130]
    });
    if (this.state.showCallCriticalAccounts) {
      return <CallCriticalAccounts />;
    }
    return (
      <View style={styles.panel}>
        <Animated.View style={this.getTextStyle(this.state.anim1)}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePic}
              source={{
                uri:
                  "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
              }}
            />
            <View
              style={{
                justifyContent: "flex-start",
                marginLeft: 5
              }}
            >
              <Text style={styles.textFreda}>Freda</Text>
              <View style={styles.lineStyleFreda} />
            </View>
          </View>

          <TypeWriter typing={1}>{this.state.FredaConvo}</TypeWriter>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: -120,
            left: 700,
            marginTop: movingMarginAmount
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.verticalSeperator} />
            <Image
              style={{ width: 70, height: 70 }}
              source={{
                uri: "/static_assets/cash1.jpg"
              }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.textAmount}>$3.1</Text>
              <Text style={styles.textAmount}>million</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View style={this.getTextStyle2(this.state.anim2)}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={styles.txtWorkingCap}>WORKING CAPITAL</Text>
              <Text style={styles.txtWorkingCap}>IMPACT POTENTIAL</Text>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            width: 200,
            height: 200,
            transform: [{ scale: this.springValue3 }],
            position: "absolute",
            top: 100,
            left: 300,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={styles.greeting}>$1.5 million</Text>
          <Image
            style={styles.profilePic}
            source={{
              uri:
                "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
            }}
          />
          <VrButton
            style={styles.greetingBox}
            onClick={this.callCriticalAccountSelected.bind(this)}
          >
            <Text style={styles.greeting}>Call</Text>
            <Text style={styles.greeting}>Critical</Text>
            <Text style={styles.greeting}>Accounts</Text>
          </VrButton>
        </Animated.View>

        <Animated.View
          style={{
            width: 200,
            height: 200,
            transform: [{ scale: this.springValue4 }],
            position: "absolute",
            top: 100,
            left: 550,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={styles.greeting}>$1.5 million</Text>
          <Image
            style={styles.profilePic}
            source={{
              uri:
                "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
            }}
          />
          <VrButton style={styles.greetingBox}>
            <Text style={styles.greeting}>Execute</Text>
            <Text style={styles.greeting}>standardized</Text>
            <Text style={styles.greeting}>emails</Text>
          </VrButton>
        </Animated.View>
        <Animated.View
          style={{
            width: 200,
            height: 200,
            transform: [{ scale: this.springValue5 }],
            position: "absolute",
            top: 100,
            left: 800,
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text style={styles.greeting}>$1.5 million</Text>
          <Image
            style={styles.profilePic}
            source={{
              uri:
                "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
            }}
          />
          <VrButton style={styles.greetingBox}>
            <Text style={styles.greeting}>Review</Text>
            <Text style={styles.greeting}>Disputed</Text>
            <Text style={styles.greeting}>invoices</Text>
          </VrButton>
        </Animated.View>
      </View>
      // <Animated.View
      //   style={{
      //     flexDirection: "row",
      //     justifyContent: "space-between",
      //     alignItems: "center",
      //     position: "absolute",
      //     top: 100,
      //     left: 500,
      //     transform: [{ scale: this.springValue3 }]
      //   }}
      // >

      //  </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    flexDirection: "row",
    backgroundColor: "black",
    //  backgroundColor: "rgba(255, 255, 255, 0.4)",
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
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 100
  },
  verticalSeperator: {
    height: 70,
    width: 3,
    backgroundColor: "#D81458"
  },
  textFreda: {
    marginTop: 30,
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "bold"
  },
  textAmount: {
    fontSize: 25,
    fontWeight: "bold"
  },
  txtWorkingCap: {
    fontSize: 25,
    fontWeight: "bold"
  },
  lineStyleFreda: {
    borderWidth: 3,
    borderColor: "orange",
    margin: 10,
    width: 150
  }
});
