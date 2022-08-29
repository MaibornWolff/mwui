import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentLibraryComponent } from './component-library.component';

describe('ComponentLibraryComponent', () => {
  let component: ComponentLibraryComponent;
  let fixture: ComponentFixture<ComponentLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
