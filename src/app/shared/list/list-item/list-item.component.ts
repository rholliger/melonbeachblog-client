import { Component, OnInit, Input } from '@angular/core';
import { ListService } from "../list.service";

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() type: string = '';
  @Input() content: any;
  @Input() id: string;
  
  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onClickedEdit() {
    this.listService.clickedEditButton.next(this.id);
  }

  onClickedDelete() {
    this.listService.clickedDeleteButton.next(this.id);
  }

}
