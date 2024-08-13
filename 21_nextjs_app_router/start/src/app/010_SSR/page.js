import ClientComp from "./components/clientComp";

export default function SSR() {
  return (
    <>
      <div>SSR Page</div>
      <ClientComp />
    </>
  );
}
