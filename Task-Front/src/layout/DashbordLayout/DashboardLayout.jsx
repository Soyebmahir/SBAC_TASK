// /* eslint-disable react/no-unescaped-entities */
// import { useContext } from "react";

// import { Link, Outlet } from "react-router-dom";
// // import CartDrawer from "../../Components/CartDrawer/CartDrawer";
// import Loading from "../../components/Loading";
// import { AuthContext } from "../../context/AuthProvider/AuthProvider";

// const DashboardLayout = () => {
//   const { isOpen, user, loading } = useContext(AuthContext);
//   console.log("from dashboard", user);
//   if (loading && !user?.email) {
//     return <Loading></Loading>;
//   }

//   return (
//     <div className={` flex items-start  relative  bg-slate-300`}>
//       <div
//         className={`min-w-[230px] duration-300 overflow-y-scroll bg-secondary shadow-[5px_5px_5px_#ddd]  z-[99]  p-3 min-h-screen  max-h-screen top-10  fixed  left-0   ${
//           !isOpen
//             ? "md:absolute top-20   transition-all left-[-999px]"
//             : "md:fixed "
//         } `}
//       >
//         <div className="flex  flex-col w-full my-5  uppercase">
//           {/* <Link
//             className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//             to="/dashboard/"
//           >
//             My Profile
//           </Link>

//           <Link
//             className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//             to="/dashboard/orders"
//           >
//             My Orders
//           </Link> */}
//           {user?.role === "admin" && (
//             <>
//               {" "}
//               <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/create-category"
//               >
//                 Create Category
//               </Link>
//               {/* <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/create-subcategory"
//               >
//                 Create Sub-Category
//               </Link>
//               <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/products"
//               >
//                 All Products
//               </Link> */}
//             </>
//           )}
//           {user?.role === "admin" || user?.role === "vendor" ? (
//             <>
//               {/* <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/customers-orders"
//               >
//                 Customer's Orders
//               </Link> */}
//               <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/my-products"
//               >
//                 Create Products
//               </Link>
//             </>
//           ) : (
//             ""
//           )}

//           {user?.role === "admin" && (
//             <>
//               {" "}
//               <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/banners"
//               >
//                 Banner
//               </Link>
//               {/* <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/pending-vendor"
//               >
//                 Pending Vendor
//               </Link>
//               <Link
//                 className="border-t font-medium border-spacing-3 rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//                 to="/dashboard/approved-vendor"
//               >
//                 Approved Vendor
//               </Link> */}
//             </>
//           )}

//           {/* <Link
//             className="border-t border-spacing-3 font-medium rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//             to="/dashboard/change-password"
//           >
//             Change Password
//           </Link>

//           <Link
//             className="border-t border-spacing-3 font-medium rounded text-accent  text-sm mb-2 shadow-[5px_5px_10px_#b8b8b8,_-5px_-5px_10px_#ffffff] hover:shadow-[-5px_-5px_10px_#b8b8b8,_5px_5px_10px_#ffffff] duration-300 transition-all py-2"
//             to="/dashboard/vendor-form"
//           >
//             Create Product
//           </Link> */}
//         </div>
//       </div>
//       {isOpen && (
//         <div className="hidden md:block  md:min-w-[220px] duration-500 transition-all"></div>
//       )}
//       <div className={`w-full pb-32 pt-10  ${isOpen && "md:calc-width"}`}>
//         <div className="h-screen py-5 px-5">
//           {" "}
//           <Outlet></Outlet>
//         </div>
//       </div>
//       {/* <CartDrawer></CartDrawer> */}
//     </div>
//   );
// };

// export default DashboardLayout;
