import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input('show') show!: boolean;
  @Output('choice') choise = new EventEmitter();
  constructor() {
    console.log(this.show);
  }

  selected(value: string) {
    this.choise.emit(value);
    this.show = false;
  }
}
