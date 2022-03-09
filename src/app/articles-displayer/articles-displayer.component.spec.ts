import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesDisplayerComponent } from './articles-displayer.component';

describe('ArticlesDisplayerComponent', () => {
  let component: ArticlesDisplayerComponent;
  let fixture: ComponentFixture<ArticlesDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
