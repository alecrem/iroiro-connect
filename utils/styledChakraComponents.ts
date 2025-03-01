import styled from 'styled-components'
import { List, ListItemProps, Text, TextProps } from '@chakra-ui/react'

const StyledListItem = styled(List.Item).attrs({
  mt: '1em'
} as ListItemProps)`
  font-size: 1.25em;
` as typeof List.Item

const StyledText = styled(Text).attrs({
  mt: '2em'
} as TextProps)`
  font-size: 1.25em;
` as typeof Text

export { StyledListItem, StyledText }
