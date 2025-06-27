import { FaUtensils, FaConciergeBell, FaRibbon, FaLeaf, FaBoxOpen, FaWallet } from 'react-icons/fa';
import { Link } from 'react-router';
import ServicesButton from './ServicesButton';

const services = [
    {
        icon: <FaUtensils className="text-4xl text-green-600" />,
        title: "Best Chef Cook",
        description: "Discover the Art of Culinary Excellence with the Best Chef Cook for Every Gourmet Occasion!",
    },
    {
        icon: <FaConciergeBell className="text-4xl text-orange-500" />,
        title: "Delicious Food",
        description: "Experience the Joy of Flavorful Meals That Delight Your Taste Buds and Satisfy Every Craving!",
    },
    {
        icon: <FaRibbon className="text-4xl text-green-600" />,
        title: "High Quality Service",
        description: "Delivering exceptional, high-quality service to meet your needs with precision and care every time.",
    },
    {
        icon: <FaLeaf className="text-4xl text-orange-500" />,
        title: "Seasonal Menus",
        description: "Explore our seasonal menus, featuring fresh ingredients and unique flavors for every occasion.",
    },
    {
        icon: <FaBoxOpen className="text-4xl text-green-600" />,
        title: "Sourced Ingredients",
        description: "Premium, locally sourced ingredients for fresh, flavorful meals that nourish and delight every bite.",
    },
    {
        icon: <FaWallet className="text-4xl text-orange-500" />,
        title: "Fits Your Budget",
        description: "Affordable solutions that perfectly align with your budget, providing value without compromising on quality.",
    },
];

const Services = () => {
    return (
        <div className="py-[112px] px-4 md:px-12 text-center">
            <div className='max-w-7xl mx-auto'>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10">Satisfaction Guaranteed</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl shadow-md py-8 p-6 hover:shadow-lg transition-all duration-300 border border-primary"
                        >
                            <div className="mb-4 justify-items-center">{service.icon}</div>
                            <h3 className="text-xl text-black font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <ServicesButton></ServicesButton>
        </div>
    );
};

export default Services;
