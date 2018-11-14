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
import AnimateNumber from "./AnimateNumber";
import BarGraph from "./BarGraph";
import TypeWriter from "./TypeWriter";
import CallerConversation from "./CallerConversation";
const { AudioModule } = NativeModules;
const surfaceModule = NativeModules.surfaceModule;
import { Surface } from "react-360-web";
const DELAY = 500;
export default class CallCriticalAccounts extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(0);
    this.springValue1 = new Animated.Value(0);
    this.springValue2 = new Animated.Value(0);
    this.springValue3 = new Animated.Value(0);
    this.springValue4 = new Animated.Value(0);
    this.springValue5 = new Animated.Value(0);
    this.springValue6 = new Animated.Value(0);
    this.springValue7 = new Animated.Value(0);
    this.springValue8 = new Animated.Value(0);
    this.springValue9 = new Animated.Value(0);
    this.springValue10 = new Animated.Value(0);
    this.springValue11 = new Animated.Value(0);
    this.springValue12 = new Animated.Value(0);

    this.animatedValue3 = new Animated.Value(0);
    this.animatedValue4 = new Animated.Value(0);
    this.animatedValue5 = new Animated.Value(0);
    this.animatedValueInCall = new Animated.Value(0);
    //  this.inCallAnim = this.inCallAnim.bind(this);

    this.state = {
      anim1: true,
      progress: 0,

      // delay1: 0,
      // delay2: 0,
      // delay3: 0,
      // delay4: 0,
      // delay5: 0,
      // delay6: 0,
      // delay7: 0,
      // delay8: 0,
      // delay9: 0,

      delay1: 48,
      delay2: 41,
      delay3: 39,
      delay4: 36,
      delay5: 13,
      delay6: 15,
      delay7: 7,
      delay8: 8,
      delay9: 2,

      openAmt1: 0,
      openAmt2: 0,
      openAmt3: 0,
      openAmt4: 0,
      openAmt5: 0,
      openAmt6: 0,
      openAmt7: 0,
      openAmt8: 0,
      openAmt9: 0,

      FredaConvo: "",
      MelissaConvo: "",
      showCallerConvo: false
    };
  }

  componentDidMount() {
    this.startAnimation();
    this.startVoice();
    //this.activeCall();
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 1
        };
      });
    }, 1000);
    this.startFredaText();
  }
  startFredaText() {
    let that = this;
    setTimeout(function() {
      that.setState({
        FredaConvo:
          "Welcome to your call dashboard.You have 9 customers to call today.I prioritized these accounts based on my prediction of their past-due situation 2 weeks from now."
      });
    }, 4000);
    setTimeout(function() {
      that.setState({
        FredaConvo:
          "As an example..Permalink has a sizeable open amount and i am predicting a 48 day delay."
      });
    }, 18000);

    setTimeout(function() {
      that.setState({
        FredaConvo:
          "Here's your first customer.The reason i have them as critical is because if you notice the 2 bar graphs, the first one is their aging as of today.The second one is my prediction of their aging for 2 weeks from now."
      });
    }, 25000);

    setTimeout(function() {
      that.setState({
        FredaConvo:
          "Please review the rest of the dashboard and let me know when you are ready to call Keith."
      });
    }, 37000);

    setTimeout(function() {
      that.setState({
        MelissaConvo: "Alright! Lets call Keith.."
      });
    }, 42000);

    setTimeout(function() {
      that.setState({
        FredaConvo: "Sure..I will standby to take notes."
      });
    }, 44000);
  }
  startVoice() {
    let that = this;
    AudioModule.playOneShot({
      source: asset("/Voices/speech_20181112103608127.mp3")
    });

    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112103914144.mp3")
      });
    }, 6500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112104050496.mp3")
      });
    }, 17500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112104444616.mp3")
      });
    }, 24500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112104548886.mp3")
      });
    }, 37500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112104725791.mp3")
      });
    }, 42500);
    setTimeout(function() {
      AudioModule.playOneShot({
        source: asset("/Voices/speech_20181112105209670.mp3")
      });
    }, 44500);
    setTimeout(function() {
      that.inCallAnim();
    }, 46500);
    setTimeout(function() {
      that.setState({
        MelissaConvo:
          "Hi Keith! This is Melissa from Pentacorp.When would you be able to get them paid?"
      });
    }, 55000);
    setTimeout(function() {
      that.setState({
        MelissaConvo:
          "Sure..sounds great! Thanks for your business.Have a nice day!"
      });
    }, 66000);
    setTimeout(function() {
      this.callDisconnected();
    }, 68000);
  }
  callDisconnected() {
    this.animatedValueInCall.setValue(1);
    Animated.timing(this.animatedValueInCall, {
      toValue: 0,
      duration: 1500,
      //delay: 8500,
      easing: Easing.ease
    }).start();
  }
  activeCall() {
    Animated.parallel([
      Animated.timing(this.animatedValue3, {
        toValue: 1,
        duration: 1000,
        easing: Easing.exp
      }),
      Animated.timing(this.animatedValue4, {
        toValue: 1,
        duration: 1000,
        easing: Easing.exp
      }),
      Animated.timing(this.animatedValue5, {
        toValue: 1,
        duration: 1000,
        easing: Easing.exp
      })
    ]).start();
  }
  resizeTest() {
    surfaceModule.resizeSurf(1000, 600);
  }
  inCallAnim() {
    console.log("In call:::::::::::::::::");
    this.animatedValueInCall.setValue(0);
    Animated.timing(this.animatedValueInCall, {
      toValue: 1,
      duration: 1500,
      //delay: 8500,
      easing: Easing.ease
    }).start(() => this.inCallAnim());

    this.setState({
      showCallerConvo: true
    });
  }
  startAnimation() {
    Animated.spring(this.springValue1, {
      toValue: 1,
      friction: 5,
      tension: 5
      // bounciness: 0,
      // speed: 100
    }).start(() => this.move1());
  }

  move1() {
    this.setState({
      anim1: false
    });
    Animated.timing(this.animatedValue1, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear
    }).start(() => this.showFreda());
  }

  showFreda() {
    //  this.activeCall();
    Animated.sequence([
      Animated.spring(this.springValue2, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue3, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue4, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue5, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue6, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue7, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue8, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue9, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue10, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue11, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue12, {
        toValue: 1,
        friction: 5,
        tension: 5
      })
    ]).start(() => this.test());
  }
  test() {
    this.springValue11.setValue(1);
    this.springValue10.setValue(1);
    this.springValue9.setValue(1);
    this.springValue8.setValue(1);
    this.springValue7.setValue(1);
    this.springValue6.setValue(1);
    this.springValue5.setValue(1);
    this.springValue4.setValue(1);
    this.springValue3.setValue(1);

    this.setState({
      // delay1: 48,
      // delay2: 41,
      // delay3: 39,
      // delay4: 36,
      // delay5: 13,
      // delay6: 15,
      // delay7: 7,
      // delay8: 8,
      // delay9: 2,

      openAmt1: 32138,
      openAmt2: 31337,
      openAmt3: 30982,
      openAmt4: 22891,
      openAmt5: 21008,
      openAmt6: 16890,
      openAmt7: 12094,
      openAmt8: 9840,
      openAmt9: 7999
    });

    Animated.sequence([
      Animated.delay(12000),
      Animated.parallel([
        Animated.spring(this.springValue11, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue10, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue9, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue8, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue7, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue6, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue5, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue4, {
          toValue: 0,
          friction: 5,
          tension: 5
        }),
        Animated.spring(this.springValue3, {
          toValue: 0,
          friction: 5,
          tension: 5
        })
      ])
    ]).start(() => this.activeCall());
  }

  getStyle(anim1) {
    if (anim1 == true) {
      return {
        position: "absolute",
        top: 200,
        bottom: 0,
        left: 300,
        right: 0,
        height: 400,
        width: 300,
        backgroundColor: "black",
        // justifyContent: "center",
        // alignItems: "center",
        transform: [{ scale: this.springValue1 }]
      };
    } else {
      const movingMarginLeft = this.animatedValue1.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -180, -290]
      });
      const movingMarginTop = this.animatedValue1.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, -100, -190]
      });
      return {
        marginLeft: movingMarginLeft,
        marginTop: movingMarginTop,
        position: "absolute",
        top: 200,
        bottom: 0,
        left: 300,
        right: 0,
        height: 400,
        width: 300,
        backgroundColor: "black"
        // justifyContent: "center",
        // alignItems: "center"
      };
    }
  }

  render() {
    const movingMarginBottom = this.animatedValue2.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 200, 300]
    });
    const movingMarginTopActiveCall = this.animatedValue3.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 250, 250]
    });
    const movingMarginLeftActiveCall = this.animatedValue4.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -800, -800]
    });
    const movingMarginBottomActiveCall = this.animatedValue5.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, -230, -230]
    });
    const opacity = this.animatedValueInCall.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    });

    return (
      <View style={styles.panel}>
        <Animated.View style={this.getStyle(this.state.anim1)}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePic}
              source={{
                uri: "/static_assets/assets/Call-critical.png"
              }}
            />
            <View>
              <Text style={styles.textOnHorizontalLine}>
                Call Critical Accounts
              </Text>
              <Text style={styles.textOnHorizontalLine}>$1.5 million</Text>
              <View style={styles.lineStyle} />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 150,
            left: 10,
            bottom: 10,
            height: 210,
            width: 250,
            transform: [{ scale: this.springValue2 }]
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePic}
              source={{
                uri: "/static_assets/assets/Freda.png"
              }}
            />
            <View>
              <Text style={styles.textOnHorizontalLine}>Freda</Text>
              <View style={styles.lineStyleFreda} />
            </View>
          </View>
          <View style={styles.greetingBox}>
            <TypeWriter typing={1}>{this.state.FredaConvo}</TypeWriter>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 400,
            left: 10,
            bottom: 10,
            height: 210,
            width: 250,
            transform: [{ scale: this.springValue12 }]
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.profilePic}
              source={{
                uri: "/static_assets/assets/Melissa_small.png"
              }}
            />
            <View>
              <Text style={styles.textOnHorizontalLine}>Melissa</Text>
              <View style={styles.lineStyleFreda} />
            </View>
          </View>
          <TypeWriter typing={1}>{this.state.MelissaConvo}</TypeWriter>
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            top: 110,
            left: 280,
            height: 150,
            width: 250,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue3 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                value={this.state.openAmt1}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted Delay</Text>

              <AnimateNumber
                value={this.state.delay1}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 110,
            left: 540,
            height: 150,
            width: 250,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue4 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt2}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted Delay</Text>

              <AnimateNumber
                value={this.state.delay2}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 110,
            left: 800,
            height: 150,
            width: 195,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue5 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt3}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted</Text>
              <Text style={styles.greeting}>Delay</Text>

              <AnimateNumber
                value={this.state.delay3}
                formatter={val => {
                  return "$ " + parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 270,
            left: 280,
            height: 150,
            width: 250,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue6 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt4}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted Delay</Text>

              <AnimateNumber
                value={this.state.delay4}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 270,
            left: 540,
            height: 150,
            width: 250,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue7 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt5}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted Delay</Text>

              <AnimateNumber
                value={this.state.delay5}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 270,
            left: 800,
            height: 150,
            width: 195,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue8 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt6}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted</Text>
              <Text style={styles.greeting}>Delay</Text>

              <AnimateNumber
                value={this.state.delay6}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 430,
            left: 280,
            height: 150,
            width: 250,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue9 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt7}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted Delay</Text>

              <AnimateNumber
                value={this.state.delay7}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 430,
            left: 540,
            height: 150,
            width: 250,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue10 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt8}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted Delay</Text>

              <AnimateNumber
                value={this.state.delay8}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 430,
            left: 800,
            height: 150,
            width: 195,
            //  marginBottom: movingMarginBottom,
            backgroundColor: "dimgray",
            transform: [{ scale: this.springValue11 }]
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>Permalink Mfg</Text>
            <View style={styles.lineStylePanel} />
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 10
              }}
            >
              <Text style={styles.greeting}>Open $</Text>

              <AnimateNumber
                //style={{ color: "red" }}
                value={this.state.openAmt9}
                formatter={val => {
                  return "$ " + parseFloat(val).toFixed(1);
                }}
              />
            </View>
            <View style={styles.verticalSeperatorInPanel} />
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
              }}
            >
              <Text style={styles.greeting}>Predicted</Text>
              <Text style={styles.greeting}>Delay</Text>

              <AnimateNumber
                value={this.state.delay9}
                formatter={val => {
                  return parseFloat(val);
                }}
              />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: -150,
            left: 290,
            height: 150,
            width: 700,
            backgroundColor: "#000000",
            borderColor: "#639dda",
            borderWidth: 2,
            padding: 3,
            marginTop: movingMarginTopActiveCall
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.companyName}>ACTIVE CALL</Text>
            <View style={styles.lineStyleActiveCall} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <View>
                <Text style={styles.companyName}>Permalink Mfg</Text>
                <Text>Customer since Jun 2002</Text>
              </View>
              <View style={styles.verticalSeperatorActiveCallToPanel} />
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View
                    style={{
                      backgroundColor: "white",
                      justifyContent: "center",
                      alignItems: "center",
                      width: 200
                    }}
                  >
                    <Text
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 25
                      }}
                    >
                      CALL
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 25,
                      marginLeft: 10
                    }}
                  >
                    +91 8124632237
                  </Text>
                </View>
                <Text>Keith Smith</Text>
                <Text>Manager,Account Payable</Text>
              </View>
              <Animated.View
                style={{
                  flexDirection: "row",
                  borderColor: "#639dda",
                  borderWidth: 2,
                  opacity,
                  width: 200,
                  height: 50,
                  marginTop: 37,
                  marginLeft: -130,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  style={{
                    borderWidth: 1,
                    borderColor: "rgba(0,0,0,0.2)",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    backgroundColor: "#fff",
                    borderRadius: 40
                  }}
                  source={{
                    uri: "/static_assets/phoneCall1.jpg"
                  }}
                />

                <Text
                  style={{
                    fontSize: 25,
                    marginLeft: 10,
                    fontWeight: "bold"
                  }}
                >
                  Connected
                </Text>
              </Animated.View>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 250,
            left: 1090,
            height: 220,
            width: 700,
            backgroundColor: "#000000",
            borderColor: "#639dda",
            borderWidth: 2,
            padding: 3,
            marginLeft: movingMarginLeftActiveCall
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ justifyContent: "space-between", marginLeft: 10 }}>
              <Text style={styles.companyName}>Current Aging</Text>

              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="yellow"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 250, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="red"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 90, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="green"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 180, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="blue"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 110, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  // justifyContent: "center",
                  // alignItems: "center",
                  marginTop: 30
                }}
              >
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
            <View style={{ justifyContent: "space-between" }}>
              <Text style={styles.companyName}>Predicted Aging</Text>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="yellow"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 250, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="red"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 90, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="green"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 180, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
              <BarGraph
                progress={this.state.progress}
                height={30}
                borderColor="#DDD"
                barColor="blue"
                borderRadius={5}
                borderWidth={2}
                duration={500}
                style={{ width: 110, marginTop: 10 }}
              >
                <View style={[styles.row, styles.center, { flex: 1 }]}>
                  <Text style={styles.barText}>
                    {Math.round(this.state.progress * 100)}%
                  </Text>
                </View>
              </BarGraph>
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            top: 700,
            left: 290,
            height: 125,
            width: 700,
            backgroundColor: "#000000",
            borderColor: "#639dda",
            borderWidth: 2,
            padding: 3,
            marginTop: movingMarginBottomActiveCall
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#000000",
                borderColor: "#639dda",
                borderWidth: 2
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ fontWeight: "bold", marginRight: 20 }}>
                  INVOICE #
                </Text>
                <Text style={{ fontWeight: "bold", marginRight: 20 }}>DUE</Text>
                <Text style={{ fontWeight: "bold", marginRight: 20 }}>
                  AMOUNT
                </Text>
                <Text style={{ fontWeight: "bold", marginRight: 20 }}>
                  PREDICTED DATE
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ marginRight: 20 }}>462341</Text>
                <Text style={{ marginRight: 20 }}>12/03/2018</Text>
                <Text style={{ marginRight: 20 }}>$11,564.97</Text>
                <Text style={{ marginRight: 20 }}>02/26/2019</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ marginRight: 20 }}>462341</Text>
                <Text style={{ marginRight: 20 }}>12/03/2018</Text>
                <Text style={{ marginRight: 20 }}>$11,564.97</Text>
                <Text style={{ marginRight: 20 }}>02/26/2019</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between"
                }}
              >
                <Text style={{ marginRight: 20 }}>462341</Text>
                <Text style={{ marginRight: 20 }}>12/03/2018</Text>
                <Text style={{ marginRight: 20 }}>$11,564.97</Text>
                <Text style={{ marginRight: 20 }}>02/26/2019</Text>
              </View>
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
    //backgroundColor: "black",
    backgroundColor: "rgba(0, 0, 0,0.9)",
    justifyContent: "center",
    alignItems: "center"
  },
  greetingBox: {
    //padding: 5,
    backgroundColor: "#000000",
    //borderColor: "#639dda",
    //borderWidth: 2,
    marginTop: 5
  },
  // activeCallTopPanel: {
  //   position: "absolute",
  //   top: 100,
  //   left: 290,
  //   height: 150,
  //   width: 700,
  //   backgroundColor: "#000000",
  //   borderColor: "#639dda",
  //   borderWidth: 2,
  //   padding: 3,
  //   marginTop: movingMarginTopActiveCall
  // },
  // activeCallMiddlePanel: {
  //   position: "absolute",
  //   top: 250,
  //   left: 290,
  //   height: 250,
  //   width: 700,
  //   backgroundColor: "#000000",
  //   borderColor: "#639dda",
  //   borderWidth: 2,
  //   padding: 3,
  //   marginLeft: movingMarginLeftActiveCall
  // },
  // activeCallBottomPanel: {
  //   position: "absolute",
  //   top: 500,
  //   left: 290,
  //   height: 95,
  //   width: 700,
  //   backgroundColor: "#000000",
  //   borderColor: "#639dda",
  //   borderWidth: 2,
  //   padding: 3,
  //   marginTop: movingMarginBottomActiveCall
  // },
  greeting: {
    fontSize: 21
  },
  companyName: {
    fontSize: 25,
    fontWeight: "bold"
  },
  textOnHorizontalLine: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "bold"
  },
  profilePic: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    backgroundColor: "black",
    borderRadius: 100
  },
  verticalSeperatorInPanel: {
    height: 70,
    width: 3,
    backgroundColor: "darkred",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
    //marginLeft: 30
  },
  verticalSeperatorActiveCallToPanel: {
    height: 70,
    width: 5,
    backgroundColor: "white",
    marginLeft: 10,
    marginRight: 10
  },
  lineStyle: {
    borderWidth: 3,
    borderColor: "green",
    margin: 10,
    width: 220
  },
  lineStyleFreda: {
    borderWidth: 3,
    borderColor: "orange",
    margin: 10,
    width: 150
  },
  lineStylePanel: {
    borderWidth: 3,
    borderColor: "black",
    width: 250,
    marginTop: 5
  },
  lineStyleActiveCall: {
    borderWidth: 1,
    borderColor: "white",
    width: 700,
    marginTop: 2
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
  },
  row: {
    flexDirection: "row"
  },
  barText: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
    //justifyContent: "center",
    //alignItems: "center"
  }
});
