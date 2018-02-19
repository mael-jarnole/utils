export function booleanSort(a: boolean, b: boolean, descending: boolean): number {
  if (descending) {
    return (a === b) ? 0 : a ? -1 : 1;
  } else {
    return (a === b) ? 0 : a ? 1 : -1;
  }
}

export function alphabeticalSort(a: string, b: any, descending: boolean): number {
  if (descending) {
    return (a < b) ? 1 : a > b ? -1 : 0;
  } else {
    return (a > b) ? 1 : a < b ? -1 : 0;
  }
}
