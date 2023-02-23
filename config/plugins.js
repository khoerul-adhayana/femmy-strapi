module.exports = ({env}) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-sendinblue',
      providerOptions: {
        sendinblue_api_key: env('SIB_API_KEY', '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'),
        sendinblue_default_replyto: env('SIB_DEFAULT_REPLY_TO', 'contact@femmy.co.id'),
        sendinblue_default_from: env('SIB_DEFAULT_FROM', 'no-reply@femmy.co.id'),
        sendinblue_default_from_name: env('SIB_DEFAULT_FROM_NAME', 'FEMMY APPS'),
      },
    },
  },
});