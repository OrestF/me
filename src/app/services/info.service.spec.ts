import { TestBed, inject } from '@angular/core/testing';

import { InfoService } from './info.service';

describe('InfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoService]
    });
  });

  it('should be created', inject([InfoService], (service: InfoService) => {
    expect(service).toBeTruthy();
  }));

  it('should include all User and App keys', inject([InfoService], (service: InfoService) => {
    const keys = Object.keys(service.getData());
    const appKeys = Object.keys(service.getData().app);
    const userKeys = Object.keys(service.getData().user);

    expect(keys).toEqual(['app', 'user']);
    expect(appKeys).toEqual(['main_text']);
    expect(userKeys)
      .toEqual(['name', 'surname', 'email', 'linkedin', 'image', 'technologies', 'projects']);
  }));
});
