import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Quote } from "./quote";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class QuoteService {

    constructor(private http: HttpClient){}
    
    getQuote(): Observable<Quote>{
        return this.http.get<Quote>('https://zenquotes.io/api/today');
    }
}

