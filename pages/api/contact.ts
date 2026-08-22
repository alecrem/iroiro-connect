import Airtable from 'airtable'
import type AirtableError from 'airtable/lib/airtable_error'
import type { NextApiRequest, NextApiResponse } from 'next'
import requestIp from 'request-ip'
import { isValidEmailAddress } from '../../utils/formValidation'

const isAirtableError = (error: unknown): error is AirtableError =>
  typeof error === 'object' &&
  error !== null &&
  'statusCode' in error &&
  typeof error.statusCode === 'number' &&
  'error' in error &&
  typeof error.error === 'string' &&
  'message' in error &&
  typeof error.message === 'string'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res
      .status(405)
      .json({ status: 'error', message: `Method ${req.method} Not Allowed` })
    return
  }
  async function createRecord() {
    return await table.create([{ fields: fields }])
  }
  const returnError = (err: AirtableError) => {
    res.status(err.statusCode).json({
      status: 'error',
      errorCode: err.error,
      message: err.message
    })
    return
  }
  const returnBadRequest = () => {
    res.status(400).json({
      status: 'error',
      message: 'Please enter the required information carefully.'
    })
    return
  }
  const returnGenericError = () => {
    res.status(500).json({ status: 'error', message: 'Something went wrong.' })
    return
  }

  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID ?? '')
  const table = base(process.env.AIRTABLE_TABLE_NAME ?? '')

  const body = req.body
  if (!isValidEmailAddress(body.email)) returnBadRequest()
  if (body.name.length < 1) returnBadRequest()
  if (body.message.length < 1) returnBadRequest()

  const detectedIp = requestIp.getClientIp(req) ?? ''
  const userAgent =
    req.rawHeaders[req.rawHeaders.indexOf('User-Agent') + 1] ?? ''
  const fields = {
    name: body.name,
    email: body.email,
    message: body.message,
    useragent: userAgent,
    ipaddress: detectedIp,
    date: new Date().toISOString()
  }
  try {
    const ret = await createRecord()
    if (ret.length < 1) {
      returnGenericError()
      return
    }
    res.status(200).json({ status: 'success', data: { id: ret[0].fields.id } })
  } catch (error) {
    if (isAirtableError(error)) returnError(error)
    else returnGenericError()
  }
}

export default handler
