import './App.css'
import {useState} from 'react'

const TakeSurvey = () => {
  const [survey, setSurvey] = useState("");

  const clickHandler = () => {
    alert(`Survey Response ${survey}`);
  };

  return (
    <div>
      <label>Take the Survey: </label>
      <textarea rows="5" onChange={(e) => setSurvey(e.target.value)} />
      <button onClick={clickHandler}>Submit Survey</button>
    </div>
  );
};

const SaveRecipe = () => {
  const [recipes, setRecipe] = useState('');
  const [getRecipe, setGetRecipe] = useState('');

  const clickHandler = () => {
    let listElement = recipes.split('.').filter(recipe => recipe.trim()).map(recipe => <li>{recipe}</li>)
    setGetRecipe(listElement)
    console.log(listElement)
  }
  
  return(
    <div>
      <label>Write your recipe: </label>
      <textarea rows='5' onChange={(e) => setRecipe(e.target.value)}/>
      <button onClick={clickHandler}>Save Recipe</button>
      <ol>
        {getRecipe}
      </ol>
    </div>
  )
};

const DearDiary = () => {
  const [diary, setDiary] = useState('');
  const [getDiary, setGetDiary] = useState('');

  const clickHandler = () => {
    setGetDiary(diary)
  }
  
  return (
    <div>
      <label>Write your diary entry: </label>
      <textarea rows='5' onChange={(e) => setDiary(e.target.value)}/>
      <button onClick={clickHandler}>Save Diary Entry</button>
      {
        getDiary &&  <p style={{fontStyle: 'italic'}}>Diary Entry Saved: {getDiary}</p>
      }
     
    </div>
  )
}

const MyStory = () => {
  const [story, setStory] = useState('');
  const [getStory, setGetStory] = useState('');

  const clickHandler = () => {
      setGetStory(story)
  }
  
  return (
    <div>
      <label>Share Your Story: </label>
      <textarea rows='5' onChange={(e) => setStory(e.target.value)}/>
      <button onClick={clickHandler}>Sbmit Story</button>
      {
        getStory &&  <p>your story: {getStory}</p>
      }
     
    </div>
  )
}

const ListItems = () => {
  const [item, setItem] = useState('');
  const [getItem, setGetItem] = useState('');

  const clickHandler = () => {
    let listElement = item.split(', ').map(list => <li>{list}</li>)
    setGetItem(listElement)
  }
  
  return (
    <div>
      <label>Enter a list of Items: </label>
      <textarea rows='5' onChange={(e) => setItem(e.target.value)}/>
      <button onClick={clickHandler}>Display Items</button>
      <ul>{getItem}</ul>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <main>
        <TakeSurvey />
        <br/>
        <SaveRecipe/>
        <br/>
        <DearDiary/>
        <br/>
        <MyStory/>
        <br/>
        <ListItems/>
      </main>
    </main>
  )
}
