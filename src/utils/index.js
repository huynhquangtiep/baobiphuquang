export const navOptions = [
  {
    id: "home",
    label: "Trang chủ",
    path: "/",
  },
  {
    id: "listing",
    label: "Tất cả sản phẩm",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Hộp đựng",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Túi",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "Giấy",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminListing",
    label: "Quản lý tất cả sản phẩm",
    path: "/admin-view/all-products",
  },
  {
    id: "adminNewProduct",
    label: "Thêm sản phẩm mới",
    path: "/admin-view/add-product",
  },
];

export const registrationFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter your name",
    label: "Tên",
    componentType: "input",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Mật khẩu",
    componentType: "input",
  },
  {
    id: "role",
    type: "",
    placeholder: "",
    label: "Role",
    componentType: "select",
    options: [
      {
        id: "customer",
        label: "Khách hàng",
      },
    ],
  },
];

export const loginFormControls = [
  {
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    label: "Email",
    componentType: "input",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    label: "Mật khẩu",
    componentType: "input",
  },
];

export const adminAddProductformControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter name",
    label: "Tên sản phẩm",
    componentType: "input",
  },
  {
    id: "price",
    type: "number",
    placeholder: "Enter price",
    label: "Giá",
    componentType: "input",
  },
  {
    id: "description",
    type: "text",
    placeholder: "Enter description",
    label: "Mô tả",
    componentType: "input",
  },
  {
    id: "category",
    type: "",
    placeholder: "",
    label: "Loại",
    componentType: "select",
    options: [
      {
        id: "men",
        label: "Hộp",
      },
      {
        id: "women",
        label: "Túi",
      },
      {
        id: "kids",
        label: "Giấy",
      },
    ],
  },
  {
    id: "deliveryInfo",
    type: "text",
    placeholder: "Enter deliveryInfo",
    label: "Thông tin giao hàng",
    componentType: "input",
  },
  {
    id: "onSale",
    type: "",
    placeholder: "",
    label: "On Sale",
    componentType: "select",
    options: [
      {
        id: "yes",
        label: "Yes",
      },
      {
        id: "no",
        label: "No",
      },
    ],
  },
  {
    id: "priceDrop",
    type: "number",
    placeholder: "Enter Price Drop",
    label: "Giảm giá",
    componentType: "input",
  },
];

export const AvailableSizes = [
  {
    id: "s",
    label: "S",
  },
  {
    id: "m",
    label: "M",
  },
  {
    id: "l",
    label: "L",
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyAEPwpouC2JuZgqGNeq8J0K1sXWW5FG-ds",
  authDomain: "baobiphuquang-93631.firebaseapp.com",
  projectId: "baobiphuquang-93631",
  storageBucket: "baobiphuquang-93631.appspot.com",
  messagingSenderId: "208650888048",
  appId: "1:208650888048:web:b46c366bfe0264bdee65b5",
  measurementId: "G-3EVNE7JLPD",
};

export const firebaseStroageURL =
  "gs://baobiphuquang-93631.appspot.com";

export const addNewAddressFormControls = [
  {
    id: "fullName",
    type: "input",
    placeholder: "Enter your full name",
    label: "Full Name",
    componentType: "input",
  },
  {
    id: "address",
    type: "input",
    placeholder: "Enter your full address",
    label: "Address",
    componentType: "input",
  },
  {
    id: "city",
    type: "input",
    placeholder: "Enter your city",
    label: "City",
    componentType: "input",
  },
  {
    id: "country",
    type: "input",
    placeholder: "Enter your country",
    label: "Country",
    componentType: "input",
  },
  {
    id: "postalCode",
    type: "input",
    placeholder: "Enter your postal code",
    label: "Postal Code",
    componentType: "input",
  },
];
