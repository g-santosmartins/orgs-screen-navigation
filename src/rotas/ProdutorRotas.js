import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Produtor from '../telas/Produtor'

import Home from '../telas/Home';


// calling the constructor of nav Stack component
const Stack = createNativeStackNavigator()
export default function ProdutorRotas({ComponentPrincipal = Home }) {
    return <Stack.Navigator>
        <Stack.Screen name='Home' component={ComponentPrincipal} />
        <Stack.Screen name='Produtor' component={Produtor} />

    </Stack.Navigator>
}