# Email Configuration Setup

The contact form now sends emails to **info@oryn.in** when someone submits a demo request.

## Setup Instructions

### Option 1: Web3Forms (Recommended - Free & Easy)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Sign up for a free account
3. Get your Access Key
4. Create a `.env.local` file in the root directory:
   ```
   WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
5. Restart your development server

**Note:** Web3Forms allows 250 submissions per month on the free tier.

### Option 2: Resend (Production Ready)

If you need a more robust solution:

1. Install Resend:

   ```bash
   npm install resend
   ```

2. Update `/app/api/send-email/route.ts`:

   ```typescript
   import { Resend } from "resend";

   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(request: NextRequest) {
     const body = await request.json();
     const { name, email, phone, institution, institutionType, message } = body;

     const { data, error } = await resend.emails.send({
       from: "Oryne Website <onboarding@resend.dev>",
       to: ["info@oryn.in"],
       subject: `New Demo Request from ${name}`,
       html: `
         <h2>New Demo Request</h2>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Institution:</strong> ${institution}</p>
         <p><strong>Type:</strong> ${institutionType}</p>
         <p><strong>Message:</strong> ${message || "No message"}</p>
       `,
     });

     if (error) {
       return NextResponse.json({ error }, { status: 500 });
     }

     return NextResponse.json({ success: true, data }, { status: 200 });
   }
   ```

3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_resend_api_key
   ```

### Option 3: SendGrid

1. Install SendGrid:

   ```bash
   npm install @sendgrid/mail
   ```

2. Get your API key from [SendGrid](https://sendgrid.com)

3. Update the route accordingly

## Testing

After setup, test the form:

1. Fill out the demo request form on your website
2. Submit it
3. Check info@oryn.in inbox for the email

## Email Content

The email will include:

- Full Name
- Email Address
- Phone Number
- Institution Name
- Institution Type
- Additional Message

## Current Implementation

The current setup uses **Web3Forms** which is:

- ✅ Free (250 emails/month)
- ✅ No backend configuration needed
- ✅ Simple to set up
- ✅ Reliable delivery
- ✅ No credit card required

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), make sure to add the environment variable in your hosting platform's dashboard.

### Vercel:

1. Go to Project Settings → Environment Variables
2. Add `WEB3FORMS_ACCESS_KEY` with your key
3. Redeploy

### Netlify:

1. Go to Site Settings → Environment Variables
2. Add `WEB3FORMS_ACCESS_KEY` with your key
3. Redeploy
