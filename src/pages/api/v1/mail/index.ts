import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  result: 'succ' | 'fail'
  resultMsg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const emailAddr = process.env.SENDEREMAILADDR
  const emailId = process.env.SENDEREMAILID
  const emailPw = process.env.SENDEREMAILPW

  const transporter = nodemailer.createTransport({
    host: 'smtp.daum.net',
    port: 465,
    secure: true,
    auth: {
      user: emailId,
      pass: emailPw,
    },
  })

  const mailOptions = {
    from: emailAddr,
    to: 'contact@misthios.net',
    subject: 'Misthios homepage 문의',
    html: `
    <h1>Misthios homepage 문의</h1>
    <p>이름: ${req.body.name}</p>
    <p>소속명: ${req.body.company}</p>
    <p>이메일: ${req.body.email}</p>
    <p>연락처: ${req.body.phone}</p>
    <p>내용: ${req.body.message}</p>
    `,
  }

  const sendInfo = await transporter.sendMail(mailOptions)

  if (sendInfo.accepted.length === 0) {
    res.status(400).json({
      result: 'fail',
      resultMsg: sendInfo.response,
    })
    return
  }

  res.status(200).json({
    result: 'succ',
    resultMsg: sendInfo.response,
  })
}
