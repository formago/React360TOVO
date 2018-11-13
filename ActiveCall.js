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

const DELAY = 500;
export default class ActiveCall extends React.Component {
  constructor(props) {
    super(props);
    this.springValue1 = new Animated.Value(0);
    this.springValue2 = new Animated.Value(0);
    this.springValue3 = new Animated.Value(0);
    this.state = { data: [] };
  }

  componentDidMount() {
    this.startAnimation();
    this.generateData();
    // this.interval = setInterval(() => {
    //   this.generateData();
    // }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  generateData = () => {
    const data = [];
    data.push(250);
    data.push(190);
    data.push(230);
    data.push(130);

    // for (let i = 0; i < 4; i++) {
    //   data.push(Math.floor(Math.random() * window.width));
    // }

    this.setState({
      data
    });
  };

  startAnimation() {
    Animated.parallel([
      Animated.spring(this.springValue1, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue2, {
        toValue: 1,
        friction: 5,
        tension: 5
      })
      // Animated.spring(this.springValue3, {
      //   toValue: 1,
      //   friction: 5,
      //   tension: 5
      // })
    ]).start();
  }
  render() {
    return (
      <View style={styles.panel}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 400,
            width: 300,
            backgroundColor: "black",
            transform: [{ scale: this.springValue1 }]
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePic}
              source={{
                uri:
                  "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
              }}
            />

            <View>
              <Text style={styles.greeting}>Call Critical Accounts</Text>
              <Text style={styles.greeting}>$1.5 million</Text>
              <View style={styles.lineStyle} />
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 300,
            left: 0,
            bottom: 0,
            height: 180,
            width: 250,
            transform: [{ scale: this.springValue2 }]
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePic}
              source={{
                uri:
                  "/static_assets/Madison-Iseman-awesome-dp-profile-pics-MyWhatsappImages.com-1044.jpg"
              }}
            />
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={styles.greeting}>Freda</Text>
              <View style={styles.lineStyle} />
            </View>
          </View>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>Welcome to your call dashboard!</Text>
            <Text style={styles.greeting}>
              You have 27 customers to call today.I have prioritized them based
              on my prediction.
            </Text>
          </View>
        </Animated.View>

        <View
          style={{
            position: "absolute",
            top: 50,
            left: 270,
            height: 600,
            width: 700
            //  backgroundColor: "white",
            //  transform: [{ scale: this.springValue3 }]
          }}
        >
          <View
            style={{
              flexDirection: "row",
              height: 150,
              width: 700
              //backgroundColor: "red"
              //justifyContent: "flex-start"
            }}
          >
            <View>
              <Text style={styles.greeting}>Permalink Mfg.</Text>
              <Text style={styles.greeting}>Customer since June 2002</Text>
            </View>
            <View style={styles.verticalSeperator} />
            <View>
              <VrButton style={styles.greetingBox}>
                <Text style={styles.greeting}>Call</Text>
                <Text style={styles.greeting}>+91 8124632237</Text>
              </VrButton>
              <Text style={styles.greeting}>Keith Smith</Text>
              <Text style={styles.greeting}>Manager,Account payable</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 250,
              width: 700,
              //  backgroundColor: "yellow",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Text style={styles.greeting}>Current Aging</Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F5FCFF",
                  justifyContent: "center"
                }}
              >
                <View style={{ transform: [{ rotate: "90deg" }] }}>
                  {this.state.data.map((value, index) => (
                    <AnimatedBar
                      value={value}
                      delay={DELAY * index}
                      key={index}
                    />
                  ))}
                </View>
              </View>
            </View>

            <View>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.square1} />
                <Text style={styles.greeting}>30 days</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.square2} />
                <Text style={styles.greeting}>30-60 days</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.square3} />
                <Text style={styles.greeting}>60 days</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <View style={styles.square4} />
                <Text style={styles.greeting}>Current</Text>
              </View>
            </View>

            <View>
              <Text style={styles.greeting}>Predicted Aging</Text>
              <Text style={styles.greeting}>(in 2 weeks)</Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F5FCFF",
                  justifyContent: "center"
                }}
              >
                <View style={{ transform: [{ rotate: "90deg" }] }}>
                  {this.state.data.map((value, index) => (
                    <AnimatedBar2
                      value={value}
                      delay={DELAY * index}
                      key={index}
                    />
                  ))}
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              height: 200,
              width: 700,
              //backgroundColor: "blue",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={styles.greeting}>
              Open Invoices-----------------------
            </Text>
          </View>
        </View>
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
    //  backgroundColor: "rgba(255, 255, 255, 0.4)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    padding: 10,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2
  },
  greeting: {
    fontSize: 25
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
    height: 200,
    width: 5,
    backgroundColor: "#D81458",
    marginLeft: 30
  },
  lineStyle: {
    borderWidth: 3.5,
    borderColor: "red",
    margin: 10,
    width: 150
  },
  square1: {
    width: 20,
    height: 20,
    backgroundColor: "yellow"
  },
  square2: {
    width: 20,
    height: 20,
    backgroundColor: "orange"
  },
  square3: {
    width: 20,
    height: 20,
    backgroundColor: "red"
  },
  square4: {
    width: 20,
    height: 20,
    backgroundColor: "green"
  }
});
