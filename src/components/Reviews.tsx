import { Star } from 'lucide-react';


const reviews = [
  {
   
    id: 7,
    name: "Sneha Iyer",
    text: "Highly recommended for anyone who loves personalized travel planning.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=faces&fit=crop&w=100&h=100"
  },
  {
    id: 8,
    name: "Amit Gupta",
    text: "Exceptional service from start to finish. Truly the best in the business!",
    rating: 3,
    image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?crop=faces&fit=crop&w=100&h=100"
  },
  {
    id: 10,
    name: "Vikram Reddy",
    text: "Amazing planning and execution. I’ll definitely use their service again!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=100&h=100"
  },
  {
    id: 11,
    name: "Meera Nair",
    text: "I was impressed by the care and attention given to every detail.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=100&h=100"
  },
  
  {
    id: 13,
    name: "Alisha Khan",
    text: "They truly made our dream vacation come true. Wonderful team!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=faces&fit=crop&w=100&h=100"
  },
  {
    id: 1,
    name: "saurabh",
    text: "Amazing service! Our family trip was perfectly planned down to the last detail.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 2,
    name: "Ravi gupta",
    text: "Professional team that made our honeymoon truly unforgettable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "komel",
    text: "The attention to detail and personalized service was outstanding!",
    rating: 3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100"
  }
];

  

export default function Reviews() {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12">What Our Clients Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}