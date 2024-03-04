import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  @Output() onSearchKey=new EventEmitter
  @Output() onSortKey=new EventEmitter
  
  getSearchKey(event:any){
    this.onSearchKey.emit(event.target.value)
  }

  handleSelectionChange(event: any) {
    this.onSortKey.emit(event.target.value)
  }
  
}
