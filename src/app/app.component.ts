import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages = [];
  constructor( private wikipedia: WikipediaService){

  }
  // onTerm(term : string){
  //   const results = this.wikipedia.search(term);
  //   console.log(results);
  //   console.log('i a m at term ', term);
  //   this.wikipedia.search(term).subscribe((res: any) =>{
  //     console.log(res);
  //     this.pages = res.query.search;
  //     console.log(this.pages);
  //   })

  // }
  onTerm(term : string){
    this.wikipedia.search(term).subscribe((pages) => {

      this.pages = pages;

    });

  }
}
