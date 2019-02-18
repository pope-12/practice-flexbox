import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.css']
})
export class FlexboxComponent implements OnInit {

  public objectKeys = Object.keys;
  public elementDimension = 100;
  public elements: number[];
  public elementCount = 25;
  public containerHeight = 80;

  public options = {
    'justify-content': {
      selected: 'flex-end',
      properties: [
        'flex-start', 'flex-end', 'center', 'space-between', 'space-around'
      ]
    },
    'align-items': {
      selected: 'center',
      properties: [
        'flex-start', 'flex-end', 'center', 'baseline', 'stretch'
      ]
    },
    'align-content': {
      selected: 'flex-start',
      properties: [
        'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'
      ]
    },
    'flex-direction': {
      selected: 'row',
      properties: [
        'row', 'column', 'row-reverse', 'column-reverse'
      ]
    },
    'flex-wrap': {
      selected: 'wrap',
      properties: [
        'nowrap', 'wrap', 'wrap-reverse'
      ]
    },
  };

  constructor() { }

  ngOnInit() {
    this.setUpElements();
  }

  public setUpElements() {
    this.elements = [];
    this.elementCount = this.enforceMinMax(this.elementCount, 100, 0);

    for (let i = 0; i < this.elementCount; i++) {
      this.elements.push(i);
    }
  }

  public getContainerStyle() {
    const cssProperties = {
      height: this.containerHeight + 'vh'
    };

    Object.keys(this.options).forEach((key) => {
      cssProperties[key] = this.options[key].selected;
    });

    return cssProperties;
  }


  enforceMinMax(value, max, min) {
    if (value > max)  {
      return max;
    } else if (value < min) {
      return min;
    }

    return value;
  }

}
