import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-360";

import PropTypes from "prop-types";

export default class AnimatedTypingText extends Component<{}> {
  constructor() {
    super();

    this.index = 0;

    this.timer = -1;

    this.blinking_cursor = -1;

    this.state = {
      text: "",

      cursor_color: "transparent"
    };
  }

  StartAnimatedTyping = () => {
    clearTimeout(this.timer);

    this.timer = -1;

    if (this.index < this.props.text.length) {
      if (this.refs.animatedText) {
        this.setState(
          { text: this.state.text + this.props.text.charAt(this.index) },
          () => {
            this.index++;

            this.timer = setTimeout(() => {
              this.StartAnimatedTyping();
            }, this.props.AnimatedTypingDuration);
          }
        );
      }
    }
  };

  AnimatedblinkingCursor = () => {
    this.blinking_cursor = setInterval(() => {
      if (this.refs.animatedText) {
        if (this.state.cursor_color == "transparent") {
          this.setState({ cursor_color: this.props.color });
        } else {
          this.setState({ cursor_color: "transparent" });
        }
      }
    }, this.props.AnimatedBlinkingCursorDuration);
  };

  componentDidMount() {
    this.StartAnimatedTyping();

    this.AnimatedblinkingCursor();
  }

  componentWillUnmout() {
    clearTimeout(this.timer);

    this.timer = -1;

    clearInterval(this.blinking_cursor);

    this.blinking_cursor = -1;
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-start"
        }}
      >
        <Text
          ref="animatedText"
          style={{
            color: this.props.TextColor,
            fontSize: this.props.AnimatedTextSize,
            textAlign: "center"
          }}
        >
          {this.state.text}

          <Text style={{ color: this.state.cursor_color }}>|</Text>
        </Text>
      </View>
    );
  }
}

AnimatedTypingText.propTypes = {
  text: PropTypes.string,
  AnimatedTextSize: PropTypes.number,
  TextColor: PropTypes.string,
  AnimatedTypingDuration: PropTypes.number,
  AnimatedBlinkingCursorDuration: PropTypes.number
};

AnimatedTypingText.defaultProps = {
  text: "Default Animated Typing Text.",
  TextColor: "#00E676",
  AnimatedTextSize: 25,
  AnimatedTypingDuration: 25,
  AnimatedBlinkingCursorDuration: 200
};
