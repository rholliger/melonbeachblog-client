import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from "../shared.service";

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Input() articleId: string;
  @Input() isChecked: boolean = false;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  onToggle(event: any) {
    this.sharedService.buttonToggled.next({ id: this.articleId, value: event.target.checked });
  }

}
