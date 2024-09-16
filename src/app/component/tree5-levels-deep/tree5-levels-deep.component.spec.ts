import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree5LevelsDeepComponent } from './tree5-levels-deep.component';

describe('Tree5LevelsDeepComponent', () => {
  let component: Tree5LevelsDeepComponent;
  let fixture: ComponentFixture<Tree5LevelsDeepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Tree5LevelsDeepComponent]
    });
    fixture = TestBed.createComponent(Tree5LevelsDeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
