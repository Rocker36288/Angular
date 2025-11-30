import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharePracticeComponent } from './share-practice.component';

describe('SharePracticeComponent', () => {
  let component: SharePracticeComponent;
  let fixture: ComponentFixture<SharePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharePracticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
