import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const COMMON_LOCALE_CURRENCIES: { [key: string]: string } = {
  'en-CA': 'CAD',
  'fr-CA': 'CAD',

  'en-AU': 'AUD',

  'en-GB': 'GBP',

  'en-US': 'USD',
  'es-PR': 'USD',

  'da': 'EUR',
  'it-IT': 'EUR',
  'de-DE': 'EUR',
  'fr-FR': 'EUR',

  'ja': 'JPY',
};


@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  // private conversionRatePromises: { [key: string]: Promise<number> } = {};

  private conversionTable: Promise<{ [key: string]: number }>;
  // private conversionRate: Promise< number >;


  // fetch("https://api.apilayer.com/exchangerates_data/latest?symbols={symbols}&base={base}", requestOptions)
  private readonly ACCESS_KEY: string = "B16krShJcDHWqHkh1k4fRymAxjwoSWc7";
  private readonly API_URL: string = "https://api.apilayer.com/exchangerates_data/latest"


  // Make the api call...
  constructor(private http: HttpClient) { 
    // this.conversionTable = new Promise((resolve, reject) = {});
    const locale: string = navigator.language;
    // this.localeCurrencyCode = COMMON_LOCALE_CURRENCIES[locale] || '';
    const localeCurrencyCode = COMMON_LOCALE_CURRENCIES[locale] || '';

    // this.conversionRate = new Promise < number > ((resolve, reject) => {
    this.conversionTable = new Promise < { [key: string]: number } > ((resolve, reject) => {

      this.http.get<any>(this.API_URL + "?base=" + "USD" + "&symbols=" + localeCurrencyCode, {
        responseType: 'json',
        headers: {
          apikey: this.ACCESS_KEY,
        }
      }).subscribe({
        next: response => {
          console.log("Yoooo this called correctly?!?", response);
          // resolve(response["rates"][localeCurrencyCode]);
          resolve(response["rates"]);
        },

        error: msg => {
          console.log(msg);
        }
      });
    });    
  }

  ngOnInit() {
    // this.conversionTable = new Promise <{ [key: string]: number }> ((resolve, reject) => {

    //   this.http.get<any>(this.API_URL + "?access_key=" + this.ACCESS_KEY, {
    //     responseType: 'json'
    //   }).subscribe({
    //     next: response => {
    //       console.log("Yoooo this called correctly?!?", response);
    //       resolve(response["rates"]);
    //     },

    //     error: msg => {
    //       console.log(msg);
    //     }
    //   });
    // });    
  }


  // public getConversionRate(currencyCode: string): Promise<number> {
  public getConversion(currencyCode: string, USDValue: number): Promise<number> {
    return this.conversionTable.then(table => {
      return table[currencyCode]*USDValue;
    });

    /*.then(table => { 
      console.log(table);
      return table[currencyCode];
    });*/
  }

}
