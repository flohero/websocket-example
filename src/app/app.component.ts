import { Component } from '@angular/core';
import {SocketService} from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'websocket';
  messages: string[] = [];
  constructor(private socketService: SocketService) {
    this.socketService.createSocket()
      .subscribe(
        data => {
          this.messages = this.messages.concat(data);
        },
        console.error,
        () => console.log('Completed')
      );
  }
  sendMsg() {
    this.socketService.sendMessage('Hello');
  }
}
