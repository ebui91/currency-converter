import { Component, OnInit, Input, ElementRef } from '@angular/core';
declare var cytoscape: any

@Component({
  selector: 'app-cytoscape-graph',
  templateUrl: './cytoscape-graph.component.html',
  styleUrls: ['./cytoscape-graph.component.css']
})
export class CytoscapeGraphComponent implements OnInit {
  cy: any

  constructor() {}
  
  ngOnInit() {
    var cy = cytoscape({
      container: document.getElementById('cy'),
      elements: [
        { 
          data: { id: 'a' }
        },
        { 
          data: { id: 'b' }
        },
        { 
          data: { id: 'ab', source: 'a', target: 'b' }
        }
      ],
      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': '#666',
            'label': 'data(id)'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        name: 'grid',
        rows: 1
      } 
    })
  }
}
