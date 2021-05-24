import { renderHook } from "@testing-library/react-hooks";
import { rest } from "msw";
import { useGetItems } from "../";
// eslint-disable-next-line jest/no-mocks-import
import { server } from "../../__mocks__";

describe("useGetItems", () => {
  it("should start with IDLE status", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetItems("scoops")
    );

    await waitForNextUpdate();

    const { 0: initialState } = result.all;

    if (initialState instanceof Error) {
      throw initialState;
    }

    expect(initialState.status).toBe("IDLE");
    expect(initialState.data).toHaveLength(0);
  });

  it("should change its status to LOADING", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetItems("scoops")
    );

    await waitForNextUpdate();

    const { 1: loadingState } = result.all;

    if (loadingState instanceof Error) {
      throw loadingState;
    }

    expect(loadingState.status).toBe("LOADING");
    expect(loadingState.data).toHaveLength(0);
  });

  it("should change its status to SUCCESS and get data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useGetItems("scoops")
    );

    await waitForNextUpdate();

    const { 2: successState } = result.all;

    if (successState instanceof Error) {
      throw successState;
    }

    expect(successState.status).toBe("SUCCESS");
    expect(successState.data.length).toBeGreaterThan(0);
  });

  it("if there is an error change its status to FAILURE and get the error", async () => {
    server.resetHandlers(
      rest.get("http://localhost:3030/scoops", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useGetItems("scoops")
    );

    await waitForNextUpdate();

    const { 2: failureState } = result.all;

    if (failureState instanceof Error) {
      throw failureState;
    }

    expect(failureState.data).toHaveLength(0);
    expect(failureState.status).toBe("FAILURE");
    expect(failureState.error).not.toBeNull();
  });
});
