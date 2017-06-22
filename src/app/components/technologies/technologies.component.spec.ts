import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesComponent } from './technologies.component';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologiesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should has projects', () => {
    expect(component.technologies.length).toBeGreaterThanOrEqual(1);
  });

  it('should has title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(component.title);
  });
});
