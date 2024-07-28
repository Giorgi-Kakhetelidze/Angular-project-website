import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachUserPostsComponent } from './each-user-posts.component';

describe('EachUserPostsComponent', () => {
  let component: EachUserPostsComponent;
  let fixture: ComponentFixture<EachUserPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachUserPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachUserPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
