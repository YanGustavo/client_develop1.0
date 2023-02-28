declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_BASE_URL: process.envNEXT_PUBLIC_BASE_URL;
      NEXT_PUBLIC_BASE_SERVER_URL: process.env.NEXT_PUBLIC_BASE_SERVER_URL;
      NEXT_PUBLIC_USER_TYPE: process.env.NEXT_PUBLIC_USER_TYPE;
      NEXT_PUBLIC_USER_TOKEN_EXPIRES_IN: process.env.NEXT_PUBLIC_USER_TOKEN_EXPIRES_IN;
      NEXT_PUBLIC_USER_TOKEN: process.env.NEXT_PUBLIC_USER_TOKEN;
      NEXT_PUBLIC_CLOUDINARY_URL: process.env.NEXT_PUBLIC_CLOUDINARY_URL;
      NEXT_NODE_ENV: process.env.NEXT_NODE_ENV;
    }
  }
}

export {};
