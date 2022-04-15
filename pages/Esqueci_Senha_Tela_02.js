import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

const Esqueci_Senha_Tela_02 = ({navigation}) => {
    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Esqueci a Senha
                    </Text>
                    <View style={styles.mensagem}>
                        <Text style={{color: "white"}}> CNPJ ou email não encontrados.</Text>
                    </View>
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Login_Tela_00')}>
                            <Text style={{color: "white"}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        
        </>
    );
}

export default Esqueci_Senha_Tela_02

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
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        //width: 250,
        //height: 250,
        //paddingTop: 50,
        //paddingBottom: 60,
        justifyContent: 'space-around',
        alignItems: "center",
        //backgroundColor: "white",
                 
    },
    mensagem:{
        //width: 200,
        alignItems: "center",
        
    },
  
});