import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { SearchService } from '../product-search-service/search-service.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit, OnDestroy {
  searchTerm: string = "";
  private searchSubject = new Subject<string>();
  private searchSubscription: any;

  constructor(private _searchService: SearchService) {}

  ngOnInit() {
    this.searchSubscription = this.searchSubject
      .pipe(debounceTime(300)) 
      .subscribe(searchValue => {
        this.search(searchValue);
      });
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  search(term: string) {
    this._searchService.setSearchTerm(term);
  }

  onModelChange(searchValue: string) {
    this.searchSubject.next(searchValue);
  }
}
