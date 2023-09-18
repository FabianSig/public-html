import { Component, OnInit } from '@angular/core';
import { LinkData } from './shared/link-data';
import { Quote } from './shared/quote';
import { QuoteService } from './shared/quote.service';

import data from './shared/links.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'public-html';

  quote?: Quote;

  dhbwLinks: LinkData[] = data.dhbwLinks;
  
  moduleLinks: LinkData[] = data.modulLinks;

  githubLinks: LinkData[] = data.githubLinks;

}
