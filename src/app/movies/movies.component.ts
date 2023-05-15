import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: any[];

  constructor() {
    this.movies =
      [
        {
          title: "Sherlock Holmes",
          genre: "Detective fiction",
          director: "Guy Ritchie"
        },
        {
          title: "The Martian",
          genre: "Drama",
          director: "Ridley Scott"
        },
        {
          title: "Scream 3",
          genre: "Horror",
          director: "Wes Craven"
        },
        {
          title: "A walk to remember",
          genre: "Romance",
          director: "Adam Shankman"
        },
        {
          title: "Anaconda",
          genre: "Adventure",
          director: "Luis liosa"
        }
      ]
  }

}
