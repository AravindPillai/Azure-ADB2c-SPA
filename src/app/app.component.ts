import { Component, Inject } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trial';
  constructor(@Inject(OidcSecurityService) public oidcSecurityService: OidcSecurityService) {}
}
