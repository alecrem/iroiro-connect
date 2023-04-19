import type { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import requestIp from 'request-ip'
import AirtableError from 'airtable/lib/airtable_error'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
  }).base(process.env.AIRTABLE_BASE_ID ?? '')
  const table = base(process.env.AIRTABLE_TABLE_NAME ?? '')

  const detectedIp = requestIp.getClientIp(req) ?? ''
  const userAgent =
    req.rawHeaders[req.rawHeaders.indexOf('User-Agent') + 1] ?? ''
  const fields = {
    name: 'alecrem',
    email: 'ale@alecrem.com',
    message: 'Prueba desde la web.',
    useragent: userAgent,
    ipaddress: detectedIp,
    date: new Date().toISOString()
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

  let ret
  try {
    ret = await createRecord()
  } catch (error) {
    const err = error as AirtableError
    returnError(err)
  }
  if (ret == undefined || ret?.length < 1) {
    res.status(500).json({ status: 'error', message: 'Something went wrong.' })
    return
  }
  res.status(200).json({ status: 'success', data: { id: ret[0].fields.id } })
}

export default handler
