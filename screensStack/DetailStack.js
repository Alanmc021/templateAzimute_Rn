import React from 'react';
import { View, Text, Button} from 'react-native'

export default class DetailStack extends React.Component {
  render() {
    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>DetailStack Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => this.props.navigation.navigate('Home')}
      />

    </View>)
  }
}

DetailStack.navigationOptions = {
  title: 'DetailStack',
};
