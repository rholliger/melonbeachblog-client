import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../../shared.service";

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() type: string = '';
  @Input() content: any;
  @Input() id: string;
  
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  onClickedEdit() {
    this.sharedService.clickedEditButton.next(this.id);
  }

  onClickedDelete() {
    this.sharedService.clickedDeleteButton.next(this.id);
  }

}
