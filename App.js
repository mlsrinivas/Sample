import React from 'react';
import Login from "./src/Components/Login"
import Dashboard from './src/Components/Dashboard'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// export default function App() {
//   return (
//       <Login/>
//   );
// }


const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Dashboard: {screen: Dashboard},
});

const App = createAppContainer(MainNavigator);

export default App;

