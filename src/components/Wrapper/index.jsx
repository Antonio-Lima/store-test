export default function Wrapper({ children }) {
  return (
    <main className="w-full mx-auto max-w-5xl px-8 py-4 flex flex-col items-center justify-center">
      {children}
    </main>
  );
}
