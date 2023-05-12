import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPvTableIndexComponent } from './ngx-pv-table-index.component';

describe('NgxPvTableIndexComponent', () => {
  let component: NgxPvTableIndexComponent;
  let fixture: ComponentFixture<NgxPvTableIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxPvTableIndexComponent]
    });
    fixture = TestBed.createComponent(NgxPvTableIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
