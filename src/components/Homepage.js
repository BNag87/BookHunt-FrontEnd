//import an image for bg use
import background from '../images/pageBG2.png';

import CardDeck from './CardDeck';

var homepageWindowStyle = {
  div: {
    // set a background image for the div that contains the page content
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: 'black',
    margin: '5px',
    padding: '5px',
  },

  //style all h1 elements **in this component**
  h1: {
    color: 'grey',
  },
};

const testData = [
  {
    id: 0,
    title: 'The Year of the Locust: Terry Hayes',
    author: 'Terry Hayes',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51yzXRsP89L._SX319_BO1,204,203,200_.jpg',
    price: '£16.00',
    review: '3.2 out of 5 stars',
    description: 'THE AMAZING NEW THRILLER FROM TERRY HAYES. ',
    source: 'www.amazon.co.uk',
  },
  {
    id: 1,
    title: 'Billy Summers: The No. 1 Bestseller',
    author: 'Stephen King',
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51CR2a6HU1S._SX323_BO1,204,203,200_.jpg',
    price: '£10.00',
    review: '4.6 out of 5 stars',
    description:
      "'A dazzlingly shapeshifting novel . . . equally good at action scenes and in-depth psychology' The Sunday Times'A thriller with a surprisingly heartfelt and redemptive ending, Billy Summers is a compelling and engrossing read' Sunday ExpressFrom legendary storyteller and No. 1 bestseller Stephen King, whose 'restless imagination is a power that cannot be contained' (The New York Times Book Review), comes a thrilling new novel about a good guy in a bad job.Billy Summers is a man in a room with a gun. He's a killer for hire and the best in the business. But he'll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong? How about everything.This spectacular can't-put-it-down novel is part war story, part love letter to small town America and the people who live there, and it features one of the most compelling and surprising duos in King fiction, who set out to avenge the crimes of an extraordinarily evil man. It's about love, luck, fate, and a complex hero with one last shot at redemption. You won't put this story down, and you won't forget Billy.",
    source: 'www.amazon.co.uk',
  },
];

const Homepage = () => {
  return (
    <div style={homepageWindowStyle.div}>
      <CardDeck data={testData} />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
    </div>
  );
};

export default Homepage;
