import React, { Component } from "react";
import { View, Button, StyleSheet } from "react-native";
import { FlatList } from "react-native";
import BusinessTripCard from "./BusinessTripCard";
import moment from "moment";
import { getEvents } from "./BusinessTripService";

class BusinessTripList extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.props.navigation.addListener('focus', () => {
      getEvents().then(events => this.setState({events}));
    });
    
    setInterval(() => {
      this.setState({
        events: this.state.events.map(item => ({
          ...item,
          updateTime: Date.now()
        }))
      });
    }, 1000); //1 секунди = 1000 милисекунди
  }

  render() {
    return (
      <View style={styles.listView}>
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <BusinessTripCard eventItem={item} />}
        ></FlatList>
        <Button
          onPress={() => this.props.navigation.navigate("EventForm")}
          title="Add event"
        />
      </View>
    );
  }
}

export default  BusinessTripList;

const styles = StyleSheet.create({
  listView: {
    paddingBottom: 40,
  },
});
