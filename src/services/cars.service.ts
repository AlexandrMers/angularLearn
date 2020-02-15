
export interface CarsInterface {
  name: string;
  isSold: boolean;
}

export class CarsService {
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
    })
  }
}
