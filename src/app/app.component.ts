import { Component } from '@angular/core';
import { EMPTY, map, Observable } from 'rxjs';
import { WordleService } from './wordle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{

  public constructor(private wordleService: WordleService){}

  title = 'wordle-clone';

  showResults(): Observable<boolean> {
    return this.wordleService.getListOfResults().pipe(map(r => r.length != 0));
  }

}
