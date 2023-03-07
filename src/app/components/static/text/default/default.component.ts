import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-static-text-default',
  templateUrl: './default.component.html',
})
export class AppStaticTextDefaultComponent {

  hide = true;
  form: FormGroup | undefined;

  test(event: any) {
    event.preventDefault();

    this.hide = !this.hide;
  }

  handleForm(event: any) {
    this.form = event;
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
