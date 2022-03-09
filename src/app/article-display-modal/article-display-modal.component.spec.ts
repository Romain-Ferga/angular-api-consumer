import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDisplayModalComponent } from './article-display-modal.component';

describe('ArticleDisplayModalComponent', () => {
  let component: ArticleDisplayModalComponent;
  let fixture: ComponentFixture<ArticleDisplayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDisplayModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDisplayModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
