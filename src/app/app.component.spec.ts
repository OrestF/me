import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should has navbar with links', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar').textContent).toContain( 'Home');
    expect(compiled.querySelector('.navbar').textContent).toContain( 'Technologies');
    expect(compiled.querySelector('.navbar').textContent).toContain( 'Projects');
  }));
});
