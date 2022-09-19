import styled from 'styled-components'
import { ListItem, ListItemProps, Text, TextProps } from '@chakra-ui/react'

const StyledListItem = styled(ListItem).attrs({
  mt: '1em'
} as ListItemProps)`
  font-size: 1.25em;
` as typeof ListItem

const StyledText = styled(Text).attrs({
  mt: '2em'
} as TextProps)`
  font-size: 1.25em;
` as typeof Text

export { StyledListItem, StyledText }
