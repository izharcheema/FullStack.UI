import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInternalUserComponent } from './edit-internaluser.component';

describe('EditEmployeeComponent', () => {
  let component: EditInternalUserComponent;
  let fixture: ComponentFixture<EditInternalUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInternalUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInternalUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
