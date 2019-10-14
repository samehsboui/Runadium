import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { of, Observable, } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private host:string = "http://localhost:8090";

  constructor(private messageService: MessageService,private http:HttpClient) { }
  


    findHero(motCle: string , page: number , size: number) {
      return this.http.get(this.host+'/api/heroess/findHero?mc=' + motCle + '&size=' + size + '&page=' + page); 
  }

  getHeroes(): Observable<any>{
   this.messageService.add('HeloService: fetched heroes');  
   return this.http.get(this.host+"/api/heroess" )/* . pipe(delay(4000))*/;

  }

  saveHero(hero){
    return this.http.post(this.host+'/api/heroess/create',hero);
  }

  updateHero(hero: Hero){
      return this.http.put(this.host+"/api/heroess/update/" + hero.id , hero);  
  }

  deleteHero( id: number){
      return this.http.delete(this.host+"/api/heroess/delete/" + id);
  }
  getHero(id: number): Observable<any> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get(this.host+"/api/heroess/"+id);
  }
}
