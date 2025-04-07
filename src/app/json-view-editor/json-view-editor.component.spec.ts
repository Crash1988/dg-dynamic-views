import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonViewEditorComponent } from './json-view-editor.component';

describe('JsonViewEditorComponent', () => {
  let component: JsonViewEditorComponent;
  let fixture: ComponentFixture<JsonViewEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonViewEditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonViewEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
