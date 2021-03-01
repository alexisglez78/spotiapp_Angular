import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return '../../assets/img/noimage.png';
    }
    if (images.length > 0) {
      // console.log(images[0].url);
      return images[0].url;
    }
    return '../../assets/img/noimage.png';
  }

}
