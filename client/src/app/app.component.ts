import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<re-captcha (resolved)="resolved($event)" siteKey="6Lc6FbMUAAAAAEo2yc64LmHdNRqgpvh7A7K6YzI7"></re-captcha>`,
})
export class AppComponent {
  title = 'client';

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}