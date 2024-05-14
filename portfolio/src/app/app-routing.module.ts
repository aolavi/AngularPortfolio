import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    //{ path: 'projects', component: ProjectsComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '/home' } // Wildcard-route för att omdirigera alla andra URL:er till startsidan
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }