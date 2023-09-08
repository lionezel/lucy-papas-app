import React, { useContext } from 'react'
import { Text } from 'react-native'
import { PedidoContext } from '../context/pedidos/pedidosContext'

export const ProgresoPedido = () => {

  const {  } = useContext(PedidoContext)

  return (
    <Text>Desde progreso</Text>
  )
}
