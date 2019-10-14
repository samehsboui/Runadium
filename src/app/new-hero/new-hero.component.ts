import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {
  hero : Hero =new Hero();
  constructor(private  heroservice:HeroService, public router: Router) { }

  ngOnInit() {
  }

  saveHero () {
    this.heroservice.saveHero(this.hero).subscribe(data => {
      alert('Hero added !') ;
      this.router.navigate(['heroes']) ;
    } , err => {
      console.log(err) ;
    }) ;
  }

}
