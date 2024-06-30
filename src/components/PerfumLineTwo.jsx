import perfumeImage1 from '../assets/p_gamer01.jpg';
import perfumeImage2 from '../assets/p_gamer02.jpg';
import perfumeImage3 from '../assets/p_gamer01.jpg';
import kitImage from '../assets/p_kit_gamer.jpg';

const PerfumLineTwo = () => {
    const perfumes = [
        { name: 'Legendary Quest', price: 'R$ 180,00', image: perfumeImage1 },
        { name: 'Battlefield Elixir', price: 'R$ 200,00', image: perfumeImage2 },
        { name: 'Dark Realm', price: 'R$ 190,00', image: perfumeImage3 },
        { name: 'Kit Gamer', price: 'R$ 250,00', image: kitImage },
    ];

    return (
        <div className="p-gamer-line">
            {perfumes.map((perfume, index) => (
                <div key={index} className="p-card-gamer" style={{ backgroundImage: `url(${perfume.image})` }}>
                    <div className="p-gamer-info">
                        <h3>{perfume.name}</h3>
                    </div>
                    <div className="p-gamer-price">
                        <p>{perfume.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PerfumLineTwo