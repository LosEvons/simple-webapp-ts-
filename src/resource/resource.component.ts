import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Resource } from 'src/DTO/resource';
import { ResourceService } from 'src/services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  @Input()
  resource: Resource | undefined;


  title = "title"

  constructor(private resourceService: ResourceService) { }

  ngOnInit(): void {
    console.log(this.resource)
  }

  harvest() {
    if (!this.resource) return
    this.resourceService.gatherResource(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
  }

  buyAutoHarvester() {
    if (!this.resource) return
    this.resourceService.buyAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
  }

  improveAutoHarvester() {
    if (!this.resource) return
    this.resourceService.improveAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
  }

}
