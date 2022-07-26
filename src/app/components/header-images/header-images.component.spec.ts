import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImagesComponent } from './header-images.component';

describe('HeaderImagesComponent', () => {
  let component: HeaderImagesComponent;
  let fixture: ComponentFixture<HeaderImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
