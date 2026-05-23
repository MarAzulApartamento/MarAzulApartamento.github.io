# Lodgify message templates — English masters

**Last updated:** 2026-05-14
**Status:** drafted for Stefy's review (item #30 in `questions-for-stefania.md`).
**Goal:** replace Lodgify's default Italian-fallback templates with brand-voice messages that match the tone of the welcome flip and the WhatsApp microcopy. Mobile-first reading, single primary CTA per message, plain-text-friendly (Lodgify's email rendering is uneven).

Once Stefy approves the English masters, we translate to PT / IT / ES (her conversational set). DE / NL / FR stay on Lodgify defaults until volume justifies more.

---

## How to use this doc

Each section below maps to one Lodgify guest-notification trigger. To wire one up: Lodgify dashboard → **Settings** → **Messages** → **Templates** → find the matching trigger → paste the **Subject** and **Body** below into the Lodgify editor.

**Merge fields** — Lodgify substitutes variables in `{{ }}` braces when it sends the message. The most common (Lodgify documentation confirms the exact names; what's below is the conventional set):

- `{{guest.first_name}}` — guest's first name from the booking
- `{{booking.checkin_date}}` / `{{booking.checkout_date}}` — formatted dates
- `{{booking.nights}}` — number of nights
- `{{booking.total}}` — total including taxes and fees
- `{{booking.currency}}` — usually `EUR`
- `{{booking.id}}` — internal booking reference
- `{{property.name}}` — usually `Apartamento Mar Azul`
- `{{property.address}}` — full street address
- `{{quote.link}}` — URL the guest opens to accept a quote
- `{{payment.amount}}` — the payment amount when a payment event fires

Stefy: verify each `{{merge_field}}` matches what Lodgify actually offers in its template editor (the field names might be slightly different, e.g. `{{guest_name}}` vs `{{guest.first_name}}`). Pick whichever variable Lodgify suggests when you click the "Insert variable" dropdown.

**Voice rules** — no em dashes, calm and direct, single primary CTA, sign off as "Stefy". WhatsApp CTAs always include "I reply within 12 hours" (the brand promise).

---

## 1. Booking lifecycle (10 triggers)

### 1.1 Guest makes a booking request

> **Subject:** Got your enquiry. Checking availability now.
>
> Hi {{guest.first_name}},
>
> Thanks for asking about Apartamento Mar Azul. I'll check the dates and get back to you with a quote within 12 hours.
>
> Any questions in the meantime? WhatsApp me on +351 936 083 766. I reply within 12 hours.
>
> Stefy

### 1.2 Host sends a quote

> **Subject:** Your quote for Mar Azul
>
> Hi {{guest.first_name}},
>
> Here's the quote for your stay at Apartamento Mar Azul:
>
> - Check-in: {{booking.checkin_date}} from 15:00
> - Check-out: {{booking.checkout_date}} by 11:00
> - Nights: {{booking.nights}}
> - Total: €{{booking.total}}
>
> The quote is valid for 48 hours. Accept and book here: {{quote.link}}
>
> Questions before you book? WhatsApp me on +351 936 083 766. I reply within 12 hours.
>
> Stefy

### 1.3 Guest makes a booking

> **Subject:** You're booked. See you in Lagos.
>
> Hi {{guest.first_name}},
>
> Your booking at Apartamento Mar Azul is in.
>
> - Check-in: {{booking.checkin_date}} from 15:00
> - Check-out: {{booking.checkout_date}} by 11:00
> - Nights: {{booking.nights}}
> - Total: €{{booking.total}}
> - Booking reference: {{booking.id}}
>
> Two days before you arrive, I'll send the check-in details (key locker code, parking note, the apartment guide preview).
>
> Anything you need before then? WhatsApp me on +351 936 083 766. I reply within 12 hours.
>
> Looking forward to having you.
>
> Stefy

### 1.4 Host confirms a booking

> **Subject:** Booking confirmed. You're all set.
>
> Hi {{guest.first_name}},
>
> Your booking at Apartamento Mar Azul is confirmed.
>
> - Check-in: {{booking.checkin_date}} from 15:00
> - Check-out: {{booking.checkout_date}} by 11:00
> - Total: €{{booking.total}}
>
> I'll be in touch two days before you arrive with the check-in details.
>
> Stefy

### 1.5 Booking changes to "Booked"

> **Subject:** Booking now active.
>
> Hi {{guest.first_name}},
>
> Just a note that your booking has moved to "Booked" status in our system. Nothing for you to do. Your check-in date stays {{booking.checkin_date}} and the rest of the details on your confirmation email remain the same.
>
> Stefy

### 1.6 Booking changes to "Pending"

> **Subject:** Booking pending while we sort the payment.
>
> Hi {{guest.first_name}},
>
> Your booking is on hold while the payment is processed. This usually clears within a few minutes. If it takes longer, I'll be in touch.
>
> No action needed from you right now.
>
> Stefy

### 1.7 Host rejects a booking

> **Subject:** Apologies. We can't host on those dates.
>
> Hi {{guest.first_name}},
>
> Thanks for asking about Apartamento Mar Azul. I'm sorry, but those dates aren't available. The calendar on the booking platform is usually up to date, so please take a look there for other dates that might work.
>
> If you'd like to suggest different dates directly, WhatsApp me on +351 936 083 766. I reply within 12 hours.
>
> Stefy

### 1.8 Host cancels a booking

> **Subject:** I've had to cancel your booking. I'm sorry.
>
> Hi {{guest.first_name}},
>
> I'm really sorry. I've had to cancel your booking at Apartamento Mar Azul for {{booking.checkin_date}}. A full refund of €{{booking.total}} is being processed and will reach your card within 5-10 working days.
>
> If I can help you find another place or other dates that suit, please let me know on WhatsApp at +351 936 083 766. I reply within 12 hours.
>
> Stefy

### 1.9 Host accepts a modification request

> **Subject:** Your booking change is confirmed.
>
> Hi {{guest.first_name}},
>
> Your modification request has been accepted. Updated booking:
>
> - Check-in: {{booking.checkin_date}} from 15:00
> - Check-out: {{booking.checkout_date}} by 11:00
> - Nights: {{booking.nights}}
> - Total: €{{booking.total}}
>
> If there's a price difference, the system will have either charged or refunded your card automatically.
>
> Stefy

### 1.10 Host rejects a modification request

> **Subject:** Sorry, can't change those dates.
>
> Hi {{guest.first_name}},
>
> I'm unable to accept your modification request, usually because the new dates are already booked or are inside our minimum-stay window. Your original booking remains unchanged.
>
> If you'd like to suggest other dates that might work, WhatsApp me on +351 936 083 766. I reply within 12 hours.
>
> Stefy

---

## 2. Payments (6 triggers)

### 2.1 Guest makes a payment

> **Subject:** Payment received. Thanks.
>
> Hi {{guest.first_name}},
>
> Just a quick note to say I've received your payment of €{{payment.amount}}. Your booking is up to date.
>
> Stefy

### 2.2 Guest payment fails

> **Subject:** A payment didn't go through.
>
> Hi {{guest.first_name}},
>
> A payment on your booking didn't process. This is usually a temporary issue with the card (insufficient funds, expired card, or your bank flagging an international charge).
>
> Two things to try:
>
> 1. Update your card via the booking platform.
> 2. If the issue continues, WhatsApp me on +351 936 083 766. I reply within 12 hours and we'll sort it together.
>
> Your booking is held while we work this out.
>
> Stefy

### 2.3 Host issues a refund

> **Subject:** Refund of €{{payment.amount}} on the way.
>
> Hi {{guest.first_name}},
>
> I've issued a refund of €{{payment.amount}} to the card you booked with. It typically reaches your account within 5-10 working days, depending on your bank.
>
> If you don't see it by the end of that window, let me know on WhatsApp at +351 936 083 766. I reply within 12 hours.
>
> Stefy

### 2.4 Host cancels & refund applied per cancellation policy

> **Subject:** Cancellation confirmed. Refund of €{{payment.amount}} is processing.
>
> Hi {{guest.first_name}},
>
> Your cancellation is confirmed. Per our cancellation policy, a refund of €{{payment.amount}} is being returned to your card and will reach your account within 5-10 working days.
>
> Hope to host you another time.
>
> Stefy

### 2.5 Host pre-authorises the guest's credit card

> **Subject:** Card pre-authorised. Nothing has been charged.
>
> Hi {{guest.first_name}},
>
> A small pre-authorisation has been placed on your card to confirm the booking is real. This is a hold, not a charge, and it releases automatically within a few days.
>
> If you see the pending amount on your bank app, that's why. No action needed.
>
> Stefy

### 2.6 Host charges the guest's credit card for damages

> **Subject:** Charge for damage during your stay.
>
> Hi {{guest.first_name}},
>
> Following your stay at Apartamento Mar Azul, I've had to charge €{{payment.amount}} to your card to cover damage found in the apartment.
>
> Details:
>
> [Stefy: paste a brief description of what was damaged + the repair/replacement cost. Attach a photo and a receipt where possible.]
>
> If you'd like to discuss this, WhatsApp me on +351 936 083 766. I reply within 12 hours.
>
> Stefy

---

## 3. Pre-arrival (1 trigger)

### 3.1 Two days before guest arrival

> **Subject:** Two days to go. Here's everything you need.
>
> Hi {{guest.first_name}},
>
> Looking forward to having you at Apartamento Mar Azul in two days.
>
> **Check-in details**
>
> - Address: Rua Dom Luís da Silveira, lote V 44 B, 8600-575 Lagos
> - Key locker location: outside the apartment door
> - Key locker code: [Stefy: paste the current code here, or use a Lodgify merge field if one exists for it]
> - Earliest check-in: 15:00
>
> **Parking**
>
> Free parking on the street in front of the building. There's no resident permit needed.
>
> **What to expect on arrival**
>
> The apartment guide is on the dining table. It covers Wi-Fi, the appliances, restaurants, beaches, taxi numbers, and the SUP rental if you want to try paddleboarding. The short version is also on the table flip stand right next to it.
>
> **If anything goes wrong**
>
> WhatsApp me on +351 936 083 766. I reply within 12 hours, usually much faster during arrival days.
>
> Safe travels.
>
> Stefy

---

## 4. Check-out (custom — based on Stefy's existing text)

This is a custom trigger Stefy currently sends manually (her version is in the source-content appendix of `questions-for-stefania.md`). Brand-voice rewrite below.

### 4.1 Check-out reminder (sent the evening before check-out)

> **Subject:** Check-out is tomorrow by 10:00.
>
> Hi {{guest.first_name}},
>
> Hope you've had a lovely stay. A quick reminder that check-out is tomorrow by 10:00.
>
> Before you leave:
>
> - Return all keys to the key locker.
> - Close the windows and shutters.
> - Turn off lights, air conditioning, and any appliances.
> - Take the trash to the bins on Rua Dom Nuno de Mascarenhas (2 minutes' walk).
> - Double-check you have all your belongings.
>
> Safe journey home or onwards.
>
> If you've a moment, leave a Google review at https://g.page/r/Cewx9Po3sADdEBM/review. It really helps small hosts like us. (About 2 minutes.)
>
> Hope to see you in Lagos again.
>
> Stefy

---

## What's needed from Stefy

1. **Confirm the voice and tone.** Read 2-3 templates; if the voice feels right we'll roll the same style to PT / IT / ES. If something reads "off" (too formal, too casual, not how she'd write), tell me which line and I'll rewrite.
2. **Verify the merge-field names.** Lodgify's template editor has a "Insert variable" dropdown. The names in `{{ }}` braces above are conventional; Lodgify's actual variable names might differ slightly. When pasting, replace each placeholder with the matching Lodgify variable from the dropdown.
3. **Fill in the gaps in template 3.1 (Two days before arrival).** The key locker code goes there; either we paste a fixed code or Lodgify might have a per-booking merge field that handles it dynamically.
4. **Decide on the damage-charge wording (template 2.6).** That template is the most sensitive one. Stefy may want to soften or harden it depending on what's actually happened. Worth a quick read on a quiet day so the template isn't being drafted under stress when it's actually needed.
5. **Sign-off choice.** Templates above sign as "Stefy". If she prefers "Stefania", "Stefania at Mar Azul", or "Stefy and Mar Azul", say the word and I'll replace across the file.

---

## When Stefy approves

1. Lock the EN masters.
2. Translate to PT / IT / ES (her conversational set). DE / NL / FR stay on Lodgify defaults until volume justifies more — international guests universally read enough English to understand a booking confirmation.
3. Stefy pastes each EN template (and its translations) into Lodgify dashboard → Settings → Messages → Templates.
4. Test by self-booking a dummy reservation or by triggering an event in Lodgify's sandbox. Confirm the merge fields render correctly (no `{{guest.first_name}}` text leaking through as raw braces).
5. Switch off the Italian default fallbacks so the new templates are what guests actually receive.

---

## Cross-references

- `questions-for-stefania.md` items #30 (this brief), #27 (broader email strategy), #18 (locked contact email).
- `print-table-tent-spec.md` and `print-apartment-guide-folder-spec.md` — same voice rules, same brand promise (WhatsApp "I reply within 12 hours", best-rate-available framing).
- Source content (Stefy's current Lodgify text): see the appendix at the bottom of `questions-for-stefania.md`.
