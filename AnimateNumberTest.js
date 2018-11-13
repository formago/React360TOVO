import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-360";
import AnimateNumber from "./AnimateNumber";

export default class AnimateNumberTest extends Component {
  constructor(props) {
    super(props);
    this.springValue1 = new Animated.Value(0);
    this.springValue2 = new Animated.Value(0);
  }

  componentDidMount() {
    this.start();
  }

  start() {
    Animated.sequence([
      Animated.spring(this.springValue2, {
        toValue: 1,
        friction: 5,
        tension: 5
      }),
      Animated.spring(this.springValue1, {
        toValue: 1,
        friction: 5,
        tension: 5
      })
    ]).start();
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
          width: 1000,
          height: 600
        }}
      >
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 50,
            width: 50,
            backgroundColor: "black",
            transform: [{ scale: this.springValue2 }]
          }}
        />
        <Animated.View style={{ transform: [{ scale: this.springValue1 }] }}>
          <AnimateNumber
            value={100}
            formatter={val => {
              return "$ " + parseFloat(val).toFixed(2);
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
