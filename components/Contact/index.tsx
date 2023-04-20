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
import { StyledText } from '../../utils/styledChakraComponents'

export default function Contact() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
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
    const response = await fetch(endpoint, options)
    const result = await response.json()
    if (result.status === 'success') {
      resetForm()
      alert('Thank you for getting in touch. I will reply shortly.')
    } else {
      let errorMsg = result.message
      if (result.errorCode) errorMsg += ` (errorCode ${result.errorCode})`
      alert(
        'I am sorry but there was a problem sending your message: ' + errorMsg
      )
    }
  }

  return (
    <>
      <StyledText mt={16}></StyledText>
      <hr />
      <StyledText>
        Please feel free to contact me through the form below to learn more
        about the service and pricing.
      </StyledText>
      <form onSubmit={handleSubmit}>
        <VStack spacing={5} mt={4}>
          <FormControl id="name-fc">
            <FormLabel>Your Name</FormLabel>
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
                placeholder="Your name here"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="email-fc">
            <FormLabel>E-mail</FormLabel>
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
                placeholder="yourmail@address.com"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="message-fc">
            <FormLabel>Message</FormLabel>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              placeholder="Your inquiry here"
            />
          </FormControl>
          <FormControl id="submit-fc">
            <Button type="submit">Send</Button>
          </FormControl>
        </VStack>
      </form>
    </>
  )
}
