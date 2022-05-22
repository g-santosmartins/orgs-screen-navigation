import React, {useState, useEffect} from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';


export default function Produtores({ melhoresProdutores }) {
  const [exibeMensagem, setExibeMensagem] = useState(false)
  // Calling a hook because they're available in the entire app
  const navigation = useNavigation()

  // Calling navigation hook
  const route = useRoute()

  const nomeCompra = route.params?.compra.nome
  // timestamp
  const timestampCompra = route.params?.compra.timestamp


  console.log(timestampCompra)
  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores, mensagemCompra } = useTextos();

  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra)
  
  useEffect(() => {
    setExibeMensagem(!!nomeCompra)

    let timeout;

    if(nomeCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false)
      }, 3000);
    }

    // return useEffect is executed right before the next useEffect
    return () => clearTimeout(timeout)
  }, [timestampCompra]);


  const TopoLista = () => {
    return <>
      <Topo melhoresProdutores={melhoresProdutores} />
      {/* !! to transform to a forced boolean */}
      {exibeMensagem && <Text style={estilos.compra}>{mensagemCompleta}</Text>}
      <Text style={estilos.titulo}>{tituloProdutores}</Text>
    </>
  }

  return <FlatList
    data={lista}
    renderItem={
      ({ item }) => <Produtor {...item} aoPressionar={() => {
        navigation.navigate('Produtor', item) //item as param
      }} />
    }
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={TopoLista}
    style={estilos.lista} />
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,

  }
})
