import { style } from '@angular/animations';
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

  counter = 0;
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
    let progressive_bar = document.getElementById("progressive-bar");
    if (progressive_bar != null) {
      progressive_bar.textContent = "Progressing epicly";
    }
    this.updateProgressBar();
    setTimeout(() => this.buyAutoHarvester(), 10000);
  }

  updateProgressBar() {
    if (this.counter < 100){
      this.counter += 10;
      let progressive_bar_bar = document.getElementById("progressive-bar-bar");
      if (progressive_bar_bar != null) {
        let progressive_bar_bar_width = document.getElementById("progressive-bar-bar")?.style.width.valueOf();
        progressive_bar_bar_width?.replace('%', ' ');
        let new_progress = progressive_bar_bar_width as unknown as number;
        new_progress = new_progress + 1;
        progressive_bar_bar.style.width = this.counter + "%";
      }
      var active_progress_bar = setTimeout(()=> this.updateProgressBar(), 1000);
    }
  }

  buyAutoHarvester() {
    if (!this.resource) return
    this.resourceService.buyAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
    let progressive_bar = document.getElementById("progressive-bar");
    if (progressive_bar != null) {
      progressive_bar.textContent = "Idle"
    }
    let progressive_bar_bar = document.getElementById("progressive-bar-bar");
    if (progressive_bar_bar != null) {
      progressive_bar_bar.style.width = "0" + "%";
    }
    this.counter = 0;
  }

  improveAutoHarvester() {
    if (!this.resource) return
    this.resourceService.improveAutoHarvester(this.resource.id).subscribe(resource => {
      this.resource = resource
    })
  }

}
