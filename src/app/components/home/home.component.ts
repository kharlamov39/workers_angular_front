import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';
import { ModalService } from 'src/app/services/modal.service';
import { GroupService } from 'src/app/services/group.service';
import { Group } from 'src/app/models/group';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ WorkerService ]
})
export class HomeComponent  {
  groups: Group[] = [];
  title: string = '';

  constructor( public modalService:ModalService, private groupService: GroupService ) {
    this.groupService.getGroup()
      .pipe(takeUntilDestroyed())
      .subscribe({next: (data:any) => this.groups = data  })
  }

  createNewGroup() {
    this.groupService.createGroup(this.title)
      .subscribe( { next: (data:any) => this.groups.push(data)})
    this.modalService.close()
    this.title = ''  
  }
}
