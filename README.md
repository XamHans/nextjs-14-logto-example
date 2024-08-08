# Logto Integration

Logto is an open-source identity and access management (IAM) solution designed to simplify authentication and authorization for modern applications. It supports various authentication methods and provides easy-to-use APIs for developers.

## Features
- **Single Sign-On (SSO):** Supports multiple identity providers (e.g., Google, GitHub).
- **OAuth 2.0 and OpenID Connect (OIDC):** Secure and standardized protocols.
- **User Management:** Includes built-in user management features with an admin console.

## Getting Started

### Prerequisites
- **Node.js** `^18.12.0`

### Setup with Logto Cloud

1. **Sign Up and Create an Application:**
   - Visit [Logto Cloud](https://cloud.logto.io) and sign up using Google, GitHub, or email.
 

2. **Install Logto SDK:**
   - Run the following command to install the Logto SDK:

   ```bash
   npm install @logto/next
   ```

3. **Create a Logto Configuration File:**
    - Follow the onboarding flow to create a new application. Note the **endpoint**, **appId**, and **appSecret**. 
        https://docs.logto.io/docs/recipes/integrate-logto/

   - In your project directory, create a `logto.ts` file with the following content:

   ```typescript
   import { UserScope } from "@logto/next";

   export const logtoConfig = {
     endpoint: 'https://your-logto-endpoint',
     appId: 'your-app-id',
     appSecret: 'your-app-secret',
     baseUrl: 'http://localhost:3000', // Change to your own base URL
     cookieSecret: 'your-32-digit-cookie-secret', // Auto-generated 32 digit secret
     cookieSecure: process.env.NODE_ENV === 'production',
     scopes: [UserScope.Email, UserScope.Profile],
   };

4. **Activate the default email connector**
   - In order to recieve the email verification link, you need to activate the default email connector. 
   - Go to the `Connectors` tab in the Logto Cloud console and activate the default email connector.

