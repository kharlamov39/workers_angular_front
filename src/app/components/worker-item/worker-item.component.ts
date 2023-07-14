import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Worker } from 'src/app/models/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'worker-item',
  templateUrl: './worker-item.component.html',
  styleUrls: ['./worker-item.component.css']
})
export class WorkerItemComponent {
  @Input() worker: Worker;
  @Input() index: number;
  @Output() onDeleteWorker = new EventEmitter()
  @Output() onEditWorker = new EventEmitter()
  editMode: boolean = false;
  
  constructor( private workerService: WorkerService ) {}
  
  deleteWorker(workerId:string |undefined) {
    this.onDeleteWorker.emit(workerId);
  }

  editWorker(worker: Worker) {
    this.onEditWorker.emit(worker);
    this.editMode = false;
  }
}
