import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoidSectionComponent } from './factoid-section.component';

describe('FactoidSectionComponent', () => {
  let component: FactoidSectionComponent;
  let fixture: ComponentFixture<FactoidSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactoidSectionComponent]
    });
    fixture = TestBed.createComponent(FactoidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
