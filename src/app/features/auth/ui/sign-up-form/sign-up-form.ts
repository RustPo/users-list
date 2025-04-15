import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Button} from '../../../../shared/ui/button/button';
import {Title} from '../../../../shared/ui/title/title';

@Component({
  selector: 'app-sign-up-form',
  imports: [
    RouterOutlet,
    Button,
    Title
  ],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.scss'
})
export class SignUpForm {

}
