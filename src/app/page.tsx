export default function Home() {
  return (
    <>
      <h1 className="pb-4">Hello World</h1>

      <main className=" grid grid-cols-12 grid-rows-10 gap-4 h-screen ">
        {/* Row 1-2 */}
        <div className="bg-red-500 col-span-2 row-span-2 flex items-center justify-center rounded-2xl">
          A
        </div>
        <div className="bg-blue-500 col-span-2 row-span-2 flex items-center justify-center rounded-2xl">
          B
        </div>
        <div className="bg-green-500 col-span-8 row-span-4 flex items-center justify-center rounded-2xl">
          C
        </div>

        {/* Row 3-4 */}
        <div className="bg-yellow-500 col-span-2 row-span-2 flex items-center justify-center rounded-2xl">
          D
        </div>
        <div className="bg-purple-500 col-span-2 row-span-2 flex items-center justify-center rounded-2xl">
          E
        </div>

        {/* Row 5-7 */}
        <div className="bg-pink-500 col-span-3 row-span-3 flex items-center justify-center rounded-2xl">
          F
        </div>
        <div className="bg-gray-500 col-span-6 row-span-3 flex items-center justify-center rounded-2xl">
          G
        </div>
        <div className="bg-orange-500 col-span-3 row-span-3 flex items-center justify-center rounded-2xl">
          H
        </div>

        {/* Row 8-10 */}
        <div className="bg-cyan-500 col-span-9 row-span-3 flex items-center justify-center rounded-2xl">
          I
        </div>
        <div className="bg-teal-500 col-span-3 row-span-3 flex items-center justify-center rounded-2xl">
          J
        </div>
      </main>
    </>
  );
}
