function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2>Sobre Nós</h2>
                    <p>Empresa AromaShop comprometida em fornecer perfumes de alta qualidade e experiências olfativas únicas.</p>
                </div>
                <div className="footer-section links">
                    <h2>Links Úteis</h2>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contato</h2>
                    <p><i className="fas fa-phone"></i> (11) 1234-5678</p>
                    <p><i className="fas fa-envelope"></i> contato@aromashop.com</p>
                </div>
                <div className="footer-section social">
                    <h2>Redes Sociais</h2>
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 AromaShop. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer