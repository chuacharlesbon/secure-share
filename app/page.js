'use client'
import Image from 'next/image';
import { ImFolderOpen } from 'react-icons/im';
import { TiThMenuOutline } from 'react-icons/ti';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Home() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [filelist, setFilelist] = useState([]);

  useEffect(() => {
    const inputElement = document.getElementById('fileInput');

    const handleFileChange = (event) => {
      console.log(event.target.files);
      console.log('this is the file');
      const file = event.target.files[0];
      setSelectedFile(file);
      const templist = [...filelist];
      console.log('this is the file');
      console.log(templist);
      if(!templist.includes(file)){
        templist.push(file);
        setFilelist(templist);
        console.log('this is the trigger');
      }
    };

    inputElement.addEventListener('change', handleFileChange);

    return () => {
      inputElement.removeEventListener('change', handleFileChange);
    };
  }, []);

  const uploadFile = () => {
    Swal.fire({
      title: 'Are you sure you want to upload this file?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Continue',
      denyButtonText: `Don't save`,
    }).then((result) => {
      let timerInterval
      Swal.fire({
        title: 'Uploading file...',
        html: 'Please do not close the app.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        var myNum = Math.floor(Math.random() * 10);
        if ((myNum % 2) == 0) {
          Swal.fire('File uploaded successfully!', '', 'success')
        } else {
          Swal.fire('Something went wrong.', '', 'info')
        }
      })
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-stretch justify-between">
      <div className="hidden z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.js</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="hidden relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="hidden mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>

      <div className='w-full p-2 flex flex-row items-center border-b border-grey-400'>
        <Image
          className="h-10 w-10 rounded-full"
          src="/shield-logo.jpg"
          alt="Current profile photo"
          width={40}
          height={40}
        />
        <div className='w-4'/>
        <p className="text-red-400 text-2xl font-bold">
          SecureShare
        </p>
        <div className='w-full'/>
        <button
          className="w-10 h-10 flex items-center justify-center"
          onClick={() => {
            Swal.fire(
              'Something went wrong',
              'This feature is not available at this moment.',
              'info'
            )
          }}
        >
          <TiThMenuOutline className='text-red-100 text-xl'/>
        </button>
      </div>

      <div className='w-full flex flex-col items-center'>
      <div className='w-400px py-4'>
      <p className=''>
        Files(<span>{filelist.length}</span>)
      </p>
      </div>
      <div className="w-400px rounded-lg border border-grey-100 p-4 flex flex-col justify-start items-start h-48">
        <>
        {
          filelist.map((e) => <p className='text-sm text-blue-100 hover:underline hover:cursor-pointer mb-2'>
            {e.name} ({(e.size * 0.001).toFixed(1)}kb)
          </p>)
        }
        </>
      </div>
      <div className='h-8'/>
      <form class="flex items-center space-x-6 border-b border-grey-400 pb-2">
        <div class="shrink-0">
          <ImFolderOpen className='text-blue-100 text-2xl'/>
          <img class="hidden h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input id="fileInput" onChanged={(e) => {
            console.log('trigger onChanged')
          }} type="file" class="block w-full text-sm text-slate-500 hover:file:cursor-pointer hover:file:bg-blue-200 hover:file:text-white file:transition file:duration-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100
          "/>
        </label>
      </form>
      <div className='h-8'/>
      <div className={`${selectedFile ? '' : 'hidden'} w-full flex flex-row justify-center`}>
        <button
          className="rounded-lg border border-grey-400 w-28 text-white font-semibold p-2 bg-red-100 hover:bg-red-400 transition duration-500"
          onClick={uploadFile}
        >
          Upload
        </button>
        <div className='w-4'/>
        <button
          className="rounded-lg border border-grey-400 w-28 text-grey-100 font-semibold p-2 hover:bg-grey-100 hover:text-white transition duration-500"
          onClick={() => {
            setSelectedFile(null)
            setFilelist([])
            document.getElementById('fileInput').value = "";
          }}
        >
          Clear
        </button>
      </div>
      </div>

      <div className='w-full p-4 bg-gradient-to-r from-red-400 to-red-100 text-center text-white'>
          <p className=''>
            Project File Transfer 2023
          </p>
          <p className='text-xs'>
            This project is on test environment.
          </p>
      </div>
    </main>
  )
}
