import { Component, Output } from '@angular/core';
import { SearchService } from '../product-search-service/search-service.service';


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {
  searchTerm: string = "";
  constructor(private _searchService: SearchService) {

  }
  search(term: string) {
    this._searchService.setSearchTerm(term);
  }

  onModelChange(searchValue: string) {
    this.searchTerm = searchValue;
    this._searchService.setSearchTerm(this.searchTerm);
    this._searchService.getSearchTerm().subscribe(term => {
      this.searchTerm = term;
    });
  }
}
