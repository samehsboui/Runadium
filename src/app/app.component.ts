import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Runadium tour of hereos';
  constructor(private titleService:Title,private router: Router){}
  
  ngOnInit(){
    this.router.events.subscribe(e => {
      if(e instanceof NavigationEnd){
        console.log(e)
      }
    });

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        var title = this.getTitle(this.router.routerState, this.router.routerState.root).join('-');
        console.log('title', title);
        this.titleService.setTitle(title);
      }
    });
  }

  getTitle(state, parent) {
    var data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  }

