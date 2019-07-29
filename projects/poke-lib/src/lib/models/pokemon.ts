import { IPokemon } from '../interfaces/pokemon.interface';
import { IPokemonEvolution } from '../interfaces/poke-evolution.interface';

export class Pokemon implements IPokemon {

    constructor(
    public id: string,
    public num: number,
    public name: string,
    public img: string,
    public type: string [],
    public height: number,
    public weight: number,
    public candy: string,
    // tslint:disable-next-line:variable-name
    public candy_count: number,
    public egg: string,
    // tslint:disable-next-line:variable-name
    public spawn_chance: number,
    // tslint:disable-next-line:variable-name
    public avg_spawns: number,
    // tslint:disable-next-line:variable-name
    public spawn_time: string,
    public multipliers: number [],
    public weaknesses: string [],
    // tslint:disable-next-line:variable-name
    public prev_evolution?: IPokemonEvolution[],
    // tslint:disable-next-line:variable-name
    public next_evolution?: IPokemonEvolution[]
    ) {
        this.id = id;
        this.num = num;
        this.name = name;
        this.img = img;
        this.type = type;
        this.height = height;
        this.weight = weight;
        this.candy = candy;
        this.candy_count = candy_count;
        this.egg = egg;
        this.spawn_chance = spawn_chance;
        this.avg_spawns = avg_spawns;
        this.spawn_time = spawn_time;
        this.multipliers = multipliers;
        this.weaknesses = weaknesses;
        this.prev_evolution = prev_evolution;
        this.next_evolution = next_evolution;
    }
}
