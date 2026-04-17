export type EuclidResult = [gcd: number, bezoutA: number, bezoutB: number];

export function Euclid(a: number, b: number): EuclidResult | "inputs are not both numbers" {
  // extended Euclidean algorithm
  const aSign = sign(a); // keep track of signs for later implementation
  const bSign = sign(b);

  if ((aSign === 1 || aSign === -1) && (bSign === 1 || bSign === -1)) {
    let aInt = Math.floor(a) * aSign; // make both numbers positive integers
    let bInt = Math.floor(b) * bSign;
    let x = 0;
    let y = 1;
    let u = 1;
    let v = 0;

    while (aInt !== 0) {
      const q = Math.floor(bInt / aInt); // subtract smaller from larger as many times as possible
      const r = bInt % aInt; // find remainder
      const m = x - u * q; // find coefficients
      const n = y - v * q;
      bInt = aInt; // swap values
      aInt = r;
      x = u;
      y = v;
      u = m;
      v = n;
    }

    return [bInt, x * aSign, y * bSign]; // emit GCD and Bézout Coefficients
  }

  return "inputs are not both numbers";
}

function sign(x: number): 1 | -1 | "input is not a number" {
  if (x < 0) {
    return -1;
  }
  if (x >= 0) {
    return 1;
  }
  return "input is not a number";
}

export default Euclid;
