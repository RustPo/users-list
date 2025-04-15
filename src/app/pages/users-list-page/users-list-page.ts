import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Title} from '../../shared/ui/title/title';
import {Button} from '../../shared/ui/button/button';

@Component({
  selector: 'app-users-list-page',
  imports: [
    RouterOutlet,
    Title,
    Button
  ],
  templateUrl: './users-list-page.html',
  styleUrl: './users-list-page.scss'
})
export class UsersListPage {

}
