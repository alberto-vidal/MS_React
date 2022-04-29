import react from 'react'
import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

const Menu_Tela_00 = ({navigation}) => {

    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Menu
                    </Text>
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Doação}>
                            <Text style={{color: "white"}}>Doação</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.botao_Sair} onPress={() => navigation.navigate('Login_Tela_00')}>
                            <Text style={{color: "white"}}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </>
    );
}

export default Menu_Tela_00

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#368FCA',
        paddingLeft:20,
        paddingRight:20,
    },
    container_intern: {
        backgroundColor: '#76C0F1',
        borderRadius: 50,
        //justifyContent: 'center',
        //width: 100, 
        height: 300,
        //textAlign: "center",
        alignItems: "center",  
        justifyContent: 'space-around',      
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        paddingTop:10,
    },
    botao_Doação:{
        backgroundColor: "#E1CC06",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Sair:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        width: 250,
        height: 250,
        //paddingTop: 50,
        //paddingBottom: 60,
        justifyContent: 'space-around',
        alignItems: "center",
                 
    },
    esqueci_a_senha:{
        flexDirection: 'row',
        justifyContent: "center",
    },
});


