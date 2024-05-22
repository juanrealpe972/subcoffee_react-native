import { Text, View } from 'react-native'
import React from 'react'
import ListaSeleccionEstatica from './components/ListaSeleccionEstatica'
import ListaSeleccionApi from './components/ListaSeleccionApi'

const App = () => {
  return (
    <View>
      <Text>Lista Estatica</Text>
      <ListaSeleccionEstatica/>
      <Text>Lista desde API</Text>
      <ListaSeleccionApi/>
    </View>
  )
}

export default App