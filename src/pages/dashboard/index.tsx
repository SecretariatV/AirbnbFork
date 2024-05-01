let fullfilled = false;
let promise: Promise<void> | null = null;
const useTimeout = (ms: number) => {
  if (!fullfilled) {
    throw (promise ||= new Promise((res: any) => {
      setTimeout(() => {
        fullfilled = true;
        res();
      }, ms);
    }));
  }
};

export const Dashboard = () => {
  useTimeout(104000);

  return <div>Dashboard</div>;
};
