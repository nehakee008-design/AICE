# FREE Enrollment Notification Setup Guide

## Overview
The enrollment form now supports **completely free** notification options:
1. **Telegram** (Completely Free) ⭐ Recommended
2. **Email** (Free tier available)

## Option 1: TELEGRAM NOTIFICATIONS (Completely Free) ⭐

Telegram is **completely free**, works worldwide, and is the easiest to set up!

### Setup Steps:

#### Step 1: Create a Telegram Bot
1. Open Telegram app (download if needed from https://telegram.org)
2. Search for **@BotFather** in the search bar
3. Start a chat with @BotFather
4. Send the message: `/newbot`
5. Follow the prompts:
   - Choose a name for your bot (e.g., "AICE Enrollment Bot")
   - Choose a username (must end with 'bot', e.g., "aice_enrollment_bot")
6. @BotFather will give you a **token** that looks like:
   ```
   123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
   ```
7. Copy this token

#### Step 2: Get Your Chat ID
1. Send any message to your bot (search for the username you created)
2. Visit this URL in your browser (replace with your token):
   ```
   https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11/getUpdates
   ```
3. You'll see JSON output. Look for `"id": 123456789` in the `"chat"` section
4. This number is your **Chat ID**

#### Step 3: Update Environment Variables
1. Open `.env.local` in the project root
2. Update:
   ```env
   TELEGRAM_BOT_TOKEN=123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11
   TELEGRAM_CHAT_ID=123456789
   ```

#### Step 4: Test
1. Restart the dev server: `npm run dev`
2. Open http://localhost:3000
3. Click any "Enroll Today" button
4. Fill out and submit the form
5. Check your Telegram - you should receive a notification immediately!

### Advantages of Telegram:
✅ Completely free (no limits, no credit card needed)
✅ Works worldwide
✅ Fast and reliable
✅ Easy setup (5 minutes)
✅ Can create multiple bots for different purposes
✅ Professional and secure

---

## Option 2: EMAIL NOTIFICATIONS (Free tier available)

### Using Resend (Easiest free email service)

#### Step 1: Sign Up for Resend
1. Go to https://resend.com
2. Click "Sign Up" (no credit card required for free tier)
3. Verify your email
4. You get **100 free emails per day**

#### Step 2: Get API Key
1. Go to your Resend dashboard: https://dashboard.resend.com
2. Click on "API Keys"
3. Create a new API key
4. Copy the key (looks like: `re_xxxxxxxxxxxxxxxxxx`)

#### Step 3: Install Resend Package
```bash
npm install resend
```

#### Step 4: Update API Route
The API route already supports Resend. Just uncomment the code in `/src/app/api/enroll/route.ts`

#### Step 5: Update Environment Variables
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
NOTIFICATION_EMAIL=your-business-email@example.com
```

### Using SendGrid (Alternative)

1. Sign up at https://sendgrid.com (100 free emails/day)
2. Get your API key
3. Set in environment:
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxx
   NOTIFICATION_EMAIL=your-business-email@example.com
   ```

---

## Option 3: COMBINE BOTH (Telegram + Email)

For the best experience, use both:
- **Telegram**: Instant mobile notifications
- **Email**: Professional record keeping

Just configure both in `.env.local` and both will work automatically!

---

## Recommended Setup
We recommend **Telegram** because:
1. **Completely free** - No limits, no credit card
2. **Instant notifications** - Real-time on your phone
3. **Easy to set up** - 5 minutes
4. **Professional** - Great for business use
5. **Multiple options** - Can send to multiple bots/chats

---

## Testing Without Setup
Even without configuring Telegram/Email, the form will:
- Submit successfully
- Show success message to user
- Log all submissions to server console
- You can check the console for submitted data

This is useful for testing before setting up notifications.

---

## Troubleshooting

### Telegram messages not arriving?
1. Check you sent a message to your bot first
2. Verify TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are correct
3. Check `/getUpdates` URL has correct token
4. Make sure Chat ID is a number (not text)
5. Restart dev server after updating `.env.local`

### Email not sending?
1. Verify API key is correct
2. Check your email address is valid
3. Make sure you have free credits (Resend shows 100/day)
4. Check spam folder for email

### How to check logs?
Run the dev server and check the terminal output:
```bash
npm run dev
```
All submission details appear in the console.

---

## Costs Summary

| Method | Cost | Setup Time | Speed |
|--------|------|-----------|-------|
| Telegram | FREE ✅ | 5 min | Instant |
| Resend Email | FREE (100/day) ✅ | 5 min | Fast |
| SendGrid Email | FREE (100/day) ✅ | 5 min | Fast |
| Twilio WhatsApp | Paid ($0.0075/msg) ❌ | 15 min | Instant |

---

## Support
- **Telegram Bot Help**: https://core.telegram.org/bots
- **Resend Help**: https://resend.com/docs
- **SendGrid Help**: https://sendgrid.com/docs
