import perfumeImage1 from '../assets/p_fantasy01.jpg';
import perfumeImage2 from '../assets/p_fantasy02.jpg';
import perfumeImage3 from '../assets/p_fantasy03.jpg';
import perfumeImage4 from '../assets/p_fantasy04.jpg';

function PerfumLineThree() {
    const perfumes = [
        { name: 'Enchanted Garden', price: 'R$ 160,00', image: perfumeImage1 },
        { name: 'Mystic Potion', price: 'R$ 190,00', image: perfumeImage2 },
        { name: 'Fairy Tale Bliss', price: 'R$ 170,00', image: perfumeImage3 },
        { name: 'Magic Spell', price: 'R$ 200,00', image: perfumeImage4 },
    ];

    return (
        <div className="p-fantasy-line">
            {perfumes.map((perfume, index) => (
                <div key={index} className="p-fantasy-card" style={{ backgroundImage: `url(${perfume.image})` }}>
                    <div className="p-fantasy-info">
                        <h3>{perfume.name}</h3>
                    </div>
                    <div className="p-fantasy-price">
                        <p>{perfume.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PerfumLineThree