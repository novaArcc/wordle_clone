import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import { log } from 'console';
import { WordleService } from '../wordle.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule]
})
export class InputFieldComponent implements OnInit {

  constructor(private wordleService: WordleService) { }

  public inputValue: string = "";

  ngOnInit(): void {
  }

  onEnterKeyPressed() {
    this.wordleService.testWord(this.inputValue).subscribe(() => {})
  }

}
