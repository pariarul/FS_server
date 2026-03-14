import pool from "../db.js";

const createPrivacyPolicy = async () => {
  try {
    // Create table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS privacy_policy_section (
        id INT PRIMARY KEY,
        heading JSONB DEFAULT '{}'::jsonb,
        sections JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert default data
    await pool.query(`
      INSERT INTO privacy_policy_section (
        id,
        heading,
        sections
      )
      VALUES (
        1,
        '{"en":"Privacy Policy","zh":"","si":""}',
        '[
  {
    "id": "1",
    "en": {
      "title": "Introduction",
      "blocks": [
        { "type": "description", "text": "We value your privacy and data security." },
        { "type": "points", "items": ["Your data is confidential", "We never sell personal information"] }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "2",
    "en": {
      "title": "Data Collection",
      "blocks": [
        { "type": "description", "text": ["We collect information to improve our services.", "This includes usage data and cookies."] }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "3",
    "en": {
      "title": "Use of Information",
      "blocks": [
        { "type": "description", "text": "Your data helps us personalize your experience and improve services." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "4",
    "en": {
      "title": "Third-Party Sharing",
      "blocks": [
        { "type": "description", "text": "We may share limited data with trusted partners under strict confidentiality agreements." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "5",
    "en": {
      "title": "Cookies",
      "blocks": [
        { "type": "description", "text": ["We use cookies to enhance your experience.", "You can manage cookie preferences in your browser."] }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "6",
    "en": {
      "title": "Data Security",
      "blocks": [
        { "type": "points", "items": ["All data is encrypted in transit and at rest", "Access is restricted to authorized personnel"] }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "7",
    "en": {
      "title": "User Rights",
      "blocks": [
        { "type": "description", "text": "You can request access, correction, or deletion of your personal data at any time." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "8",
    "en": {
      "title": "Retention Policy",
      "blocks": [
        { "type": "description", "text": "We retain personal data only as long as necessary for business purposes or legal obligations." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "9",
    "en": {
      "title": "Children’s Privacy",
      "blocks": [
        { "type": "description", "text": "Our services are not intended for children under 13. We do not knowingly collect personal data from children." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "10",
    "en": {
      "title": "Policy Changes",
      "blocks": [
        { "type": "description", "text": "We may update our privacy policy periodically. Changes will be posted with an updated date." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "11",
    "en": {
      "title": "Contact Information",
      "blocks": [
        { "type": "description", "text": ["For privacy concerns or questions, contact us at privacy@company.com.", "We aim to respond within 48 hours."] }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  },
  {
    "id": "12",
    "en": {
      "title": "International Transfers",
      "blocks": [
        { "type": "description", "text": "Your data may be transferred to other countries with appropriate safeguards in place." }
      ]
    },
    "zh": { "title": "", "blocks": [] },
    "si": { "title": "", "blocks": [] }
  }
]'
      )
      ON CONFLICT (id)
      DO UPDATE SET
        heading = EXCLUDED.heading,
        sections = EXCLUDED.sections,
        updated_at = NOW();
    `);

    console.log("Privacy Policy Schema Ready");

  } catch (error) {
    console.error("Privacy Policy Schema Error:", error);
  }
};

export default createPrivacyPolicy;