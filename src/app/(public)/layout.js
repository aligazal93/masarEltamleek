import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidenav from "@/components/layout/Sidenav";
import Ready from "@/components/Ready";

export default function PublicLayout({ children   }) {
  return (
    <>
      <Container>
          <Header />
      </Container>
      <main>
        {children}
      </main>
      <Ready />
      <Footer className="pt-[150px] mt-[-100px]" />
    </>
  );
}
