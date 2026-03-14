import { getFooter, updateFooter } from "../../models/footerModels/footerModel.js";

export const getFooterController = async (req, res) => {
  try {
    const { data, error } = await getFooter();
    if (error) throw error;
    res.json({ success: true, data: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const updateFooterController = async (req, res) => {
  try {
    const { logoPath, companyName, companyAddress, phone, email, whatsappHref, emailHref, facebookHref, wechatHref } = req.body;
    
    const formattedData = {
      logoPath,
      companyName,
      companyAddress,
      links: {
        side4: {
          phone: phone || "",
          email: email || "",
          whatsappHref: whatsappHref || "",
          emailHref: emailHref || "",
          facebookHref: facebookHref || "",
          wechatHref: wechatHref || ""
        }
      }
    };
    
    const { data, error } = await updateFooter(formattedData);
    if (error) throw error;
    res.json({ success: true, message: "Footer updated successfully", data: data });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
