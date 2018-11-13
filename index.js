import React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";
import WelcomeScreen from "./WelcomeScreen";
import Collections from "./Collections";
import CallCriticalAccounts from "./CallCriticalAccounts";
import ActiveCall from "./ActiveCall";
import AnimateNumberTest from "./AnimateNumberTest";
import BarGraphTest from "./BarGraphTest";
import RecognizeUser from "./RecognizeUser";
import WelcomeByFreda from "./WelcomeByFreda";
import ChooseTheme from "./ChooseTheme";
import CallerConversation from "./CallerConversation";
import TypeWriterTest from "./TypeWriterTest";

export default class V2020 extends React.Component {
  render() {
    return <RecognizeUser />;
  }
}

AppRegistry.registerComponent("V2020", () => V2020);
AppRegistry.registerComponent("WelcomeScreen", () => WelcomeScreen);
AppRegistry.registerComponent("ChooseTheme", () => ChooseTheme);
AppRegistry.registerComponent("CallerConversation", () => CallerConversation);
