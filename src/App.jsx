import React, { useState } from "react";
import "./App.css";

const dictionary = {
  abandon: "To leave something or someone completely.",
  ability: "The power or skill to do something.",
  achieve: "To successfully complete or reach a goal.",
  admire: "To respect or like someone or something.",
  adventure: "An exciting or unusual experience.",
  advice: "A suggestion about what someone should do.",
  ancient: "Belonging to a very old period of history.",
  angry: "Feeling strong displeasure or annoyance.",
  answer: "A response to a question.",
  appear: "To become visible or seem to be present.",
  brave: "Having courage and facing danger without fear.",
  beautiful: "Very pleasing to look at or experience.",
  believe: "To accept something as true.",
  benefit: "An advantage or helpful result.",
  bright: "Giving out or reflecting a lot of light.",
  calm: "Peaceful and free from excitement or worry.",
  careful: "Making sure to avoid danger or mistakes.",
  celebrate: "To do something special for an important event.",
  challenge: "A difficult task that tests ability or skill.",
  change: "To make something different.",
  choose: "To select one thing from several options.",
  clever: "Quick to understand, learn, or solve problems.",
  comfort: "A state of physical or emotional ease.",
  complete: "Having all necessary parts or being finished.",
  confident: "Feeling sure about your abilities or decisions.",
  create: "To make or produce something new.",
  curious: "Wanting to know or learn something.",
  danger: "The possibility of harm or injury.",
  decide: "To make a choice after thinking about something.",
  discover: "To find something for the first time.",
  dream: "A series of thoughts or images during sleep, or a strong hope.",
  eager: "Very interested and excited to do something.",
  educate: "To teach or give knowledge to someone.",
  effort: "The physical or mental energy used to do something.",
  elegant: "Graceful and stylish in appearance or manner.",
  encourage: "To give someone support or confidence.",
  energy: "The ability to do work or be active.",
  enjoy: "To take pleasure or happiness from something.",
  essential: "Absolutely necessary or very important.",
  exciting: "Causing great enthusiasm or interest.",
  famous: "Known by many people.",
  freedom: "The power or right to act, speak, or choose freely.",
  friendly: "Kind and pleasant toward others.",
  future: "The time that has not happened yet.",
  generous: "Willing to give or share more than expected.",
  gentle: "Kind, calm, and careful in behavior.",
  grateful: "Feeling thankful for something.",
  happiness: "The state of feeling pleasure or satisfaction.",
  honest: "Truthful and sincere.",
  hopeful: "Feeling that something good is likely to happen.",
  idea: "A thought, plan, or suggestion.",
  important: "Having great value or significance.",
  improve: "To make something better.",
  intelligent: "Having a good ability to learn and understand.",
  journey: "Travel from one place to another.",
  knowledge: "Information and understanding gained through learning.",
  laugh: "To make sounds showing amusement or happiness.",
  learn: "To gain knowledge or skill through study or experience.",
  liberty: "The state of being free.",
  lovely: "Very pleasant, beautiful, or enjoyable.",
  loyal: "Giving strong and continuous support.",
  magic: "Special power that appears to make impossible things happen.",
  manage: "To succeed in dealing with or controlling something.",
  memory: "The ability to remember information or experiences.",
  mistake: "An action or decision that is incorrect.",
  motivate: "To give someone a reason or desire to do something.",
  natural: "Existing in nature and not made by humans.",
  necessary: "Needed for a particular purpose.",
  observe: "To watch or notice something carefully.",
  opportunity: "A good chance to do or achieve something.",
  ordinary: "Normal and not special or unusual.",
  patience: "The ability to wait calmly without becoming annoyed.",
  peaceful: "Calm and free from conflict or disturbance.",
  perfect: "Completely correct or without faults.",
  positive: "Having a hopeful or constructive attitude.",
  powerful: "Having great strength, influence, or effect.",
  practice: "Repeated activity done to improve a skill.",
  precious: "Very valuable or important.",
  protect: "To keep someone or something safe from harm.",
  quickly: "At a fast speed.",
  quiet: "Making very little or no noise.",
  remember: "To keep something in your mind or recall it.",
  respect: "A feeling of admiration for someone or something.",
  responsible: "Having a duty to deal with something properly.",
  successful: "Having achieved a desired result or goal.",
  simple: "Easy to understand or do.",
  sincere: "Genuine, honest, and not pretending.",
  skill: "The ability to do something well.",
  smart: "Having a good ability to think and learn.",
  strong: "Having great physical or mental power.",
  success: "The achievement of a desired goal.",
  support: "To help or give assistance to someone.",
  surprise: "An unexpected event or feeling caused by something unexpected.",
  talent: "A natural ability to do something well.",
  teach: "To give someone knowledge or skills.",
  thankful: "Feeling or showing gratitude.",
  thoughtful: "Showing care and consideration for others.",
  trust: "A strong belief that someone or something is reliable.",
  useful: "Helpful or practical for a particular purpose.",
  valuable: "Worth a lot of money or importance.",
  victory: "Success in a competition or struggle.",
  wisdom: "The ability to make good decisions based on knowledge and experience.",
  wonderful: "Extremely good, enjoyable, or impressive.",
  world: "The earth and all its people and places.",
  youth: "The period of life when someone is young."
};

function App() {
  const [search, setSearch] = useState("");

  const filteredWords = Object.entries(dictionary).filter(([word, meaning]) =>
    word.toLowerCase().includes(search.toLowerCase()) ||
    meaning.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <div className="dictionary">
        <h1>📖 React Dictionary</h1>
        <p className="subtitle">
          Search for the meaning of an English word
        </p>

        <input
          type="text"
          placeholder="Search a word..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <p className="count">
          {filteredWords.length} word
          {filteredWords.length !== 1 ? "s" : ""} found
        </p>

        <div className="word-list">
          {filteredWords.length > 0 ? (
            filteredWords.map(([word, meaning]) => (
              <div className="word-card" key={word}>
                <h2>{word}</h2>
                <p>{meaning}</p>
              </div>
            ))
          ) : (
            <div className="not-found">
              <h2>Word not found 😕</h2>
              <p>Try searching for another word.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

