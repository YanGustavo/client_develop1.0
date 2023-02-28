// export type PageProps = {
//   params?: any;
//   children?: React.ReactNode;
// };
// export type Category = {
//   _id: number;
//   name: string;
//   slug: string;
//   count: number;
//   items: Omit<Category, 'items'>[];
// };


export default getCategories = () => [ //: Category[] 
  { 
    _id: 1,
    name: 'iPhone',
    slug: 'iphone',
    count: 1,
    items: [
      { _id: 1, name: 'iPhone 8', slug: 'iphone_8', count: 1 },
      { _id: 2, name: 'iPhone 8 Plus', slug: 'iphone_8_plus', count: 0 },
      { _id: 3, name: 'iPhone Xr', slug: 'iphone_xr', count: 0 },
    ],
  },  
];


export async function fetchCategoryBySlug(slug) { //slug: string | undefined
  // Assuming it always return expected categories
  return getCategories().find((category) => category.slug === slug);
}

export async function fetchCategories(){//: Promise<Category[]> 
  return getCategories();
}

// async function findSubCategory(
//   category: Category | undefined,
//   subCategorySlug: string | undefined,
// ) {
//   return category?.items.find((category) => category.slug === subCategorySlug);
// }

// export async function fetchSubCategory(
//   categorySlug: string | undefined,
//   subCategorySlug: string | undefined,
// ) {
//   const category = await fetchCategoryBySlug(categorySlug);
//   return findSubCategory(category, subCategorySlug);
// }
