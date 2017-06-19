import { Injectable } from '@angular/core';
import { DATA } from '../db/db';

@Injectable()
export class InfoService {

  constructor() { }

  getData() {
    return DATA;
  }
}
