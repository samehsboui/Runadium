import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  pageHeroes: any ;
  motCle  = '';
  currentpage = 0 ;
  size = 10;
  pages: Array<number> ;
  constructor(private route: ActivatedRoute,private router:Router, private heroservice: HeroService) { }

  ngOnInit() {

    this.heroservice.findHero(this.motCle , this.currentpage , this.size)
    .subscribe((data: any) => {
      this.pageHeroes = data ;
      console.log(data);
      this.pages = new Array(data.totalPages);
    } , err => {
      console.log(err) ;
    }) ;

    // this.route.data.subscribe((data: { heroes: Hero[] }) => this.heroes = data.heroes);
    // this.route.data.subscribe((data: { toto: string }) => console.log(data.toto));
  }


  updateHero (id: number) {
    this.router.navigate(['editHero', id]);
  }


  deleteHero (hero: Hero) {
    const confirm = window.confirm('Are you sure you want to delete this Hero?') ;
    if (confirm === true) {
      this.heroservice.deleteHero(hero.id).subscribe(data => {
        this.pageHeroes.content.splice(
          this.pageHeroes.content.indexOf(hero), 1) ;
      } , err => {
        console.log(err) ;
      }) ;
    }
  }

  chercher(){
    this.doSearch();
  }

  gotoPage(i: number) {
    this.currentpage = i ;
    this.doSearch() ;
  }



  doSearch() {
    this.heroservice.findHero(this.motCle, this.currentpage, this.size)
      .subscribe((data: any) => {
        this.pageHeroes = data;
        console.log(data)
        this.pages = new Array(data.totalPages);
      }, err => {
        console.log(err);
      });
  }



}