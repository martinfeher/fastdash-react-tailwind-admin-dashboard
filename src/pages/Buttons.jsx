
import { useState } from 'react'
import AdminLayout from "../layout/AdminLayout";
import { BiTimeFive, BiSolidDownload, BiSolidEditAlt, BiCode } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { connect } from "react-redux";

const Buttons = ({global: {darkMode}}) => {

  const [displayCodeDefalt, setDisplayCodeDefalt] = useState(false)
  const [displayRounded, setDisplayRounded] = useState()
  const [displaySolid, setDisplaySolid] = useState()
  const [displayOutline, setDisplayOutline] = useState()
  const [displayBtnSizes, setDisplayBtnSizes] = useState()
  const [displayBlock, setDisplayBlock] = useState()
  const [displayBtnWithIcon, setDisplayBtnWithIcon] = useState()

  const codeDefault = `<button type="button" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Primary</button>
<button type="button" className="px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[15px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Primary</button>`

const codeRounded = `<button type="button" className="px-[17px] py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out">Primary</button>
<button type="button" className="px-[17px] py-2 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[15px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-full cursor-pointer transition duration-300 ease-out">Primary</button>`

const codeSolid = `<button type="button" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Primary</button>
<button type="button" className="px-4 py-2 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Secondary</button>
<button type="button" className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Success</button>
<button type="button" className="px-4 py-2 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Warning</button>
<button type="button" className="px-4 py-2 bg-red-500 hover:bg-red-600 dark:hover:bg-red-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Danger</button>
<button type="button" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Info</button>
<button type="button" className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out">Dark</button>`
    
const codeOutline = `<button type="button" className="px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[15px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Primary </button> 
<button type="button" className="px-4 py-2 border hover:bg-slate-500 dark:hover:bg-slate-400 border-slate-500 dark:border-slate-400 text-[15px] text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Secondary </button> 
<button type="button" className="px-4 py-2 border hover:bg-green-600 dark:hover:bg-green-500 border-green-600 dark:border-green-500 text-[15px] text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Success </button> 
<button type="button" className="px-4 py-2 border hover:bg-orange-400 border-orange-400 text-[15px] text-orange-400 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Warning </button> 
<button type="button" className="px-4 py-2 border hover:bg-red-500 border-red-500 text-[15px] text-red-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Danger </button> 
<button type="button" className="px-4 py-2 border hover:bg-cyan-500 border-cyan-500 text-[15px] text-cyan-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Info </button> 
<button type="button" className="px-4 py-2 border hover:bg-slate-800 border-slate-800 text-[15px] text-slate-800 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Dark </button>`

const codeBtnSizes = `<button type="button" className="px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Primary </button> 
<button type="button" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Info </button> 
<button type="button" className="px-3 py-1.5 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[14px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Success </button> 
<button type="button" className="px-2.5 py-[5px] bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[13px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Warning </button> 

<button type="button" className="px-[25px] py-3 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out" > Primary </button> 
<button type="button" className="px-[17px] py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out" > Info </button> 
<button type="button" className="px-[13px] py-1.5 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[14px] text-white rounded-full cursor-pointer transition duration-300 ease-out" > Success </button> 
<button type="button" className="px-[11px] py-[5px] bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[13px] text-white rounded-full cursor-pointer transition duration-300 ease-out" > Warning </button>`

const codeBlock = `<button type="button" className="w-full px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Primary </button> 
<button type="button" className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Info </button> 
<button type="button" className="w-full px-4 py-2 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > Warning </button>`

const codeBtnWithIcon = `<button className="flex px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-gray-200 text-[15px] rounded-[6px]"> <BiSolidDownload className="text-[21px] mt-[2px] mr-[4px]" /> <div className="mt-[1px]">download</div> </button> 
<button type="button" className="flex px-4 py-2 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out" > <BsPlusLg className="text-[21px] mt-[2px] mr-[3px]" /> <div className="mt-[1px]">new</div> </button> 
<button type="button" className="flex px-4 py-2 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out" > <BiSolidEditAlt className="text-[21px] mt-[2px] mr-[3px]" /> <div className="mt-[1px]">edit</div> </button> 
<button className="flex px-[11px] py-[5px] bg-slate-800 hover:bg-slate-900 text-gray-200 text-[13px] rounded-full"> <BiTimeFive className="text-[15px] mt-[2px] mr-[4px]" /> <div className="mt-[1px]">time</div> </button>`

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-brandLight dark:bg-brandDarkPrimary">
        <AdminLayout>
          <main className="p-4 w-full flex flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Default button</h5>
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"
                    onClick={() => setDisplayCodeDefalt(!displayCodeDefalt)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex gap-6 items-center mt-[12px]">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[15px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                </div>
                {displayCodeDefalt && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeDefault}
                    </pre>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Rounded button</h5>
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"
                    onClick={() => setDisplayRounded(!displayRounded)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex gap-6 items-center mt-[12px]">
                  <button
                    type="button"
                    className="px-[17px] py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="px-[17px] py-2 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[15px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                </div>
                {displayRounded && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeRounded}
                    </pre>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Solid button</h5>
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"
                    onClick={() => setDisplaySolid(!displaySolid)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center mt-[12px]">
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-red-500 hover:bg-red-600 dark:hover:bg-red-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Dark
                  </button>
                </div>
                {displaySolid && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeSolid}
                    </pre>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Outline</h5> 
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"
                    onClick={() => setDisplayOutline(!displayOutline)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center mt-[12px]">
                  <button
                    type="button"
                    className="px-4 py-2 hover:bg-blue-700 dark:hover:bg-blue-600 border border-blue-700 dark:border-blue-600 text-[15px] text-blue-700 dark:text-blue-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border hover:bg-slate-500 dark:hover:bg-slate-400 border-slate-500 dark:border-slate-400 text-[15px] text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Secondary
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border hover:bg-green-600 dark:hover:bg-green-500 border-green-600 dark:border-green-500 text-[15px] text-green-600 dark:text-green-500 hover:text-white dark:hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border hover:bg-orange-400 border-orange-400 text-[15px] text-orange-400 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Warning
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border hover:bg-red-500 border-red-500 text-[15px] text-red-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Danger
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border hover:bg-cyan-500 border-cyan-500 text-[15px] text-cyan-500 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 border hover:bg-slate-800 border-slate-800 text-[15px] text-slate-800 hover:text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Dark
                  </button>
                </div>

                {displayOutline && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeOutline}
                    </pre>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Button sizes</h5>
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"
                    onClick={() => setDisplayBtnSizes(!displayBtnSizes)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center mt-[12px]">
                  <button
                    type="button"
                    className="px-6 py-3 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1.5 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[14px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="px-2.5 py-[5px] bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[13px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Warning
                  </button>
                </div>

                <div className="w-full flex flex-wrap gap-2 items-center mt-[12px]">
                  <button
                    type="button"
                    className="px-[25px] py-3 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="px-[17px] py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="px-[13px] py-1.5 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[14px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Success
                  </button>
                  <button
                    type="button"
                    className="px-[11px] py-[5px] bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[13px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    Warning
                  </button>
                </div>

                {displayBtnSizes && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeBtnSizes}
                    </pre>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Block, full width</h5>
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"
                    onClick={() => setDisplayBlock(!displayBlock)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center mt-[12px]">
                  <button
                    type="button"
                    className="w-full px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-400 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Info
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 bg-orange-400 hover:bg-orange-500 dark:hover:bg-orange-300 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    Warning
                  </button>
                </div>

                {displayBlock && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeBlock}
                    </pre>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white dark:bg-brandDarkSecondary rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className="dark:text-gray-300">Button with icon</h5>
                  </div>
                  <div
                    className="flex text-slate-800 dark:text-gray-350 hover:text-slate-600 dark:hover:text-gray-300 cursor-pointer trainsition duration-200 ease-out"

                    onClick={() => setDisplayBtnWithIcon(!displayBtnWithIcon)}
                  >
                    <BiCode className="mt-[2px] mr-[3px] text-[18px]" />{" "}
                    <span className="text-[14px]">Code</span>
                  </div>
                </div>
                <div className="w-full flex flex-wrap gap-2 items-center mt-[12px]">
                  <button className="flex px-4 py-2 bg-blue-700 hover:bg-blue-800 dark:hover:bg-blue-600 text-gray-200 text-[15px] rounded-[6px]">
                    <BiSolidDownload className="text-[21px] mt-[2px] mr-[4px]" />
                    <div className="mt-[1px]">download</div>
                  </button>
                  <button
                    type="button"
                    className="flex px-4 py-2 bg-green-600 hover:bg-green-700 dark:hover:bg-green-500 text-[15px] text-white rounded-[6px] cursor-pointer transition duration-300 ease-out"
                  >
                    <BsPlusLg className="text-[21px] mt-[2px] mr-[3px]" />
                    <div className="mt-[1px]">new</div>
                  </button>
                  <button
                    type="button"
                    className="flex px-4 py-2 bg-slate-500 hover:bg-slate-600 dark:hover:bg-slate-400 text-[15px] text-white rounded-full cursor-pointer transition duration-300 ease-out"
                  >
                    <BiSolidEditAlt className="text-[21px] mt-[2px] mr-[3px]" />
                    <div className="mt-[1px]">edit</div>
                  </button>
                  <button className="flex px-[11px] py-[5px] bg-slate-800 hover:bg-slate-900 text-gray-200 text-[13px] rounded-full">
                    <BiTimeFive className="text-[15px] mt-[2px] mr-[4px]" />
                    <div className="mt-[1px]">time</div>
                  </button>
                </div>
                {displayBtnWithIcon && (
                  <div className="mt-[12px]">
                    <pre className="py-2.5 px-4 overflow-auto bg-slate-800 text-green-300 rounded-[6px]">
                      {codeBtnWithIcon}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </main>
        </AdminLayout>
      </div>
    </div>
  );
  }
  
  const mapStateToProps = (state) => ({
    global: state.global,
  });
  
  export default connect(mapStateToProps)(Buttons);