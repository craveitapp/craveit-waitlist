import type { LegalBlock } from "./legal-blocks";

/* ===================== Rider Policy ===================== */
export const riderPolicyIntro = [
  "Welcome to craveit!",
  "This Rider Policy outlines the rules, responsibilities, and expectations for all riders using the craveit platform to complete food deliveries.",
  "By registering and accepting delivery requests through the craveit Rider App, you agree to follow this policy and maintain the standards expected of craveit delivery partners.",
  "Our goal is to provide customers, vendors, and riders with a safe, reliable, and positive delivery experience.",
];

export const riderPolicyBlocks: LegalBlock[] = [
  {
    title: "Rider Registration and Verification",
    intro: ["All riders must complete the required registration and verification process before receiving delivery orders."],
    lead: "Riders are required to:",
    items: [
      "Provide accurate personal information.",
      "Submit valid identification documents.",
      "Provide a valid phone number and email address.",
      "Submit accurate vehicle and relevant driving documents where applicable.",
      "Provide accurate bank account details for payouts.",
      "Complete any additional verification requested by craveit.",
    ],
    outro: [
      "Riders must not use another person's account or allow another individual to operate their account.",
      "Craveit reserves the right to verify submitted information and restrict accounts where fraudulent or inaccurate information is identified.",
    ],
  },
  {
    title: "Accepting and Managing Orders",
    lead: "Riders are expected to:",
    items: [
      "Keep their availability status updated in the app.",
      "Accept only delivery requests they can reasonably complete.",
      "Review pickup and delivery information before accepting an order.",
      "Proceed to the vendor's location after accepting an order.",
      "Confirm pickup through the Rider App.",
      "Deliver orders to the correct customer and address.",
      "Update order statuses promptly.",
      "Contact support when an order cannot be completed.",
    ],
    outro: ["Riders must not deliberately accept orders they have no intention of completing."],
  },
  {
    title: "Food Pickup and Handling",
    intro: ["Riders must handle all food orders carefully to maintain food quality and packaging condition."],
    lead: "Riders are expected to:",
    items: [
      "Collect the correct order from the vendor.",
      "Confirm the order details before leaving the pickup location.",
      "Keep food packages secure during transportation.",
      "Avoid opening, tampering with, or consuming customer orders.",
      "Prevent unnecessary delays during transportation.",
      "Deliver orders in the condition received from the vendor.",
    ],
    outro: ["Any damaged, missing, or incorrect order must be reported to craveit Support immediately."],
  },
  {
    title: "Customer Interaction and Conduct",
    intro: ["Riders must treat customers, vendors, and other platform users with respect."],
    lead: "The following behaviours are prohibited:",
    items: [
      "Verbal abuse, harassment, intimidation, or discrimination.",
      "Demanding additional payments outside the approved delivery charges.",
      "Sharing inappropriate messages or content with customers.",
      "Misusing customer contact information.",
      "Requesting personal favours or unrelated payments.",
      "Marking an order as delivered when it has not been delivered.",
    ],
    outro: ["Riders must maintain professional communication throughout every delivery."],
  },
  {
    title: "Delivery Confirmation",
    intro: ["Every delivery must be properly confirmed through the Rider App."],
    lead: "Riders must:",
    items: [
      "Deliver orders to the correct recipient.",
      "Follow the app's delivery confirmation process.",
      "Obtain the required CraveCode from the customer where applicable.",
      "Never share or bypass delivery verification procedures.",
      "Update the order to Delivered only after successful handover.",
    ],
    outro: ["If the customer is unavailable or cannot be reached, the rider must contact craveit Support and follow the instructions provided."],
  },
  {
    title: "Rider Earnings and Payouts",
    intro: [
      "Rider earnings are based on completed and eligible deliveries under craveit's applicable delivery payment structure.",
      "Riders can view their earnings and transaction records through the Rider App.",
    ],
    lead: "Important guidelines:",
    items: [
      "Earnings will be recorded according to completed and verified deliveries.",
      "Applicable payout timelines and procedures will be communicated by craveit.",
      "Riders must provide accurate bank account details.",
      "Any earnings discrepancies should be reported to craveit Support.",
      "Riders must not manipulate delivery records or payment information.",
      "Craveit will communicate any applicable payout changes before implementation.",
    ],
  },
  {
    title: "Cancellations and Failed Deliveries",
    intro: [
      "Riders must not cancel accepted orders without a valid reason.",
      "If a delivery cannot be completed because of customer unavailability, vendor delays, incorrect addresses, vehicle breakdowns, emergencies, or other unexpected circumstances, riders must contact craveit Support.",
      "Riders must not independently dispose of, consume, or retain undelivered customer orders.",
      "All failed deliveries must be properly documented and resolved through the support process.",
    ],
  },
  {
    title: "Safety and Road Regulations",
    intro: ["Rider safety is a priority."],
    lead: "All riders must:",
    items: [
      "Follow applicable Nigerian traffic laws.",
      "Wear appropriate safety equipment, including a helmet when riding a motorcycle.",
      "Maintain their vehicles in safe operating condition.",
      "Avoid dangerous driving and unnecessary speeding.",
      "Never operate a vehicle under the influence of alcohol or drugs.",
      "Avoid using mobile devices while driving.",
      "Report accidents, injuries, and safety incidents immediately.",
    ],
    outro: ["Riders should never compromise their safety to meet an estimated delivery time."],
  },
  {
    title: "Location and Tracking",
    intro: ["The craveit Rider App may request access to a rider's device location to support delivery operations."],
    lead: "Location information may be used to:",
    items: [
      "Identify available riders near vendors.",
      "Calculate distances between riders, vendors, and customers.",
      "Support order assignment.",
      "Monitor active delivery progress.",
      "Improve delivery coordination and operational efficiency.",
    ],
    outro: [
      "Riders are expected to enable the required location permissions while actively using the platform for deliveries.",
      "Location information will be handled in accordance with craveit's Privacy Policy.",
    ],
  },
  {
    title: "Prohibited Activities",
    lead: "Riders must not:",
    items: [
      "Create multiple accounts to manipulate the platform.",
      "Falsify delivery confirmations.",
      "Manipulate GPS locations or delivery distances.",
      "Collect unauthorised payments from customers.",
      "Steal, tamper with, or misuse customer orders.",
      "Share account credentials.",
      "Collude with vendors or customers to commit fraud.",
      "Misuse customer or vendor information.",
      "Engage in activities that compromise the safety, trust, or reputation of craveit.",
    ],
  },
  {
    title: "Complaints and Dispute Resolution",
    intro: ["Riders can contact craveit Support through the available support channels to report:"],
    items: [
      "Payment or earnings discrepancies.",
      "Vendor-related issues.",
      "Customer complaints.",
      "Incorrect delivery information.",
      "Order assignment problems.",
      "Safety concerns.",
      "Account-related issues.",
    ],
    outro: [
      "Craveit will review reported issues and communicate appropriate resolutions.",
      "Riders are expected to cooperate with reasonable investigations into reported incidents.",
    ],
  },
  {
    title: "Account Suspension and Termination",
    intro: ["Craveit may restrict, suspend, or terminate a rider's access to the platform where there is evidence of:"],
    items: [
      "Fraudulent activity.",
      "Repeated delivery misconduct.",
      "Theft or tampering with customer orders.",
      "Abuse or harassment.",
      "False delivery confirmations.",
      "Repeated violations of this policy.",
      "Serious safety violations.",
      "Misuse of the craveit platform.",
    ],
    outro: [
      "Where appropriate, riders will be informed of the reason for the action and given an opportunity to respond.",
      "Any outstanding eligible earnings will be reviewed and handled in accordance with applicable payout procedures and law.",
    ],
  },
  {
    title: "Policy Updates",
    intro: [
      "Craveit may update this Rider Policy when operational requirements, platform features, or applicable regulations change.",
      "Riders will be notified of material updates through the Rider App or other official communication channels.",
      "Continued use of the platform after an update will be subject to the updated policy, with renewed acceptance where required.",
    ],
  },
  {
    title: "Contact and Support",
    intro: [
      "For questions, complaints, or assistance, riders can contact: support@getcraveit.com",
      "Use the Support section in the Rider App to report issues or request assistance.",
    ],
  },
];

export const riderAcknowledgement = {
  title: "Rider Acknowledgement and Acceptance",
  lead: "By accepting this policy, I confirm that:",
  items: [
    "I have read and understood the craveit Rider Policy.",
    "I agree to follow the rules and delivery standards outlined in this document.",
    "I will provide accurate information and use the platform responsibly.",
    "I understand that violations may result in account restrictions, suspension, or termination.",
    "I agree to comply with this policy while using the craveit platform.",
  ],
};

/* ===================== Rider Terms and Conditions ===================== */
export const riderTermsBlocks: LegalBlock[] = [
  {
    title: "Rider Registration and Eligibility",
    intro: ["Riders must complete the required registration and verification process before accessing delivery services through the craveit Rider App."],
    lead: "By registering, you agree to:",
    items: [
      "Provide accurate and complete personal information.",
      "Submit valid identification and relevant verification documents.",
      "Provide valid vehicle and driving documents where applicable.",
      "Maintain accurate contact and payment information.",
      "Complete any additional verification requested by craveit.",
    ],
    outro: ["Craveit reserves the right to reject or restrict accounts where submitted information is false, incomplete or misleading."],
  },
  {
    title: "Rider Account Responsibilities",
    intro: ["Riders are responsible for maintaining the security of their accounts."],
    lead: "You must:",
    items: [
      "Keep your login credentials confidential.",
      "Use only your registered rider account.",
      "Not share, transfer or allow another person to use your account.",
      "Keep your profile and verification information updated.",
      "Notify craveit of any suspected unauthorised account access.",
    ],
  },
  {
    title: "Accepting and Completing Deliveries",
    intro: ["Riders are expected to manage accepted delivery requests responsibly."],
    lead: "You agree to:",
    items: [
      "Review delivery details before accepting an order.",
      "Proceed to the assigned vendor location.",
      "Collect the correct customer order.",
      "Follow the pickup and delivery instructions provided.",
      "Update delivery statuses accurately through the Rider App.",
      "Complete accepted deliveries or contact craveit Support when an issue prevents completion.",
    ],
    outro: ["Riders must not deliberately accept orders they have no intention of completing or abandon accepted deliveries without following the appropriate support process."],
  },
  {
    title: "Food Handling and Customer Interaction",
    intro: ["Riders must handle customer orders carefully and maintain professional conduct throughout the delivery process."],
    lead: "You must not:",
    items: [
      "Open, consume, tamper with or misuse customer orders.",
      "Deliberately damage or mishandle food packages.",
      "Demand unauthorised payments from customers.",
      "Harass, threaten, abuse or discriminate against customers or vendors.",
      "Use customer or vendor contact information for personal purposes.",
      "Share private customer or vendor information without authorisation.",
    ],
    outro: ["Any missing, damaged or incorrect order must be reported to craveit Support."],
  },
  {
    title: "Delivery Confirmation",
    intro: [
      "Riders must follow the delivery confirmation process provided in the Rider App.",
      "Where applicable, the customer must provide the required CraveCode before an order can be marked as delivered.",
      "Riders must not falsify delivery confirmations, bypass verification procedures or mark orders as delivered before successful handover.",
    ],
  },
  {
    title: "Rider Earnings and Payments",
    intro: ["Riders may receive payments for completed and eligible deliveries in accordance with craveit's applicable delivery payment structure."],
    lead: "You agree to:",
    items: [
      "Provide accurate bank account information.",
      "Review your earnings and transaction records.",
      "Report payment discrepancies to craveit Support.",
      "Avoid manipulating delivery records or payment information.",
    ],
    outro: ["Applicable delivery rates, payout procedures and payment timelines will be communicated through official craveit channels."],
  },
  {
    title: "Cancellations and Failed Deliveries",
    intro: [
      "Riders must contact craveit Support when a delivery cannot be completed due to customer unavailability, incorrect addresses, vendor delays, vehicle breakdowns, emergencies or other unexpected circumstances.",
      "Riders must not independently dispose of, consume, retain or deliver an order to an unauthorised recipient.",
      "All failed deliveries must be handled through the procedures provided by craveit Support.",
    ],
  },
  {
    title: "Location Access and Tracking",
    intro: [
      "The craveit Rider App may request access to your device location to support rider discovery, delivery assignment, distance calculation and active delivery coordination.",
      "Riders agree not to manipulate GPS information, falsify their location or interfere with location-based platform features.",
      "Location information will be collected and processed in accordance with the craveit Privacy Policy and applicable data protection laws.",
    ],
  },
  {
    title: "Safety and Legal Compliance",
    intro: ["Riders are responsible for carrying out delivery activities safely and in compliance with applicable Nigerian laws and traffic regulations."],
    lead: "You must:",
    items: [
      "Maintain your vehicle in safe operating condition.",
      "Use appropriate protective equipment, including a helmet when riding a motorcycle.",
      "Maintain valid driving and vehicle documents where required.",
      "Avoid dangerous driving and unnecessary speeding.",
      "Never operate a vehicle under the influence of alcohol or drugs.",
      "Report accidents, injuries and safety incidents promptly.",
    ],
    outro: ["Riders must not compromise their safety or the safety of others to meet estimated delivery times."],
  },
  {
    title: "Prohibited Activities",
    lead: "Riders must not:",
    items: [
      "Create fraudulent or duplicate accounts.",
      "Share or transfer rider accounts.",
      "Manipulate GPS locations or delivery records.",
      "Falsify delivery confirmations.",
      "Steal, damage or tamper with customer orders.",
      "Collect unauthorised payments.",
      "Misuse customer or vendor information.",
      "Engage in fraudulent activities involving orders or payments.",
      "Interfere with the operation or security of the craveit platform.",
    ],
  },
  {
    title: "Account Suspension and Termination",
    intro: [
      "Craveit reserves the right to restrict, suspend or terminate a rider's account where there is evidence of fraud, repeated misconduct, safety violations, unauthorised account use, false delivery confirmations or other serious violations of these Terms, the Rider Policy or applicable laws.",
      "Where appropriate, riders will be informed of the reason for the action and given an opportunity to respond.",
      "Outstanding eligible earnings will be reviewed and handled in accordance with applicable payment procedures and law.",
    ],
  },
  {
    title: "Rider Responsibilities and Liability",
    intro: [
      "Riders are responsible for their conduct, compliance with applicable laws and the safe handling of deliveries while carrying out delivery activities.",
      "Riders may be held responsible for losses or damages arising from their negligence, misconduct, fraud or violation of these Terms, subject to applicable law.",
      "Nothing in these Terms excludes any legal rights or responsibilities that cannot lawfully be excluded.",
    ],
  },
  {
    title: "Relationship with craveit",
    intro: [
      "Riders' participation in delivery activities through craveit is governed by these Terms, the Rider Policy and any separate rider engagement agreement that may apply.",
      "The legal nature of the relationship between craveit and a rider will be determined by the applicable agreement and relevant law.",
    ],
  },
  {
    title: "Acceptance of Rider Terms",
    intro: ["By registering for or using the craveit Rider App, you confirm that:"],
    items: [
      "You have read and understood these Rider Terms.",
      "You agree to comply with the delivery requirements and responsibilities outlined above.",
      "You agree to follow the craveit Rider Policy.",
      "You acknowledge that your personal information will be handled in accordance with the craveit Privacy Policy.",
      "You understand that violations may result in account restrictions, suspension or termination.",
    ],
  },
];

/* ===================== Rider Privacy ===================== */
export const riderPrivacyIntro =
  "This section explains how craveit collects, uses, stores, shares and protects personal information belonging to riders who register for or use the craveit Rider App.";

export const riderPrivacyBlocks: LegalBlock[] = [
  {
    title: "Personal Information We Collect",
    intro: ["When you register or use the craveit Rider App, we may collect the following information:"],
    items: [
      { label: "Personal Details:", text: "Full name, email address, phone number, residential address and date of birth, where required." },
      { label: "Identity Information:", text: "Government-issued identification and documents submitted for identity verification." },
      { label: "Vehicle Information:", text: "Vehicle type, registration details, driving licence and other relevant vehicle documents, where applicable." },
      { label: "Financial Information:", text: "Bank account details, earnings records, payout history and transaction information." },
      { label: "Profile Information:", text: "Profile photograph and other details submitted through the Rider App." },
      { label: "Delivery Information:", text: "Assigned orders, pickup and delivery locations, delivery history, order status and completed delivery records." },
      { label: "Communication Information:", text: "Messages, support requests, complaints and other communications with craveit." },
    ],
  },
  {
    title: "Location Information",
    intro: ["With your permission, the craveit Rider App may access your device's location information, including GPS coordinates."],
    lead: "We may collect location information to:",
    items: [
      "Identify available riders near vendors.",
      "Calculate distances between riders, vendors and customers.",
      "Support delivery assignment and coordination.",
      "Monitor the progress of active deliveries.",
      "Provide delivery status updates.",
      "Improve delivery operations and logistics efficiency.",
    ],
    outro: [
      "Location access may be required while you are actively using the Rider App for delivery activities.",
      "You can manage location permissions through your device settings. However, disabling location access may affect your ability to receive or complete delivery assignments.",
    ],
  },
  {
    title: "How We Use Rider Information",
    lead: "We use rider information to:",
    items: [
      "Create and manage rider accounts.",
      "Verify rider identities and submitted documents.",
      "Coordinate and assign delivery requests.",
      "Facilitate communication relating to deliveries.",
      "Maintain rider earnings and payment records.",
      "Process eligible rider payouts through payment providers.",
      "Provide customer and rider support.",
      "Send important account and delivery notifications.",
      "Detect and prevent fraud, suspicious activities and unauthorised access.",
      "Investigate complaints, disputes and delivery-related incidents.",
      "Improve the security, performance and reliability of the craveit platform.",
      "Meet applicable legal and regulatory obligations.",
    ],
  },
  {
    title: "How We Share Rider Information",
    intro: ["We may share relevant rider information with:"],
    items: [
      { label: "Customers:", text: "Necessary rider details, such as name, profile photograph and delivery status, to help identify and coordinate an assigned delivery." },
      { label: "Vendors:", text: "Relevant rider information to coordinate order pickup and delivery." },
      { label: "Logistics Partners:", text: "Information required to support delivery coordination and logistics operations." },
      { label: "Payment Providers:", text: "Relevant financial and transaction information required to process rider payments." },
      { label: "Technology and Service Providers:", text: "Trusted providers supporting hosting, mapping, notifications, identity verification, analytics and other platform services." },
      { label: "Legal and Regulatory Authorities:", text: "Where disclosure is required by law or a lawful request." },
    ],
    outro: ["We only share information where necessary for the relevant purpose and subject to appropriate safeguards."],
  },
  {
    title: "Rider Financial and Payment Information",
    intro: [
      "We collect and maintain relevant financial information to facilitate eligible rider payments and maintain accurate transaction records.",
      "This may include bank account details, earnings, payout records and payment status.",
      "Riders are responsible for ensuring that their submitted payment information is accurate and up to date.",
    ],
  },
  {
    title: "Data Storage, Security and Retention",
    intro: [
      "Craveit takes reasonable technical and organisational measures to protect rider information against unauthorised access, disclosure, alteration, loss or misuse.",
      "We retain rider information for as long as reasonably necessary to provide our services, manage rider accounts, maintain transaction records, resolve disputes and meet applicable legal obligations.",
      "When information is no longer required, we will take appropriate steps to delete or securely dispose of it, subject to applicable legal and regulatory requirements.",
    ],
  },
  {
    title: "Rider Privacy Rights",
    intro: ["Subject to applicable data protection laws, riders may have the right to:"],
    items: [
      "Request access to their personal information.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of personal information where legally permitted.",
      "Object to or request restrictions on certain processing activities.",
      "Withdraw consent where processing is based on consent.",
      "Raise complaints or concerns about how their personal information is handled.",
    ],
    outro: ["Certain information may need to be retained where required by law or for legitimate operational purposes."],
  },
  {
    title: "Updating Rider Information",
    intro: [
      "Riders are responsible for keeping their personal, contact, vehicle and payment information accurate and up to date.",
      "You may be asked to provide updated information or documents where necessary for account verification, security or delivery operations.",
    ],
  },
  {
    title: "Rider Account Deletion",
    intro: ["Riders may request the deletion of their craveit Rider App accounts and associated personal information.", "To request account deletion, riders can:"],
    items: [
      "Use the Delete Account option in the Rider App, where available.",
      "Contact craveit Support at support@getcraveit.com if they need assistance with the deletion process.",
    ],
    lead2: "Once a deletion request is received, craveit will:",
    items2: [
      "Verify the rider's identity and account ownership.",
      "Review and process the account deletion request.",
      "Delete or anonymise personal information that is no longer required, where legally permitted.",
      "Remove the rider's access to the Rider App once the deletion process is completed.",
      "Notify the rider when the request has been processed, where appropriate.",
    ],
    outro: [
      "Some information may be retained where necessary to comply with legal and regulatory obligations, maintain financial and transaction records, resolve outstanding disputes, prevent fraud or establish and defend legal claims.",
      "Where information must be retained, craveit will limit its use to the applicable purposes and retain it only for as long as necessary.",
      "Deleting a rider account does not automatically cancel or resolve outstanding payments, active deliveries, disputes or other obligations. These matters may need to be resolved before account deletion is completed.",
    ],
  },
  {
    title: "Contact Us",
    intro: [
      "If you have questions or concerns about how your personal information is collected, used, stored, protected or deleted, you can contact craveit through:",
      "Email: support@getcraveit.com",
      "You may also contact us through the Support section of the Rider App.",
    ],
  },
];
