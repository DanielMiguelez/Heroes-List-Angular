import { Component } from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  standalone: true,
  imports : [FormsModule, NgFor, HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  constructor(private heroService: HeroService, private messageService: MessageService) {}
  
  selectedHero?: Hero;

  heroes : Hero[] = [];

 // METODO DE SELECCIONAR UNO --------------

  ngOnInit(): void {
    this.getHeroes();
  }

 // metodos

    onSelect(hero: Hero): void {
  this.selectedHero = hero;
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
}

getHeroes () : void {
  this.heroService.getHeroes()
  .subscribe(heroes => this.heroes = heroes);
}

}
