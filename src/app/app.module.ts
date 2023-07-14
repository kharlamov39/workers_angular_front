import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { WorkerService } from './services/worker.service';
import { ModalComponent } from './components/modal/modal.component';
import { FocusDirective } from './directives/focus.directive';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule }   from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { GroupIconComponent } from './components/group-icon/group-icon.component';
import { GroupService } from './services/group.service';
import { WorkerItemComponent } from './components/worker-item/worker-item.component';
import { WorkersComponent } from './components/workers/workers.component';
import { authGuard } from './guards/auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'group/:groupId', component: WorkersComponent, canActivate: [authGuard] },
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
    FocusDirective,
    HomeComponent,
    LoginComponent,
    GroupIconComponent,
    WorkerItemComponent,
    WorkersComponent,
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, HttpClientModule
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, WorkerService, AuthService, GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
