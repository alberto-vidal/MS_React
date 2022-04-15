import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput } from 'react-native'
import Header from './components/Header'

const Cadastro_Tela_00 = ({navigation}) => {
    return (
        <>
            <Header title="Marmita Solidária"></Header>
            
            <View style={styles.container}>
                <View style={styles.container_intern}>
                    <Text style={styles.titulo}>
                        Cadastro
                    </Text>
                    <View style={styles.box_alinhamento_CNPJ}>
                        <Text style={styles.title_box}>CNPJ: </Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento}>
                        <Text style={styles.title_box}>Razão Social: </Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.box_alinhamento_CNPJ}>
                        <Text style={styles.title_box}>Email: </Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento_Telefone}>
                        <Text style={styles.title_box}>Telefone: </Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />
                    </View>
                    <View style={styles.box_alinhamento_Endereco}>
                        <Text style={styles.title_box}>Endereço: </Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />                        
                    </View>
                    <View style={styles.box_alinhamento_Senha}>
                        <Text style={styles.title_box}>Senha: </Text>
                        <TextInput
                        placeholder=""
                        style={styles.info_request}
                        />
                    </View>
                    
                    <View style={styles.grupo_Botoes}>
                        <TouchableOpacity style={styles.botao_Cadastrar} onPress={() => navigation.navigate('Cadastro_Tela_01')}>
                            <Text style={{color: "white"}}>Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.botao_Voltar} onPress={() => navigation.navigate('Login_Erro_Tela_00')}>
                            <Text style={{color: "white"}}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
            
        
        </>
    );
}

export default Cadastro_Tela_00

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
        height: 450,
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
    botao_Voltar:{
        backgroundColor: "#F21E1E",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    botao_Cadastrar:{
        backgroundColor: "#0BCF05",
        alignItems: "center",
        justifyContent: "center",
        width: 140,
        height: 40,
        borderRadius: 50,
    },
    grupo_Botoes:{
        width: 300,
        //backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        //marginHorizontal: 50,
        
    },
    esqueci_a_senha:{
        flexDirection: 'row',
        justifyContent: "center",
    },
    box_alinhamento_CNPJ:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 55,
    },
    box_alinhamento_Telefone:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 30,
    },
    box_alinhamento_Endereco:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 25,
    },
    box_alinhamento_Senha:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: 45,
    },
});


