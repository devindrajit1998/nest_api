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
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "indrajitghosh449@gmail.com",
          pass: "hkuu bdca esks tgbr",
        },
      },
      settings: {
        defaultFrom: "indrajitghosh449@gmail.com",
        defaultReplyTo: "indrajitghosh449@gmail.com",
      },
    },
  },
});
