import { Container, Footer, Header } from "@/components/shared";
import "../globals.css";

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        {children}
        <Container className="mt-20">
          <Footer />
        </Container>
      </body>
    </html>
  );
};

export default RootLayout;
