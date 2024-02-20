import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { ActivatedRoute } from '@angular/router';
import { faChevronLeft, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  faChevronLeft = faChevronLeft
  faHeart = faHeart
  project: any
  constructor(private projectService: ProjectService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.getOneProject(id).subscribe(res => {
      this.project = res;
      // console.log(this.project)
    })
  }
}
