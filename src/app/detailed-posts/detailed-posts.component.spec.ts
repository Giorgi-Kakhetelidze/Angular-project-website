import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedPostsComponent } from './detailed-posts.component';

describe('DetailedPostsComponent', () => {
  let component: DetailedPostsComponent;
  let fixture: ComponentFixture<DetailedPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
