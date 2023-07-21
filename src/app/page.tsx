import Image from 'next/image';

export default function Root() {
  return (
    <div className="flex flex-col items-center justify-center p-[32px]">
      <Image alt="Next.js Logo" src="/assets/images/logo.svg" />
      <h1 className="pt-8 text-5xl">Hello Next.js</h1>
    </div>
  );
}
