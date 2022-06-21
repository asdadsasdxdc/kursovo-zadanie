import React, {Component} from 'react';
import {Text, View,Button} from 'react-native';

class ThankYou extends Component {
    render() {
        return (
            <View>
                <Text>
                    Ти качи командировка!
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

export default ThankYou