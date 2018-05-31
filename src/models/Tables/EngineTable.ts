export enum EngineType {
  Compact = 'Compact',
  Standard = 'Standard',
  Light = 'Light',
  XL = 'XL',
  ICE = 'ICE',
  Cell = 'Cell',
  Fission = 'Fission',
}

interface IEngineTableRecord {
  rating: number,
  [EngineType.ICE]: number,
  [EngineType.Cell]: number,
  [EngineType.Fission]: number,
  [EngineType.Compact]: number,
  [EngineType.Standard]: number,
  [EngineType.Light]: number,
  [EngineType.XL]: number,
}

export const EngineTable: { [rating: number]: IEngineTableRecord } = [
  { rating: 10, ICE: 1.0, Cell: 1.0, Fission: 5.0, Compact: 1.0, Standard: 0.5, Light: 0.5, XL: 0.5 },
  { rating: 15, ICE: 1.0, Cell: 1.0, Fission: 5.0, Compact: 1.0, Standard: 0.5, Light: 0.5, XL: 0.5 },
  { rating: 20, ICE: 1.0, Cell: 1.0, Fission: 5.0, Compact: 1.0, Standard: 0.5, Light: 0.5, XL: 0.5 },
  { rating: 25, ICE: 1.0, Cell: 1.0, Fission: 5.0, Compact: 1.0, Standard: 0.5, Light: 0.5, XL: 0.5 },
  { rating: 30, ICE: 2.0, Cell: 1.5, Fission: 5.0, Compact: 1.5, Standard: 1.0, Light: 1.0, XL: 0.5 },
  { rating: 35, ICE: 2.0, Cell: 1.5, Fission: 5.0, Compact: 1.5, Standard: 1.0, Light: 1.0, XL: 0.5 },
  { rating: 40, ICE: 2.0, Cell: 1.5, Fission: 5.0, Compact: 1.5, Standard: 1.0, Light: 1.0, XL: 0.5 },
  { rating: 45, ICE: 2.0, Cell: 1.5, Fission: 5.0, Compact: 1.5, Standard: 1.0, Light: 1.0, XL: 0.5 },
  { rating: 50, ICE: 3.0, Cell: 2.0, Fission: 5.0, Compact: 2.5, Standard: 1.5, Light: 1.5, XL: 1.0 },
  { rating: 55, ICE: 3.0, Cell: 2.0, Fission: 5.0, Compact: 2.5, Standard: 1.5, Light: 1.5, XL: 1.0 },
  { rating: 60, ICE: 3.0, Cell: 2.0, Fission: 5.0, Compact: 2.5, Standard: 1.5, Light: 1.5, XL: 1.0 },
  { rating: 65, ICE: 4.0, Cell: 2.5, Fission: 5.0, Compact: 3.0, Standard: 2.0, Light: 1.5, XL: 1.0 },
  { rating: 70, ICE: 4.0, Cell: 2.5, Fission: 5.0, Compact: 3.0, Standard: 2.0, Light: 1.5, XL: 1.0 },
  { rating: 75, ICE: 4.0, Cell: 2.5, Fission: 5.0, Compact: 3.0, Standard: 2.0, Light: 1.5, XL: 1.0 },
  { rating: 80, ICE: 5.0, Cell: 3.0, Fission: 5.0, Compact: 4.0, Standard: 2.5, Light: 2.0, XL: 1.5 },
  { rating: 85, ICE: 5.0, Cell: 3.0, Fission: 5.0, Compact: 4.0, Standard: 2.5, Light: 2.0, XL: 1.5 },
  { rating: 90, ICE: 6.0, Cell: 4.0, Fission: 5.5, Compact: 4.5, Standard: 3.0, Light: 2.5, XL: 1.5 },
  { rating: 95, ICE: 6.0, Cell: 4.0, Fission: 5.5, Compact: 4.5, Standard: 3.0, Light: 2.5, XL: 1.5 },
  { rating: 100, ICE: 6.0, Cell: 4.0, Fission: 5.5, Compact: 4.5, Standard: 3.0, Light: 2.5, XL: 1.5 },
  { rating: 105, ICE: 7.0, Cell: 4.5, Fission: 6.5, Compact: 5.5, Standard: 3.5, Light: 3.0, XL: 2.0 },
  { rating: 110, ICE: 7.0, Cell: 4.5, Fission: 6.5, Compact: 5.5, Standard: 3.5, Light: 3.0, XL: 2.0 },
  { rating: 115, ICE: 8.0, Cell: 5.0, Fission: 7.0, Compact: 6.0, Standard: 4.0, Light: 3.0, XL: 2.0 },
  { rating: 120, ICE: 8.0, Cell: 5.0, Fission: 7.0, Compact: 6.0, Standard: 4.0, Light: 3.0, XL: 2.0 },
  { rating: 125, ICE: 8.0, Cell: 5.0, Fission: 7.0, Compact: 6.0, Standard: 4.0, Light: 3.0, XL: 2.0 },
  { rating: 130, ICE: 9.0, Cell: 5.5, Fission: 8.0, Compact: 7.0, Standard: 4.5, Light: 3.5, XL: 2.5 },
  { rating: 135, ICE: 9.0, Cell: 5.5, Fission: 8.0, Compact: 7.0, Standard: 4.5, Light: 3.5, XL: 2.5 },
  { rating: 140, ICE: 10.0, Cell: 6.0, Fission: 9.0, Compact: 7.5, Standard: 5.0, Light: 4.0, XL: 2.5 },
  { rating: 145, ICE: 10.0, Cell: 6.0, Fission: 9.0, Compact: 7.5, Standard: 5.0, Light: 4.0, XL: 2.5 },
  { rating: 150, ICE: 11.0, Cell: 7.0, Fission: 10.0, Compact: 8.5, Standard: 5.5, Light: 4.5, XL: 3.0 },
  { rating: 155, ICE: 11.0, Cell: 7.0, Fission: 10.0, Compact: 8.5, Standard: 5.5, Light: 4.5, XL: 3.0 },
  { rating: 160, ICE: 12.0, Cell: 7.5, Fission: 10.5, Compact: 9.0, Standard: 6.0, Light: 4.5, XL: 3.0 },
  { rating: 165, ICE: 12.0, Cell: 7.5, Fission: 10.5, Compact: 9.0, Standard: 6.0, Light: 4.5, XL: 3.0 },
  { rating: 170, ICE: 12.0, Cell: 7.5, Fission: 10.5, Compact: 9.0, Standard: 6.0, Light: 4.5, XL: 3.0 },
  { rating: 175, ICE: 14.0, Cell: 8.5, Fission: 12.5, Compact: 10.5, Standard: 7.0, Light: 5.5, XL: 3.5 },
  { rating: 180, ICE: 14.0, Cell: 8.5, Fission: 12.5, Compact: 10.5, Standard: 7.0, Light: 5.5, XL: 3.5 },
  { rating: 185, ICE: 15.0, Cell: 9.0, Fission: 13.5, Compact: 11.5, Standard: 7.5, Light: 6.0, XL: 4.0 },
  { rating: 190, ICE: 15.0, Cell: 9.0, Fission: 13.5, Compact: 11.5, Standard: 7.5, Light: 6.0, XL: 4.0 },
  { rating: 195, ICE: 16.0, Cell: 10.0, Fission: 14.0, Compact: 12.0, Standard: 8.0, Light: 6.0, XL: 4.0 },
  { rating: 200, ICE: 17.0, Cell: 10.5, Fission: 15.0, Compact: 13.0, Standard: 8.5, Light: 6.5, XL: 4.5 },
  { rating: 205, ICE: 17.0, Cell: 10.5, Fission: 15.0, Compact: 13.0, Standard: 8.5, Light: 6.5, XL: 4.5 },
  { rating: 210, ICE: 18.0, Cell: 11.0, Fission: 16.0, Compact: 13.5, Standard: 9.0, Light: 7.0, XL: 4.5 },
  { rating: 215, ICE: 19.0, Cell: 11.5, Fission: 17.0, Compact: 14.5, Standard: 9.5, Light: 7.5, XL: 5.0 },
  { rating: 220, ICE: 20.0, Cell: 12.0, Fission: 17.5, Compact: 15.0, Standard: 10.0, Light: 7.5, XL: 5.0 },
  { rating: 225, ICE: 20.0, Cell: 12.0, Fission: 17.5, Compact: 15.0, Standard: 10.0, Light: 7.5, XL: 5.0 },
  { rating: 230, ICE: 21.0, Cell: 13.0, Fission: 18.5, Compact: 16.0, Standard: 10.5, Light: 8.0, XL: 5.5 },
  { rating: 235, ICE: 22.0, Cell: 13.5, Fission: 19.5, Compact: 16.5, Standard: 11.0, Light: 8.5, XL: 5.5 },
  { rating: 240, ICE: 23.0, Cell: 14.0, Fission: 20.5, Compact: 17.5, Standard: 11.5, Light: 9.0, XL: 6.0 },
  { rating: 245, ICE: 24.0, Cell: 14.5, Fission: 21.0, Compact: 18.0, Standard: 12.0, Light: 9.0, XL: 6.0 },
  { rating: 250, ICE: 25.0, Cell: 15.0, Fission: 22.0, Compact: 19.0, Standard: 12.5, Light: 9.5, XL: 6.5 },
  { rating: 255, ICE: 26.0, Cell: 16.0, Fission: 23.0, Compact: 19.5, Standard: 13.0, Light: 10.0, XL: 6.5 },
  { rating: 260, ICE: 27.0, Cell: 16.5, Fission: 24.0, Compact: 20.5, Standard: 13.5, Light: 10.5, XL: 7.0 },
  { rating: 265, ICE: 28.0, Cell: 17.0, Fission: 24.5, Compact: 21.0, Standard: 14.0, Light: 10.5, XL: 7.0 },
  { rating: 270, ICE: 29.0, Cell: 17.5, Fission: 25.5, Compact: 22.0, Standard: 14.5, Light: 11.0, XL: 7.5 },
  { rating: 275, ICE: 31.0, Cell: 19.0, Fission: 27.5, Compact: 23.5, Standard: 15.5, Light: 12.0, XL: 8.0 },
  { rating: 280, ICE: 32.0, Cell: 19.5, Fission: 28.0, Compact: 24.0, Standard: 16.0, Light: 12.0, XL: 8.0 },
  { rating: 285, ICE: 33.0, Cell: 20.0, Fission: 29.0, Compact: 25.0, Standard: 16.5, Light: 12.5, XL: 8.5 },
  { rating: 290, ICE: 35.0, Cell: 21.0, Fission: 31.0, Compact: 26.5, Standard: 17.5, Light: 13.5, XL: 9.0 },
  { rating: 295, ICE: 36.0, Cell: 22.0, Fission: 31.5, Compact: 27.0, Standard: 18.0, Light: 13.5, XL: 9.0 },
  { rating: 300, ICE: 38.0, Cell: 23.0, Fission: 33.5, Compact: 28.5, Standard: 19.0, Light: 14.5, XL: 9.5 },
  { rating: 305, ICE: 39.0, Cell: 23.5, Fission: 34.5, Compact: 29.5, Standard: 19.5, Light: 15.0, XL: 10.0 },
  { rating: 310, ICE: 41.0, Cell: 25.0, Fission: 36.0, Compact: 31.0, Standard: 20.5, Light: 15.5, XL: 10.5 },
  { rating: 315, ICE: 43.0, Cell: 26.0, Fission: 38.0, Compact: 32.5, Standard: 21.5, Light: 16.5, XL: 11.0 },
  { rating: 320, ICE: 45.0, Cell: 27.0, Fission: 39.5, Compact: 34.0, Standard: 22.5, Light: 17.0, XL: 11.5 },
  { rating: 325, ICE: 47.0, Cell: 28.5, Fission: 41.5, Compact: 35.5, Standard: 23.5, Light: 18.0, XL: 12.0 },
  { rating: 330, ICE: 49.0, Cell: 29.5, Fission: 43.0, Compact: 37.0, Standard: 24.5, Light: 18.5, XL: 12.5 },
  { rating: 335, ICE: 51.0, Cell: 31.0, Fission: 45.0, Compact: 38.5, Standard: 25.5, Light: 19.5, XL: 13.0 },
  { rating: 340, ICE: 54.0, Cell: 32.5, Fission: 47.5, Compact: 40.5, Standard: 27.0, Light: 20.5, XL: 13.5 },
  { rating: 345, ICE: 57.0, Cell: 34.5, Fission: 50.0, Compact: 43.0, Standard: 28.5, Light: 21.5, XL: 14.5 },
  { rating: 350, ICE: 59.0, Cell: 35.5, Fission: 52.0, Compact: 44.5, Standard: 29.5, Light: 22.5, XL: 15.0 },
  { rating: 355, ICE: 63.0, Cell: 38.0, Fission: 55.5, Compact: 47.5, Standard: 31.5, Light: 24.0, XL: 16.0 },
  { rating: 360, ICE: 66.0, Cell: 40.0, Fission: 58.0, Compact: 49.5, Standard: 33.0, Light: 25.0, XL: 16.5 },
  { rating: 365, ICE: 69.0, Cell: 41.5, Fission: 60.5, Compact: 52.0, Standard: 34.5, Light: 26.0, XL: 17.5 },
  { rating: 370, ICE: 73.0, Cell: 44.0, Fission: 64.0, Compact: 55.0, Standard: 36.5, Light: 27.5, XL: 18.5 },
  { rating: 375, ICE: 77.0, Cell: 46.5, Fission: 67.5, Compact: 58.0, Standard: 38.5, Light: 29.0, XL: 19.5 },
  { rating: 380, ICE: 82.0, Cell: 49.5, Fission: 72.0, Compact: 61.5, Standard: 41.0, Light: 31.0, XL: 20.5 },
  { rating: 385, ICE: 87.0, Cell: 52.5, Fission: 76.5, Compact: 65.5, Standard: 43.5, Light: 33.0, XL: 22.0 },
  { rating: 390, ICE: 92.0, Cell: 55.5, Fission: 80.5, Compact: 69.0, Standard: 46.0, Light: 34.5, XL: 23.0 },
  { rating: 395, ICE: 98.0, Cell: 59.0, Fission: 86.0, Compact: 73.5, Standard: 49.0, Light: 37.0, XL: 24.5 },
  { rating: 400, ICE: 105.0, Cell: 63.0, Fission: 92.0, Compact: 79.0, Standard: 52.5, Light: 39.5, XL: 26.5 },
].reduce((memo, engine: IEngineTableRecord) => {
  memo[engine.rating] = engine
  return memo
}, {})

export const getWalkingMP = (rating: number, tonnage: number): number =>
  rating / tonnage

export const getRunningMP = (rating: number, tonnage: number): number =>
  Math.ceil(rating / tonnage * 1.5)

export const getEngintInternalHeatsinks = (rating: number): number => 
  Math.floor(rating / 25)

export const getEngineHitPoints = (): number =>
  3