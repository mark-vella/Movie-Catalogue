import { GenerateOptions } from "rxjs/internal/observable/generate";

export enum GenreType {
    Action = 'action',
    Adventure = 'adventure',
    Biography = 'biography',
    Comedy = 'comedy',
    Crime = 'crime',
    Drama = 'drama',
    History = 'history',
    Mystery = 'mystery',
    Scifi = 'scifi',
    Sport = 'sport',
    Thriller = 'thriller'
}

export class Movie {
    public id: number;
    public key: string;
    public name: string;
    public description: string;
    public genres: GenreType[];
    public rate: string;
    public length: string;
    public img: string;

}
