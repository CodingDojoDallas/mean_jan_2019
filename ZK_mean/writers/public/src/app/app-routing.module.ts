import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WritersbaseComponent} from './writersbase/writersbase.component';
import {EditwriterComponent} from './writersbase/editwriter/editwriter.component';
import {IndexwritersComponent} from './writersbase/indexwriters/indexwriters.component';
import {NewwriterComponent} from './writersbase/newwriter/newwriter.component';
import {ShowwriterComponent} from './writersbase/showwriter/showwriter.component';

const routes: Routes = [
  {path: 'writers',component: WritersbaseComponent,children:[
    {path:'',component:IndexwritersComponent},
    {path:'new',component: NewwriterComponent},
    {path:':id/edit',component: EditwriterComponent},
    {path:':id',component: ShowwriterComponent}
  ]},
  {path: '',pathMatch:'full',redirectTo:'/writers'},
  {path: '**',redirectTo:'/writers'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
