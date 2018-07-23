import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl, Validators } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {
  formModel: FormGroup;
  mobileValidator(control: AbstractControl): {[key: string]: any} {
    return null;
  }
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: [''],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      })
    });
  }

  onSubmit() {
    const isValid: boolean = this.formModel.get('username').valid;
    const error: any = this.formModel.get('username').errors;
    console.log('username的校验结果：' + isValid);
    console.log('username的错误信息：' + JSON.stringify(error));
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
