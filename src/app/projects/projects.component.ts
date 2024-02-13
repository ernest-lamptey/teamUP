import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects:any;
  constructor(private projectService: ProjectService){}

  ngOnInit() {
    this.projectService.getProjects().subscribe(res => {
      this.projects = res;
    })
  }
}
