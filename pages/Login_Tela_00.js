import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

const Login_Tela_00 = ({navigation}) => {
    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Login
                    </Text>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Usuario:</Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Senha:</Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.esqueci_a_senha}>
                        <Text style={{color: "white"}} >Esqueceu a senha: </Text>
                        <TouchableOpacity>
                                <Text style={{color: "blue", textDecoration: "underline"}} onPress={() => navigation.navigate('Esqueci_Senha_Tela_00')}>Clique aqui</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Entrar} onPress={() => navigation.navigate('Menu_Tela_00')}>
                            <Text style={{color: "white"}}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao_Cadastre_se} onPress={() => navigation.navigate('Cadastro_Tela_00')}>
                            <Text style={{color: "white"}}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        
        </>
    );
}

export default Login_Tela_00

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
        //alignItems: "center",  
        justifyContent: 'space-around',      
    },
    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
        paddingTop:10,
    },
    info_request: {
        width: 200,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    title_box:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        
    },
    box_alinhamento:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    botao_Entrar:{
        backgroundColor: "#050000",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Cadastre_se:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 10,
    },
    esqueci_a_senha:{
        flexDirection: 'row',
        justifyContent: "center",
    },
});


