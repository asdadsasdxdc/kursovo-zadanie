import React, { Component } from "react";                                  // за едитване 
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteEvent } from "./BusinessTripService";
import * as RootNavigation from "./RootNavigation";

export default function BusinessTripCard({ eventItem }) {
  const countdown = getCountdownParts(eventItem.date);

  return (
    <View style={styles.eventCard}>
      <View style={styles.eventCardHeader}>
        <Text style={styles.title}>{eventItem.title}</Text>
        <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
      </View>
      <Text style={styles.description}>{eventItem.description}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.days}</Text>
          <Text style={styles.counterLabel}>Days</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.hours}</Text>
          <Text style={styles.counterLabel}>Hours</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.minutes}</Text>
          <Text style={styles.counterLabel}>Minutes</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.seconds}</Text>
          <Text style={styles.counterLabel}>Seconds</Text>
        </View>
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() =>
            RootNavigation.navigate("BusinessEditForm", {
              id: eventItem._id,
            })
          }
          title="Edit event"
        />
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() => {
            deleteEvent(eventItem._id);
            RootNavigation.navigate("Deleted", {});
          }}
          title="Delete event"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eventCard: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#04b032",
    width: "100%",
  },
  eventCardHeader: {
    flex: 1,
    flexDirection: "row",
  },
  title: {
    fontSize: 38,
    color: "#fff",
    textAlign: "left",
    flexBasis: "80%",
  },
  date: {
    textAlign: "right",
    flexBasis: "20%",
    fontSize: 38,
    color: "#ffffff",
  },
  description: {
    fontSize: 24,
    marginTop: 16,
    color: "#fff",
  },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%", 
    marginTop: 30,
  },
  counter: {
    flexBasis: "25%",
  },
  counterText: {
    fontSize: 40,
    textAlign: "center",
    color: "#fff",
  },
  counterLabel: {
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    color: "#fff",
  },
  mt10: {
    marginTop: 10,
  },
});
