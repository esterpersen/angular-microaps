import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public values: string = '';
  public level: 'L' | 'M' | 'Q' | 'H';
  public width: number;
  public foreground: 'black' | 'green' | 'red' | 'blue';

  constructor() {
    this.level = 'L';
    this.values = 'QR code string value';
    this.width = 200;
    this.foreground = 'black';
  }

  qrLevel(val: 'L' | 'M' | 'Q' | 'H') {
    this.level = val;
  }

  qrData(val: string) {
    this.values = val;
  }

  qrWidth(val: number) {
    this.width = val;
  }

  qrFrgd(val: 'black' | 'green' | 'red' | 'blue') {
    console.log('hola entra al colour ' + val);
    this.foreground = val;
  }
}
