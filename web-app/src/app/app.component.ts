import { Component } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Questions-app';

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10;
  min = 0;
  showTicks = true;
  step = 2;
  thumbLabel = true;
  value = 3;
  vertical = false;

  get tickIntervalX(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
  }
  set tickIntervalX(value) {
    this.tickInterval = coerceNumberProperty(value);
  }
  private tickInterval = 1;
}
