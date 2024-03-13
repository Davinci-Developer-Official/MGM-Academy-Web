// pages/api/send_email/index.ts

import { NextApiRequest, NextApiResponse } from 'next';
import handlers from './route';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await handlers(req, res);
  } else if (req.method === 'GET') {
    //await getEmailStatus(req, res);
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
