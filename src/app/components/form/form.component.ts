import { Worker } from 'src/app/models/worker';
import { WorkerService } from './../../services/worker.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent {
  worker: Worker = new Worker('', '', '', 20000);
  @Output() onCreateNewWorker = new EventEmitter<any>()
  
  constructor( private workerService: WorkerService, public modalService:ModalService ) {

  }

  createWorker() {
    this.onCreateNewWorker.emit(this.worker)
  }
}
