import Logo from '@/assets/images/logo-1.svg';

export default function Root() {
  return (
    <div className="flex flex-col items-center justify-center p-[32px]">
      <Logo />
      <h1 className="pt-8 text-5xl">Hello Next.js</h1>
    </div>
  );
}
