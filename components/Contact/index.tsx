import { useState } from 'react'
import {
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea
} from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import { StyledText } from '../../utils/styledChakraComponents'

export default function Contact() {
  const { t } = useTranslation('contact')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [submitting, setSubmitting] = useState(false)

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }
  const isValidEmailAddress = (val: string): boolean => {
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regEmail.test(val)
  }
  const isSubmittable = (): boolean => {
    if (name.length < 1) return false
    if (email.length < 1) return false
    if (message.length < 1) return false
    if (!isValidEmailAddress(email)) return false
    return !submitting
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }
    const JSONdata = JSON.stringify(data)
    const endpoint = '/api/contact'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }
    setSubmitting(true)
    const response = await fetch(endpoint, options)
    const result = await response.json()
    if (result.status === 'success') {
      resetForm()
      setSubmitting(false)
      alert(t('post.success'))
    } else {
      let errorMsg = result.message
      setSubmitting(false)
      if (result.errorCode) errorMsg += ` (errorCode ${result.errorCode})`
      alert(t('post.error', { errorMsg: errorMsg }))
    }
  }

  return (
    <>
      <StyledText mt={16}></StyledText>
      <hr />
      <StyledText>{t('form.cta')}</StyledText>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5} mt={4}>
          <FormControl id="name-fc">
            <FormLabel>{t('form.name.label')}</FormLabel>
            <InputGroup>
              <Input
                id="name"
                name="name"
                value={name}
                type="text"
                size="md"
                onChange={(e) => {
                  setName(e.target.value)
                }}
                placeholder={t('form.name.placeholder')}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="email-fc">
            <FormLabel>{t('form.email.label')}</FormLabel>
            <InputGroup>
              <Input
                id="email"
                name="email"
                value={email}
                type="email"
                size="md"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder={t('form.email.label')}
              />
            </InputGroup>
          </FormControl>
          <FormControl id="message-fc">
            <FormLabel>{t('form.message.label')}</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              placeholder={t('form.message.label')}
            />
          </FormControl>
          <FormControl id="submit-fc">
            <Button type="submit" disabled={!isSubmittable()}>
              {t('form.submit.text')}
            </Button>
          </FormControl>
        </VStack>
      </form>
    </>
  )
}
