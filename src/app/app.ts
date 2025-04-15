import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Button} from "./shared/ui/button/button";
import {Title} from "./shared/ui/title/title";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, Title],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
