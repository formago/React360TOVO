import React, { Component } from "react";
import TypeWriter from "./TypeWriter";
import { View, StyleSheet, Animated } from "react-360";
import AnimatedTypingText from "./AnimatedTypingText";

export default class TypeWriterTest extends Component {
  constructor(props) {
    super(props);
    this.springVal = new Animated.Value(0);
    this.state = {
      text: "Hello World"
    };
  }
  componentDidMount() {
    this.start();
  }
  start() {
    Animated.sequence([
      Animated.spring(this.springVal, {
        toValue: 1,
        friction: 5,
        tension: 5,
        delay: 3000
      }),
      Animated.spring(this.springVal, {
        toValue: 1,
        friction: 5,
        tension: 5
      })
    ]).start(() =>
      this.setState({
        text: "Changed Text"
      })
    );
  }
  render() {
    return (
      <View style={styles.panel}>
        <Animated.View style={{ transform: [{ scale: this.springVal }] }}>
          <View>
            <TypeWriter
              delayMap={[
                // increase delay by 100ms at index 4
                { at: 0, delay: 3000 }
              ]}
              typing={1}
            >
              {this.state.text}
            </TypeWriter>
          </View>
        </Animated.View>
        <View>
          <AnimatedTypingText
            style={{ marginTop: 10 }}
            text={this.state.text}
            TextColor="#00E676"
            AnimatedTextSize={30}
          />
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
  }
});
