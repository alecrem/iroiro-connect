import { FC, useState } from 'react'
import {
  Heading,
  HStack,
  VStack,
  Image,
  IconButton,
  Flex
} from '@chakra-ui/react'
import { LuMenu, LuX } from 'react-icons/lu'
import useTranslation from 'next-translate/useTranslation'
import NavLinksMobile from './NavLinksMobile'
import NavLinksDesktop from './NavLinksDesktop'
import NavLanguageButtons from './NavLanguageButtons'
import { ColorModeButton, useColorModeValue } from '@/components/ui/color-mode'

const Header: FC = () => {
  const [display, changeDisplay] = useState('none')
  const { t } = useTranslation('common')
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  return (
    <>
      <Flex>
        <Flex position="fixed" top="1rem" right="1rem" align="center">
          <IconButton
            aria-label="Open Menu"
            size="lg"
            variant="subtle"
            onClick={() => changeDisplay('flex')}
            // Mobile only
            display={['flex', 'flex', 'none', 'none']}
          >
            <LuMenu />
          </IconButton>
          <ColorModeButton
            size="lg"
            display={['none', 'none', 'flex', 'flex']}
          />
        </Flex>

        <Flex
          w="100vw"
          // Only when menu open
          display={display}
          bgColor={bgColor}
          zIndex={20}
          h="100vh"
          pos="fixed"
          top="0"
          left="0"
          overflowY="auto"
          flexDir="column"
        >
          <Flex justify="flex-end">
            <IconButton
              mt={2}
              mr={2}
              aria-label="Close Menu"
              size="lg"
              onClick={() => changeDisplay('none')}
            >
              <LuX />
            </IconButton>
          </Flex>

          <Flex flexDir="column" align="center">
            <NavLinksMobile />
            <NavLanguageButtons size="md" />
          </Flex>
        </Flex>
      </Flex>

      <HStack gap="24px">
        <Image
          src="/cropped-iroiro-puzzle.png"
          alt={t('header.logoalt')}
          htmlHeight={'64'}
          htmlWidth={'64'}
        />
        <VStack alignItems="left">
          <Heading as="h1" size="3xl">
            {t('header.title')}
          </Heading>
          <Heading as="h4" size="sm">
            {t('header.tagline')}
          </Heading>
        </VStack>
      </HStack>
      <Flex
        // Desktop only
        display={['none', 'none', 'flex', 'flex']}
        direction="row"
        pl={'88px'}
      >
        <NavLinksDesktop />
        <NavLanguageButtons size="xs" />
      </Flex>
    </>
  )
}

export default Header
