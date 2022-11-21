import React from "react";

export default function MyOrdersModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Click On Product Image
      </button>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Order details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black  h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Sofa Chair 
                  </p>
                  <div className="flex">
                  <img
            className="h-28 w-28 bg-center bg-contain  "
            src="../Images/prod3.png"
            alt=""
          /> <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
            fermentum iaculis eu non. In pellentesque massa placerat duis. Augue
            neque gravida in fermentum et. Viverra ipsum nunc aliquet bibendum
            enim. Lorem ipsum dolor sit amet. Metus vulputate eu scelerisque
            felis imperdiet. Faucibus nisl tincidunt eget nullam non nisi.
            Facilisis volutpat est velit egestas dui id ornare arcu. Amet risus
            nullam eget felis eget. Euismod elementum nisi quis.im.
            <br />
            Lorem ipsum dolor sit amet. Metus vulputate eu scelerisque felis
            imperdiet. Faucibus nisl tincidunt eget nullam non nisi. Facilisis
            volutpat est velit egestas dui id ornare arcu. Amet risus nullam
            eget felis eget. Euismod elementum nisi quis.im. Lorem ipsum dolor
            sit amet. Metus vulputate eu scelerisque felis imperdiet. Faucibus
            nisl tincidunt eget nullam non nisi. Facilisis volutpat est velit
            egestas dui id ornare arcu. Amet risus nullam eget felis eget.
            Euismod elementum nisi quis.</p></div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel Order
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Done 
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}