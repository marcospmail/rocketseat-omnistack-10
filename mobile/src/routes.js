import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        main: {
            screen: Main,
            navigationOptions: {
                title: 'Main'
            }
        },
        profile: {
            screen: Profile,
            navigationOptions: {
                title: 'Profile'
            }
        }
    }, 
    {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7D40EF'
            }

        }
    })
)

export default Routes;