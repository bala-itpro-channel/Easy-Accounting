import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
 
@Injectable()
export class MasterFakeBackendInterceptor implements HttpInterceptor {
    currencies
    constructor() {
        console.log()
    }
    loadCurrencies() {
        let curr = `[{
                "id": 1,
                "code": "USD",
                "name": "United states dollar",
                "base": true
            },{
                "id": 2,
                "code": "CAD",
                "name": "Canadian dollar",
                "base": false
            },{
                "id": 3,
                "code": "INR",
                "name": "Indian rupees",
                "base": false
            },{
                "id": 4,
                "code": "AED",
                "name": "Arab emirates dirhams",
                "base": false
            },{
                "id": 5,
                "code": "AUD",
                "name": "Australian dollar",
                "base": false
            }
          ]`;  
        localStorage.setItem("currencies", curr);
    }
    
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!localStorage.getItem('currencies')) {
            this.loadCurrencies();
        }
        let currencies: any[] = JSON.parse(localStorage.getItem('currencies'));

        return of(null).pipe( mergeMap(() => {

            // get currency
            if (request.url.endsWith('/currency') && request.method === 'GET') {
                // check for fake auth token in header and return currencies if valid, this security is implemented server side in a real application
                return of(new HttpResponse({ status: 200, body: currencies }));
            }
            
            // get currency by id
            if (request.url.match(/\/currency\/\d+$/) && request.method === 'GET') {
                // find user by id in currencies array
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                let matchedcurrency = currencies.filter(currency => { return currency.id === id; });
                let currency = matchedcurrency.length ? matchedcurrency[0] : null;

                return of(new HttpResponse({ status: 200, body: currency }));
            }

            // delete currency
            if (request.url.match(/\/currency\/\d+$/) && request.method === 'DELETE') {
                // find user by id in users array
                let urlParts = request.url.split('/');
                let id = parseInt(urlParts[urlParts.length - 1]);
                for (let i = 0; i < currencies.length; i++) {
                    let currency = currencies[i];
                    if (currency.id === id) {
                        // delete user
                        currencies.splice(i, 1);
                        localStorage.setItem('currencies', JSON.stringify(currencies));
                        break;
                    }
                }
                
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // Add currency
            if (request.url.endsWith('/currency') && request.method === 'POST') {
            //if (request.url.match(/\/currency\/\d+$/) && request.method === 'POST') {
                // find user by id in users array
                let newId = currencies[currencies.length - 1] ? currencies[currencies.length - 1].id + 1 : 1;
                let newVersion = request.body;
                newVersion["id"] = newId;
                currencies.push(newVersion);
                localStorage.setItem('currencies', JSON.stringify(currencies));
                // respond 200 OK
                return of(new HttpResponse({ status: 200, body: newVersion }));
            }

            // update currency
            if (request.url.endsWith('/currency') && request.method === 'PUT') {
                // find user by id in users array
                let id = request.body.id;
                let indx = currencies.findIndex(dat=>{
                                return dat.id == id
                            });
                if (indx > -1) {
                    currencies[indx]["name"] = request.body.name;
                    currencies[indx]["code"] = request.body.code;
                }

                localStorage.setItem('currencies', JSON.stringify(currencies));
                // respond 200 OK
                return of(new HttpResponse({ status: 200, body: request.body }));
            }

            // pass through any requests not handled above
            return next.handle(request);
        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());
    }
}

export let fakeMasterBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: MasterFakeBackendInterceptor,
    multi: true
};
