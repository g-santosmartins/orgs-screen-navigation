import React from 'react'
import { useRoute } from '@react-navigation/native'
import { StyleSheet, FlatList } from 'react-native'
import Cesta from './componentes/Cesta'
import Topo from '../../componentes/Topo'
import useTextos from '../../hooks/useTextos'


// import topo

import topo from '../../assets/produtores/topo.png'

export default function Produtor() {

    const route = useRoute()

    
    const { nome, imagem, cestas } = route.params

    // text hook

    const {tituloProdutor, tituloCesta} = useTextos()


    // Flatlist header

    const TopoLista = () => {
       return <>
            <Topo titulo={tituloProdutor} imagem={topo} altura={150}/>
       </>
    }

    // Hook to call the route params from the last screen
    return <FlatList
        ListHeaderComponent={TopoLista}
        data={cestas}
        renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
        style={estilos.lista}
    />
}

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});
