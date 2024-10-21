export default function Overview() {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Platform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Track Your Clubs</h3>
              <p>Keep all your clubs organized and access them easily.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Get Real-Time Updates</h3>
              <p>Stay updated on club events, meetings, and activities.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Manage Club Info</h3>
              <p>Edit and update club details effortlessly from one place.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  