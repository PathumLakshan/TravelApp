import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public anArray: any = [];
  data: boolean;

  constructor() { }

  ngOnInit() {
    
  }
  goTo() {
    console.log('this.anArray', this.anArray);
    this.data = true;
    }
  Add(){
    this.anArray.push({'value':''});
    }

  onClick() {
    alert('trip confirmed !');
  }

}
