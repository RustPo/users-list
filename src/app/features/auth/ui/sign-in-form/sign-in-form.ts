import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Title} from '../../../../shared/ui/title/title';
import {Button} from '../../../../shared/ui/button/button';

@Component({
  selector: 'app-sign-in-form',
  imports: [
    RouterOutlet,
    Title,
    Button
  ],
  templateUrl: './sign-in-form.html',
  styleUrl: './sign-in-form.scss'
})
export class SignInForm {

}
