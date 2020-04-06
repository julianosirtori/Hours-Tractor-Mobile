export default class Tractor {
  constructor(id, brand = null, name = null, year = null, totalHours = 0) {
    this.id = id;
    this.brand = brand;
    this.year = year;
    this.name = name;
    this.totalHours = totalHours;
  }
}
