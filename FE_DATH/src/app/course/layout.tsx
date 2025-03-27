export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main>
      <div className="w-full py-4 flex flex-col items-center gap-8 overscroll-y-auto min-h-screen">
        <div className="dashboard-bottom flex flex-row w-[80vw] rounded-2xl h-fit relative">
          <div className="p-8 w-fit h-fit flex-1">{children}</div>
        </div>
      </div>
    </main>
  );
}
