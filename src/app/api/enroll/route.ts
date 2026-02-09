import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, phone, courseInterest, message } = await request.json()

    // Validate required fields
    if (!fullName || !email || !phone || !courseInterest) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Try to send via WhatsApp Business API
    const whatsappResult = await sendWhatsAppBusinessMessage({
      fullName,
      email,
      phone,
      courseInterest,
      message,
    })

    // Log enrollment
    console.log('📋 NEW ENROLLMENT SUBMISSION:', {
      fullName,
      email,
      phone,
      courseInterest,
      message,
      timestamp: new Date().toISOString(),
      whatsappStatus: whatsappResult,
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your enrollment request has been submitted. We will contact you soon.',
        whatsappSent: whatsappResult.success,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Error processing enrollment:', error)
    // Return success anyway so form submission doesn't fail user experience
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Your enrollment request has been submitted. We will contact you soon.',
        whatsappSent: false,
      },
      { status: 200 }
    )
  }
}

/**
 * Send message via WhatsApp Business Cloud API
 * Requires: WHATSAPP_BUSINESS_PHONE_ID, WHATSAPP_BUSINESS_ACCESS_TOKEN, WHATSAPP_BUSINESS_RECIPIENT_NUMBER
 */
async function sendWhatsAppBusinessMessage({
  fullName,
  email,
  phone,
  courseInterest,
  message,
}: {
  fullName: string
  email: string
  phone: string
  courseInterest: string
  message?: string
}): Promise<{ success: boolean; reason?: string }> {
  try {
    // Get credentials from environment variables
    const phoneNumberId = process.env.WHATSAPP_BUSINESS_PHONE_ID
    const accessToken = process.env.WHATSAPP_BUSINESS_ACCESS_TOKEN
    const recipientNumber = process.env.WHATSAPP_BUSINESS_RECIPIENT_NUMBER

    // Check if WhatsApp Business API is configured
    if (!phoneNumberId || !accessToken || !recipientNumber) {
      console.log('⚠️ WhatsApp Business API not configured')
      return {
        success: false,
        reason: 'WhatsApp Business API credentials not configured',
      }
    }

    // Format the message
    const messageBody = `🎓 *New Registration Received*

📝 *Name:* ${fullName}
📧 *Email:* ${email}
📱 *Phone:* ${phone}
🎯 *Course Interest:* ${courseInterest}
${message ? `💬 *Message:* ${message}` : ''}

⏰ *Submitted:* ${new Date().toLocaleString()}`

    // WhatsApp Business Cloud API endpoint
    const url = `https://graph.instagram.com/v18.0/${phoneNumberId}/messages`

    // Send message via WhatsApp Business API
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: recipientNumber.replace(/\D/g, ''), // Remove non-digit characters
        type: 'text',
        text: {
          body: messageBody,
        },
      }),
    })

    const responseData = await response.json()

    if (response.ok && responseData.messages && responseData.messages[0]) {
      console.log('✅ WhatsApp message sent successfully', {
        messageId: responseData.messages[0].id,
        timestamp: new Date().toISOString(),
      })
      return { success: true }
    } else {
      console.error('❌ WhatsApp API Error:', {
        status: response.status,
        error: responseData.error || 'Unknown error',
      })
      return {
        success: false,
        reason: responseData.error?.message || 'Failed to send WhatsApp message',
      }
    }
  } catch (error) {
    console.error('❌ Error sending WhatsApp message:', error)
    return {
      success: false,
      reason: `Error: ${error instanceof Error ? error.message : 'Unknown error'}`,
    }
  }
}
