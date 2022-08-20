import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Simpsons"));
    const { images, isLoading } = result.current;

    expect(images).toEqual([]);
    expect(isLoading).toBe(true);
  });

  test("debe retornar un arreglo de imágenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Simpsons"));
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
      expect(result.current.images.length).toBe(5);
    });
  });
});
