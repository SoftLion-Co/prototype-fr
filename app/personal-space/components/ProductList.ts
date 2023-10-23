interface ProductListData {
  id: number;
  title: string;
}

function ProductList() {
  const dataList: ProductListData[] = [
    {
      id: 1,
      title:
        "Creating sketches, defining the visual style, and designing the user interface.",
    },
    {
      id: 2,
      title: "Developing functionality, programming, and creating a database.",
    },
    { id: 3, title: "Implementing testing and bug fixing." },
  ];

  return dataList;
}

export default ProductList;
