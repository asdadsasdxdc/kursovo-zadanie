import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class EventDeleted extends Component {
    render() {
        return (
            <View>
                <Text>
                    Командировката беше изтрита.
                </Text>
                <Button title='Връщане към командировките'
                onPress={
                    () => this.props.navigation.navigate('EventList')
                }
                />
            </View>
        )
    }
};

export default EventDeleted