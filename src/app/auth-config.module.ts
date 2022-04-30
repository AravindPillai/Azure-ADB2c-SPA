import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    AuthModule.forRoot({
        config: {
            authority: 'https://incommecaas.b2clogin.com/incommecaas.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1A_SIGNUP_SIGNIN',
            authWellknownEndpointUrl: 'https://incommecaas.b2clogin.com/incommecaas.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1A_SIGNUP_SIGNIN',
            redirectUrl: window.location.origin,
            postLogoutRedirectUri: window.location.origin,
            clientId: '33ade846-93c5-41df-8a57-559b7a49107e',
           //clientId:'a0754032-2784-467f-9699-d26033476644',
            scope: 'openid offline_access https://incommecaas.onmicrosoft.com/ffa376ae-8640-4369-a85f-97c74e90d1cc/access_as_user', // 'openid profile offline_access ' + your scopes
            responseType: 'code',
            silentRenew: true,
            silentRenewUrl: `${window.location.origin}/silent-renew.html`,
            useRefreshToken: true,
            ignoreNonceAfterRefresh: true,
            maxIdTokenIatOffsetAllowedInSeconds: 10,
            issValidationOff: false,
            autoUserInfo: false,
            logLevel: LogLevel.Debug,
            triggerAuthorizationResultEvent: false,
            customParamsAuthRequest: {
              prompt: 'select_account', // login, consent
            }, 
      },
    }),
  ],
  exports: [AuthModule],
})
export class AuthConfigModule {}