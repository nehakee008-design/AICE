import InlineRegistrationForm from '@/components/InlineRegistrationForm'

export const metadata = {
  title: 'Register - AICE Computer Center',
  description: 'Quick registration via WhatsApp for AICE Computer Center courses.',
}

export default function RegisterPage() {
  return (
    <main className="pt-16 pb-12">
      <InlineRegistrationForm />
    </main>
  )
}
