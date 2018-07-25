import { Directive } from '@angular/core';
import { NG_VALIDATORS } from '../../../node_modules/@angular/forms';
import { equalValidator } from '../validator/validators';

@Directive({
  selector: '[appEqual]',
  providers: [{provide: NG_VALIDATORS, useValue: equalValidator, multi: true}]
})
export class EqualValidatorDirective {

  constructor() { }

}
