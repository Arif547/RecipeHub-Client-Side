import { Link, useLocation } from 'react-router';

const ServicesButton = () => {
    const location = useLocation();

    // Only show button if not on "/services"
    if (location.pathname === '/services') return null;

    return (
        <div className='text-center mt-15'>
            <Link
                to='/services'
                className="btn btn-primary px-7 py-6 text-[20px] text-white hover:btn-secondary border-0 shadow-none"
            >
                Services
            </Link>
        </div>
    );
};

export default ServicesButton;
