import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  idHero: number ;
  constructor(public router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { this.idHero = route.snapshot.params['id'] ;}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  updateHero () {
    this.heroService.updateHero(this.hero)
      .subscribe(data => {
        console.log(data) ;
        alert('Hero updated !') ;
        this.router.navigate(['heroes']) ;
      } , err => {
        console.log(err);
        alert('Error') ;
      }) ;
  }

  goBack(): void {
    this.location.back();
  }
}