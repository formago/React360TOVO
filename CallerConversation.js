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
import TypeWriter from "./TypeWriter";
const { AudioModule } = NativeModules;

export default class CallerConversation extends React.Component {
  constructor(props) {
    super(props);
    this.springVal1 = new Animated.Value(0);
    //this.springVal2 = new Animated.Value(0);
    this.animatedValue = new Animated.Value(0);
    this.state = {
      keithVoice: "",
      notesCaptured1: "",
      notesCaptured2: ""
    };
  }

  componentDidMount() {
    // this.start();
    // this.startVoice();
    // this.startText();
  }

  startText() {
    let that = this;
    setTimeout(function() {
      that.setState({
        keithVoice: "Hi! This is Keith from Permalink..."
      });
    }, 1000);
    setTimeout(function() {
      that.setState({
        keithVoice:
          "Ummm..Yeah..Sure. I am looking for an approval from our new purchasing manager,but i will make sure these are paid by Thursday."
      });
    }, 15000);
    setTimeout(function() {
      that.setState({
        notesCaptured1: "1) Looking for an approval from purchasing manager."
      });
    }, 18000);
    setTimeout(function() {
      that.setState({
        notesCaptured2: "2) Will send the payment by Thursday."
      });
    }, 23000);
  }
  startVoice() {
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112105419314.mp3")
      });
    }, 1000);

    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112105629645.mp3")
      });
    }, 4000);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112105826667.mp3")
      });
    }, 14500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112105921055.mp3")
      });
    }, 21500);
  }
  start() {
    Animated.sequence([
      Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 2000,
        //delay: 8500,
        easing: Easing.ease
      }),
      Animated.spring(this.springVal1, {
        toValue: 1,
        friction: 5,
        tension: 5
      })
      // Animated.spring(this.springVal2, {
      //   toValue: 1,
      //   friction: 5,
      //   tension: 5
      // })
    ]).start();
  }

  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    });
    return (
      <View style={styles.panel}>
        <Animated.View
          style={{
            opacity,
            position: "absolute",
            top: 20,
            left: 10
          }}
        >
          <View
            style={{
              flexDirection: "row"
            }}
          >
            <Image
              style={styles.profilePic}
              source={{
                uri:
                  "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
              }}
            />
            <View>
              <Text style={styles.textOnHorizontalLine}>Keith</Text>
              <View style={styles.lineStyleKeith} />
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 130,
            left: 20,
            width: 250,
            height: 250,
            //  backgroundColor: "grey",
            justifyContent: "flex-start",
            alignItems: "center",
            transform: [{ scale: this.springVal1 }]
          }}
        >
          <TypeWriter style={StyleSheet.flatten(styles.text)} typing={1}>
            {this.state.keithVoice}
          </TypeWriter>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 400,
            left: 20,
            width: 250,
            height: 150,
            //backgroundColor: "grey",
            justifyContent: "space-between",
            alignItems: "center",
            transform: [{ scale: this.springVal1 }]
          }}
        >
          <View style={styles.greetingBox}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Notes Captured
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <TypeWriter typing={1}>{this.state.notesCaptured1}</TypeWriter>
            <TypeWriter typing={1}>{this.state.notesCaptured2}</TypeWriter>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 300,
    height: 600,
    backgroundColor: "black",
    //  backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greeting: {
    fontSize: 30
  },
  greetingBox: {
    padding: 5,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -40
  },
  textOnHorizontalLine: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "bold"
  },
  lineStyleKeith: {
    borderWidth: 3,
    borderColor: "lightgreen",
    margin: 10,
    width: 150
  },
  profilePic: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 100,
    marginLeft: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red"
  }
});
