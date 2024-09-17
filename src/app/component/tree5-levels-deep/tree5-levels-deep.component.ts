import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatCheckboxModule} from "@angular/material/checkbox";

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables_level1',
    children: [
      {
        name: 'Green_level2',
        children:
          [{
            name: 'Broccoli_level3',
            children: [{
              name: 'Pumpkins_level4',
              children: [{
                name: 'Pump_level5',
                children: [{name: 'Pumpkins_level 6'}, {name: 'Carrots'}],
              }
                , {name: 'Carrots'}],
            }, {name: 'Carrots'}],
          }
            , {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

@Component({
  selector: 'app-tree5-levels-deep',
  standalone: true,
  imports: [MatTreeModule, MatButtonModule, MatIconModule, MatTreeModule, MatIconModule, MatCheckboxModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tree5-levels-deep.component.html',
  styleUrls: ['./tree5-levels-deep.component.scss']
})
export class Tree5LevelsDeepComponent {
  treeControl = new NestedTreeControl<FoodNode>((node: FoodNode) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}

