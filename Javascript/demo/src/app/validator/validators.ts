import { FormControl, AbstractControl, FormGroup } from '../../../node_modules/@angular/forms';
import { Observable } from '../../../node_modules/rxjs/Observable';
import '../../../node_modules/rxjs/add/observable/of';

  export function mobileValidator(control: AbstractControl): any {
    const myreg: RegExp = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9{1}]))+\d{8})$/;
    const valid = myreg.test(control.value);
    console.log('mobile的校验结果是：' + valid);
    return valid ? null : {mobile : true};
  }

  export function mobileAsyncValidator(control: AbstractControl): any {
    const myreg: RegExp = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9{1}]))+\d{8})$/;
    const valid = myreg.test(control.value);
    console.log('mobile的校验结果是：' + valid);
    return Observable.of(valid ? null : {mobile : true}).delay(5000);
  }

  export function equalValidator(group: FormGroup): any {
    const password: FormControl = group.get('password') as FormControl;
    const pconfirm: FormControl = group.get('pconfirm') as FormControl;
    const valid: boolean = (password.value === pconfirm.value);
    console.log('密码校验结果：' + valid);
    return valid ? null : {equal: {descE: '密码和确认密码不匹配'}};
  }
