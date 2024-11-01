import CountProvider from "@/store/CountProvder";

type RowList = {
  initialCount: number;
};

 function RowList({ initialCount }: RowList) {
  return (
    <CountProvider initialCount={initialCount}>
      <div className="RowList">hello</div>
    </CountProvider>
  );
}
