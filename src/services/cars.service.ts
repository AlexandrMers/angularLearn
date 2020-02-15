import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

export interface CarsInterface {
  name: string;
  isSold: boolean;
}

@Injectable()  // Данный декоратор позволяет классу принимать инъекции, в данном случае мы внедряем один сервис внутрь другого, а инъекции можно делать только в те классы, которые обернуты декораторами.
export class CarsService {
  constructor(
    private serviceLog: ConsoleService
  ) {}

  public cars: CarsInterface[] = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: false
    },
    {
      name: 'Mercedes',
      isSold: false
    },
  ];

  public addCar(name: string) {
    this.cars.push({
      isSold: false,
      name
    });
    this.serviceLog.log(`${name} - машина была добавлена!`)
  }
}
