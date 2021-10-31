import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useStyles } from "./PrivacyPolicyScreen.style";

const PrivacyPolicy = () => {
  const classes = useStyles();
  return (
    <Container max-width="lg" className={classes.mainContainer}>
      <Box>
        <Typography variant="h4" paragraph={true}>
          Privacy Policy
        </Typography>
        <Typography variant="h6" paragraph={true}>
          1. What information do we collect?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          We collect information from you when you place an order or subscribe
          to our newsletter. When ordering or registering on our site, as
          appropriate, you may be asked to enter your: name, e-mail address,
          mailing address or phone number. You may, however, visit our site
          anonymously.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          2. What do we use your information for?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Any of the information we collect from you may be used in one of the
          following ways: To improve customer service (your information helps us
          to more effectively respond to your customer service requests and
          support needs) To process transactions
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Your information, whether public or private, will not be sold,
          exchanged, transferred, or given to any other company for any reason
          whatsoever, without your consent, other than for the express purpose
          of delivering the purchased product or service requested. To send
          periodic emails
        </Typography>
        <Typography variant="body1" paragraph={true}>
          The email address you provide for order processing, will only be used
          to send you information and updates pertaining to your order.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          3. How do we protect your information?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order. We offer the use of
          a secure server. All supplied sensitive/credit information is
          transmitted via Secure Socket Layer (SSL) technology and then
          encrypted into our Payment gateway providers database only to be
          accessible by those authorized with special access rights to such
          systems, and are required to?keep the information confidential. After
          a transaction, your private information (credit cards, social security
          numbers, financials, etc.) will not be stored on our servers.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          4. Do we use cookies?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Yes (Cookies are small files that a site or its service provider
          transfers to your computers hard drive through your Web browser (if
          you allow) that enables the sites or service providers systems to
          recognize your browser and capture and remember certain information.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          We use cookies to help us remember and process the items in your
          shopping cart and understand and save your preferences for future
          visits.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          If you prefer, you can choose to have your computer warn you each time
          a cookie is being sent, or you can choose to turn off all cookies via
          your browser settings. Like most websites, if you turn your cookies
          off, some of our services may not function properly. However, you can
          still place orders over the telephone.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          5. Do we disclose any information to outside parties?
        </Typography>
        <Typography variant="body1" paragraph={true}>
          We do not sell, trade, or otherwise transfer to outside parties your
          personally identifiable information. This does not include trusted
          third parties who assist us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential. We may also release your information
          when we believe release is appropriate to comply with the law, enforce
          our site policies, or protect ours or others rights, property, or
          safety. However, non-personally identifiable visitor information may
          be provided to other parties for marketing, advertising, or other
          uses.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          (a) third parties may use cookies, web beacons, and similar
          technologies to collect or receive information from your website and
          elsewhere on the internet and use that information to provide
          measurement services and target ads.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          (b) how users can opt-out of the collection and use of information for
          ad targeting,
        </Typography>
        <Typography variant="body1" paragraph={true}>
          (c) where a user can access a mechanism for exercising such choice
          (e.g., providing a link to www.aboutads.info/choices).
        </Typography>
        <Typography variant="h6" paragraph={true}>
          Third party links
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Occasionally, at our discretion, we may include or offer third party
          products or services on our website. These third party sites have
          separate and independent privacy policies. We therefore have no
          responsibility or liability for the content and activities of these
          linked sites. Nonetheless, we seek to protect the integrity of our
          site and welcome any feedback about these sites.
        </Typography>
        <Typography variant="body1" paragraph={true}>
          Your Consent
        </Typography>
        <Typography variant="body1" paragraph={true}>
          By using our site, you consent to our web site privacy policy.
        </Typography>
        <Typography variant="h6" paragraph={true}>
          Changes to our Privacy Policy
        </Typography>
        <Typography variant="body1" paragraph={true}>
          If we decide to change our privacy policy, we will post those changes
          on this page.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
