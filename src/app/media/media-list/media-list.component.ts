import { Component, OnInit } from '@angular/core';
import { SharedService } from "../../shared/shared.service";

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {
  media: any[] = [
    {
      _id: "0",
      date: new Date(),
      preview: 'http://blabla.de',
      name: 'Image 1',
      description: 'This is the first image'
    },
    {
      _id: "1",
      date: new Date(),
      preview: 'http://blabla.de',
      name: 'Image 2',
      description: 'This is the 2 image'
    },
    {
      _id: "2",
      date: new Date(),
      preview: 'http://blabla.de',
      name: 'Image 3',
      description: 'This is the 3 image'
    },
    {
      _id: "3",
      date: new Date(),
      preview: 'http://blabla.de',
      name: 'Image 4',
      description: 'This is the 4 image'
    }
  ]

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.clickedDeleteButton.subscribe(
      (id: string) => this.media.splice(parseInt(id, 10), 1)
    )
  }

}
