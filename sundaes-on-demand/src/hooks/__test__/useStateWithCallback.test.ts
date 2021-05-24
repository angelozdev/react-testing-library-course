import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useStateWithCallback } from "../";

describe("useStateWithCallback", () => {
  it("should run callback on change", () => {
    const callback = jest.fn();
    const { result } = renderHook(() =>
      useStateWithCallback<number>(0, callback)
    );

    const { 1: setState } = result.current;

    expect(callback).toBeCalledTimes(1);

    act(() => {
      setState(Math.random() * 1000);
    });

    expect(callback).toBeCalledTimes(2);
  });
});
