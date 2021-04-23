export interface Rental {
    id: number;
    carId: number;
    customerId: number;
    carName: string;
    companyName: string;
    rentDate: Date;
    returnDate: Date;
    dailyPrice: number;
  }