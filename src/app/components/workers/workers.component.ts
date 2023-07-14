import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Worker } from 'src/app/models/worker';
import { ModalService } from 'src/app/services/modal.service';
import { WorkerService } from 'src/app/services/worker.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {
  workers: Worker[] = [];
  groupId: string;

  constructor(public modalService: ModalService, private workerService: WorkerService, private activateRoute: ActivatedRoute) {
    this.groupId = this.activateRoute.snapshot.params['groupId'];
    this.workerService.getWorkers(this.groupId)
    .pipe(takeUntilDestroyed())
    .subscribe( res => this.workers = res);
  }

  onCreateNewWorker(worker: Worker) {
    this.workerService.createWorker(worker, this.groupId)
    .subscribe(res => this.workers.push(res))
    this.modalService.close()
  }

  onDeleteWorker(workerId:string) {
      this.workerService.deleteWorker(workerId)
      .subscribe(res => {
        const index = this.workers.findIndex(el => el._id === workerId);
        this.workers.splice(index, 1);
      })
  }

  onEditWorker(worker: Worker) {
    this.workerService.editWorker(worker)
    .subscribe( res => {
      const index = this.workers.findIndex(el => el._id === res._id);
      this.workers[index] = res
    } )
  }
}
