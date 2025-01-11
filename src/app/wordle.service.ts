import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { catchError, EMPTY, map, Observable, of, tap, withLatestFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordleService {
  constructor(public http: HttpClient) {}

  public WORD: string = 'CRANE';

  results$: Observable<Result[]> = of([]);

  public testWord(word: string): Observable<Result> {
    return this.http
      .get('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
      .pipe(
        map((result) => {
          return [word, true];
        }),
        catchError((error) => {
          return of(['', false]);
        }),
        map(([word, isValid]) => {
          if (isValid) {
            return this.getResultFromWord((word as string).toUpperCase());
          } else {
            return { letterResults: [], wasValidWord: false };
          }
        }),
        withLatestFrom(this.results$),
        map(([result, results]) => {
          results.push(result);
          return result;
        }),
        tap((result) => {
          if(!result.letterResults.some(r => r.resultType != 'MATCH')){
            alert("Congrats")
          }
        })
      );
  }

  public getListOfResults(): Observable<Result[]> {
    return this.results$;
  }

  getResultFromWord(word: string): Result {
    let results: SingleLetterResult[] = [];
    for (let index = 0; index < word.length; index++) {
      const element = word.charAt(index);
      console.log(element);
      
      let resultType: ResultType = 'NO_MATCH';
      if (this.WORD.includes(element) && this.WORD.charAt(index) != element)
        resultType = 'WRONG_PLACE';
      else if (this.WORD.includes(element) && this.WORD.charAt(index) == element)
        resultType = 'MATCH';
      results.push({ resultType: resultType, letter: element });
    }

    return { letterResults: results, wasValidWord: true };
  }
}

export interface Result {
  letterResults: SingleLetterResult[];
  wasValidWord: boolean;
}

export interface SingleLetterResult {
  letter?: string;
  resultType: ResultType;
}

export type ResultType = 'NO_MATCH' | 'WRONG_PLACE' | 'MATCH';
