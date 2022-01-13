import type { ConstellationNancyRoman } from '../../../types'

/**
 *
 * Identification of a constellation from a position
 *
 * @description Constellation Boundary Lookup Table
 * @see https://iopscience.iop.org/article/10.1086/132034/pdf
 *
 * A table permits rapid determination of the constellation
 * in which an object is located from its J1875.0 position.
 *
 * @citation Nancy G. Roman 1987 PASP 99 695
 * © 1987. The Astronomical Society of the Pacific. All rights reserved. Printed in U.S.A.
 *
 */
export const NANCY_ROMAN_TABLE_I: ConstellationNancyRoman[] = [
  {
    RAl: 0,
    RAu: 24,
    decl: 88,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 8,
    RAu: 14.5,
    decl: 86.5,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 21,
    RAu: 23,
    decl: 86.1667,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 18,
    RAu: 21,
    decl: 86,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 0,
    RAu: 8,
    decl: 85,
    constellation: 'Cepheus'
  },
  {
    RAl: 9.1667,
    RAu: 10.6667,
    decl: 82,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 0,
    RAu: 5,
    decl: 80,
    constellation: 'Cepheus'
  },
  {
    RAl: 10.6667,
    RAu: 14.5,
    decl: 80,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 17.5,
    RAu: 18,
    decl: 80,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 20.1667,
    RAu: 21,
    decl: 80,
    constellation: 'Draco'
  },
  {
    RAl: 0,
    RAu: 3.5083,
    decl: 77,
    constellation: 'Cepheus'
  },
  {
    RAl: 11.5,
    RAu: 13.5833,
    decl: 77,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 16.5333,
    RAu: 17.5,
    decl: 75,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 20.1667,
    RAu: 20.6667,
    decl: 75,
    constellation: 'Cepheus'
  },
  {
    RAl: 7.9667,
    RAu: 9.1667,
    decl: 73.5,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 9.1667,
    RAu: 11.3333,
    decl: 73.5,
    constellation: 'Draco'
  },
  {
    RAl: 13,
    RAu: 16.5333,
    decl: 70,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 3.1,
    RAu: 3.4167,
    decl: 68,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 20.4167,
    RAu: 20.6667,
    decl: 67,
    constellation: 'Draco'
  },
  {
    RAl: 11.3333,
    RAu: 12,
    decl: 66.5,
    constellation: 'Draco'
  },
  {
    RAl: 0,
    RAu: 0.3333,
    decl: 66,
    constellation: 'Cepheus'
  },
  {
    RAl: 14,
    RAu: 15.6667,
    decl: 66,
    constellation: 'Ursa Minor'
  },
  {
    RAl: 23.5833,
    RAu: 24,
    decl: 66,
    constellation: 'Cepheus'
  },
  {
    RAl: 12,
    RAu: 13.5,
    decl: 64,
    constellation: 'Draco'
  },
  {
    RAl: 13.5,
    RAu: 14.4167,
    decl: 63,
    constellation: 'Draco'
  },
  {
    RAl: 23.1667,
    RAu: 23.5833,
    decl: 63,
    constellation: 'Cepheus'
  },
  {
    RAl: 6.1,
    RAu: 7,
    decl: 62,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 20,
    RAu: 20.4167,
    decl: 61.5,
    constellation: 'Draco'
  },
  {
    RAl: 20.5367,
    RAu: 20.6,
    decl: 60.9167,
    constellation: 'Cepheus'
  },
  {
    RAl: 7,
    RAu: 7.9667,
    decl: 60,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 7.9667,
    RAu: 8.4167,
    decl: 60,
    constellation: 'Ursa Major'
  },
  {
    RAl: 19.7667,
    RAu: 20,
    decl: 59.5,
    constellation: 'Draco'
  },
  {
    RAl: 20,
    RAu: 20.5367,
    decl: 59.5,
    constellation: 'Cepheus'
  },
  {
    RAl: 22.8667,
    RAu: 23.1667,
    decl: 59.0833,
    constellation: 'Cepheus'
  },
  {
    RAl: 0,
    RAu: 2.4333,
    decl: 58.5,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 19.4167,
    RAu: 19.7667,
    decl: 58,
    constellation: 'Draco'
  },
  {
    RAl: 1.7,
    RAu: 1.9083,
    decl: 57.5,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 2.4333,
    RAu: 3.1,
    decl: 57,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 3.1,
    RAu: 3.1667,
    decl: 57,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 22.3167,
    RAu: 22.8667,
    decl: 56.25,
    constellation: 'Cepheus'
  },
  {
    RAl: 5,
    RAu: 6.1,
    decl: 56,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 14.0333,
    RAu: 14.4167,
    decl: 55.5,
    constellation: 'Ursa Major'
  },
  {
    RAl: 14.4167,
    RAu: 19.4167,
    decl: 55.5,
    constellation: 'Draco'
  },
  {
    RAl: 3.1667,
    RAu: 3.3333,
    decl: 55,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 22.1333,
    RAu: 22.3167,
    decl: 55,
    constellation: 'Cepheus'
  },
  {
    RAl: 20.6,
    RAu: 21.9667,
    decl: 54.8333,
    constellation: 'Cepheus'
  },
  {
    RAl: 0,
    RAu: 1.7,
    decl: 54,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 6.1,
    RAu: 6.5,
    decl: 54,
    constellation: 'Lynx'
  },
  {
    RAl: 12.0833,
    RAu: 13.5,
    decl: 53,
    constellation: 'Ursa Major'
  },
  {
    RAl: 15.25,
    RAu: 15.75,
    decl: 53,
    constellation: 'Draco'
  },
  {
    RAl: 21.9667,
    RAu: 22.1333,
    decl: 52.75,
    constellation: 'Cepheus'
  },
  {
    RAl: 3.3333,
    RAu: 5,
    decl: 52.5,
    constellation: 'Camelopardalis'
  },
  {
    RAl: 22.8667,
    RAu: 23.3333,
    decl: 52.5,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 15.75,
    RAu: 17,
    decl: 51.5,
    constellation: 'Draco'
  },
  {
    RAl: 2.0417,
    RAu: 2.5167,
    decl: 50.5,
    constellation: 'Perseus'
  },
  {
    RAl: 17,
    RAu: 18.2333,
    decl: 50.5,
    constellation: 'Draco'
  },
  {
    RAl: 0,
    RAu: 1.3667,
    decl: 50,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 1.3667,
    RAu: 1.6667,
    decl: 50,
    constellation: 'Perseus'
  },
  {
    RAl: 6.5,
    RAu: 6.8,
    decl: 50,
    constellation: 'Lynx'
  },
  {
    RAl: 23.3333,
    RAu: 24,
    decl: 50,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 13.5,
    RAu: 14.0333,
    decl: 48.5,
    constellation: 'Ursa Major'
  },
  {
    RAl: 0,
    RAu: 1.1167,
    decl: 48,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 23.5833,
    RAu: 24,
    decl: 48,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 18.175,
    RAu: 18.2333,
    decl: 47.5,
    constellation: 'Hercules'
  },
  {
    RAl: 18.2333,
    RAu: 19.0833,
    decl: 47.5,
    constellation: 'Draco'
  },
  {
    RAl: 19.0833,
    RAu: 19.1667,
    decl: 47.5,
    constellation: 'Cygnus'
  },
  {
    RAl: 1.6667,
    RAu: 2.0417,
    decl: 47,
    constellation: 'Perseus'
  },
  {
    RAl: 8.4167,
    RAu: 9.1667,
    decl: 47,
    constellation: 'Ursa Major'
  },
  {
    RAl: 0.1667,
    RAu: 0.8667,
    decl: 46,
    constellation: 'Cassiopeia'
  },
  {
    RAl: 12,
    RAu: 12.0833,
    decl: 45,
    constellation: 'Ursa Major'
  },
  {
    RAl: 6.8,
    RAu: 7.3667,
    decl: 44.5,
    constellation: 'Lynx'
  },
  {
    RAl: 21.9083,
    RAu: 21.9667,
    decl: 44,
    constellation: 'Cygnus'
  },
  {
    RAl: 21.875,
    RAu: 21.9083,
    decl: 43.75,
    constellation: 'Cygnus'
  },
  {
    RAl: 19.1667,
    RAu: 19.4,
    decl: 43.5,
    constellation: 'Cygnus'
  },
  {
    RAl: 9.1667,
    RAu: 10.1667,
    decl: 42,
    constellation: 'Ursa Major'
  },
  {
    RAl: 10.1667,
    RAu: 10.7833,
    decl: 40,
    constellation: 'Ursa Major'
  },
  {
    RAl: 15.4333,
    RAu: 15.75,
    decl: 40,
    constellation: 'Boötes'
  },
  {
    RAl: 15.75,
    RAu: 16.3333,
    decl: 40,
    constellation: 'Hercules'
  },
  {
    RAl: 9.25,
    RAu: 9.5833,
    decl: 39.75,
    constellation: 'Lynx'
  },
  {
    RAl: 0,
    RAu: 2.5167,
    decl: 36.75,
    constellation: 'Andromeda'
  },
  {
    RAl: 2.5167,
    RAu: 2.5667,
    decl: 36.75,
    constellation: 'Perseus'
  },
  {
    RAl: 19.3583,
    RAu: 19.4,
    decl: 36.5,
    constellation: 'Lyra'
  },
  {
    RAl: 4.5,
    RAu: 4.6917,
    decl: 36,
    constellation: 'Perseus'
  },
  {
    RAl: 21.7333,
    RAu: 21.875,
    decl: 36,
    constellation: 'Cygnus'
  },
  {
    RAl: 21.875,
    RAu: 22,
    decl: 36,
    constellation: 'Lacerta'
  },
  {
    RAl: 6.5333,
    RAu: 7.3667,
    decl: 35.5,
    constellation: 'Auriga'
  },
  {
    RAl: 7.3667,
    RAu: 7.75,
    decl: 35.5,
    constellation: 'Lynx'
  },
  {
    RAl: 0,
    RAu: 2,
    decl: 35,
    constellation: 'Andromeda'
  },
  {
    RAl: 22,
    RAu: 22.8167,
    decl: 35,
    constellation: 'Lacerta'
  },
  {
    RAl: 22.8167,
    RAu: 22.8667,
    decl: 34.5,
    constellation: 'Lacerta'
  },
  {
    RAl: 22.8667,
    RAu: 23.5,
    decl: 34.5,
    constellation: 'Andromeda'
  },
  {
    RAl: 2.5667,
    RAu: 2.7167,
    decl: 34,
    constellation: 'Perseus'
  },
  {
    RAl: 10.7833,
    RAu: 11,
    decl: 34,
    constellation: 'Ursa Major'
  },
  {
    RAl: 12,
    RAu: 12.3333,
    decl: 34,
    constellation: 'Canes Venatici'
  },
  {
    RAl: 7.75,
    RAu: 9.25,
    decl: 33.5,
    constellation: 'Lynx'
  },
  {
    RAl: 9.25,
    RAu: 9.8833,
    decl: 33.5,
    constellation: 'Leo Minor'
  },
  {
    RAl: 0.7167,
    RAu: 1.4083,
    decl: 33,
    constellation: 'Andromeda'
  },
  {
    RAl: 15.1833,
    RAu: 15.4333,
    decl: 33,
    constellation: 'Boötes'
  },
  {
    RAl: 23.5,
    RAu: 23.75,
    decl: 32.0833,
    constellation: 'Andromeda'
  },
  {
    RAl: 12.3333,
    RAu: 13.25,
    decl: 32,
    constellation: 'Canes Venatici'
  },
  {
    RAl: 23.75,
    RAu: 24,
    decl: 31.3333,
    constellation: 'Andromeda'
  },
  {
    RAl: 13.9583,
    RAu: 14.0333,
    decl: 30.75,
    constellation: 'Canes Venatici'
  },
  {
    RAl: 2.4167,
    RAu: 2.7167,
    decl: 30.6667,
    constellation: 'Triangulum'
  },
  {
    RAl: 2.7167,
    RAu: 4.5,
    decl: 30.6667,
    constellation: 'Perseus'
  },
  {
    RAl: 4.5,
    RAu: 4.75,
    decl: 30,
    constellation: 'Auriga'
  },
  {
    RAl: 18.175,
    RAu: 19.3583,
    decl: 30,
    constellation: 'Lyra'
  },
  {
    RAl: 11,
    RAu: 12,
    decl: 29,
    constellation: 'Ursa Major'
  },
  {
    RAl: 19.6667,
    RAu: 20.9167,
    decl: 29,
    constellation: 'Cygnus'
  },
  {
    RAl: 4.75,
    RAu: 5.8833,
    decl: 28.5,
    constellation: 'Auriga'
  },
  {
    RAl: 9.8833,
    RAu: 10.5,
    decl: 28.5,
    constellation: 'Leo Minor'
  },
  {
    RAl: 13.25,
    RAu: 13.9583,
    decl: 28.5,
    constellation: 'Canes Venatici'
  },
  {
    RAl: 0,
    RAu: 0.0667,
    decl: 28,
    constellation: 'Andromeda'
  },
  {
    RAl: 1.4083,
    RAu: 1.6667,
    decl: 28,
    constellation: 'Triangulum'
  },
  {
    RAl: 5.8833,
    RAu: 6.5333,
    decl: 28,
    constellation: 'Auriga'
  },
  {
    RAl: 7.8833,
    RAu: 8,
    decl: 28,
    constellation: 'Gemini'
  },
  {
    RAl: 20.9167,
    RAu: 21.7333,
    decl: 28,
    constellation: 'Cygnus'
  },
  {
    RAl: 19.2583,
    RAu: 19.6667,
    decl: 27.5,
    constellation: 'Cygnus'
  },
  {
    RAl: 1.9167,
    RAu: 2.4167,
    decl: 27.25,
    constellation: 'Triangulum'
  },
  {
    RAl: 16.1667,
    RAu: 16.3333,
    decl: 27,
    constellation: 'Corona Borealis'
  },
  {
    RAl: 15.0833,
    RAu: 15.1833,
    decl: 26,
    constellation: 'Boötes'
  },
  {
    RAl: 15.1833,
    RAu: 16.1667,
    decl: 26,
    constellation: 'Corona Borealis'
  },
  {
    RAl: 18.3667,
    RAu: 18.8667,
    decl: 26,
    constellation: 'Lyra'
  },
  {
    RAl: 10.75,
    RAu: 11,
    decl: 25.5,
    constellation: 'Leo Minor'
  },
  {
    RAl: 18.8667,
    RAu: 19.2583,
    decl: 25.5,
    constellation: 'Lyra'
  },
  {
    RAl: 1.6667,
    RAu: 1.9167,
    decl: 25,
    constellation: 'Triangulum'
  },
  {
    RAl: 0.7167,
    RAu: 0.85,
    decl: 23.75,
    constellation: 'Pisces'
  },
  {
    RAl: 10.5,
    RAu: 10.75,
    decl: 23.5,
    constellation: 'Leo Minor'
  },
  {
    RAl: 21.25,
    RAu: 21.4167,
    decl: 23.5,
    constellation: 'Vulpecula'
  },
  {
    RAl: 5.7,
    RAu: 5.8833,
    decl: 22.8333,
    constellation: 'Taurus'
  },
  {
    RAl: 0.0667,
    RAu: 0.1417,
    decl: 22,
    constellation: 'Andromeda'
  },
  {
    RAl: 15.9167,
    RAu: 16.0333,
    decl: 22,
    constellation: 'Serpens'
  },
  {
    RAl: 5.8833,
    RAu: 6.2167,
    decl: 21.5,
    constellation: 'Gemini'
  },
  {
    RAl: 19.8333,
    RAu: 20.25,
    decl: 21.25,
    constellation: 'Vulpecula'
  },
  {
    RAl: 18.8667,
    RAu: 19.25,
    decl: 21.0833,
    constellation: 'Vulpecula'
  },
  {
    RAl: 0.1417,
    RAu: 0.85,
    decl: 21,
    constellation: 'Andromeda'
  },
  {
    RAl: 20.25,
    RAu: 20.5667,
    decl: 20.5,
    constellation: 'Vulpecula'
  },
  {
    RAl: 7.8083,
    RAu: 7.8833,
    decl: 20,
    constellation: 'Gemini'
  },
  {
    RAl: 20.5667,
    RAu: 21.25,
    decl: 19.5,
    constellation: 'Vulpecula'
  },
  {
    RAl: 19.25,
    RAu: 19.8333,
    decl: 19.1667,
    constellation: 'Vulpecula'
  },
  {
    RAl: 3.2833,
    RAu: 3.3667,
    decl: 19,
    constellation: 'Aries'
  },
  {
    RAl: 18.8667,
    RAu: 19,
    decl: 18.5,
    constellation: 'Sagitta'
  },
  {
    RAl: 5.7,
    RAu: 5.7667,
    decl: 18,
    constellation: 'Orion'
  },
  {
    RAl: 6.2167,
    RAu: 6.3083,
    decl: 17.5,
    constellation: 'Gemini'
  },
  {
    RAl: 19,
    RAu: 19.8333,
    decl: 16.1667,
    constellation: 'Sagitta'
  },
  {
    RAl: 4.9667,
    RAu: 5.3333,
    decl: 16,
    constellation: 'Taurus'
  },
  {
    RAl: 15.9167,
    RAu: 16.0833,
    decl: 16,
    constellation: 'Hercules'
  },
  {
    RAl: 19.8333,
    RAu: 20.25,
    decl: 15.75,
    constellation: 'Sagitta'
  },
  {
    RAl: 4.6167,
    RAu: 4.9667,
    decl: 15.5,
    constellation: 'Taurus'
  },
  {
    RAl: 5.3333,
    RAu: 5.6,
    decl: 15.5,
    constellation: 'Taurus'
  },
  {
    RAl: 12.8333,
    RAu: 13.5,
    decl: 15,
    constellation: 'Coma Berenices'
  },
  {
    RAl: 17.25,
    RAu: 18.25,
    decl: 14.3333,
    constellation: 'Hercules'
  },
  {
    RAl: 11.8667,
    RAu: 12.8333,
    decl: 14,
    constellation: 'Coma Berenices'
  },
  {
    RAl: 7.5,
    RAu: 7.8083,
    decl: 13.5,
    constellation: 'Gemini'
  },
  {
    RAl: 16.75,
    RAu: 17.25,
    decl: 12.8333,
    constellation: 'Hercules'
  },
  {
    RAl: 0,
    RAu: 0.1417,
    decl: 12.5,
    constellation: 'Pegasus'
  },
  {
    RAl: 5.6,
    RAu: 5.7667,
    decl: 12.5,
    constellation: 'Taurus'
  },
  {
    RAl: 7,
    RAu: 7.5,
    decl: 12.5,
    constellation: 'Gemini'
  },
  {
    RAl: 21.1167,
    RAu: 21.3333,
    decl: 12.5,
    constellation: 'Pegasus'
  },
  {
    RAl: 6.3083,
    RAu: 6.9333,
    decl: 12,
    constellation: 'Gemini'
  },
  {
    RAl: 18.25,
    RAu: 18.8667,
    decl: 12,
    constellation: 'Hercules'
  },
  {
    RAl: 20.875,
    RAu: 21.05,
    decl: 11.8333,
    constellation: 'Delphinus'
  },
  {
    RAl: 21.05,
    RAu: 21.1167,
    decl: 11.8333,
    constellation: 'Pegasus'
  },
  {
    RAl: 11.5167,
    RAu: 11.8667,
    decl: 11,
    constellation: 'Leo'
  },
  {
    RAl: 6.2417,
    RAu: 6.3083,
    decl: 10,
    constellation: 'Orion'
  },
  {
    RAl: 6.9333,
    RAu: 7,
    decl: 10,
    constellation: 'Gemini'
  },
  {
    RAl: 7.8083,
    RAu: 7.925,
    decl: 10,
    constellation: 'Cancer'
  },
  {
    RAl: 23.8333,
    RAu: 24,
    decl: 10,
    constellation: 'Pegasus'
  },
  {
    RAl: 1.6667,
    RAu: 3.2833,
    decl: 9.9167,
    constellation: 'Aries'
  },
  {
    RAl: 20.1417,
    RAu: 20.3,
    decl: 8.5,
    constellation: 'Delphinus'
  },
  {
    RAl: 13.5,
    RAu: 15.0833,
    decl: 8,
    constellation: 'Boötes'
  },
  {
    RAl: 22.75,
    RAu: 23.8333,
    decl: 7.5,
    constellation: 'Pegasus'
  },
  {
    RAl: 7.925,
    RAu: 9.25,
    decl: 7,
    constellation: 'Cancer'
  },
  {
    RAl: 9.25,
    RAu: 10.75,
    decl: 7,
    constellation: 'Leo'
  },
  {
    RAl: 18.25,
    RAu: 18.6622,
    decl: 6.25,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 18.6622,
    RAu: 18.8667,
    decl: 6.25,
    constellation: 'Aquila'
  },
  {
    RAl: 20.8333,
    RAu: 20.875,
    decl: 6,
    constellation: 'Delphinus'
  },
  {
    RAl: 7,
    RAu: 7.0167,
    decl: 5.5,
    constellation: 'Canis Minor'
  },
  {
    RAl: 18.25,
    RAu: 18.425,
    decl: 4.5,
    constellation: 'Serpens'
  },
  {
    RAl: 16.0833,
    RAu: 16.75,
    decl: 4,
    constellation: 'Hercules'
  },
  {
    RAl: 18.25,
    RAu: 18.425,
    decl: 3,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 21.4667,
    RAu: 21.6667,
    decl: 2.75,
    constellation: 'Pegasus'
  },
  {
    RAl: 0,
    RAu: 2,
    decl: 2,
    constellation: 'Pisces'
  },
  {
    RAl: 18.5833,
    RAu: 18.8667,
    decl: 2,
    constellation: 'Serpens'
  },
  {
    RAl: 20.3,
    RAu: 20.8333,
    decl: 2,
    constellation: 'Delphinus'
  },
  {
    RAl: 20.8333,
    RAu: 21.3333,
    decl: 2,
    constellation: 'Equuleus'
  },
  {
    RAl: 21.3333,
    RAu: 21.4667,
    decl: 2,
    constellation: 'Pegasus'
  },
  {
    RAl: 22,
    RAu: 22.75,
    decl: 2,
    constellation: 'Pegasus'
  },
  {
    RAl: 21.6667,
    RAu: 22,
    decl: 1.75,
    constellation: 'Pegasus'
  },
  {
    RAl: 7.0167,
    RAu: 7.2,
    decl: 1.5,
    constellation: 'Canis Minor'
  },
  {
    RAl: 3.5833,
    RAu: 4.6167,
    decl: 0,
    constellation: 'Taurus'
  },
  {
    RAl: 4.6167,
    RAu: 4.6667,
    decl: 0,
    constellation: 'Orion'
  },
  {
    RAl: 7.2,
    RAu: 8.0833,
    decl: 0,
    constellation: 'Canis Minor'
  },
  {
    RAl: 14.6667,
    RAu: 15.0833,
    decl: 0,
    constellation: 'Virgo'
  },
  {
    RAl: 17.8333,
    RAu: 18.25,
    decl: 0,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 2.65,
    RAu: 3.2833,
    decl: -1.75,
    constellation: 'Cetus'
  },
  {
    RAl: 3.2833,
    RAu: 3.5833,
    decl: -1.75,
    constellation: 'Taurus'
  },
  {
    RAl: 15.0833,
    RAu: 16.2667,
    decl: -3.25,
    constellation: 'Serpens'
  },
  {
    RAl: 4.6667,
    RAu: 5.0833,
    decl: -4,
    constellation: 'Orion'
  },
  {
    RAl: 5.8333,
    RAu: 6.2417,
    decl: -4,
    constellation: 'Orion'
  },
  {
    RAl: 17.8333,
    RAu: 17.9667,
    decl: -4,
    constellation: 'Serpens'
  },
  {
    RAl: 18.25,
    RAu: 18.5833,
    decl: -4,
    constellation: 'Serpens'
  },
  {
    RAl: 18.5833,
    RAu: 18.8667,
    decl: -4,
    constellation: 'Aquila'
  },
  {
    RAl: 22.75,
    RAu: 23.8333,
    decl: -4,
    constellation: 'Pisces'
  },
  {
    RAl: 10.75,
    RAu: 11.5167,
    decl: -6,
    constellation: 'Leo'
  },
  {
    RAl: 11.5167,
    RAu: 11.8333,
    decl: -6,
    constellation: 'Virgo'
  },
  {
    RAl: 0,
    RAu: 0.3333,
    decl: -7,
    constellation: 'Pisces'
  },
  {
    RAl: 23.8333,
    RAu: 24,
    decl: -7,
    constellation: 'Pisces'
  },
  {
    RAl: 14.25,
    RAu: 14.6667,
    decl: -8,
    constellation: 'Virgo'
  },
  {
    RAl: 15.9167,
    RAu: 16.2667,
    decl: -8,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 20,
    RAu: 20.5333,
    decl: -9,
    constellation: 'Aquila'
  },
  {
    RAl: 21.3333,
    RAu: 21.8667,
    decl: -9,
    constellation: 'Aquarius'
  },
  {
    RAl: 17.1667,
    RAu: 17.9667,
    decl: -10,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 5.8333,
    RAu: 8.0833,
    decl: -11,
    constellation: 'Monoceros'
  },
  {
    RAl: 4.9167,
    RAu: 5.0833,
    decl: -11,
    constellation: 'Eridanus'
  },
  {
    RAl: 5.0833,
    RAu: 5.8333,
    decl: -11,
    constellation: 'Orion'
  },
  {
    RAl: 8.0833,
    RAu: 8.3667,
    decl: -11,
    constellation: 'Hydra'
  },
  {
    RAl: 9.5833,
    RAu: 10.75,
    decl: -11,
    constellation: 'Sextans'
  },
  {
    RAl: 11.8333,
    RAu: 12.8333,
    decl: -11,
    constellation: 'Virgo'
  },
  {
    RAl: 17.5833,
    RAu: 17.6667,
    decl: -11.6667,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 18.8667,
    RAu: 20,
    decl: -12.0333,
    constellation: 'Aquila'
  },
  {
    RAl: 4.8333,
    RAu: 4.9167,
    decl: -14.5,
    constellation: 'Eridanus'
  },
  {
    RAl: 20.5333,
    RAu: 21.3333,
    decl: -15,
    constellation: 'Aquarius'
  },
  {
    RAl: 17.1667,
    RAu: 18.25,
    decl: -16,
    constellation: 'Serpens'
  },
  {
    RAl: 18.25,
    RAu: 18.8667,
    decl: -16,
    constellation: 'Scutum'
  },
  {
    RAl: 8.3667,
    RAu: 8.5833,
    decl: -17,
    constellation: 'Hydra'
  },
  {
    RAl: 16.2667,
    RAu: 16.375,
    decl: -18.25,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 8.5833,
    RAu: 9.0833,
    decl: -19,
    constellation: 'Hydra'
  },
  {
    RAl: 10.75,
    RAu: 10.8333,
    decl: -19,
    constellation: 'Crater'
  },
  {
    RAl: 16.2667,
    RAu: 16.375,
    decl: -19.25,
    constellation: 'Scorpius'
  },
  {
    RAl: 15.6667,
    RAu: 15.9167,
    decl: -20,
    constellation: 'Libra'
  },
  {
    RAl: 12.5833,
    RAu: 12.8333,
    decl: -22,
    constellation: 'Corvus'
  },
  {
    RAl: 12.8333,
    RAu: 14.25,
    decl: -22,
    constellation: 'Virgo'
  },
  {
    RAl: 9.0833,
    RAu: 9.75,
    decl: -24,
    constellation: 'Hydra'
  },
  {
    RAl: 1.6667,
    RAu: 2.65,
    decl: -24.3833,
    constellation: 'Cetus'
  },
  {
    RAl: 2.65,
    RAu: 3.75,
    decl: -24.3833,
    constellation: 'Eridanus'
  },
  {
    RAl: 10.8333,
    RAu: 11.8333,
    decl: -24.5,
    constellation: 'Crater'
  },
  {
    RAl: 11.8333,
    RAu: 12.5833,
    decl: -24.5,
    constellation: 'Corvus'
  },
  {
    RAl: 14.25,
    RAu: 14.9167,
    decl: -24.5,
    constellation: 'Libra'
  },
  {
    RAl: 16.2667,
    RAu: 16.75,
    decl: -24.5833,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 0,
    RAu: 1.6667,
    decl: -25.5,
    constellation: 'Cetus'
  },
  {
    RAl: 21.3333,
    RAu: 21.8667,
    decl: -25.5,
    constellation: 'Capricornus'
  },
  {
    RAl: 21.8667,
    RAu: 23.8333,
    decl: -25.5,
    constellation: 'Aquarius'
  },
  {
    RAl: 23.8333,
    RAu: 24,
    decl: -25.5,
    constellation: 'Cetus'
  },
  {
    RAl: 9.75,
    RAu: 10.25,
    decl: -26.5,
    constellation: 'Hydra'
  },
  {
    RAl: 4.7,
    RAu: 4.8333,
    decl: -27.25,
    constellation: 'Eridanus'
  },
  {
    RAl: 4.8333,
    RAu: 6.1167,
    decl: -27.25,
    constellation: 'Lepus'
  },
  {
    RAl: 20,
    RAu: 21.3333,
    decl: -28,
    constellation: 'Capricornus'
  },
  {
    RAl: 10.25,
    RAu: 10.5833,
    decl: -29.1667,
    constellation: 'Hydra'
  },
  {
    RAl: 12.5833,
    RAu: 14.9167,
    decl: -29.5,
    constellation: 'Hydra'
  },
  {
    RAl: 14.9167,
    RAu: 15.6667,
    decl: -29.5,
    constellation: 'Libra'
  },
  {
    RAl: 15.6667,
    RAu: 16,
    decl: -29.5,
    constellation: 'Scorpius'
  },
  {
    RAl: 4.5833,
    RAu: 4.7,
    decl: -30,
    constellation: 'Eridanus'
  },
  {
    RAl: 16.75,
    RAu: 17.6,
    decl: -30,
    constellation: 'Ophiuchus'
  },
  {
    RAl: 17.6,
    RAu: 17.8333,
    decl: -30,
    constellation: 'Sagittarius'
  },
  {
    RAl: 10.5833,
    RAu: 10.8333,
    decl: -31.1667,
    constellation: 'Hydra'
  },
  {
    RAl: 6.1167,
    RAu: 7.3667,
    decl: -33,
    constellation: 'Canis Major'
  },
  {
    RAl: 12.25,
    RAu: 12.5833,
    decl: -33,
    constellation: 'Hydra'
  },
  {
    RAl: 10.8333,
    RAu: 12.25,
    decl: -35,
    constellation: 'Hydra'
  },
  {
    RAl: 3.5,
    RAu: 3.75,
    decl: -36,
    constellation: 'Fornax'
  },
  {
    RAl: 8.3667,
    RAu: 9.3667,
    decl: -36.75,
    constellation: 'Pyxis'
  },
  {
    RAl: 4.2667,
    RAu: 4.5833,
    decl: -37,
    constellation: 'Eridanus'
  },
  {
    RAl: 17.8333,
    RAu: 19.1667,
    decl: -37,
    constellation: 'Sagittarius'
  },
  {
    RAl: 21.3333,
    RAu: 23,
    decl: -37,
    constellation: 'Piscis Austrinus'
  },
  {
    RAl: 23,
    RAu: 23.3333,
    decl: -37,
    constellation: 'Sculptor'
  },
  {
    RAl: 3,
    RAu: 3.5,
    decl: -39.5833,
    constellation: 'Fornax'
  },
  {
    RAl: 9.3667,
    RAu: 11,
    decl: -39.75,
    constellation: 'Antlia'
  },
  {
    RAl: 0,
    RAu: 1.6667,
    decl: -40,
    constellation: 'Sculptor'
  },
  {
    RAl: 1.6667,
    RAu: 3,
    decl: -40,
    constellation: 'Fornax'
  },
  {
    RAl: 3.8667,
    RAu: 4.2667,
    decl: -40,
    constellation: 'Eridanus'
  },
  {
    RAl: 23.3333,
    RAu: 24,
    decl: -40,
    constellation: 'Sculptor'
  },
  {
    RAl: 14.1667,
    RAu: 14.9167,
    decl: -42,
    constellation: 'Centaurus'
  },
  {
    RAl: 15.6667,
    RAu: 16,
    decl: -42,
    constellation: 'Lupus'
  },
  {
    RAl: 16,
    RAu: 16.4208,
    decl: -42,
    constellation: 'Scorpius'
  },
  {
    RAl: 4.8333,
    RAu: 5,
    decl: -43,
    constellation: 'Caelum'
  },
  {
    RAl: 5,
    RAu: 6.5833,
    decl: -43,
    constellation: 'Columba'
  },
  {
    RAl: 8,
    RAu: 8.3667,
    decl: -43,
    constellation: 'Puppis'
  },
  {
    RAl: 3.4167,
    RAu: 3.8667,
    decl: -44,
    constellation: 'Eridanus'
  },
  {
    RAl: 16.4208,
    RAu: 17.8333,
    decl: -45.5,
    constellation: 'Scorpius'
  },
  {
    RAl: 17.8333,
    RAu: 19.1667,
    decl: -45.5,
    constellation: 'Corona Australis'
  },
  {
    RAl: 19.1667,
    RAu: 20.3333,
    decl: -45.5,
    constellation: 'Sagittarius'
  },
  {
    RAl: 20.3333,
    RAu: 21.3333,
    decl: -45.5,
    constellation: 'Microscopium'
  },
  {
    RAl: 3,
    RAu: 3.4167,
    decl: -46,
    constellation: 'Eridanus'
  },
  {
    RAl: 4.5,
    RAu: 4.8333,
    decl: -46.5,
    constellation: 'Caelum'
  },
  {
    RAl: 15.3333,
    RAu: 15.6667,
    decl: -48,
    constellation: 'Lupus'
  },
  {
    RAl: 0,
    RAu: 2.3333,
    decl: -48.1667,
    constellation: 'Phoenix'
  },
  {
    RAl: 2.6667,
    RAu: 3,
    decl: -49,
    constellation: 'Eridanus'
  },
  {
    RAl: 4.0833,
    RAu: 4.2667,
    decl: -49,
    constellation: 'Horologium'
  },
  {
    RAl: 4.2667,
    RAu: 4.5,
    decl: -49,
    constellation: 'Caelum'
  },
  {
    RAl: 21.3333,
    RAu: 22,
    decl: -50,
    constellation: 'Grus'
  },
  {
    RAl: 6,
    RAu: 8,
    decl: -50.75,
    constellation: 'Puppis'
  },
  {
    RAl: 8,
    RAu: 8.1667,
    decl: -50.75,
    constellation: 'Vela'
  },
  {
    RAl: 2.4167,
    RAu: 2.6667,
    decl: -51,
    constellation: 'Eridanus'
  },
  {
    RAl: 3.8333,
    RAu: 4.0833,
    decl: -51,
    constellation: 'Horologium'
  },
  {
    RAl: 0,
    RAu: 1.8333,
    decl: -51.5,
    constellation: 'Phoenix'
  },
  {
    RAl: 6,
    RAu: 6.1667,
    decl: -52.5,
    constellation: 'Carina'
  },
  {
    RAl: 8.1667,
    RAu: 8.45,
    decl: -53,
    constellation: 'Vela'
  },
  {
    RAl: 3.5,
    RAu: 3.8333,
    decl: -53.1667,
    constellation: 'Horologium'
  },
  {
    RAl: 3.8333,
    RAu: 4,
    decl: -53.1667,
    constellation: 'Dorado'
  },
  {
    RAl: 0,
    RAu: 1.5833,
    decl: -53.5,
    constellation: 'Phoenix'
  },
  {
    RAl: 2.1667,
    RAu: 2.4167,
    decl: -54,
    constellation: 'Eridanus'
  },
  {
    RAl: 4.5,
    RAu: 5,
    decl: -54,
    constellation: 'Pictor'
  },
  {
    RAl: 15.05,
    RAu: 15.3333,
    decl: -54,
    constellation: 'Lupus'
  },
  {
    RAl: 8.45,
    RAu: 8.8333,
    decl: -54.5,
    constellation: 'Vela'
  },
  {
    RAl: 6.1667,
    RAu: 6.5,
    decl: -55,
    constellation: 'Carina'
  },
  {
    RAl: 11.8333,
    RAu: 12.8333,
    decl: -55,
    constellation: 'Centaurus'
  },
  {
    RAl: 14.1667,
    RAu: 15.05,
    decl: -55,
    constellation: 'Lupus'
  },
  {
    RAl: 15.05,
    RAu: 15.3333,
    decl: -55,
    constellation: 'Norma'
  },
  {
    RAl: 4,
    RAu: 4.3333,
    decl: -56.5,
    constellation: 'Dorado'
  },
  {
    RAl: 8.8333,
    RAu: 11,
    decl: -56.5,
    constellation: 'Vela'
  },
  {
    RAl: 11,
    RAu: 11.25,
    decl: -56.5,
    constellation: 'Centaurus'
  },
  {
    RAl: 17.5,
    RAu: 18,
    decl: -57,
    constellation: 'Ara'
  },
  {
    RAl: 18,
    RAu: 20.3333,
    decl: -57,
    constellation: 'Telescopium'
  },
  {
    RAl: 22,
    RAu: 23.3333,
    decl: -57,
    constellation: 'Grus'
  },
  {
    RAl: 3.2,
    RAu: 3.5,
    decl: -57.5,
    constellation: 'Horologium'
  },
  {
    RAl: 5,
    RAu: 5.5,
    decl: -57.5,
    constellation: 'Pictor'
  },
  {
    RAl: 6.5,
    RAu: 6.8333,
    decl: -58,
    constellation: 'Carina'
  },
  {
    RAl: 0,
    RAu: 1.3333,
    decl: -58.5,
    constellation: 'Phoenix'
  },
  {
    RAl: 1.3333,
    RAu: 2.1667,
    decl: -58.5,
    constellation: 'Eridanus'
  },
  {
    RAl: 23.3333,
    RAu: 24,
    decl: -58.5,
    constellation: 'Phoenix'
  },
  {
    RAl: 4.3333,
    RAu: 4.5833,
    decl: -59,
    constellation: 'Dorado'
  },
  {
    RAl: 15.3333,
    RAu: 16.4208,
    decl: -60,
    constellation: 'Norma'
  },
  {
    RAl: 20.3333,
    RAu: 21.3333,
    decl: -60,
    constellation: 'Indus'
  },
  {
    RAl: 5.5,
    RAu: 6,
    decl: -61,
    constellation: 'Pictor'
  },
  {
    RAl: 15.1667,
    RAu: 15.3333,
    decl: -61,
    constellation: 'Circinus'
  },
  {
    RAl: 16.4208,
    RAu: 16.5833,
    decl: -61,
    constellation: 'Ara'
  },
  {
    RAl: 14.9167,
    RAu: 15.1667,
    decl: -63.5833,
    constellation: 'Circinus'
  },
  {
    RAl: 16.5833,
    RAu: 16.75,
    decl: -63.5833,
    constellation: 'Ara'
  },
  {
    RAl: 6,
    RAu: 6.8333,
    decl: -64,
    constellation: 'Pictor'
  },
  {
    RAl: 6.8333,
    RAu: 9.0333,
    decl: -64,
    constellation: 'Carina'
  },
  {
    RAl: 11.25,
    RAu: 11.8333,
    decl: -64,
    constellation: 'Centaurus'
  },
  {
    RAl: 11.8333,
    RAu: 12.8333,
    decl: -64,
    constellation: 'Crux'
  },
  {
    RAl: 12.8333,
    RAu: 14.5333,
    decl: -64,
    constellation: 'Centaurus'
  },
  {
    RAl: 13.5,
    RAu: 13.6667,
    decl: -65,
    constellation: 'Circinus'
  },
  {
    RAl: 16.75,
    RAu: 16.8333,
    decl: -65,
    constellation: 'Ara'
  },
  {
    RAl: 2.1667,
    RAu: 3.2,
    decl: -67.5,
    constellation: 'Horologium'
  },
  {
    RAl: 3.2,
    RAu: 4.5833,
    decl: -67.5,
    constellation: 'Reticulum'
  },
  {
    RAl: 14.75,
    RAu: 14.9167,
    decl: -67.5,
    constellation: 'Circinus'
  },
  {
    RAl: 16.8333,
    RAu: 17.5,
    decl: -67.5,
    constellation: 'Ara'
  },
  {
    RAl: 17.5,
    RAu: 18,
    decl: -67.5,
    constellation: 'Pavo'
  },
  {
    RAl: 22,
    RAu: 23.3333,
    decl: -67.5,
    constellation: 'Tucana'
  },
  {
    RAl: 4.5833,
    RAu: 6.5833,
    decl: -70,
    constellation: 'Dorado'
  },
  {
    RAl: 13.6667,
    RAu: 14.75,
    decl: -70,
    constellation: 'Circinus'
  },
  {
    RAl: 14.75,
    RAu: 17,
    decl: -70,
    constellation: 'Triangulum Australe'
  },
  {
    RAl: 0,
    RAu: 1.3333,
    decl: -75,
    constellation: 'Tucana'
  },
  {
    RAl: 3.5,
    RAu: 4.5833,
    decl: -75,
    constellation: 'Hydrus'
  },
  {
    RAl: 6.5833,
    RAu: 9.0333,
    decl: -75,
    constellation: 'Volans'
  },
  {
    RAl: 9.0333,
    RAu: 11.25,
    decl: -75,
    constellation: 'Carina'
  },
  {
    RAl: 11.25,
    RAu: 13.6667,
    decl: -75,
    constellation: 'Musca'
  },
  {
    RAl: 18,
    RAu: 21.3333,
    decl: -75,
    constellation: 'Pavo'
  },
  {
    RAl: 21.3333,
    RAu: 23.3333,
    decl: -75,
    constellation: 'Indus'
  },
  {
    RAl: 23.3333,
    RAu: 24,
    decl: -75,
    constellation: 'Tucana'
  },
  {
    RAl: 0.75,
    RAu: 1.3333,
    decl: -76,
    constellation: 'Tucana'
  },
  {
    RAl: 0,
    RAu: 3.5,
    decl: -82.5,
    constellation: 'Hydrus'
  },
  {
    RAl: 7.6667,
    RAu: 13.6667,
    decl: -82.5,
    constellation: 'Chamaeleon'
  },
  {
    RAl: 13.6667,
    RAu: 18,
    decl: -82.5,
    constellation: 'Apus'
  },
  {
    RAl: 3.5,
    RAu: 7.6667,
    decl: -85,
    constellation: 'Mensa'
  },
  {
    RAl: 0,
    RAu: 24,
    decl: -90,
    constellation: 'Octans'
  }
]
