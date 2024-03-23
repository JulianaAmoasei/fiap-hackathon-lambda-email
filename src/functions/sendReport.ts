import sendReportByEmail from "../config/emailServer";
import { SQSEvent } from 'aws-lambda';

async function handler(event: SQSEvent) {
  await sendReportByEmail(event.Records[0].body);
}

export { handler };
