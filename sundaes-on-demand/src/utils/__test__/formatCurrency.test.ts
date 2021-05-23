import { formatCurrency } from "../";

test("format currency correctly", () => {
  const items = [
    {
      digit: 1000,
      formated: "$ 1.000",
    },
    {
      digit: 9_000_000,
      formated: "$ 9.000.000",
    },
    {
      digit: 0,
      formated: "$ 0",
    },
    {
      digit: -4565,
      formated: "-$ 4.565",
    },
  ];

  items.forEach(({ digit, formated }) => {
    expect(formatCurrency(digit)).toBe(formated);
  });
});
