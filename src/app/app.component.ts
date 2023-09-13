import { Component } from '@angular/core';
import { LinkData } from './shared/link-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public-html';

  moodleLinks: LinkData[] = [
    {link: "https://elearning.dhbw-stuttgart.de/moodle/my/courses.php", name: "Moodle"},
    {link: "https://elearning.dhbw-stuttgart.de/moodle/course/view.php?id=17338", name: "Theoretische Informatik III"},
    {link: "https://elearning.dhbw-stuttgart.de/moodle/course/view.php?id=17340", name: "Datenbanken I"},
    {link: "https://wwwlehre.dhbw-stuttgart.de/~reimbold/", name: "Betriebssysteme"},
    {link: "https://wwwlehre.dhbw-stuttgart.de/~lombardo/", name: "Kommunikations- und Netztechnik"},
    {link: "https://elearning.dhbw-stuttgart.de/moodle/course/view.php?id=17337", name: "Mathematik II"},
  ];

  githubLinks: LinkData[] = [
    {link: "https://github.com/FabianSig/public-html", name:"DHBW Landingpage"},
    {link: "https://github.com/FabianSig/TINF22F_Team4_EDZ_Viewer_and_Converter", name:"Software Engineering (Gruppe 4)"}
  ]
}
