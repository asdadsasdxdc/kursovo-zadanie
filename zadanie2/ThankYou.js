import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class ThankYou extends Component {
    render() {
        return (
            <View>
                <Text>
                    Thank you for adding your event
                </Text>
                <Button title='Go to events'
                onPress={
                    () => this.props.navigation.navigate('BusinessTripList')
                }
                />
            </View>
        )
    }
};

export default ThankYou
