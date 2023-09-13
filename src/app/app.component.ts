import { Component, OnInit } from '@angular/core';
import { LinkData } from './shared/link-data';
import { Quote } from './shared/quote';
import { QuoteService } from './shared/quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  title = 'public-html';

  quote?: Quote;

  dhbwLinks: LinkData[] = [
    {link: "https://elearning.dhbw-stuttgart.de/moodle/my/courses.php", name: "Moodle"},
    {link: "https://dualis.dhbw.de/scripts/mgrqispi.dll?APPNAME=CampusNet&PRGNAME=EXTERNALPAGES&ARGUMENTS=-N000000000000001,-N000324,-Awelcome", name: "Dualis"},
    {link: "https://rapla.dhbw.de/rapla/internal_calendar?key=6Q0QSbNtpyeYPKQhnGFTaEN6AggaPdGgCFyhd5ANmjydX8WyDjUfLBh4YjDgat2dJd8as6Az5GGmQilBwJydDahhHroOQIPJaRqDM08XMobXMSGfsGtP4flVnON8wy0Y&salt=648736798", name: "Vorlesungsplan (Rapla)"},
    {link: "https://www.dhbw-stuttgart.de/fileadmin/dateien/Semesterplaene/Technik/2022_Informatik.pdf", name: "Studienverlaufsplan"},
    {link: "https://www.dhbw.de/fileadmin/user/public/SP/STG/Informatik/Informatik.pdf", name: "Modulhandbuch"},
    {link: "https://lehre-webmail.dhbw-stuttgart.de/roundcubemail/?_task=mail&_mbox=INBOX", name: "roundcube"},


  ];

  moduleLinks: LinkData[] =[
    {link: "https://elearning.dhbw-stuttgart.de/moodle/course/view.php?id=17338", name: "Theoretische Informatik III"},
    {link: "https://elearning.dhbw-stuttgart.de/moodle/course/view.php?id=17337", name: "Mathematik II"},
    {link: "https://elearning.dhbw-stuttgart.de/moodle/course/view.php?id=17340", name: "Datenbanken I"},
    {link: "https://nextcloud.dhbw-stuttgart.de/index.php/s/n5bLeDLcxtGrnJq", name: "Softwareengineering I (Dateiablage)"},
    {link: "https://wwwlehre.dhbw-stuttgart.de/~reimbold/", name: "Betriebssysteme"},
    {link: "https://wwwlehre.dhbw-stuttgart.de/~lombardo/", name: "Kommunikations- und Netztechnik"},
  ] 

  githubLinks: LinkData[] = [
    {link: "https://github.com/FabianSig/public-html", name:"DHBW Landingpage"},
    {link: "https://github.com/FabianSig/TINF22F_Team4_EDZ_Viewer_and_Converter", name:"Software Engineering (Gruppe 4)"}
  ]

  constructor(private service: QuoteService){
    this.service.getQuote().subscribe(_quote => {
      this.quote = _quote;
    });
  }

}
