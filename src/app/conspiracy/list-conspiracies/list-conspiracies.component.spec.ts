import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConspiraciesComponent } from './list-conspiracies.component';

describe('ListConspiraciesComponent', () => {
  let component: ListConspiraciesComponent;
  let fixture: ComponentFixture<ListConspiraciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListConspiraciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConspiraciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
