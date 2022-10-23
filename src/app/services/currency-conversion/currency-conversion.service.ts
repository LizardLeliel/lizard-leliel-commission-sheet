import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CurrencyConversionService {
  private conversionTable: Promise<{ [key: string]: number }>;

  // Exposing the API key like this is awful cybersecurity. However, since the API is free and the website
  //  isn't dependant on this service, I'm okay exposing this key and having it used up until I find a way to
  //  hide this with the limited server-side control I have with GitHub pages
  private readonly ACCESS_KEY: string = "B16krShJcDHWqHkh1k4fRymAxjwoSWc7";
  private readonly API_URL: string = "https://api.apilayer.com/exchangerates_data/latest"


  // Make the api call...
  constructor(private http: HttpClient) { 
    const USER_APPROX_PREFERRED_CURRENCY = this.getLocalCurrencyCode();

    // Don't burn an api key if we don't know the user's currency code
    if (USER_APPROX_PREFERRED_CURRENCY != '') {
      this.conversionTable = new Promise < { [key: string]: number } > ((resolve, reject) => {

        
        this.http.get<any>(this.API_URL + "?base=" + "USD" + "&symbols=" + USER_APPROX_PREFERRED_CURRENCY, {
          responseType: 'json',
          headers: {
            apikey: this.ACCESS_KEY,
          }
        }).subscribe({
          next: response => {
            resolve(response["rates"]);
          },

          // TODO: handle error cases (prefered behaviour: don't alert this service failed, since users have
          //  USD prices anyways)
          error: msg => {
            // console.log(msg);
          }
        });
        
      });    
    } else {
      // This is a crappy way to handle "currency not recognized" cases as its coupled with behaviour in
      //  style-commissions-info, but I'll settle with this compromise at all. The user doesn't need to know
      //  their currency weren't recognized when its listing the USD price anyways - it'll confuse them.
      this.conversionTable = new Promise<{ [key: string]: number } >(() => {});
    }
  }

  ngOnInit() { }

  // There is no simple way to get the user's preferred currency outside of a (possibly premium) API call.
  // Approximating their currency based on their language is the best compromise I have. I still believe
  //  this compromise would still help some people from countries decide on a commission.
  public getLocalCurrencyCode(): string {
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

    const LANGUAGE_CODE: string = navigator.language;
    return  COMMON_LOCALE_CURRENCIES[LANGUAGE_CODE] || '';
  }


  // public getConversionRate(currencyCode: string): Promise<number> {
  public getConversion(USDValue: number): Promise<number> {
    return this.conversionTable.then(table => {
      return table[this.getLocalCurrencyCode()]*USDValue;
    });
  }

}
