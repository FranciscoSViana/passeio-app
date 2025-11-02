import { AuthConfig } from 'angular-oauth2-oidc';

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '1021068405977-otdmqrods37b0jcj8peprrdgem383i0o.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}