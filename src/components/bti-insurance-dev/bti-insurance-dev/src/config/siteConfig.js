const prod = true

const siteConfig = {
  siteName: 'BTI Insurance',
  siteIcon: '',
  footerText: '© 2023 BTI Insurance .All rights reserved.',
  GOOGLE_CLIENT_ID: '',
  // ------------------------------Client Domain----------------------------------------
  // -----------------------------------------------------------------------------------
  domainUrl: prod ? '' : '',
  apiUrl: prod ? 'https://grumpy-elk-woolens.cyclic.app/api/' : 'https://grumpy-elk-woolens.cyclic.app/api/',
  revalidate: true,
  templateKey: '',
  mapKey: '',
  endpoint: {
    signUp: 'v1/user/signup',
    login: 'v1/user/login',
  }
}

export default siteConfig
