import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { formatDate, getCountdownParts } from "./util";
import { deleteEvent } from "./EventService";
import * as RootNavigation from "./RootNavigation";

export default function EventCard({ eventItem }) {
  const countdown = getCountdownParts(eventItem.date);

   

  return (
    <View style={styles.eventCard}>

      <Text style={styles.title}>Име на служителя</Text>
      <Text style={styles.description}>{eventItem.names}</Text>
      <Text style={styles.title}>Дестинация на командировката</Text>
      <Text style={styles.description}>{eventItem.destination}</Text>
      <Text style={styles.title}>Продължителност (дни)</Text>
      <Text style={styles.description}>{eventItem.duration}</Text>
      <Text style={styles.title}>Начална дата</Text>
      <Text style={styles.description}>{eventItem.dates}</Text>
      <Text style={styles.title}>Бюджет</Text>
      <Text style={styles.description}>{eventItem.buget}</Text>
      <Text style={styles.title}>Кратко описание</Text>
      <Text style={styles.description}>{eventItem.description}</Text>
      

      
      <View style={styles.counterContainer}>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.days}</Text>
          <Text style={styles.counterLabel}>дни</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.hours}</Text>
          <Text style={styles.counterLabel}>часове</Text>
        </View>
        <Text style={styles.date}>{formatDate(eventItem.date)}</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.minutes}</Text>
          <Text style={styles.counterLabel}>минути</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{countdown.seconds}</Text>
          <Text style={styles.counterLabel}>секунди</Text>
        </View>
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() =>
            RootNavigation.navigate("EventEditForm", {
              id: eventItem._id,
            })
          }
          title="Редактирай командировка"
        />
      </View>
      <View style={styles.mt10}>
        <Button
          onPress={() => {
            deleteEvent(eventItem._id);
            RootNavigation.navigate("EventDeleted", {});
          }}
          title="Изтрий командировка"
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
    flex: 1,
    fontSize: 38,
    color: "#fff",
    textAlign: "center",
    flexBasis: "80%",
  },
  date: {
    textAlign: "center",
    flex: 1,
    fontSize: 38,
    color: "#ffffff",
  },
  description: {
    flex: 1,
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    flexBasis: "80%",
  },
  counterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
    marginTop: 30,
  },
  counter: {
    flexBasis: "20%",
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
