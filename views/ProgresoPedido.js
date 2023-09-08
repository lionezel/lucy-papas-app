import React, { useContext } from 'react'
import { Text } from 'react-native'
import { PedidoContext } from '../context/pedidos/pedidosContext'

export const ProgresoPedido = () => {

  const { idpedido } = useContext(PedidoContext)

  return (
    <Text>{idpedido}</Text>
  )
}
