import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  providers: [InfoService]
})
export class TechnologiesComponent implements OnInit {
  title: string = "Technologies";
  subtitle: string = "Here is a list of technologies which I use or used to work with";
  technologies: Array<string>;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.technologies = this.infoService.getData().user.technologies;
  }

}
