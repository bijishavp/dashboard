import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AreachartComponent } from './areachart/areachart.component';
import { ProgressComponent } from './progress/progress.component';
import { ProgresschartComponent } from './progresschart/progresschart.component';
import { PieComponent } from './pie/pie.component';
import { TableComponent } from './table/table.component';
import { MapComponent } from './map/map.component';
import { SettingsComponent } from './settings/settings.component';





const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'areachart',component:AreachartComponent},
  {path:'progress',component:ProgressComponent},
  {path:'progress2',component:ProgresschartComponent},
  {path:'projects',component:PieComponent},
  {path:'projects',component:TableComponent},
  {path:'map',component:MapComponent},
  {path:'settings',component:SettingsComponent}
 
 
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
