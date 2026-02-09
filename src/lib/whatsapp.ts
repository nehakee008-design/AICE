// Business owner's WhatsApp number (with country code, no + or spaces)
const BUSINESS_WHATSAPP_NUMBER = '8217213769' // Change this to your WhatsApp number

export function generateWhatsAppMessage({
  fullName,
  email,
  phone,
  courseInterest,
}: {
  fullName: string
  email: string
  phone: string
  courseInterest: string
}): string {
  return `New Registration Request

Name: ${fullName}
Phone: ${phone}
Email: ${email}
Course: ${courseInterest}`
}

export function generateWhatsAppUrl({
  fullName,
  email,
  phone,
  courseInterest,
}: {
  fullName: string
  email: string
  phone: string
  courseInterest: string
}): string {
  const message = generateWhatsAppMessage({ fullName, email, phone, courseInterest })
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodedMessage}`
}

export function openWhatsApp({
  fullName,
  email,
  phone,
  courseInterest,
}: {
  fullName: string
  email: string
  phone: string
  courseInterest: string
}): void {
  const url = generateWhatsAppUrl({ fullName, email, phone, courseInterest })
  window.open(url, '_blank', 'noopener,noreferrer')
}
