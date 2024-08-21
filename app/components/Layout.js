import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {" "}
      <NavBar />
      <main className="flex-grow overflow-hidden">{children}</main>
    </div>
  );
}
