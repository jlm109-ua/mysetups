import ProfileIcon from "@/components/icons/ProfileIcon";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          your last setup was:&nbsp;
          <code className="font-mono font-bold">name</code>
        </p>
        <div
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-white hover:bg-white hover:dark:border-neutral-600 hover:dark:bg-neutral-800/30"
        >
          <a
            href="ToDo:addlink"
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ProfileIcon />
          </a>
        </div>
      </div>

      <div
        className="
        relative z-[-1] flex place-items-center 
        before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 
        before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent 
        before:blur-2xl before:content-[''] 
        after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 
        after:bg-gradient-conic after:from-purple-200 after:via-purple-200 
        after:blur-2xl after:content-[''] 
        before:dark:bg-gradient-to-br before:dark:from-transparent 
        before:dark:to-purple-700 before:dark:opacity-10 
        after:dark:from-purple-800 after:dark:via-[#66076e] after:dark:opacity-40 
        sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
      >
        here should go the 3d render of the car
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-xl lg:grid-cols-2 lg:text-left">
        <a
          href="ToDo:addlink"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Add Setup{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Add a new setup for your car.
          </p>
        </a>

        <a
          href="ToDo:addlink"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            My Setups{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Check your setups! You can delete or even edit them.
          </p>
        </a>
      </div>
    </main >
  );
}
