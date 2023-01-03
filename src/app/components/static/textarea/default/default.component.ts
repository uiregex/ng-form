import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-textarea-default',
  templateUrl: './default.component.html',
})
export class AppStaticTextareaDefaultComponent {

  form: FormGroup | undefined;

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
