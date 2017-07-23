import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreColor'
})
export class ScoreColorPipe implements PipeTransform {

  transform(value: number): string {
    switch(true){
      case (value < 20):
        return "red"
      case (value < 50):
        return "orange"
      case (value < 100):
        return "black"
      case (value < 200):
        return "green"
      case (value >= 200):
        return "blue"
      default:
        console.log(value);
        return "black"
    }
  }

}
