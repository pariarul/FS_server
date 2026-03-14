import pool from "../db.js";

const createTerms = async () => {
  try {
    // Create table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS terms_section (
        id INT PRIMARY KEY,
        heading JSONB DEFAULT '{}'::jsonb,
        sections JSONB DEFAULT '[]'::jsonb,
        updated_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // Insert default data
    await pool.query(`
      INSERT INTO terms_section (
        id,
        heading,
        sections
      )
      VALUES (
        1,
        '{"en":"Terms and Conditions","zh":"","si":""}',
        '[
  {
    "id":"1",
    "en": {
      "title":"Acceptance of Terms",
      "blocks":[
        {"type":"description","text":"By using our services, you agree to these terms."},
        {"type":"points","items":["You accept all rules and regulations","You must be at least 18 years old"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"2",
    "en": {
      "title":"Account Registration",
      "blocks":[
        {"type":"description","text":["You must create an account to access certain features.","Keep your login credentials secure."]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":["",""]}
      ]
    }
  },
  {
    "id":"3",
    "en": {
      "title":"Payment Terms",
      "blocks":[
        {"type":"description","text":"All payments are due immediately unless otherwise stated."},
        {"type":"points","items":["Late payments may incur fees","Refunds are handled on a case-by-case basis"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"4",
    "en": {
      "title":"Privacy Policy",
      "blocks":[
        {"type":"description","text":"We respect your privacy and protect your data according to our policy."},
        {"type":"points","items":["Your data will not be shared without consent","You can request data deletion at any time"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"5",
    "en": {
      "title":"User Responsibilities",
      "blocks":[
        {"type":"description","text":"Users must follow the rules when using our platform."},
        {"type":"points","items":["Do not misuse the services","Report suspicious activity"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"6",
    "en": {
      "title":"Content Guidelines",
      "blocks":[
        {"type":"description","text":"All content must meet our standards."},
        {"type":"points","items":["No offensive material","Respect intellectual property"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"7",
    "en": {
      "title":"Subscription Plans",
      "blocks":[
        {"type":"description","text":"Details of available subscription plans and benefits."},
        {"type":"points","items":["Plans may be monthly or yearly","Automatic renewal applies unless canceled"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"8",
    "en": {
      "title":"Termination Policy",
      "blocks":[
        {"type":"description","text":"We may terminate accounts that violate rules."},
        {"type":"points","items":["Termination can be immediate","Appeals can be submitted in writing"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"9",
    "en": {
      "title":"Refund Policy",
      "blocks":[
        {"type":"description","text":"Refunds are handled on a case-by-case basis."},
        {"type":"points","items":["Request refunds within 30 days","Provide proof of payment"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"10",
    "en": {
      "title":"Limitation of Liability",
      "blocks":[
        {"type":"description","text":"Our liability is limited as per the terms."},
        {"type":"points","items":["We are not liable for indirect damages","Liability is capped to service fees paid"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  },
  {
    "id":"11",
    "en": {
      "title":"Contact Information",
      "blocks":[
        {"type":"description","text":"Reach out to us for any queries or support."},
        {"type":"points","items":["Email support@example.com","Call us at +1 234 567 890"]}
      ]
    },
    "zh": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    },
    "si": {
      "title":"", 
      "blocks":[
        {"type":"description","text":""},
        {"type":"points","items":["",""]}
      ]
    }
  }
]'
      )
      ON CONFLICT (id)
      DO UPDATE SET
        heading = EXCLUDED.heading,
        sections = EXCLUDED.sections,
        updated_at = NOW();
    `);

    console.log("Terms Section Schema Ready");

  } catch (error) {
    console.error("Terms Section Schema Error:", error);
  }
};

export default createTerms;