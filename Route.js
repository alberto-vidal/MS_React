import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login_Tela_00 from './pages/Login_Tela_00';
import Menu_Tela_00 from './pages/Menu_Tela_00';
import Login_Erro_Tela_00 from './pages/Login_Erro_Tela_00';
import Cadastro_Tela_00 from './pages/Cadastro_Tela_00';
import Cadastro_Tela_01 from './pages/Cadastro_Tela_01';
import Esqueci_Senha_Tela_00 from './pages/Esqueci_Senha_Tela_00';
import Esqueci_Senha_Tela_01 from './pages/Esqueci_Senha_Tela_01';
import Esqueci_Senha_Tela_02 from './pages/Esqueci_Senha_Tela_02';

const AppStack = createNativeStackNavigator();

const Route = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName='Login_Tela_00' screenOptions={{headerShown: false}}>
                <AppStack.Screen name='Login_Tela_00' component={Login_Tela_00}/>
                <AppStack.Screen name='Menu_Tela_00' component={Menu_Tela_00}/>
                <AppStack.Screen name='Login_Erro_Tela_00' component={Login_Erro_Tela_00}/>
                <AppStack.Screen name='Cadastro_Tela_00' component={Cadastro_Tela_00}/>
                <AppStack.Screen name='Cadastro_Tela_01' component={Cadastro_Tela_01}/>
                <AppStack.Screen name='Esqueci_Senha_Tela_00' component={Esqueci_Senha_Tela_00}/>
                <AppStack.Screen name='Esqueci_Senha_Tela_01' component={Esqueci_Senha_Tela_01}/>
                <AppStack.Screen name='Esqueci_Senha_Tela_02' component={Esqueci_Senha_Tela_02}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Route