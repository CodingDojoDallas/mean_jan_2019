import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakedisplayComponent} from './cakedisplay/cakedisplay.component'

const routes: Routes = [
  {path:'alpha',component: CakedisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
