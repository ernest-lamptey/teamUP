import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  randomId = Math.floor(Math.random() * 50)
  imageUrl = `https://picsum.photos/id/${this.randomId}/600/300`;

  @Input() project:any = {};

}
