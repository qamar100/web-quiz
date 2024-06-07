import React from 'react';
//import './Tweetpage.css'; // Optional: For additional styling not covered by Tailwind
import Image from 'next/image';
import logo from "../../public/logo.png"

interface TweetProps {
  name: string;
  username: string;
  content: string;
  timestamp: string;
}

const Tweet: React.FC<TweetProps> = ({ name, username, content, timestamp }) => (
  
    <div className='w-screen min-h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
    <div className="tweet px-4 py-2">
    <div className="tweet-header flex items-center justify-between">
      <span className="text-lg font-bold">{name}</span>
      <span className="text-gray-500 text-sm">{username}</span>
    </div>
    <p className="tweet-content mt-1">{content}</p>
    <span className="text-gray-500 text-sm">{timestamp}</span>
        </div>
        </div>
);

interface TweetpageProps {}

const Tweetpage: React.FC<TweetpageProps> = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-r from-rose-100 to-teal-100">
      <header className="flex px-4 py-2 bg-gradient-to-r from-rose-100 to-teal-100">
        {/* Logo and Navigation (replace with your logo and navigation links) */}
        <Image src={logo} alt="Twitter logo" className="h-8 w-8 mr-4 bg-gradient-to-r from-rose-100 to-teal-100" />
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 font-bold">Home</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Explore</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Notifications</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Messages</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Profile</a>
          <button className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">Tweet</button>
        </nav>
      </header>
      <main className="flex-grow px-4 py-4">
        <section className="tweet-composer flex space-x-4 p-4 border border-gray-200 rounded-md">
          {/* Implement tweet composing functionality here */}
          <textarea
            placeholder="What's happening?"
            className="w-full h-16 resize-none border-none focus:outline-none"
          ></textarea>
          <button className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-700">Tweet</button>
        </section>
        <section className="tweet-feed mt-4">
          {/* Display tweets from followed users and other relevant content */}
          <Tweet
            name="User 1"
            username="@user1"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            timestamp="Just now"
          />
          <Tweet
            name="User 2"
            username="@user2"
            content="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
            timestamp="1 min ago"
          />
          {/* ... Add more Tweet components here ... */}
        </section>
      </main>
    </div>
  );
};

export default Tweetpage;