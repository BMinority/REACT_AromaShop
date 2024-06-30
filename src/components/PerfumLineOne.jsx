import '../css/perfumLOne.css';

import perfumeImage1 from '../assets/perfume_rose01.jpg';
import perfumeImage2 from '../assets/perfume_rose02.jpg';
import perfumeImage3 from '../assets/perfume_rose03.jpg';
import perfumeImage4 from '../assets/perfume_rose04.jpg';

const PerfumLineOne = () => {
    const perfumes = [
        { name: 'Essence of Elegance', price: 'R$ 150,00', image: perfumeImage1, description: 'Um perfume delicado e sofisticado, perfeito para ocasiões especiais.' },
        { name: 'Mystic Forest', price: 'R$ 180,00', image: perfumeImage2, description: 'Com notas de madeira e especiarias, inspirado na magia das florestas místicas.' },
        { name: 'Ocean Breeze', price: 'R$ 170,00', image: perfumeImage3, description: 'Uma fragrância refrescante com acordes marinhos, ideal para dias ensolarados.' },
        { name: 'Golden Sunset', price: 'R$ 200,00', image: perfumeImage4, description: 'Um aroma que captura o calor do pôr do sol dourado, evocando elegância e calor.' },
    ];

    return (
        <div className="perfume-line">
            {perfumes.map((perfume, index) => (
                <div key={index} className="perfume-card" style={{ backgroundImage: `url(${perfume.image})` }}>
                    <div className="perfume-info">
                        <h3>{perfume.name}</h3>
                        <p>{perfume.price}</p>
                    </div>
                    <div className="perfume-details">
                        <p>{perfume.description}</p>
                        <button className="btn-comprar">Comprar agora</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PerfumLineOne;
