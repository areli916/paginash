import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
hero: Hero = {
id: 2,
name: 'superman',
edad: 35,
SuperPoder: 'fuerza',
identidad: 'Conocida',
universo: 'dc'
};
  constructor() { }

  ngOnInit(): void {
  }

}
