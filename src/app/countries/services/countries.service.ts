import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  searchCountryByAlphaCode( code: string ): Observable<Country[]> {
    return this.search( `${ this.apiUrl }/alpha/${ code }` );
  }

  searchCapital( term: string ): Observable<Country[]> {
    return this.search( `${ this.apiUrl }/capital/${ term }` );
  }

  searchCountry( term: string ): Observable<Country[]> {
    return this.search( `${ this.apiUrl }/name/${ term }` );
  }

  searchRegion( region: string ): Observable<Country[]> {
    return this.search( `${ this.apiUrl }/region/${ region }` );
  }

  private search( url: string ) {
    return this.http.get<Country[]>( url ).pipe(
      catchError( error => of([]))
    );
  }
}
