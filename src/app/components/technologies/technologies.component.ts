import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  providers: [InfoService]
})
export class TechnologiesComponent implements OnInit {
  title = "Technologies";
  technologies: Array<string>;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.technologies = this.infoService.getData().user.technologies;
  }

}
