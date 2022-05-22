import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Internal imports
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';


// icons imports

import Coracao from '../assets/coracao.svg'
import Home from '../assets/home.svg'


const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return(
        <NavigationContainer>
            {/* removes the header -> headerShown === false */}
            <Tab.Navigator screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({color})=> {
                    let Icon = Home
                    if(route.name === 'Melhores Produtores') {
                        Icon = Coracao
                    }

                    return <Icon color={color}/>
                },
                tabBarActiveTintColor: '#2a9f85',
                tabBarInactiveTintColor: '#c7c7c7',
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                
                })}> 
                <Tab.Screen name="Home" component={ProdutorRotas} />
                <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}