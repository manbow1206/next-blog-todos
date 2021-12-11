import { Head } from 'next/head';

export default function Layout({ children, title = 'HP by Nextjs' }) {
  return (
    <div className='flex justify-center items-center flex-col min-h-screen font-mono text-gray-800'>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='flex flex-1 justify-center items-center flex-col w-screen'>
        {children}
      </main>
      <footer className='w-full h-16 flex justify-center items-center text-gray-800 text-sm'>
        udemy
      </footer>
    </div>
  );
}
