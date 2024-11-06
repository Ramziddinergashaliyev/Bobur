import { api } from "./index";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: "api/divan-categories/?format=json",
        params,
      }),
      providesTags: ["Product"],
    }),
    getProductById: build.query({
      query: (id) => ({
        url: `api/divan-groups//${id}`,
      }),
      providesTags: ["Product"],
    }),
    SearchProducts: build.query({
      query: (params) => ({
        url: "api/divan-groups/",
        method: "GET",
        params,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useSearchProductsQuery,
} = productApi;
