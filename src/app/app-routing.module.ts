import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutingPath} from "./routing-path";
import {ChecklistComponent} from "./pages/checklist/checklist.component"

const routes: Routes = [
  {path: RoutingPath.checklist, component: ChecklistComponent},
  {path: '**', redirectTo: RoutingPath.checklist}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
