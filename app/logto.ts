import { UserScope } from "@logto/next";

export const logtoConfig = {
  endpoint: 'https://k9nske.logto.app/',
  appId: 'gj7cptulxbglte7osy1dm',
  appSecret: 'r9wp36BBvcIHGEtOkeM3XuF1ZeNkNtEq',
  baseUrl: 'http://localhost:3000', // Change to your own base URL
  cookieSecret: 's7CeTpPTNulJi9kIgCUyC3MCkEXFbSph', // Auto-generated 32 digit secret
  cookieSecure: process.env.NODE_ENV === 'production',
  scopes: [UserScope.Email, UserScope.Profile],
};