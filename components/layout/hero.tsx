import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="bg-blue-500 text-white py-24 w-full">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Manage Your Clubs with Ease</h1>
        <p className="text-lg mb-6">
          Our platform helps you keep track of all the clubs you are currently attending, stay updated on events, and manage club information.
        </p>
        <Button className="bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-200">
          Get Started
        </Button>
      </div>
    </section>
  );
}
