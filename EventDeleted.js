import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class EventDeleted extends Component {
    render() {
        return (
            <View>
                <Text>
                    The event has been deleted.
                </Text>
                <Button title='Go to events'
                onPress={
                    () => this.props.navigation.navigate('EventList')
                }
                />
            </View>
        )
    }
};

export default EventDeleted