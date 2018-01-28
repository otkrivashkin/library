import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorDialogNewComponent } from './author-dialog-new.component';

describe('AuthorDialogNewComponent', () => {
  let component: AuthorDialogNewComponent;
  let fixture: ComponentFixture<AuthorDialogNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorDialogNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorDialogNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
