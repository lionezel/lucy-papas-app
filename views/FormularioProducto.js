import { Button, Container, HStack, Icon, InputRightAddon } from 'native-base'
import React from 'react'
import { Text } from 'react-native'


export default function FormularioProducto() {
  return (
    <Container>
      <Text>Cantidad</Text>
      <HStack>
        <Button><Icon name='remove'/></Button>
        <InputRightAddon>1</InputRightAddon>
        <Button><Icon name='remove'/></Button>
      </HStack>
    </Container>
  )
}
