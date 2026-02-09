# WhatsApp Enrollment Notifications Setup Guide

## Overview
The enrollment form now integrates with Twilio to send WhatsApp notifications when users submit the form.

## How It Works
1. User fills out the enrollment form and clicks "Submit Enrollment Request"
2. Form data is sent to `/api/enroll` endpoint
3. The API sends a WhatsApp message with the enrollment details to your business WhatsApp number
4. You receive instant notifications on WhatsApp when someone enrolls

## Setup Steps

### Step 1: Sign Up for Twilio
1. Go to https://www.twilio.com
2. Click "Sign Up" and create a free account
3. Complete email verification

### Step 2: Enable WhatsApp on Twilio
1. Log in to Twilio Console: https://console.twilio.com
2. Navigate to **Messaging > Try it out > Send an SMS**
3. In the left menu, go to **Messaging > Channels > WhatsApp**
4. Click "Get Started" or "Try WhatsApp"
5. Accept the terms and conditions

### Step 3: Get Your Twilio Credentials
1. Go to Twilio Console home: https://console.twilio.com
2. Find your **Account SID** (looks like: ACxxxxxxxxxxxxxxxxxxxxxxxx)
3. Click the eye icon next to **Auth Token** to reveal it (looks like: xxxxxxxxxxxxxxxxxxxxxxxx)
4. Copy both values

### Step 4: Get Your WhatsApp Number
1. In Twilio Console, go to **Messaging > Channels > WhatsApp > Sandbox** (or Production after upgrade)
2. You'll see your Twilio WhatsApp number (format: +1234567890)
3. Copy this number

### Step 5: Verify Your WhatsApp Number
1. You need a WhatsApp number where you want to receive notifications
2. Make sure you have WhatsApp installed on the phone with that number
3. In Twilio Console, follow the instructions to send a verification message

### Step 6: Update Environment Variables
1. Open `.env.local` in the project root
2. Fill in the credentials:
```env
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here
TWILIO_WHATSAPP_NUMBER=whatsapp:+1234567890
TWILIO_RECIPIENT_WHATSAPP_NUMBER=whatsapp:+919876543210
```

Replace with your actual values:
- `TWILIO_ACCOUNT_SID` - Your Twilio Account SID
- `TWILIO_AUTH_TOKEN` - Your Twilio Auth Token
- `TWILIO_WHATSAPP_NUMBER` - Twilio's WhatsApp number (starts with whatsapp:+)
- `TWILIO_RECIPIENT_WHATSAPP_NUMBER` - Your business WhatsApp number (starts with whatsapp:+)

### Step 7: Restart the Development Server
```bash
npm run dev
```

## Testing the Integration
1. Open the website at http://localhost:3000
2. Click any "Enroll Today", "Register Now", or similar button
3. Fill out the form with test data
4. Click "Submit Enrollment Request"
5. Check your WhatsApp for the enrollment notification

## Twilio Pricing
- **Free Tier**: 100 WhatsApp messages per month (free account)
- **Paid**: $0.0075 per message for WhatsApp after free tier
- No setup fees

## Troubleshooting

### Not receiving messages?
1. Check `.env.local` file has correct credentials
2. Verify phone numbers have "whatsapp:" prefix and correct format
3. Make sure the recipient phone number is verified in Twilio
4. Check Twilio Console logs for errors

### Phone number format
- Always include country code
- US example: whatsapp:+14155552671
- India example: whatsapp:+919876543210

### Free vs Production
- **Sandbox** (Free): Limited to verified phone numbers
- **Production**: Requires paying for messages, but can send to any number

## Support
For issues, check:
- Twilio Documentation: https://www.twilio.com/docs/whatsapp
- Twilio Support: https://support.twilio.com
