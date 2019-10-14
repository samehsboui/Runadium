import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HeroService } from './hero.service';

export class HeroesResolver implements Resolve<Hero[]>{
    constructor(private heroService: HeroService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Hero[]> {
        return this.heroService.getHeroes();
    }
}