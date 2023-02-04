import MyChakraProvider from "./my_chakra_provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <MyChakraProvider>{children}</MyChakraProvider>
      </body>
    </html>
  );
}
