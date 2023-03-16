import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-static-text-default',
  templateUrl: './default.component.html',
})
export class AppStaticTextDefaultComponent {

  hide: boolean = true;
  form: FormGroup | undefined;
  isCreate$: Observable<boolean> | undefined;

  switchVisible(event: any) {
    event.preventDefault();
    this.hide = false;
  }

  handleForm(event: any) {
    this.form = event;

    if (event.controls['switch']) {
      this.isCreate$ = event.controls['switch'].valueChanges;
    }
  }

  onFormSubmit(event: any) {
    const stringified = JSON.stringify(event.value);
    alert(`Form Data: ${stringified}`);
  }
}
