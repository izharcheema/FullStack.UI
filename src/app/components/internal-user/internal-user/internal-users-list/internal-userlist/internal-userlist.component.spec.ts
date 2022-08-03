import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalUserlistComponent } from './internal-userlist.component';

describe('InternalUserlistComponent', () => {
  let component: InternalUserlistComponent;
  let fixture: ComponentFixture<InternalUserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternalUserlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
