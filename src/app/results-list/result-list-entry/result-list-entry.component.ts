import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/wordle.service';

@Component({
  selector: 'app-result-list-entry',
  templateUrl: './result-list-entry.component.html',
  styleUrls: ['./result-list-entry.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResultListEntryComponent implements OnInit {

  @Input()
  result?: Result;

  constructor() { }

  ngOnInit(): void {
    console.log(this.result);
    
  }

}
