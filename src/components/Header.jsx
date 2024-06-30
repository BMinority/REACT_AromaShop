import logoImage from '../assets/Aroma_Shop_logo/logo_not_bg.png';

export default function Header() {
    return (
        <div className="header">
            <section className="box-logo">
                <img src={logoImage} alt="image of logo" className="logo-image" />
                <h1>AromaShop</h1>
            </section>

            <section className="header-search">
                <input type="search" className="input-search" placeholder="O que você procura hoje?" />
                <button className="b-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </section>

            <section className="box-login">
                <a href="#">Login <i className="fa-solid fa-right-to-bracket"></i></a>
            </section>
        </div>
    );
}
