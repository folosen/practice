import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '../../../node_modules/@angular/forms';
import { mobileValidator } from '../validator/validators';

@Directive({
  selector: '[appMobile]',
  providers: [{provide: NG_VALIDATORS, useValue: mobileValidator, multi: true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
