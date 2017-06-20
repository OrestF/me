import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [ InfoService ]

})
export class ProjectsComponent implements OnInit {
  title: string = 'Projects';
  subtitle: string = 'Here are my own projects wich I am developing outside of my work';
  projects: Array<Object>;

  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.projects = this.infoService.getData().user.projects;
  }

}
