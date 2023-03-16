import { Injectable } from '@angular/core';

import { UniFormField } from '../../models/interfaces/form-field.model';
import { UniFormFieldOption } from '../../models/interfaces/form-field-option.model';
import { UniFormFieldGroup } from '../../models/interfaces/form-field-group.model';
import { isArray } from '../../utils/is';

@Injectable({ providedIn: 'root' })
export class UniFormFieldService {

  dispatchAdd(el: HTMLElement, formData: UniFormField[]): void {
    el.dispatchEvent(new CustomEvent('uniFormDataAdd', {
      bubbles: true,
      detail: { formData },
    }));
  }

  dispatchRemove(el: HTMLElement, formData: UniFormField[]): void {
    el.dispatchEvent(new CustomEvent('uniFormDataRemove', {
      bubbles: true,
      detail: { formData },
    }));
  }

  enrichField(field: UniFormField, options: Partial<UniFormField> | undefined): UniFormField {
    if (options) {
      field = {
        ...field,
        ...options,
      };
    }

    return field;
  }

  groupsToOptions(field: UniFormField): UniFormFieldOption[] {
    let options: UniFormFieldOption[] = [];

    if (field.groups) {
      field.groups.forEach((group: UniFormFieldGroup) => {
        options = [...options, ...group.options];
      });
    } else {
      options = field.options || [];
    }

    return options;
  }

  getSelectedOptions(options: UniFormFieldOption[], value: string | number | string[] | number[]) {
    return options?.filter((option: UniFormFieldOption) => !isArray(value)
      ? value === option.value
      : option.value && (value as any[]).includes(option.value),
    ) || [];
  }

  hasSelectedOptionsFields(selectedOptions: UniFormFieldOption[]): boolean {
    return selectedOptions.some((option: UniFormFieldOption) => option.fields);
  }
}
