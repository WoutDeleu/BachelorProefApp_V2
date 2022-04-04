
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/routes/AuthStack';


class App extends React.Component{
  render() {
    return (
        <NavigationContainer>
          <AuthStack/>
        </NavigationContainer>
    );
  }
}

export default App;