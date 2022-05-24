# Polaris

Polaris is a fully tree-shakeable zero-dependency Typescript library for performing astrometric and astronomical calculations.

### Installation

```bash
npm install @observerly/polaris
```

or

```bash
yarn(pnpm) add @observerly/polaris
```

Then, you can simply import what you need:

```ts
import { getLocalSiderealTime, getHourAngle } from '@observerly/polaris'
```

### Acknowledgements

This package makes use of algrotihms and methods outlined in the following two publications:

- Meeus, J., 1991 "Astronomical Algorithms", 2nd ed., Willmann-Bell, Inc. Richmond, Va

- Lawrence, J.L., 2015 "Celestial Calculations: A Gentle Introduction To Computational Astrometry", MIT Press, Cambridge, Ma

Without these publications, this package would not exist.
