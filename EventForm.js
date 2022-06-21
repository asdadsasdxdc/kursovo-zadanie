import React, { Component } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from './util';
import { addEvent } from "./EventService";

class EventForm extends Component {
  state = {
    date: Date.now(),
    showDatePicker: false
  };

  handleChangeNames = (value) => {
    this.setState({ names: value });
  };

  handleChangeDestination = (value) => {
    this.setState({ destination: value });
  };

  handleChangeDuration = (value) => {
    this.setState({ duration: value });
  };

  handleChangeDates = (value) => {
    this.setState({ dates: value });
  };

  handleChangebuget = (value) => {
    this.setState({ buget: value });
  };

  handleChangeDescription = (value) => {
    this.setState({ description: value });
  };



  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });  
  };

  handleDatePicked = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({date: currentDate});
    this.handleDatePickerHide();
  };

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Име на служителя"
          value={this.state.names}
          onChangeText={this.handleChangeNames}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Дестинация на командировката"
          value={this.state.destination}
          onChangeText={this.handleChangeDestination}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Продължителност"
          value={this.state.duration}
          onChangeText={this.handleChangeDuration}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Начална дата"
          value={this.state.dates}
          onChangeText={this.handleChangeDates}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Бюджет"
          value={this.state.buget}
          onChangeText={this.handleChangebuget}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Кратко описание"
          value={this.state.description}
          onChangeText={this.handleChangeDescription}
        />




        {this.state.showDatePicker && (
          <DateTimePicker
            value={this.state.date}
            mode="datetime"
            is24Hour={true}
            onChange={this.handleDatePicked}
          />
        )}

        <TextInput
          style={styles.textInput}
          placeholder="Event date"
          value={formatDate(this.state.date)}
          editable={!this.state.showDatePicker}
          onFocus={this.handleDatePress}
        />
        
        <Button title="Добави" onPress={
            () => {
              addEvent({
                date: formatDate(this.state.date),
                names: this.state.names,
                destination: this.state.destination,
                duration: this.state.duration,
                dates: this.state.dates,
                buget: this.state.buget,
                description: this.state.description
              })
              .then(() => this.props.navigation.navigate('ThankYou'));
            }
        } />
      </View>
    );
  }
}
export default EventForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
});
