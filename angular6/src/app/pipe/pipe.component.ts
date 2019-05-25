import { Pipe,PipeTransform } from '@angular/core';


@Pipe({ name: 'filesize' })
export class FileSizePipe  implements PipeTransform {
  transform(size: number): string {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }
}
@Pipe({
  name: 'power'
})
export class DisplayNamePipe implements PipeTransform {
  
  transform(base: number, exponent: number): number {
    return Math.pow(base, exponent);
 }

}

@Pipe({
  name: 'toCaps'
})
export class ToCapsPipe implements PipeTransform {

  transform(input: string) {
    if (input && input.toUpperCase) {
      return input.toUpperCase();
    }
    return input;
  }
}