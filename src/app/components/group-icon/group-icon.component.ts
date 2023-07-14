import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group';

@Component({
  selector: 'group-icon',
  templateUrl: './group-icon.component.html',
  styleUrls: ['./group-icon.component.css']
})
export class GroupIconComponent {
    @Input() group: Group

    constructor(private router: Router) {}

    click() {
      this.router.navigate(['group', this.group._id])
    }
}
