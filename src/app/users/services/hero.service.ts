import { Injectable } from "@angular/core";

interface Hero {
    name: string
}

const HEROES: Hero[] = [
    {name: 'hero1'},
    {name: 'hero2'},
    {name: 'hero3'}
]


@Injectable({
    providedIn: 'root'
})
export class HeroService {
    constructor() { }

    getHeroes(): Hero[] {
        return HEROES;
    }
}
