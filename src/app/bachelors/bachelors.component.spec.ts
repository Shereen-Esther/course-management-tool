import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachelorsComponent } from './bachelors.component';

describe('BachelorsComponent', () => {
  let component: BachelorsComponent;
  let fixture: ComponentFixture<BachelorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BachelorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachelorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
