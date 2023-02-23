const config = {
  locales: [
    'id'
  ],
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config: {
    locales: ['id'],
    translations: {
      id: {
        'Auth.form.email.label': 'Email',
        "Auth.form.welcome.title": "  ",
        "Auth.form.welcome.subtitle": "  ",
        'app.components.LeftMenu.navbrand.title': "Dashboard",
        'app.components.LeftMenu.navbrand.title': "Dashboard",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap() {},
};
