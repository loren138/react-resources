import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import SelectedItem from './components/SelectedItem';
import Barry from './otters/otter1.jpg';
import Robin from './otters/otter2.jpg';
import Maurice from './otters/otter3.jpg';
import Lesley from './otters/otter4.jpg';
import Barbara from './otters/otter5.jpg';

const ottersArray = [
  { image: Barry, name: 'Barry', id: 1 },
  { image: Robin, name: 'Robin', id: 2 },
  { image: Maurice, name: 'Maurice', id: 3 },
  { image: Lesley, name: 'Lesley', id: 4 },
  { image: Barbara, name: 'Barbara', id: 5 },
];

function App() {
  return (
    <div>
      <Header />
      <div className='app-content'>
        <ul className='post-list'>
          {ottersArray.map((post) => (
            <Post
              key={post.id}
              image={post.image}
              name={post.name}
            />
          ))}
        </ul>
        <SelectedItem
          image={ottersArray[0].image}
          name={ottersArray[0].name}
        />
      </div>
    </div>
  );
}

export default App;
