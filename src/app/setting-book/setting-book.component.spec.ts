import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingBookComponent } from './setting-book.component';

describe('SettingBookComponent', () => {
  let component: SettingBookComponent;
  let fixture: ComponentFixture<SettingBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
