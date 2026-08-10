export const DLH_PHONE_NUMBER = '919032708241';

export interface WhatsAppApplicationParams {
  courseName: string;
  studentName?: string;
  email?: string;
  phone?: string;
  dlhId?: string;
}

export function generateWhatsAppUrl({
  courseName,
  studentName,
  email,
  phone,
  dlhId
}: WhatsAppApplicationParams): string {
  let message = `Hi DLH Team! 👋\n\nI am interested in applying for the *${courseName}* program at Dheeru's Learner's Hub.`;

  if (studentName) {
    message += `\n\n*Applicant Details:*`;
    message += `\n• *Name:* ${studentName}`;
    if (phone) message += `\n• *Contact:* ${phone}`;
    if (email) message += `\n• *Email:* ${email}`;
    if (dlhId) message += `\n• *Generated DLH ID:* ${dlhId}`;
  }

  message += `\n\nCould you please share batch availability, fee structure, and enrollment steps? Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${DLH_PHONE_NUMBER}?text=${encodedMessage}`;
}
