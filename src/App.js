import { Background } from "./Background";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { initJuno } from "@junobuild/core";
import { Auth } from "./Auth";
import React, { useContext, useEffect } from 'react';



function App() {

  const contextValue = useContext(Auth);
  const user = contextValue ? contextValue.user : null;
  // alert(useContext(Auth));

   useEffect(() => {
     (async () =>
       await initJuno({
        satelliteId: "pnaib-yaaaa-aaaal-aducq-cai",
       }))();
   }, []);




  useEffect(() => {
    // const LoggedElement = document.getElementById('Loggato');
    // if (LoggedElement) {
    //    LoggedElement.style.display = 'flex';

    //   alert("Questo è un messaggio di allerta dentro il primo if!");
    // }
  }, [user]); // Dipendenze dell'effetto



  return (
    <>
      <div className="flex h-full">
      <aside className="h-full barraLaterale" style={{ display: user ? 'block' : 'none' }} aria-label="Sidebar" id="Loggato" >
        <div className="overflow-y-auto h-full w-full py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 " >
          <a href="#" className="flex items-center pl-2.5 mb-5">
            <img src="https://pnaib-yaaaa-aaaal-aducq-cai.icp0.io/documents/rr3j7-wkfyp-3mvio-fpepp-qe2vr-avbtv-tfdio-qsg4f-ni2kw-rlcfr-nae-iccloud-copia.png" className="mr-3 mb-3 h-6 sm:h-9" alt="Logo" />
            <span className="self-center  w-70 text-l font-bold whitespace-nowrap dark:text-white">ICCloud</span>
          </a>
          <ul className="space-y-2">
            {/* Menu items here */}
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 bg-blue-500 dark:bg-blue-700 text-white">
                <span className="ml-3">My Docs</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ml-3">Shared Docs</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ml-3">Subscription</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="ml-3">Space Usage</span>
              </a>
            </li>
            {/* Add more items here */}
          </ul>
        </div>
      </aside>      
      <div className="isolate bg-white flex flex-row justify-center items-center h-auto w-full pl-[15px]">
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl pt-16">
              <div className="text-center flex-col justify-center items-center h-screen">
                <div class="flex flex-row justify-center items-center h-auto pl-[15px]">
                  <img src="https://pnaib-yaaaa-aaaal-aducq-cai.icp0.io/documents/rr3j7-wkfyp-3mvio-fpepp-qe2vr-avbtv-tfdio-qsg4f-ni2kw-rlcfr-nae-iccloud-copia.png" className="mr-3 h-[200px] sm:h-[200px]" alt="Logo" />

                  <h1 className="text-4xl font-bold tracking-tight text-left text-gray-900 w-auto sm:text-6xl">
                  ICCloud 
                  </h1>
                </div>
                
                <p className="mt-6 text-lg leading-8 text-gray-600" id="Oscura">
                Welcome to the <b>ICCloud's MVP</b>, here you can preview the revolution in digital storage on the blockchain. Indeed, with this new dapp, you can save your data directly on the blockchain. Don't believe it? Click the button here and you can try it out immediately.
                This simple app is built with React, Tailwind and Juno. All the dApp is on the Internet Computer Protocol Blockchain </p>

                <Auth>
                  
                  <p>Click on "Add a Document" to select a file directly from your PC and upload it to the ICP blockchain. Once uploaded, an icon will appear next to the document. By clicking on it, you can view your document saved on ICP.</p>
                  <Table />

                  <Modal />
                </Auth>
              </div>
            </div>
            <Background />
          </div>
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
