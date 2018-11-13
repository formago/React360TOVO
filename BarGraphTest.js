import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-360";

import BarGraph from "./BarGraph";

export default class BarGraphTest extends Component {
  state = {
    progress: 0
  };

  componentDidMount() {
    const interval = setInterval(() => {
      if (this.state.progress > 0.9) return clearInterval(interval);

      this.setState(state => {
        return {
          progress: state.progress + 1
        };
      });
    }, 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>No configuration</Text>
          <BarGraph progress={this.state.progress} />
        </View>

        <View>
          <Text>Config Options</Text>
          <BarGraph
            progress={this.state.progress}
            height={50}
            borderColor="#DDD"
            fillColor="tomato"
            barColor="red"
            borderRadius={5}
          />
        </View>

        <View>
          <Text>No Animation. No Border</Text>
          <BarGraph
            progress={this.state.progress}
            height={20}
            borderColor="white"
            barColor="tomato"
            borderRadius={5}
            borderWidth={0}
            animate={true}
          />
        </View>
        <View>
          <Text>Auto Sizing in a Column</Text>
          <BarGraph
            progress={this.state.progress}
            height={null}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.barText, { fontSize: 30 }]}>$123</Text>
            </View>
          </BarGraph>
        </View>

        <View>
          <Text>Longer duration on transition</Text>
          <BarGraph
            progress={this.state.progress}
            height={20}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.rowText}>Progress with Children: </Text>
          <BarGraph
            progress={this.state.progress}
            height={40}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
            row
          >
            <View style={[styles.row, styles.center, { flex: 1 }]}>
              <Text style={styles.barText}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </BarGraph>
        </View>

        <View style={styles.row}>
          <Text style={styles.rowText}>Auto Sizing to Children on Row: </Text>
          <BarGraph
            progress={this.state.progress}
            height={null}
            borderColor="#DDD"
            barColor="tomato"
            borderRadius={5}
            borderWidth={5}
            duration={500}
            row
          >
            <View style={[styles.row, styles.center]}>
              <Text style={[styles.barText, { fontSize: 30 }]}>
                {Math.round(this.state.progress * 100)}%
              </Text>
            </View>
          </BarGraph>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    justifyContent: "space-around",
    backgroundColor: "black",
    width: 1000,
    height: 600
  },
  rowText: {
    marginRight: 20
  },
  row: {
    flexDirection: "row"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  barText: {
    backgroundColor: "transparent",
    color: "#FFF"
  }
});
