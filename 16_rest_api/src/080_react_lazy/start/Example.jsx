import { useState, lazy, Suspense, startTransition } from "react";

const LazyComponentA = lazy(() => import('./components/ComponentA'));
const LazyComponentB = lazy(() => import('./components/ComponentB'));

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button onClick={() => {
        startTransition(() => {
          setCompA((prev) => !prev)
        })
      }}>{compA ? "ComponentB" : "ComponentA"}</button>
      <Suspense fallback={<div>Loading...</div>} />
      {compA ? <LazyComponentA /> : <LazyComponentB />}
    </>
  );
};

export default Example;
