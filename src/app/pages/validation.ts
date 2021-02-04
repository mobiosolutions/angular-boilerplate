import { AbstractControl, FormGroup } from '@angular/forms';

export function EmailValidator(control: AbstractControl)
{
    if(control && (control.value !== null || control.value !== undefined))
    {
         
        var regex = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{3,3}$/);
        var isemailcontainorgorcom = new RegExp(/\b(org|com)\b/);
             if(!regex.test(control.value)||(!isemailcontainorgorcom.test(control.value)))
            {
    
                return{
                    isError: true
                };
            } 
    }
    return null;
}


// Simple password Validation
export function passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
        const regex = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/);

        if (!regex.test(control.value)) {
            return {
                isError: true
            };
        }
    }
    return null;
}

export function PhoneValidator(control: AbstractControl)
{
    if(control && (control.value !== null || control.value !== undefined))
    {
  
        const regex = new RegExp('^[1-9][0-9]{9}$');

                 if(!regex.test(control.value))
            {
    
                return{
                    isError: true
                };
            }
        
    }
    return false;
}

export function NameValidator(control: AbstractControl)
{
    if(control && (control.value !== null || control.value !== undefined))
    {
        const regex = new RegExp('^[a-zA-Z ]*$');
    
        if(!regex.test(control.value))
        {
    
                return{
                    isError: true
                };
                
            }
        
    }
    return null;
}
