# WhatsApp Business Cloud API Integration Guide

## Overview
This guide explains how to set up WhatsApp Business Cloud API to automatically send enrollment notifications to your business WhatsApp number when users submit the registration form.

## Requirements
- Meta Business Account (free to create)
- WhatsApp Business Account (linked to Meta)
- Business phone number
- Access to Meta Business Suite

## Step-by-Step Setup

### Step 1: Create Meta Business Account
1. Go to https://business.facebook.com
2. Click "Create Account" if you don't have one
3. Enter your business name and email
4. Follow the verification steps
5. Complete your business profile

### Step 2: Set Up WhatsApp Business Account
1. Go to https://www.whatsapp.com/business/
2. Click "Start Now" or "Get Started"
3. Click on WhatsApp Business API
4. Choose "Use Cloud API" (not On-Premises)
5. Select your Meta Business Account
6. Create or link your WhatsApp Business Account
7. Accept the terms and conditions

### Step 3: Add and Verify Your Phone Number
1. In Meta Business Suite, go to WhatsApp > Phone Numbers
2. Click "Add Phone Number"
3. Enter your business WhatsApp number (with country code)
4. Choose verification method (SMS, Call, or Email)
5. Complete the verification process
6. **Important**: This phone number will receive your enrollment notifications

### Step 4: Get Your Credentials

#### Get Phone Number ID:
1. Go to Meta Business Suite
2. Navigate to WhatsApp > API Setup
3. Look for **"Phone number ID"** (format: 123456789012345)
4. Copy this value

Alternative (using API):
```bash
curl -X GET "https://graph.instagram.com/v18.0/me/phone_numbers?access_token=YOUR_TOKEN"
```

#### Get Access Token:
1. Go to Meta Business Suite: https://business.facebook.com
2. Click on your profile (top right)
3. Go to Settings > User Access Tokens
4. Click "Generate Token"
5. Select:
   - **App**: Your Business App (create one if needed)
   - **Scopes**: Select `whatsapp_business_messaging`
   - **Expiration**: Long-lived token (60 days)
6. Click "Generate"
7. Copy the access token (long string starting with `EAA...`)
8. **Save this securely** - you'll need it for environment variables

### Step 5: Update Environment Variables

Edit `.env.local` in your project root:

```env
WHATSAPP_BUSINESS_PHONE_ID=123456789012345
WHATSAPP_BUSINESS_ACCESS_TOKEN=EAA...your_token...here
WHATSAPP_BUSINESS_RECIPIENT_NUMBER=919876543210
```

Replace with your actual values:
- **WHATSAPP_BUSINESS_PHONE_ID**: Your phone number ID from Step 4
- **WHATSAPP_BUSINESS_ACCESS_TOKEN**: Your access token from Step 4
- **WHATSAPP_BUSINESS_RECIPIENT_NUMBER**: Your WhatsApp business number with country code

### Step 6: Restart Development Server
```bash
npm run dev
```

## How It Works

### Form Submission Flow:
```
1. User fills enrollment form
2. User clicks "Submit Enrollment Request"
3. Form data sent to /api/enroll endpoint
4. Backend calls WhatsApp Business API
5. Message sent to your business WhatsApp number
6. User sees success confirmation
```

### Message Format:
```
🎓 New Registration Received

📝 Name: John Doe
📧 Email: john@example.com
📱 Phone: +91 9876543210
🎯 Course Interest: Web Development

⏰ Submitted: 2/5/2026, 10:30 AM
```

## Testing

### 1. Local Testing:
1. Start the dev server: `npm run dev`
2. Open http://localhost:3000
3. Click any "Enroll Today" or "Register Now" button
4. Fill the form with test data
5. Click "Submit Enrollment Request"
6. Check your WhatsApp for the notification

### 2. Check Console Logs:
The server logs all submissions. Look for:
```
✅ WhatsApp message sent successfully
```

Or error details if there's an issue.

## Troubleshooting

### Message Not Received?

**Check 1: Credentials**
- Verify WHATSAPP_BUSINESS_PHONE_ID is correct (use API to verify)
- Verify WHATSAPP_BUSINESS_ACCESS_TOKEN is not expired
- Check token has correct scope: `whatsapp_business_messaging`

**Check 2: Phone Number**
- Recipient number must be verified in WhatsApp Business
- Must include country code (no + sign needed)
- Example: `919876543210` (India), `14155552671` (US)
- Check WhatsApp > Phone Numbers in Meta Business Suite

**Check 3: API Status**
- Check Meta API status: https://status.fb.com
- Ensure WhatsApp service is not down

**Check 4: Rate Limits**
- Free tier has message limits
- Check if you've exceeded message quota
- Go to WhatsApp > Analytics > Message Usage

**Check 5: Server Logs**
- Run `npm run dev` and watch console
- Look for error messages starting with ❌
- Error will contain API response details

### "Invalid recipient"?
- Check phone number format (no + or spaces)
- Ensure number is verified in WhatsApp Business
- Try adding country code again

### "Access token expired"?
- Generate a new access token (valid for 60 days)
- Update .env.local with new token
- Restart server

### "Message quota exceeded"?
- Free tier has message limits
- Check Meta Business Suite for usage
- May need to upgrade to paid plan

## Advanced Configuration

### Multiple Recipient Numbers:
If you want messages to go to multiple WhatsApp numbers, modify the API route:

```typescript
const recipients = [
  process.env.WHATSAPP_BUSINESS_RECIPIENT_NUMBER,
  process.env.WHATSAPP_SECONDARY_RECIPIENT_NUMBER,
]

for (const recipient of recipients) {
  await sendWhatsAppBusinessMessage({ ...data, recipient })
}
```

### Custom Message Templates:
Modify the messageBody in `/src/app/api/enroll/route.ts`:

```typescript
const messageBody = `Your custom message format here`
```

### Add Media (Images, Documents):
Extend the API to send attachments:

```typescript
{
  type: 'image',
  image: {
    link: 'https://example.com/image.jpg'
  }
}
```

## Pricing

### WhatsApp Business API Pricing:
- **Business Initiated Messages**: $0.0079 per message (US)
- **User Initiated Messages**: FREE (when user messages you first)
- **Free Trial**: 1000 free messages per month for first year
- **No Setup Fees**

## Production Checklist

Before going live:
- [ ] Test form submission with real data
- [ ] Verify message received on WhatsApp
- [ ] Check message formatting looks good
- [ ] Test error scenarios (invalid phone, etc.)
- [ ] Monitor API quota usage
- [ ] Set up alerts for API errors
- [ ] Document support process for users
- [ ] Have backup communication method (email/phone)

## Security Best Practices

1. **Never commit credentials to Git**
   - Always use .env.local (not tracked by Git)
   - Use .gitignore to exclude .env files

2. **Rotate Access Tokens**
   - Regenerate tokens every 30-60 days
   - Keep old tokens secure until replaced

3. **Monitor API Usage**
   - Check Meta Business Suite analytics
   - Alert on unusual activity
   - Set up message quota alerts

4. **Validate Input**
   - Server validates all form data
   - Sanitize user input before sending

5. **Error Handling**
   - Never expose full error messages to users
   - Log detailed errors server-side only
   - Show friendly messages to users

## Support & Resources

- **Meta Business Help**: https://www.facebook.com/help
- **WhatsApp API Docs**: https://developers.facebook.com/docs/whatsapp/cloud-api
- **Meta API Status**: https://status.fb.com
- **WhatsApp Business**: https://www.whatsapp.com/business/

## FAQ

**Q: Is this free?**
A: You get 1000 free messages per month for the first year. After that, messages cost ~$0.008 per message.

**Q: Can I send images/attachments?**
A: Yes, the API supports text, images, documents, and more. Modify the message type in the API route.

**Q: How many messages per day?**
A: Depends on your subscription. Free tier allows up to 1000/month. Paid plans have higher limits.

**Q: What if the API fails?**
A: The form still submits successfully. User won't experience any issues. Check server logs for errors.

**Q: Can I test without real credentials?**
A: Yes! The form works without WhatsApp configured. Just check the server console logs.

**Q: Do users need WhatsApp installed?**
A: No, users submit the form normally. Only you (business owner) need WhatsApp to receive notifications.
