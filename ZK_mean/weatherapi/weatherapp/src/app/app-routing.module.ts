import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerlinComponent} from './berlin/berlin.component'
import { CincinnatiComponent} from './cincinnati/cincinnati.component'
import { IthacaComponent} from './ithaca/ithaca.component'
import { PortlandComponent} from './portland/portland.component'
import { DallasComponent} from './dallas/dallas.component'
import { TokyoComponent} from './tokyo/tokyo.component'
const routes: Routes = [
  {path: 'berlin', component:BerlinComponent},
  {path: 'cincinnati', component:CincinnatiComponent},
  {path: 'ithaca', component:IthacaComponent},
  {path: 'portland', component:PortlandComponent},
  {path: 'dallas', component:DallasComponent},
  {path: 'tokyo', component:TokyoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
