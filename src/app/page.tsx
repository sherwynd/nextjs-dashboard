export default function Home() {
  return (
    <>
      <h1 className="pb-4">Hello World</h1>

      <main className="grid h-screen grid-cols-12 grid-rows-10 gap-4">
        {/* Row 1-2 */}
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-2xl bg-red-500">
          A
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-2xl bg-blue-500">
          B
        </div>
        <div className="col-span-8 row-span-4 flex items-center justify-center rounded-2xl bg-green-500">
          C
        </div>

        {/* Row 3-4 */}
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-2xl bg-yellow-500">
          D
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-2xl bg-purple-500">
          E
        </div>

        {/* Row 5-7 */}
        <div className="col-span-3 row-span-3 flex items-center justify-center rounded-2xl bg-pink-500">
          F
        </div>
        <div className="col-span-6 row-span-3 flex items-center justify-center rounded-2xl bg-gray-500">
          G
        </div>
        <div className="col-span-3 row-span-3 flex items-center justify-center rounded-2xl bg-orange-500">
          H
        </div>

        {/* Row 8-10 */}
        <div className="col-span-9 row-span-3 flex items-center justify-center rounded-2xl bg-cyan-500">
          I
        </div>
        <div className="col-span-3 row-span-3 flex items-center justify-center rounded-2xl bg-teal-500">
          J
        </div>
      </main>
    </>
  );
}
