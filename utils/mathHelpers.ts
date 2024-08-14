export function lerp(x: number, y: number, a: number): number {
  return (1 - a) * x + a * y;
}

export function scalePercent(scrollPercent: number, start: number, end: number) {
  return (scrollPercent - start) / (end - start);
}

