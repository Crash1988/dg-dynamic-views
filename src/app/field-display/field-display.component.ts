import { Component, Input } from '@angular/core';
import { BaseField, SectionField } from '../models/form.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-field-display',
  imports: [CommonModule],
  templateUrl: './field-display.component.html',
  styleUrl: './field-display.component.scss'
})
export class FieldDisplayComponent {
  @Input() field!: BaseField;
  @Input() level!: number;
}

