import { Component, Input } from '@angular/core';
import { Form } from '../models/form.model';
import { FieldDisplayComponent } from '../field-display/field-display.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-display',
  imports: [FieldDisplayComponent, CommonModule],
  templateUrl: './form-display.component.html',
  styleUrl: './form-display.component.scss',
})
export class FormDisplayComponent {
  @Input() form!: Form;
}
