import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabGroupEditComponent } from './tab-group-edit.component';

describe('TabGroupEditComponent', () => {
  let component: TabGroupEditComponent;
  let fixture: ComponentFixture<TabGroupEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabGroupEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
