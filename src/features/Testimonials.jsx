import React from 'react';
import Marquee from '../components/UI/Marquee/Marquee';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Emily Johnson',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    feedback: 'So easy to use! Saved me hours. I couldn’t believe how streamlined everything felt.',
    rating: 4.5,
  },
  {
    name: 'Michael Smith',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback: 'Insightful data and amazing UI! I was impressed from the first login.',
    rating: 5,
  },
  {
    name: 'Jessica Williams',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    feedback:
      'Loved how intuitive the platform is. It’s a game changer for real estate investment.',
    rating: 4,
  },
  {
    name: 'David Brown',
    photo: 'https://randomuser.me/api/portraits/men/76.jpg',
    feedback: 'Helped me close deals faster and saved me hours each week!',
    rating: 4.5,
  },
];

// Converts rating into stars with full and half star icons
const getStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} />);
  }
  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half" />);
  }
  return stars;
};

const Testimonials = () => {
  return (
    <section className="bg-white/5 text-white py-16 mb-[10vw]">
      <h2 className="mb-8 text-3xl font-semibold text-center">What Our Users Say</h2>
      <Marquee speed={20}>
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="flex items-start gap-5 bg-white/5 px-8 py-6 rounded-2xl shadow-md min-w-[350px] max-w-xs mx-3"
          >
            <img src={t.photo} alt={t.name} className="object-cover mt-1 rounded-full w-14 h-14" />
            <div className="flex flex-col">
              <p className="mb-2 text-base italic leading-snug line-clamp-3 text-wrap">
                &ldquo;{t.feedback}&rdquo;
              </p>
              <div className="flex gap-1 text-sm text-yellow-400">{getStars(t.rating)}</div>
              <p className="mt-2 text-sm text-white/60">— {t.name}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonials;