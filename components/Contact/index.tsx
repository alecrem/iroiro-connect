import { useState } from 'react'
import { Button, VStack, Input, Textarea, Text, Field } from '@chakra-ui/react'
import useTranslation from 'next-translate/useTranslation'
import { StyledText } from '../../utils/styledChakraComponents'
import { isValidEmailAddress } from '../../utils/formValidation'

export default function Contact() {
  const { t } = useTranslation('contact')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState<boolean>()
  const [errorMessage, setErrorMessage] = useState<string>('')

  const resetForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }
  const isSubmittable = (): boolean => {
    if (!isValidEmailAddress(email)) return false
    if (name.length < 1) return false
    if (message.length < 1) return false
    if (succeeded === true) return false
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
      setSucceeded(true)
    } else {
      if (result.errorCode)
        setErrorMessage(result.message + ` (errorCode ${result.errorCode})`)
      else setErrorMessage(result.message)
      setSubmitting(false)
      setSucceeded(false)
    }
  }

  return (
    <>
      <StyledText mt={16}></StyledText>
      <hr />
      <StyledText>{t('form.cta')}</StyledText>
      <form onSubmit={handleSubmit}>
        <VStack gap={5} mt={4}>
          <Field.Root id="name-fc">
            {/* TODO: Remove @ts-ignore when Chakra UI fixes Field.Label children type definition */}
            {/* @ts-ignore */}
            <Field.Label>{t('form.name.label')}</Field.Label>
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
              disabled={succeeded}
            />
          </Field.Root>
          <Field.Root id="email-fc">
            {/* TODO: Remove @ts-ignore when Chakra UI fixes Field.Label children type definition */}
            {/* @ts-ignore */}
            <Field.Label>{t('form.email.label')}</Field.Label>
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
              disabled={succeeded}
            />
          </Field.Root>
          <Field.Root id="message-fc">
            {/* TODO: Remove @ts-ignore when Chakra UI fixes Field.Label children type definition */}
            {/* @ts-ignore */}
            <Field.Label>{t('form.message.label')}</Field.Label>
            <Textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              placeholder={t('form.message.label')}
              disabled={succeeded}
            />
          </Field.Root>
          <Field.Root id="submit-fc">
            <Button
              type="submit"
              disabled={!isSubmittable()}
              mb={4}
              variant="subtle"
            >
              {t('form.submit.text')}
            </Button>
            {succeeded && <Text color="#080">{t('post.success')}</Text>}
            {succeeded === false && (
              <Text color="#c00">
                {t('post.error', { errorMsg: errorMessage })}
              </Text>
            )}
          </Field.Root>
        </VStack>
      </form>
    </>
  )
}
