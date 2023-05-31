import { Component, Input, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroPage',
  templateUrl: './heroPage.component.html',
  styleUrls: ['./heroPage.component.css'],
})
export class HeroPageComponent implements OnInit {
  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroeById(id)))
      .subscribe((hero) => {
        if (!hero) return this.router.navigate(['/heroes/list']);

        this.hero = hero;
        return;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
