import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultListEntryComponent } from './result-list-entry.component';

describe('ResultListEntryComponent', () => {
  let component: ResultListEntryComponent;
  let fixture: ComponentFixture<ResultListEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultListEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultListEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
