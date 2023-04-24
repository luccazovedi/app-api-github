import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposSearchComponent } from './github-search.component';

describe('UserSearchComponent', () => {
  let component: ReposSearchComponent ;
  let fixture: ComponentFixture<ReposSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReposSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
