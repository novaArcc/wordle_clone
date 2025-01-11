import { Component, OnInit } from '@angular/core';
import { Result, WordleService } from '../wordle.service';
import { Observable } from 'rxjs';
import { ResultListEntryComponent } from "./result-list-entry/result-list-entry.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css'],
  standalone:true,
  imports: [CommonModule, ResultListEntryComponent, ResultListEntryComponent]
})
export class ResultsListComponent implements OnInit {

  constructor(private wordleService: WordleService) { }

  ngOnInit(): void {
  }

  getResults(): Observable<Result[]> {
    return this.wordleService.getListOfResults();
  }

}
