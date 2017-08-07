import { Component, OnInit, Input } from '@angular/core';
import { ListService } from "../list.service";
import { MessagingService } from "../../../core/messaging.service";

@Component({
  selector: '[app-list-item]',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() type: string = '';
  @Input() content: any;
  @Input() id: string;
  
  constructor(private listService: ListService, private messagingService: MessagingService) { }

  ngOnInit() {
  }

  onClickedEdit() {
    this.listService.clickedEditButton.next(this.id);
  }

  onClickedDelete() {
    this.messagingService.warning('Delete this Item?', 'Do you really want to delete this item?')
        .then(() => this.listService.clickedDeleteButton.next(this.id))
        .catch(() => null);
  }

}
