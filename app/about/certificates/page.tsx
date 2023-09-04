const CertificatesPage = () => {
  const n = 8;
  return (
    <div className="text-white bg-[#2A2A3B] p-8  ">
      <div className="max-w-screen-lg mx-auto">
        <div className="">
          <h1 className="text-2xl">Certificates</h1>
        </div>
        <div className="mt-2">
          <p>
            Et vel praesentium. Sed commodi iure atque delectus aspernatur.
            Sapiente suscipit fuga recusandae consectetur nostrum. Nulla autem
            sed illo et voluptas.
          </p>
        </div>
        <div className="relative flex flex-col gap-4 bg-[#2A2A3B] max-w-screen-lg">
          {[...Array(n)].map((e, i) => (
            <div
              key={i}
              className="bg-[#2E2E41] min-w-min text-slate-50 rounded-lg p-6 max-w-sm odd:self-end shadow-xl z-10"
            >
              <div className="sm:flex justify-between items-center">
                <p className=" pb-1">Accessibility</p>
                <p className=" text-[#CD835F] text-xs">WCAG2.1</p>
              </div>

              <p className="text-xs font-mono">
                Doloribus distinctio laudantium maiores neque facere libero ut
                mollitia qui. Doloribus distinctio laudantium maiores neque
                facere libero ut mollitia qui.
              </p>

              <button className="px-6 py-4 bg-[#F09666] text-xs mt-4 text-white rounded-sm">
                View Certificate
              </button>
            </div>
          ))}
          <div className="border-8 border-[#F09666] absolute top-0 right-36 h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default CertificatesPage;
