import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [InfoService]
})
export class HomeComponent implements OnInit {
  data: Object;
  
  constructor(private infoService: InfoService) { }

  ngOnInit() {
    this.data = this.infoService.getData();
  }

}
