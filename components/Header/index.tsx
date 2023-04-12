import {
  Heading,
  HStack,
  VStack,
  Image,
  Stack,
  Box,
  Link
} from '@chakra-ui/react'
import { FC } from 'react'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'

const Header: FC = () => {
  const router = useRouter()

  return (
    <>
      <HStack spacing="24px">
        <Image
          src="cropped-iroiro-puzzle.png"
          alt="iroiro connect logo"
          htmlHeight={'64'}
          htmlWidth={'64'}
        />
        <VStack alignItems="left">
          <Heading as="h1">iroiro connect</Heading>
          <Heading as="h4" size="xs">
            人もいろいろ、必要とすることもいろいろ。個人個人を大切に思い、それぞれに必要とされるサービスを提供します。
          </Heading>
        </VStack>
      </HStack>
      <Stack direction="row" spacing={0} pl={'88px'}>
        <NextLink passHref href="/ai" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} pr={4} pt={4} pb={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              クレマデス海上愛
            </Box>
          </Link>
        </NextLink>
        <NextLink passHref href="/" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} href="/" p={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              移住のお手伝い
            </Box>
          </Link>
        </NextLink>
        <NextLink passHref href="/travel" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} p={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              旅行のお手伝い
            </Box>
          </Link>
        </NextLink>
        <NextLink passHref href="/translation" locale={router.locale}>
          <Link _focus={{ boxShadow: 'none' }} p={4}>
            <Box as="span" display={{ base: 'none', md: 'block' }}>
              翻訳、通訳
            </Box>
          </Link>
        </NextLink>
      </Stack>
    </>
  )
}

export default Header
