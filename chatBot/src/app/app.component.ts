import { Component } from '@angular/core';
import { ChatBot } from 'angular-ai-chat-bot';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: `'<Chat-bot class="chat-window"
  [token]="accessToken"
  [msg]="message"
  >
<ng-template>
</ng-template>
</Chat-bot>','./app.component.html'`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatBot';
  public accessToken = 'YOUR_ACCESS_TOKEN';
  public message: Subject<any> = new Subject();
}
