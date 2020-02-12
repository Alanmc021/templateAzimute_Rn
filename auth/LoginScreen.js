import React from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { render } from 'react-dom';

export default class LoginScreen extends React.Component {
  render(){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screnn</Text>
            <Button
                title="Go to Main"
                onPress={() => this.props.navigation.navigate('Main')}
            />

        </View>
    );
  }
}

LoginScreen.navigationOptions = {
    title: 'COMENTÁRIOS',
    headerStyle: {
        backgroundColor: 'red',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150
    },
});
