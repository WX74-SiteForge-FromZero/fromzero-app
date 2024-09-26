import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ProjectListComponent
} from "./pages/highlight-projects/components/project-list/project-list.component";
import {MessageComponent} from "./components/message/message.component";
import {InboxComponent} from "./pages/inbox/components/inbox/inbox.component";

const routes: Routes = [
  {
    path:'highlight-projects',
    component: ProjectListComponent
  },
  {
    path:'message',
    component: MessageComponent
  },
  {
    path:'inbox',
    component: InboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
