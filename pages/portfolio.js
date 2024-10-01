import { Header, Nav, About, Experience, Portfolio, Services, Testimonials, Contact, Footer } from '../components/portfolio';

export default function PortfolioPage() {
    return (
        <>
            <div className='container mx-auto px-10 mb-8'>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Portfolio />
                <Testimonials />
                <Contact />
            </div>
            <Footer />
        </>
    );
};