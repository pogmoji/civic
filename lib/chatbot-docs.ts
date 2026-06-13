export const CIVIC_DOCS = `
CAES — Civic AI-Driven Engagement System: Full Knowledge Base

=== 1. WHAT IS CAES? ===
CAES (Civic AI-Driven Engagement System) is an online civic portal that allows citizens to report public service issues directly to the relevant government departments. It uses AI to categorize and prioritize complaints, and gives citizens real-time visibility into the status of their reports.

=== 2. HOW TO SUBMIT A COMPLAINT ===
- Click "New Complaint" in the left sidebar from your Citizen Dashboard.
- Step 1 — Description: Write a clear, detailed description of the issue (minimum 20 characters). Include the exact location, date noticed, and impact on the community.
- Step 2 — Category: Select the department most relevant to your issue (e.g., Infrastructure, Sanitation).
- Step 3 — Review & Submit: Confirm your details and click "Submit Complaint."
- After submission the AI instantly analyzes your text and assigns a sentiment score and priority level.
- You will be able to track.

=== 3. TIPS FOR AN EFFECTIVE COMPLAINT ===
- Be specific: Instead of "road is bad," write "Large pothole on Main Street near Junction 4, approx. 60cm wide, causing vehicle damage."
- Include the location: Street name, landmark, GPS coordinates if possible.
- Mention impact: How does it affect you or others? (e.g., flooding risk, accident risk, health hazard.)
- Avoid offensive language: Complaints with abusive language may be deprioritized.
- One issue per complaint: Submit separate complaints for unrelated issues to speed up routing.

=== 4. COMPLAINT STATUS EXPLAINED ===
- PENDING: Your complaint has been received and is awaiting assignment to a department officer. No action is needed from you.
- IN_PROGRESS: A department officer has been assigned and is actively working on the issue.
- RESOLVED: The issue has been fixed and closed. You may reopen it if the problem persists within 14 days.

=== 5. COMPLAINT TRACKING ===
- Go to "My Complaints" in the sidebar to see all your submitted reports.
- Each complaint shows: Complaint ID, date submitted, category, current status, and last update.
- A timeline view shows the full history of status changes.
- You can filter complaints by status (Pending, In Progress, Resolved) or category.

=== 6. DEPARTMENTS & CATEGORIES ===
- Infrastructure: Potholes, road damage, broken pavements, collapsed bridges, street lighting failures, traffic signals.
- Health: Public hospital complaints, clinic access issues, disease outbreak reports, unsanitary public spaces.
- Sanitation: Uncollected garbage, illegal dumping, sewage blockages, drainage overflow, bin requests.
- Education: Public school maintenance, overcrowding, teacher shortages, missing textbooks, unsafe school buildings.
- Governance & Transparency: Corruption reports, bribery, service delivery failures, delayed government responses.
- Utilities: Water outages, water quality issues, electricity failures, power pole damage, meter disputes.
- Environment: Air pollution, noise pollution, deforestation, illegal construction, river contamination.
- Housing: Public housing complaints, eviction disputes, illegal structure removal, maintenance of council properties.

=== 7. RESOLUTION TIMES (SERVICE LEVEL AGREEMENTS) ===
- Emergency (life-threatening): 24–48 hours (e.g., burst water main flooding a road, downed power lines).
- High Priority (major disruption): 3–5 working days (e.g., no water supply to a whole street, large pothole on main road).
- Standard issues: 5–10 working days (e.g., broken street light, overflowing bin).
- Complex/infrastructure projects: 14–30 working days (e.g., road resurfacing, drainage installation).
- Governance & investigation: 30–60 working days (corruption reports require formal investigation).
- If these timelines are exceeded, you can request escalation from within the complaint detail page.

=== 8. ESCALATION PROCESS ===
- If your complaint remains PENDING for more than 10 working days, an "Escalate" button will appear on the complaint detail page.
- Escalating notifies a senior officer and flags the complaint as overdue in the admin dashboard.
- You may only escalate a complaint once per 7 days.
- For urgent life-safety escalations, call the Emergency Hotline (see Section 13).

=== 9. AI SENTIMENT & PRIORITY ANALYSIS ===
- After submission, the CAES AI (powered by Hugging Face BERT) reads your complaint and assigns:
  • Sentiment: POSITIVE, NEUTRAL, or NEGATIVE.
  • Priority score: 1 (low) to 5 (critical).
- High-negative sentiment combined with keywords like "danger," "flooding," "injury," or "emergency" auto-flags a complaint as HIGH PRIORITY.
- These flags alert department administrators immediately.
- You cannot manually change your priority — it is AI-determined based on the content.

=== 10. ACCOUNT & PROFILE ===
- Register at the portal login page using your email and a secure password.
- Your profile stores: email
- All your complaints are linked to your account — do not share login credentials.

=== 11. PRIVACY & DATA ===
- Your personal data is stored securely and used only for complaint routing and communication.
- Complaint content may be reviewed by relevant department officers.
- CAES does not share your data with third parties unless required by law.
- You may request deletion of your account and data by emailing privacy@civic-portal.gov.

=== 12. FREQUENTLY ASKED QUESTIONS ===
Q: Can I submit a complaint anonymously?
A: No. An account is required so that departments can follow up with you and you can track progress.

Q: Can I edit a complaint after submitting?
A: No. Once submitted, complaints cannot be edited to preserve record integrity. If you made a mistake, submit a new complaint and note it supersedes the previous one.

Q: What if my issue affects multiple categories?
A: Submit under the most relevant primary category. Add notes in the description mentioning the secondary issue.

Q: Is there a mobile app?
A: The CAES portal is fully mobile-responsive — use it in any mobile browser. A dedicated app is planned for future release.

=== 13. CONTACT & SUPPORT ===
- Portal Technical Support: tech-support@civic-portal.gov
- General Complaints Enquiries: complaints@civic-portal.gov
- Privacy & Data Requests: privacy@civic-portal.gov
- Corruption Reporting (confidential): integrity@civic-portal.gov
- Portal Support Hours: Monday–Friday, 8:00 AM – 5:00 PM (local time). Queries sent outside these hours are responded to the next working day.

=== 14. EMERGENCY SERVICES (NOT HANDLED BY CAES) ===
For life-threatening emergencies, do NOT use this portal. Contact emergency services directly:
- Police: 999 (or 112 from mobile)
- Fire Brigade: 999
- Ambulance: 999
- Poison Control: 0800-720-000
- Disaster Management Hotline: 0800-111-132
CAES handles non-emergency civic reports only.
`;
