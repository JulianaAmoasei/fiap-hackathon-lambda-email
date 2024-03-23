import sendReportByEmail from "../config/emailServer";
import { SQSEvent } from 'aws-lambda';

async function handler(event: SQSEvent) {
  const text = event.Records[0].body
  console.log(`msg: ${text}`)
  await sendReportByEmail(text);
}

export { handler };
