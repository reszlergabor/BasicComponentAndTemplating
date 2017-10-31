import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'azenpipeom'
})
export class AzenpipeomPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
