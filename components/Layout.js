import { ToastContainer, toast } from "react-toastify";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />

      <div className="bg-gray-100 h-screen p-10">
        <div className="container mx-auto h-full">{children}</div>
      </div>
      <ToastContainer />
    </>
  );
}
