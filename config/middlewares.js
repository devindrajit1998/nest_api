module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": [
            "'self'",
            "https:",
            "https://proxy-event.ckeditor.com",
          ],
          "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "script-src": [
            "'self'", // Allow scripts from the same domain
            "https://cdn.ckeditor.com", // Existing CKEditor script source
            "https://nest-api-04r6.onrender.com", // Add the blocked script source
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

// module.exports = [
//   "strapi::logger",
//   "strapi::errors",
//   {
//     name: "strapi::security",
//     config: {
//       contentSecurityPolicy: {
//         useDefaults: true,
//         directives: {
//           "connect-src": [
//             "'self'",
//             "https:",
//             "https://proxy-event.ckeditor.com",
//           ],
//           "img-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
//           "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
//           "script-src": ["https://cdn.ckeditor.com"],
//           upgradeInsecureRequests: null,
//         },
//       },
//     },
//   },
//   "strapi::cors",
//   "strapi::poweredBy",
//   "strapi::query",
//   "strapi::body",
//   "strapi::session",
//   "strapi::favicon",
//   "strapi::public",
// ];
