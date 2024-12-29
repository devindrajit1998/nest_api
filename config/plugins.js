module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      register: {
        allowedFields: [
          "name",
          "avatar",
          "order",
          "wishlist",
          "address",
          "cards",
        ],
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"),
      },
      settings: {
        defaultFrom: "support@nestecommerece.shop",
        defaultReplyTo: "indrajitghosh449@gmail.com",
      },
    },
  }
});
