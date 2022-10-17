export function Breakpoint() {
  if (process.env.NODE_ENV !== 'development') return null;
  return (
    <div className="fixed right-4 bottom-4 bg-emerald-300 shadow px-8 py-2 rounded-full opacity-20">
      <span className="text-emerald-900 font-bold sm:block md:hidden">sm</span>
      <span className="text-emerald-900 font-bold hidden md:block lg:hidden">md</span>
      <span className="text-emerald-900 font-bold hidden md:hidden lg:block xl:hidden">lg</span>
      <span className="text-emerald-900 font-bold hidden xl:block">xl</span>
    </div>
  );
}
