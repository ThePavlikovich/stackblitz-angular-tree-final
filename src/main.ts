import 'zone.js';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { TreeModule } from './components/tree/tree.module';
import { TreeDataService } from './services/data.service';
import { Observable } from 'rxjs';
import { NamedResource } from './common/common';

const GENERATED_DATA_DEPTH = 5;
const GENERATED_DATA_CHILD_COUNT = 3;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TreeModule],
  template: `
    <ng-template #nodeTemplate treeNode let-node="node">
      {{ node?.icon }} {{ node.name }}
    </ng-template>
    <tree [rootNode]="data" [nodeTemplate]="nodeTemplate" />
  `,
  providers: [TreeDataService],
})
export class App implements OnInit {
  protected data!: any;
  protected name = 'Angular';

  constructor(private treeDataService: TreeDataService) {}

  public ngOnInit(): void {
    this.treeDataService.data$.subscribe((r) => (this.data = r));
    // this.generateRandomData$().subscribe((r) => (this.data = r));
  }

  public generateRandomData$(): Observable<NamedResource> {
    return this.treeDataService.randomData$(
      GENERATED_DATA_DEPTH,
      GENERATED_DATA_CHILD_COUNT
    );
  }
}

bootstrapApplication(App);
