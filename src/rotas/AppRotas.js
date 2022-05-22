import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Internal imports
import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';


const Tab = createBottomTabNavigator();

export default function AppRotas() {
    return(
        <NavigationContainer>
            {/* removes the header -> headerShown === false */}
            <Tab.Navigator screenOptions={{headerShown: false}}> 
                <Tab.Screen name="Início" component={ProdutorRotas} />
                <Tab.Screen name="Melhores Produtores" component={MelhoresProdutoresRotas} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}