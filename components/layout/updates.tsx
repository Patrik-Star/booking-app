// components/Updates.js
export default function Updates() {
    const updates = [
      { title: 'Club X Meeting Rescheduled', date: 'October 15, 2024' },
      { title: 'New Event for Club Y', date: 'October 20, 2024' },
      { title: 'Club Z Added New Members', date: 'October 25, 2024' },
    ];
  
    return (
      <section className="py-10 bg-white w-full">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <ul className="space-y-4">
            {updates.map((update, index) => (
              <li key={index} className="border-b pb-4">
                <h3 className="text-xl font-semibold">{update.title}</h3>
                <p className="text-gray-500">{update.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  