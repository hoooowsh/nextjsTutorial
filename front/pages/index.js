import MeetupList from "../components/meetups/MeetupList";
import Navbar from "../components/navbar/Navbar";

const DUMMY = [
  {
    id: "M1",
    title: "first",
    image:
      "https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa",
    address: "some address",
    description: "des",
  },
  {
    id: "M2",
    title: "second",
    image:
      "https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa",
    address: "some address",
    description: "des",
  },
  {
    id: "M3",
    title: "third",
    image:
      "https://lh3.googleusercontent.com/ztbU9w1aYNWu8agShKYG4b-Aa1eh6CsLXuk59B2s9XuPaslLthiU7v0EoxLHbRAtFb0=w600-rwa",
    address: "some address",
    description: "des",
  },
];

function HomePage() {
  return (
    <dev>
      <h1>Home page.</h1>
      <MeetupList meetups={DUMMY} />
    </dev>
  );
}

export default HomePage;
