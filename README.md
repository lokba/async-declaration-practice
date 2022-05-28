# async-declaration-practice

async declaration practice using React Suspense, ErrorBoundary, react-query



## 메인 코드
```jsx

// ErrorBoundary와 Suspense를 묶어서 추상화한 컴포넌트
const AsyncBoundary = ({ rejectedFallback, pendingFallback, children }) => {
  return (
    <ErrorBoundary renderFallback={rejectedFallback}>
      <Suspense fallback={pendingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
};


// AysncBoundary로 래핑하여, ProductList는 Success인 상태만 생각하면 된다.
const ProductListPage = () => {
  return (
    // 해당 부분을 커스텀 할 수 있다. 
    <AsyncBoundary rejectedFallback={<Error />} pendingFallback={<Loading />}>
      <ProductList />
    </AsyncBoundary>
  );
};

// react-query 관련 부분을 훅으로 빼서, Success인 상태의 상품 리스트를 렌더한다. 
const ProductList = () => {
  const data = useProductList();

  return (
    <div>
      {data.map(({ id, name }) => (
        <div key={id}>
          <span>상품id : {id}</span>
          <span>상품명 : {name}</span>
        </div>
      ))}
    </div>
  );
};

```
