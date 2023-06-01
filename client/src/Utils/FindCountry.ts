export const findCountry = (str: string, file: any) => {
  let result;
  file.forEach((obj: { alpha3Code: string }) => {
    if (str === (obj.alpha3Code as string)) {
      result = obj;
    }
  });
  return result;
};

/*
[
  {
    path: Something
  },
  {
    path: Something
  }
]
*/
