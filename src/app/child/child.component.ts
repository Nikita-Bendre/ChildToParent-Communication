import { Component } from '@angular/core';
import { Output,Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  

  @Output() sendData = new EventEmitter();
  childData: string = '';

  // Emit the data to the parent
  sendToParent() {
    this.sendData.emit(this.childData);
    this.childData = ''; // Clear the input after sending data
  }
}
