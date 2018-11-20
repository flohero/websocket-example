import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  ws: WebSocket;
  constructor() { }
  createSocket(): Observable<string> {
    this.ws = new WebSocket('wss://echo.websocket.org');
    return new Observable<string>(
      observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = () => observer.complete();
        this.ws.onopen = () => console.log('Connected');
      }
    );
  }
  sendMessage(msg: any) {
    this.ws.send(msg);
  }
}
