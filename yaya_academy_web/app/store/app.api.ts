// import { axiosBaseQuery } from '@jiret/core';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    tagTypes: ['role', 'branch'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: () => ({}),
});
