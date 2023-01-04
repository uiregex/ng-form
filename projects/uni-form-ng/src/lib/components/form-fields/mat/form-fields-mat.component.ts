import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormBuilder,  FormGroup } from '@angular/forms';

import { UniFormField } from '../../../models/interfaces/form-field.model';
import { UniFormFieldType } from '../../../models/types/form-field.type';
import { isDefined } from '../../../utils/is';

@Component({
  selector: 'uni-form-fields-mat',
  templateUrl: 'form-fields-mat.component.html',
  styleUrls: ['form-fields-mat.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UniFormFieldsMatComponent {

  @Input()
  field: UniFormField = { key: '', type: 'text' };

  isDefined = isDefined;

  @Input()
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({});
  }

  isInput(fieldType: UniFormFieldType): boolean {
    return ['text', 'email', 'password'].includes(fieldType);
  }

  isMatFormField(fieldType: UniFormFieldType): boolean {
    return ['text', 'email', 'password', 'number', 'textarea', 'select'].includes(fieldType);
  }

  onEnter(event: Event): void {
    event.preventDefault();
  }
}
