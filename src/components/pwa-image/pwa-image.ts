import { Component, Input } from '@angular/core';

/**
 * Generated class for the PwaImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  /**
   * test
   */
  selector: 'pwa-image',
  templateUrl: 'pwa-image.html',
  host: {
    '(window:resize)': 'onWindowResize($event)'
  }
})
export class PwaImageComponent {

  @Input() imgRootPath: string;
  @Input() imgNamesArray: Array<string>;
  @Input() extension: string = 'png';
  @Input() alt: string;
  @Input() height: string = 'auto';
  @Input() width: string = 'auto';
  imgName: string;

  constructor() {
  }

  ngOnInit() {
    this.replaceImgBasedOnWindowSize();
  }

  onWindowResize($event) {
    this.replaceImgBasedOnWindowSize();
  }

  replaceImgBasedOnWindowSize() {
    if (window.innerWidth >= 992) {
      this.imgName = this.imgNamesArray[0];
    } else if (window.innerWidth <= 991 && window.innerWidth >= 768) {
      this.imgName = this.imgNamesArray[1] != undefined ? this.imgNamesArray[1] : this.imgNamesArray[this.imgNamesArray.length - 1];
    } else if (window.innerWidth <= 768 && window.innerWidth >= 576) {
      this.imgName = this.imgNamesArray[2] != undefined ? this.imgNamesArray[2] : this.imgNamesArray[this.imgNamesArray.length - 1];
    } else if (window.innerWidth < 575) {
      this.imgName = this.imgNamesArray[3] != undefined ? this.imgNamesArray[3] : this.imgNamesArray[this.imgNamesArray.length - 1];
    } else {
      this.imgName = this.imgNamesArray[this.imgNamesArray.length - 1]
    }
  }

}

