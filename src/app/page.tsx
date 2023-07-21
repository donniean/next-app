import Image from 'next/image';

export default function Root() {
  return (
    <div className="flex flex-col items-center justify-center p-[32px]">
      <Image
        className="animate-pulse"
        src="/assets/images/logo.svg"
        height={512}
        width={512}
        alt="Next.js Logo"
      />
      <h1 className="pt-8 text-5xl">Hello Next.js</h1>
    </div>
  );
}
