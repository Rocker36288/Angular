import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'article'
})
export class ArticlePipe implements PipeTransform {

  transform(value: string, format: string = "..."):
    string {
    return value.substring(0, 3) + format;
  }

}
