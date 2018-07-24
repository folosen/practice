import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '../../../node_modules/@angular/forms';
import { mobileValidator, equalValidator, mobileAsyncValidator } from '../validator/validators';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {
        validator: equalValidator
      })
    });
  }

  onSubmit() {
    // const isValid: boolean = this.formModel.get('username').valid;
    // const error: any = this.formModel.get('username').errors;
    // console.log('username的校验结果：' + isValid);
    // console.log('username的错误信息：' + JSON.stringify(error));
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  ngOnInit() {
  }

}
