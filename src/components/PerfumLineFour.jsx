import perfumeImage1 from '../assets/p_spunk01.jpg';
import perfumeImage2 from '../assets/p_spunk02.jpg';
import perfumeImage3 from '../assets/p_spunk03.jpg';
import perfumeImage4 from '../assets/p_spunk04.jpg';

function PerfumLineFour() {
    const perfumes = [
        { name: 'Clockwork Elixir', price: 'R$ 220,00', image: perfumeImage1 },
        { name: 'Steam Engine Essence', price: 'R$ 240,00', image: perfumeImage2 },
        { name: 'Brass Gears Aroma', price: 'R$ 230,00', image: perfumeImage3 },
        { name: 'Victorian Vapor', price: 'R$ 260,00', image: perfumeImage4 },
    ];

    return (
        <div className="p-punk-line">
            {perfumes.map((perfume, index) => (
                <div key={index} className="p-punk-card" style={{ backgroundImage: `url(${perfume.image})` }}>
                    <div className="p-punk-info">
                        <h3>{perfume.name}</h3>
                    </div>
                    <div className="p-punk-price">
                        <p>{perfume.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PerfumLineFour