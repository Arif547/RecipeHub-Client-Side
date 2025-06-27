import React from 'react';
import { Slide } from 'react-awesome-reveal';

const TestimonialCards = () => {
    const testimonials = [
        {
            name: "Emma Watson",
            role: "Home Cook & Food Blogger",
            image: "https://i.ibb.co/tPHbtJJ1/7.jpg",
            quote: "I love how easy it is to add and manage my recipes! The interface is clean, and I can update ingredients and steps anytime. It's my go-to digital cookbook!"
        },
        {
            name: "Michael Ross",
            role: "Food Enthusiast",
            image: "https://i.ibb.co/V0T3G93Z/6.jpg",
            quote: "The top recipes section is super helpful! I’ve discovered many new dishes. The like system keeps the best ones at the top!"
        },
        {
            name: "Sophie Lane",
            role: "New User",
            image: "https://i.ibb.co/XxrcvKq6/5.jpg",
            quote: "I was amazed at how simple it was to register and start sharing recipes. It works great on mobile and I love exploring cuisines!"
        }
    ];
    return (
        <div className='bg-[#fffdf7]'>
            <section className="py-[112px] max-w-7xl mx-auto px-5 md:px-16">
                <Slide direction="down">
                    <h2 className="text-center text-black text-3xl md:text-4xl lg:text-5xl font-bold mb-10">What Our Users Say</h2>
                </Slide>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="card bg-white shadow-xl p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover grayscale" />
                                <div>
                                    <p className="font-semibold text-2xl text-black mb-1">{t.name}</p>
                                    <p className="text-sm text-gray-500">{t.role}</p>
                                </div>
                            </div>
                            <div className="text-base leading-relaxed text-gray-700">
                                <span className="text-green-500 text-xl font-bold">“</span>
                                {t.quote}
                                <span className="text-green-500 text-xl font-bold">”</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TestimonialCards;