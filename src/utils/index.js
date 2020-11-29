export function fakeHeavyFunc(name) {
  [...Array(400).keys()].forEach((i) => {
    console.log(i, name);
  });
}
