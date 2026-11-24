import { Component } from '@angular/core';
import { Group } from '../group/group';

@Component({
  selector: 'app-homepage',
  imports: [Group],
  styleUrl: './homepage.css',
  templateUrl: './homepage.html',
})
export class Homepage {
  readonly stats = {
    groups: '14',
    activity: '92%',
  };
}
