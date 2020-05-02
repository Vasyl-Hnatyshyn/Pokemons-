import React from 'react';
import './App.css';
import Pokemon from './Pokemon';








class App extends React.Component {
    constructor (){
        super();
        this.state={
            pokemons:[],
            pokemonId:{
                name:'Bulbasavr',
                id:1,
                type:'Poison',
                attack:49,
                defense:49,
                HP:45,
                SP_Attack:65,
                SP_Defense:65,
                Speed:45,
                Weight:70,
                totalMoves:76,
            },
        limit:12,
            
    
        }
    };
    
   
    
    
   
  
 componentDidMount=()=> {
        
this.getPokemons();
           
 };

componentDidUpdate   (prevState, prevProps)  {
        
        if( prevState.limit!== this.state.limit ||  prevState.pokemonId!== this.state.pokemonId   ){
              
            this.getPokemons();
            this.positionCard();
            
        }
            
    }
    

getPokemons=()=>{
    
             
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}`)
  .then(res => res.json())
  .then(data => { 
   
      
      const promises = data.results.map((item) => fetch(item.url).then(res => res.json()));

      Promise.all(promises).then(pokemonDetails => {
        
       this.setState({ pokemons: pokemonDetails })
      })
        
        })
    }    


buttonsColor=()=> {
   let a= document.getElementsByClassName('ability');
   for(let i=0; i< a.length; i++){
       let b = a[i];
       
       if (b.value==="poison"){
           b.style.backgroundColor = "#991199";          
          
       } 
       else if (b.value==="grass"){
           b.style.backgroundColor = "#03c03c";          
          
       }
       else if (b.value==="fire"){
           b.style.backgroundColor = "#dc143c";          
          
       }
       else if (b.value==="water"){
           b.style.backgroundColor = "#007fff";          
          
       }
       else if (b.value==="flying"){
           b.style.backgroundColor = "#ffff00";          
          
       }
       
        else if (b.value==="bug"){
           b.style.backgroundColor = "#a86e36";          
          
       }
       else {
           b.style.backgroundColor = "#f4c430"; 
       }
       
       
       
   }
  
};

positionCard =()=> {
    
    let a = this.state.pokemonId.id;
    if (  a > 6){
        
        document.getElementById('pokemonSingleCard').style.paddingTop="21%";
    }
 else if( a > 9 ){
        
        document.getElementById('pokemonSingleCard').style.paddingTop="50%";
    }
}



loadMoreBtn=()=> {
    let addLimit = this.state.limit + 6;
      this.setState({
      limit: addLimit
      })
             
    
}



 
render (){
    
   

 this.buttonsColor();
    
           
      return (
           
 
        
         
          <div>
          
          <h1 >Pokedex</h1>
          
          
          <div className="wrapper a">
          
          <div className=" pokemonWrapper a">
          
          {this.state.pokemons.map((pokemon)=>{
          
          
          
             return <div className="cardPokemon" key={pokemon.id} onClick={()=>{
                                     
                                  this.setState ( {
                                              pokemonId: {
                                                  name:pokemon.name,           
                                                  id: pokemon.id,
                                                  type: pokemon.types[0].type.name,
                                                  attack: pokemon.stats[4].base_stat,
                                                  defense: pokemon.stats[3].base_stat,
                                                  HP: pokemon.stats[5].base_stat,
                                                  SP_Attack: pokemon.stats[2].base_stat,
                                                  SP_Defense: pokemon.stats[1].base_stat,
                                                  Speed: pokemon.stats[0].base_stat,
                                                  Weight: pokemon.weight,
                                                  totalMoves: pokemon.moves.length - 2,     
                                                          }
                                  } )   
                                  
                                  
                                  
                                  
                                  

      }} >
                 
                 <img src= { `img/${pokemon.id}.jpg` }  alt="" />
         
                 
                 <p >{pokemon.name}</p>

                  <div className="types">
                  {pokemon.types.map(posib=>{
                     return   <button className= "ability" value={posib.type.name} > {posib.type.name}</button> 
             
                  })}
                 
                 </div>
                 
                 </div>
 
          })}
  
     <button type="button"  id="loadeMore" onClick= {this.loadMoreBtn} > LOAD MORE</button>
          
          </div> 
            <div id="pokemonSingleCard" > 
                
                <Pokemon  pokemonId={this.state.pokemonId} />
                
                
                
                </div>
                 

          
          
          
          
          
          
          
          
           </div>
</div>
          
          

      

      
      
      
      )  


    

}




}
export default App;
