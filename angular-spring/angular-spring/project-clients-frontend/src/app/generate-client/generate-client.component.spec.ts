import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateClientComponent } from './generate-client.component';

describe('GenerateClientComponent', () => {
  let component: GenerateClientComponent;
  let fixture: ComponentFixture<GenerateClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateClientComponent]
    });
    fixture = TestBed.createComponent(GenerateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
