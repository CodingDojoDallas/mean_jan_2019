import { Component, OnInit } from '@angular/core';
import { GamestuffService } from './gamestuff.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'silverapp';
  currentgame={};
  silver=0;
  gameid;
  gamename;
  gamelog=[];
  contgamename;

  constructor (private _gamestuffservice: GamestuffService){

  }
  ngOnInit(){
    this.startnewgame()
  }

  startnewgame(){
    this._gamestuffservice.createGame().subscribe((data:any) => {
      this.gamevariables(data.game);
      this.gamelog.push("You have started a new game with zero gold.");
    });
  }
  retrievegame(){
    console.log("retrieve function run");
    this._gamestuffservice.continueGame(this.contgamename).subscribe((data:any) => {
      console.log(data);
      this.gamevariables(data);
      this.gamelog.push(`You are continuing this game with ${this.silver} silver.`)
    });
  }
  savegame(){
    this._gamestuffservice.saveGame(this.gameid,{silver:this.silver}).subscribe((data:any) => {
      console.log('game saved',this.silver,'$$$$$$$$$$$$$$');
      this.gamelog.push(`Your game has been saved. To continue, use the code ${this.gamename}`);
    });
  };
  gamevariables(game){
    this.currentgame=game;
    this.silver=game.silver;
    this.gameid=game._id;
    this.gamename=game.title
    this.gamelog=[];
  }
  farm(){
    var addsilver= Math.floor(Math.random() * (3) + 2);
    this.silver+=addsilver;
    this.gamelog.push(`You have farmed for ${addsilver} silver.`);
    console.log(this.silver,'SILVER!');
  }
  cave(){
    var addsilver= Math.floor(Math.random() * (5) + 5);
    this.silver+=addsilver;
    this.gamelog.push(`You have caved for ${addsilver} silver.`);
  }
  house(){
    var addsilver= Math.floor(Math.random() * (8) + 7);
    this.silver+=addsilver;
    this.gamelog.push(`You have housed for ${addsilver} silver.`);
  }
  gamble(){
    var addsilver= Math.floor(Math.random() * (200) - 100);
    this.silver+=addsilver;
    this.gamelog.push(`You have gambled for ${addsilver} silver.`);
  }

}
