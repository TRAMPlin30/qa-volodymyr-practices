import { test, expect } from "@playwright/test";
import { NumberToString } from "../../../src/num_converter/NumberToString";

test.describe("NumberToString", () => {
  test("1 → один", async () => {
    const result = NumberToString.transformNumberToString(1);
    console.log(result)
    expect(result).toBe("один");
  });

  test("11 → одинадцять", async () => {
    const result = NumberToString.transformNumberToString(11);
    console.log(result)
    expect(result).toBe("одинадцять");
  });

  test("555 → п’ятсот ...", async () => {
    const result = NumberToString.transformNumberToString(555);
    console.log(result)
    expect(result).toBe("п'ятсот п'ятдесят п'ять ");
  });

  test("2025 → дві тисячі ...", async () => {
    const result = NumberToString.transformNumberToString(2025);
    console.log(result)
    expect(result).toBe("дві тисячі  двадцять п'ять ");
  });

  test("0 → нуль", async () => {
    const result = NumberToString.transformNumberToString(0);
    console.log(result)
    expect(result).toBe("нуль");
  });
});
