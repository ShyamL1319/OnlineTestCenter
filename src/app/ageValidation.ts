import {AbstractControl} from '@angular/forms';

export function ageValidator(abc:AbstractControl){
 if(abc.value!==null && (abc.value>18 || abc.value <80))
    return ({agevalidator:true});
  return null;

}