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
import Collections from "./Collections";

export default class SelectCategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValueLeftView = new Animated.Value(0);
    this.opacityAnimationLeftView = new Animated.Value(0);
    this.animatedValueRightView = new Animated.Value(0);
    this.animatedValueRightView1 = new Animated.Value(0);
    this.opacityAnimationRightView = new Animated.Value(0);
    this.springValue1 = new Animated.Value(0);
    this.springValue2 = new Animated.Value(0);
    this.springValue3 = new Animated.Value(0);

    this.state = {
      showCollections: false,
      showDeductions: false,
      showCreditManagement: false
    };
  }
  componentDidMount() {
    this.animateParallel();
  }

  spring() {
    Animated.sequence([
      Animated.delay(300),
      Animated.spring(this.springValue1, {
        toValue: 1,
        friction: 1,
        tension: 1
      }),
      Animated.delay(300),
      Animated.spring(this.springValue2, {
        toValue: 1,
        friction: 1,
        tension: 1
      }),
      Animated.delay(300),
      Animated.spring(this.springValue3, {
        toValue: 1,
        friction: 1,
        tension: 1
      })
    ]).start();
  }
  reverseAnimateRightView() {
    this.animatedValueRightView.setValue(1);

    Animated.timing(this.animatedValueRightView, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear
    }).start(() => this.setState({ showCollections: true }));
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
    ]).start(() => this.spring());
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

    if (this.state.showCollections) {
      return <Collections />;
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
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Melissa</Text>
            <Text style={styles.greeting}>Pentacorp Industries</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-around",
              marginTop: 40
            }}
          >
            <Animated.Image
              style={{
                width: 150,
                height: 150,
                transform: [{ scale: this.springValue1 }]
              }}
              source={{
                uri:
                  "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
              }}
            >
              <VrButton style={styles.greetingBox}>
                <Text style={styles.greeting}>Collections</Text>
              </VrButton>
            </Animated.Image>
            <Animated.Image
              style={{
                width: 150,
                height: 150,
                transform: [{ scale: this.springValue2 }]
              }}
              source={{
                uri:
                  "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
              }}
            >
              <VrButton style={styles.greetingBox}>
                <Text style={styles.greeting}>Deductions</Text>
              </VrButton>
            </Animated.Image>
            <Animated.Image
              style={{
                width: 150,
                height: 150,
                transform: [{ scale: this.springValue3 }]
              }}
              source={{
                uri:
                  "https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png"
              }}
            >
              <VrButton style={styles.greetingBox}>
                <Text style={styles.greeting}>Credit Management</Text>
              </VrButton>
            </Animated.Image>
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
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
