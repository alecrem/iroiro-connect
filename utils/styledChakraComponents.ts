import { List, Text } from '@chakra-ui/react'
import styled from 'styled-components'

const StyledListItem = styled(List.Item).attrs({
  mt: '1em'
})`
  font-size: 1.25em;
` as typeof List.Item

const StyledText = styled(Text).attrs({
  mt: '2em'
})`
  font-size: 1.25em;
` as typeof Text

export { StyledListItem, StyledText }
