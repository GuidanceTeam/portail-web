import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { LoginComponent } from './login/login.component';
import { AdminApplisComponent } from './admin/admin-applis/admin-applis.component';
import { AdminContentsComponent } from './admin/admin-contents/admin-contents.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';
import { ContactComponent } from './contact/contact.component';
import { ApplisComponent } from './applis/applis.component';
import { HomeComponent } from './home/home.component';
import { AdminEditUserComponent } from './admin/admin-edit-user/admin-edit-user.component';
import { TestUserApplisComponent } from './test-user-applis/test-user-applis.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'applis', component: ApplisComponent },
  { path: 'contents/:url', component: ContentsComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'testUserApplis', component: TestUserApplisComponent },
  // { path: 'contents/:p1', component: ContentsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'adminApplis', component: AdminApplisComponent },
  { path: 'adminContents', component: AdminContentsComponent },
  { path: 'adminUsers', component: AdminUsersComponent },
  // { path: 'admin-edit-user/:id', component: AdminEditUserComponent },
  { path: 'admin-edit-user/:url', component: AdminEditUserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'userApps', component: AdminUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
