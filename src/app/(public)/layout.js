import Container from "@/components/layout/Container";
<<<<<<< HEAD
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Sidenav from "@/components/layout/Sidenav";
import Ready from "@/components/Ready";

export default function PublicLayout({ children   }) {
=======
import Header from "@/components/layout/Header";
import Sidenav from "@/components/layout/Sidenav";

export default function PublicLayout({ children }) {
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
  return (
    <>
      <Container>
          <Header />
      </Container>
<<<<<<< HEAD
      <main>
        {children}
      </main>
      <Ready />
      <Footer className="pt-[150px] mt-[-100px]" />
=======

      <main>
        {children}
      </main>
>>>>>>> ecc16de1cb94061ce4672908cf59dde881cca65f
    </>
  );
}
