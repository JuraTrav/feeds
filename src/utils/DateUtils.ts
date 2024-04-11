export class DateUtils {
  static formatDate(date: Date) {
    return date.toLocaleDateString();
  }

  getTimestamp() {
    return Date.now().valueOf();
  }

  static getDays(date: number) {
    let diff = (new Date().getTime() - new Date(date).getTime()) / 1000;
    diff /= 60 * 60 * 24;
    return Math.abs(Math.round(diff));
  }

  static diffBetweenDates(date1: number, date2: string) {
    // console.log(new Date(Number(date1)).getTime());
    let diff = (new Date(Number(date2)).getTime() - new Date(date1).getTime()) / 1000;
    diff /= 60 * 60;
    return Math.abs(Math.round(diff));
  }
}
