import logo from './SolSlugsLogo.svg';
import twitterLogo from './twitter.svg';
import discordLogo from './discord.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <ul>
          <li><a href='#mint'>Mint</a></li>
          <li><a href='#faq'>FAQ</a></li>
        </ul>
      </div>
    <div className="info">
      <div className='slugFrame'>
          <img src="/slugs.gif" className="slugImg" alt="slug" />
      </div>
      <img src={logo} className="logo" alt="logo" />

    </div>

      <div className='main'>
        <h1 id='faq'>FAQ</h1>
        <ul>
          <li>
            <h2>What are Sol Slugs?</h2>
            <p>Slug-themed NFTs that are gonna be cool, badass, and sluggy.</p>
          </li>
          <li>
            <h2>WEN MINT???</h2>
            <p>We have not set a date for minting yet. The date will depend on when we can complete the art assets and set up the infrastructure to facilitate the minting launch! Short answer, we will let you know when we know! MINT date IS TBD.</p>
          </li>
          <li>
            <h2>How many slugs will be minted?</h2>
            <p>The current agreement for Sol Slugs is to mint 10,000 Slugs. This will be a FREE MINT so everyone can participate! That means it is recommended to have AT LEAST 0.1 Solana in your wallet for the minting process.</p>
          </li>
        </ul>

        <a href="https://twitter.com/SolSlugsNFT"><img src={twitterLogo}></img> Twitter</a> <br />
        <a href="https://discord.gg/zqdrguPfUa"><img src={discordLogo}></img> Discord</a>
        
        <div className='mint' id='mint'>
          <h2>Mint</h2>
          <p>Coming soon</p>
        </div>
      </div>

      <div>
      </div>
    </div>
  );
}

export default App;
