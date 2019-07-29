import { IPokemonEvolution } from './poke-evolution.interface';
export interface IPokemon {
    id: string;
    num: number;
    name: string;
    img: string;
    type: string [];
    height: number;
    weight: number;
    candy: string;
    candy_count: number;
    egg: string;
    spawn_chance: number;
    avg_spawns: number;
    spawn_time: string;
    multipliers: number [];
    weaknesses: string [];
    prev_evolution?: IPokemonEvolution[];
    next_evolution?: IPokemonEvolution[];
}
