import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { log } from 'console';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
})
export class InputFieldComponent implements OnInit {
  constructor(private wordleService: WordleService) {}

  public inputValues: string[] = ['', '', '', '', ''];
  public letterToEdit: number = 0;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let key = event.key;
    if (key == 'Enter') {
      if (!this.inputValues.some((v) => v == '')) {
        this.wordleService.testWord(this.inputValues.join('')).subscribe(() => {
          this.clearInputField(); 
        });
      }
    }
    if (key == 'Backspace') {
      if (this.letterToEdit != 0) {
        this.letterToEdit -= 1;
        this.inputValues[this.letterToEdit] = '';
      }
    }
    if (this.letterToEdit != 5) {
      if (event.key.length == 1 && event.key.toUpperCase() >= 'A' && event.key.toUpperCase() <= 'Z') {
        this.inputValues[this.letterToEdit] = key.toUpperCase();
        this.letterToEdit += 1;
      }
    }
  }

  ngOnInit(): void {}

  private clearInputField(): void {
    this.inputValues = ['', '', '', '', ''];
    this.letterToEdit = 0; 
  }
}