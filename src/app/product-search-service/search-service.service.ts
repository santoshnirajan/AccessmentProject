import { Injectable } from '@angular/core';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  setSearchTerm(term: string) {
    this.searchSubject.next(term);
  }

  getSearchTerm(): Observable<string> {
    return this.searchSubject.asObservable();
  }
}
