import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'scoreMessage'
})
export class ScoreMessagePipe implements PipeTransform {

  transform(value: number): string {
    switch(true){
      case (value < 20):
        return "Needs Work!"
      case (value < 50):
        return "A Decent Start!"
      case (value < 100):
        return "Doing Good!"
      case (value < 200):
        return "Great Job!"
      case (value >= 200):
        return "Github Elite!"
      default:
        console.log(value);
        return ""
    }
  }

}
