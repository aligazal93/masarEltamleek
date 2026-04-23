import Container from "@/components/layout/Container";
import Header from "@/components/layout/Header";
import Sidenav from "@/components/layout/Sidenav";

export default function PublicLayout({ children }) {
  return (
    <>
      <Container>
          <Header />
      </Container>

      <main>
        {children}
      </main>
    </>
  );
}
