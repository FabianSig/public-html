import { Component, Input } from '@angular/core';
import { LinkData } from '../shared/link-data';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  @Input() data?: LinkData;

  openLink(){
    window.open(this.data?.link, "_blank");
}
}
