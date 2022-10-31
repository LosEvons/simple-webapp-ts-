import { style } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
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

  addAutoHarvester() {
    if (!this.resource) return
    this.resourceService.buyAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
    this.resource.progbarActive = "Working...";

    setTimeout(() => this.buyAutoHarvester(), 10000);
  }

  buyAutoHarvester() {
    if (!this.resource) return
    this.resourceService.buyAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
    let progressive_bar = document.getElementById("progressive-bar");
    if (progressive_bar != null) {
      this.resource.progbarActive = "Idle";
    }
    let progressive_bar_bar = document.getElementById("progressive-bar-bar");
    if (progressive_bar_bar != null) {
      progressive_bar_bar.style.width = "0" + "%";
    }
  }

  setAutoHarvesterCount() {
    if (!this.resource) return
    if (this.resource.autoHarvesterCount) {
      this.resource.autoHarvesterCount++;
    }
  }

  improveAutoHarvester() {
    if (!this.resource) return
    this.resourceService.improveAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
  }

}
