import { Container } from "./components/atoms/my_chakra_components";
import Header from "./components/organisms/header";
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
        <MyChakraProvider>
          <Header />
          <Container>{children}</Container>
        </MyChakraProvider>
      </body>
    </html>
  );
}
