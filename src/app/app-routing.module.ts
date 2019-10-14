import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesResolver } from './heroes.resolver';
import { FormGroupDemoComponent } from './form-group/form-group.component';
import { NewHeroComponent } from './new-hero/new-hero.component';


const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
   {path: 'dashboard', component: DashboardComponent , data: {title: 'Dashboard'} },
   {path: 'heroes', component: HeroesComponent /*,resolve: {heroes: HeroesResolver},data: { title: 'Heroes'}*/},
   { path: 'editHero/:id', component: HeroDetailComponent },
   { path: 'new-hero', component: NewHeroComponent },
   {path: 'form', component: FormGroupDemoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }