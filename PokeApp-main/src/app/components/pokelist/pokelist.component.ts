import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/services/Pokemon';

@Component({
  selector: 'app-pokelist',
  templateUrl: './pokelist.component.html',
  styleUrls: ['./pokelist.component.css'],
})
export class PokelistComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public page: number = 0;
  public search: string = '';
  message: undefined | string;

  optionSort: { property: string | null, order : string } = { property : null, order : 'asc' };


  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {

    this.pokemonService.getAllPokemons()
      .subscribe( pokemons => {
        this.pokemons = pokemons;
      });
      this.orderListPokemonsAsc();
      this.orderListPokemonsDesc();

  }

  nextPage() {
    this.page += 5;
  }

  prevPage() {
    if ( this.page > 0 )
      this.page -= 5;
  }

  onSearchPokemon( search: string ) {
    this.page = 0;
    this.search = search;
  }
  orderListPokemonsDesc() : void {
    console.log('ordenar desc');
    this.pokemons.sort((a,b) => Number(a.id) - Number(b.id));
    console.log(this.pokemons);
    this.pokemons = [...this.pokemons];
  }
  orderListPokemonsAsc() : void {
    console.log('ordenar desc');
    this.pokemons.sort((a,b) => Number(b.id) - Number(a.id));
    console.log(this.pokemons);
    this.pokemons = [...this.pokemons];

  }
  deletePokemon(pokemon: Pokemon) {
    const index = this.pokemons.indexOf(pokemon);
    if (index !== -1) {
      this.pokemons.splice(index, 1);
      this.pokemons = [...this.pokemons];
    }
  }
  
  
  
  
  
  
  
  
  

}




  
 

