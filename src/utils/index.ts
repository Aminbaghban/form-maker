import { number, string } from 'yup';

var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  fixNumbers = function (str: string) {
    if (typeof str === 'string') {
      for (var i = 0; i < 10; i++) {
        str = str
          .replace(persianNumbers[i], `${i}`)
          .replace(arabicNumbers[i], `${i}`);
      }
    }
    return str;
  };

export const inherentNumberString = string().transform(
  (value, originalvalue) => {
    if (string().isType(value) && value !== null) {
      return fixNumbers(value);
    } else {
      return value;
    }
  }
);

export const selectWithValueExtractor = () =>
  number().transform((currentValue, originalValue) =>
    !!currentValue
      ? currentValue?.value
      : !!originalValue
      ? originalValue?.value
      : null
  );
