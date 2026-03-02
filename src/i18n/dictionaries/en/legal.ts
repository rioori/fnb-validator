const legal = {
  privacy: {
    meta: {
      title: 'Privacy Policy — Validator.vn',
      description: 'Privacy policy and personal data handling at Validator.vn.',
    },
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 28, 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        content: `Validator.vn collects the following information when you use our services:
• **Account information**: Phone number or email, password (encrypted) when you create an account.
• **Business scenario data**: Numbers you enter into the validation tool (revenue, costs, etc.) — only saved when you actively click "Save Scenario".
• **Technical data**: Browser type, device, IP address (anonymized), access times — used for traffic analysis and experience improvement.
• **Newsletter email**: When you subscribe to our newsletter.`,
      },
      {
        heading: '2. How We Use Your Data',
        content: `We use your data to:
• Provide and operate the business validation service.
• Store scenarios so you can review or compare them later.
• Send business newsletters (if you subscribed).
• Analyze traffic and improve the product.
• **We do NOT sell or share personal data with third parties for commercial purposes.**`,
      },
      {
        heading: '3. Storage and Security',
        content: `• Data is stored on Supabase (PostgreSQL infrastructure) with SSL/TLS encryption.
• Passwords are hashed using bcrypt — we never store plain-text passwords.
• Data entered in the wizard (before saving) only exists in your browser (localStorage) and is not sent to our servers.
• We apply reasonable security measures to protect data from unauthorized access.`,
      },
      {
        heading: '4. Third-Party Services',
        content: `Validator.vn uses the following third-party services:
• **Supabase**: Account and scenario storage (Policy: supabase.com/privacy).
• **Vercel**: Hosting and traffic analytics (Policy: vercel.com/legal/privacy-policy).
• **Google Analytics**: Anonymous traffic analysis.
• **DeepSeek API**: When you use the AI Advisor feature, a summary of your scenario is sent to DeepSeek — no personal information is included.`,
      },
      {
        heading: '5. Your Rights',
        content: `You have the right to:
• **Access**: View all your data through your account.
• **Delete**: Request account and data deletion by contacting vn.validator@gmail.com.
• **Unsubscribe**: Click the "Unsubscribe" link in any email or contact us.
• **Export**: Download your scenarios as Excel or PDF at any time.`,
      },
      {
        heading: '6. Cookies',
        content: `Validator.vn uses:
• **Functional cookies**: To maintain login sessions and language preferences.
• **Analytics cookies**: Google Analytics and Vercel Analytics — collecting anonymous data about how you use the website.
• You can disable cookies in your browser settings, but some features may not work fully.`,
      },
      {
        heading: '7. Contact',
        content: `If you have questions about our privacy policy, please contact:
• Email: **vn.validator@gmail.com**
• Website: **validator.vn**`,
      },
    ],
  },

  terms: {
    meta: {
      title: 'Terms of Service — Validator.vn',
      description: 'Terms and conditions for using Validator.vn services.',
    },
    title: 'Terms of Service',
    lastUpdated: 'Last updated: February 28, 2026',
    sections: [
      {
        heading: '1. Introduction',
        content: `Validator.vn is a free F&B business validation tool developed by Khang Pham. By using the website, you agree to the following terms.`,
      },
      {
        heading: '2. Free Service',
        content: `• Validator.vn provides business validation tools **completely free of charge**.
• We reserve the right to modify, suspend, or discontinue the service at any time without prior notice.
• There is no SLA (Service Level Agreement) for the free service.`,
      },
      {
        heading: '3. User Accounts',
        content: `• You are responsible for keeping your login credentials secure.
• Each person should only create one account.
• We reserve the right to suspend accounts if abuse or terms violations are detected.`,
      },
      {
        heading: '4. Limitation of Liability',
        content: `• Validation results from Validator.vn are for **reference only**, based on your inputs and industry benchmarks.
• **WE ARE NOT liable** for any business decisions you make based on our tool's results.
• Actual results may differ significantly due to market conditions, management, and other factors.
• You should seek additional expert advice before making investments.`,
      },
      {
        heading: '5. Intellectual Property',
        content: `• All content, design, code, and branding on Validator.vn is our property.
• You may use validation results for your personal or business purposes.
• You **may not** copy, redistribute, or use website content for other commercial purposes without written consent.`,
      },
      {
        heading: '6. AI-Generated Content',
        content: `• The AI Advisor feature uses artificial intelligence (DeepSeek) for analysis — results may not be entirely accurate.
• You use the AI feature understanding it is a support tool, not a substitute for professional advice.
• We are not responsible for content generated by AI.`,
      },
      {
        heading: '7. Changes to Terms',
        content: `We may update these terms at any time. Changes take effect immediately upon posting on the website. Continued use of the service after changes means you accept the new terms.`,
      },
      {
        heading: '8. Contact',
        content: `For questions about terms of service, please contact:
• Email: **vn.validator@gmail.com**`,
      },
    ],
  },

  faq: {
    meta: {
      title: 'FAQ — Validator.vn',
      description: 'Frequently asked questions about the F&B business validation tool Validator.vn.',
    },
    title: 'Frequently Asked Questions',
    items: [
      {
        q: 'Is Validator.vn free?',
        a: 'Completely free. All features — validation, Excel/PDF export, AI advisor, knowledge library — are free.',
      },
      {
        q: 'How accurate are the validation results?',
        a: "Results are based on your inputs and Vietnam F&B industry benchmarks. This is a reference tool to help you visualize the financial picture — actual results may vary due to factors like location, management, and seasonality.",
      },
      {
        q: 'Do I need to create an account?',
        a: 'Not required. You can use the validation tool without registering. An account is only needed to save scenarios, export Excel/PDF, or use the AI advisor.',
      },
      {
        q: 'Is my data safe?',
        a: "Yes. Data you enter in the wizard is only stored in your browser (localStorage) until you actively save it. When saved, data is encrypted and securely stored on Supabase. We don't sell data to third parties.",
      },
      {
        q: 'What business types are supported?',
        a: '8 popular F&B models: Coffee shop, Eatery, Bubble tea, Restaurant, Cloud Kitchen, Bakery, Bar/Pub, Kiosk.',
      },
      {
        q: 'Can I compare multiple scenarios?',
        a: 'Yes. You can save up to 10 scenarios and use the "Compare" feature to put 2-3 scenarios side by side, comparing key metrics and charts.',
      },
      {
        q: 'Who is the "Business Health Diagnosis" for?',
        a: "For existing F&B business owners who want to analyze their current situation. Enter actual data (revenue, costs, menu) to receive cost diagnosis, channel analysis, menu matrix, and improvement suggestions.",
      },
      {
        q: 'How does the AI Advisor work?',
        a: "The AI Advisor uses DeepSeek to analyze your scenario data and provide specific insights and suggestions. You need to be logged in to use this feature.",
      },
      {
        q: 'Can I export reports?',
        a: 'Yes. You can export reports as Excel (detailed 12-month breakdown), PDF (printable), or print directly from your browser.',
      },
      {
        q: 'How do I contact support?',
        a: 'Email vn.validator@gmail.com or message us on the Validator.vn Facebook page. We typically respond within 24 hours.',
      },
    ],
  },
};

export default legal;
