// import { fetchApi } from './http';
// import store from '../redux/store';
// const user_type = store.getState().auth.user_type;

// const getListProductsUriPrefix = (categoryID) => {
//     try {
//         let uri_prefix = "";
//         if (user_type === process.env.REACT_APP_BUSINESS_CUSTOMER) {
//             uri_prefix = `/business/shopping/get-list-products?subCat=${categoryID}`
//         }
//         else { uri_prefix = `/app/get-list-products?subCat=${categoryID}` }
//         return uri_prefix;
//     } catch (error) {
//         return ""
//     }
// };

// const getUriPrefix = (uri) => {
//     try {
//         let uri_prefix = "";
//         if (user_type === process.env.REACT_APP_BUSINESS_CUSTOMER) {
//             uri_prefix = `/business/shopping${uri}`
//         }
//         else { uri_prefix = `/app${uri}` }
//         return uri_prefix;
//     } catch (error) {
//         return ""
//     }
// };
// const appSchemaAPI = fetchApi.injectEndpoints({

//     endpoints: (build) => ({
//         getMenuData: build.query({
//             query: () => '/app/dynamic-category',
//         }),

//         getAppSchema: build.query({
//             query: () => 'app/dashboard/get-schema-settings',
//         }),
//         getAppSchemaCatalogue: build.query({
//             query: (targetID) => `app/dashboard/get-setting-mobile-catalogue?target=${targetID}`,
//         }),
//         getParentCategories: build.query({
//             query: () => `app/get-parent-categories`,
//         }),
//         getCategories: build.query({
//             query: (parentCategoryID) => `app/get-categories?parentCat=${parentCategoryID}`,
//         }),
//         getSubCategories: build.query({
//             // query: (categoryID) => `app/get-sub-categories?category=${categoryID}`,
//             query: (categoryID) => getUriPrefix(`/get-sub-categories?category=${categoryID}`),

//         }),
//         getProductsByCategory: build.query({
//             query: (categoryID) => getListProductsUriPrefix(categoryID),
//         }),
//         getProductsByBrand: build.query({
//             query: (brandID) => `app/get-products?brand=${brandID}`,
//         }),
//         getProductByID: build.query({
//             query: (productID) => `app/get-products?product=${productID}`,
//         }),
//         getSectionData: build.query({
//             query: (uri) => `${uri}`,
//         }),
//         getCities: build.query({
//             query: (uri) => `${uri}`,
//         })
//     }),
//     overrideExisting: false,
// });

// export const {
//     useGetMenuDataQuery,
//     useGetAppSchemaQuery,
//     useGetAppSchemaCatalogueQuery,
//     useGetParentCategoriesQuery,
//     useGetCategoriesQuery,
//     useGetSubCategoriesQuery,
//     useGetProductsByCategoryQuery,
//     useGetProductsByBrandQuery,
//     useGetProductByIDQuery,
//     useGetSectionDataQuery,
//     useGetCitiesQuery
// } = appSchemaAPI;
