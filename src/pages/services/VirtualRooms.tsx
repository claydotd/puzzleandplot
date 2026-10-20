const games = [
  {
    name: 'Early Summons',
    description: 'You have been called into work at a very early hour by your boss but when you get there, something isn’t right. Strange new locks have appeared, a threatening message has been scrawled on a wall, your supervisor seemed to have mysteriously disappeared but worst of all; an uncooperative squirrel is taunting you from the treetops! Can you solve the mystery of what the hell is going on before your shift ends? ',
  },
  {
    name: 'A ruff night at the museum…or alternative title; scooby dooby do-n’t say that because of copy right infringement!',
    description: 'You and your gang of legally distinct characters have been asked to solve the mystery of a spooky spectre haunting the Natural History Museum. It seems like the frightening phantom appeared when the new Viking exhibit arrived, gliding down the halls surrounded by an eerie light, whilst calling out for something. What does it want? What is it calling for? Will you ever get to finish that massive meatball sandwich you were looking forward to eating?'
  },
  {
    name: 'Room Number One',
    description: 'You are standing in a corridor in front of three doors. You have done this almost every night for as long as you can remember. There’s always three doors, then three more and three more. They all lead to different types of rooms, some more pleasant than others. All you want is to reach room number one. You don’t know why but you are sure if you can escape room number one this dream will stop once and for all and you will finally be free.'
  },
  {
    name: "The Haunting of McPhilimy Manor",
    description: 'You and your friends run a paranormal investigations agency and have been hired to help out the current owner of the famous McPhilimy Manor to evict some bothersome tenants, namely four ghosts that just won’t leave!  Can you find out who they once were and why they are still haunting the halls of the manor?'
  },
  {
    name: 'Christmas special- The Curious Case of the Missing Husband',
    description: 'You swore you would never take on another case again after losing your partner, Frosty, but after one unexpected visit from the one person you can’t say no to, all is about to change. Grab your magnifying glass, your winter coat and put your detective skills to the test with this Christmas mystery.'
  }
]

export default function VirtualRooms() {
  return (
    <div className="service-page">
      <div className="service-page-header">
        <h1>Online Virtual Escape Rooms</h1>
        <h2>total cost: <strong>£49</strong></h2>
      </div>
      <div className="service-page-details">
        <p>This is a type of game wherein I <em>(your formidable game master)</em> will host a fun escape room experience through a video call. You and your friends or family will join from your home by means of a laptop/computer/ tablet. I will describe the scene to you and when you explore it and uncover clues. I will send you pictures of puzzles for you to solve. </p>
        <p>There are no timers and success is guaranteed because I’m always there to nudge you in the right direction if you need it.</p>
        <p>The only other thing you will need is a pen and paper! (See FAQ for more information).</p>
      </div>
      <div className="how-it-works">
        <h2>How it works</h2>
        <ol>
          <li>Start with filling out the enquiry form and specify which game you would like to play. The price is per group and not per player. </li>
          <li>I will send you instructions on how to join the call nearer the time</li>
          <li>On the day of the game I will check everything is still ok to go ahead and at the agreed time I will call you and we will begin our adventure!</li>
        </ol>
      </div>
      <div className="game-list">
        <h2>Games to choose from:</h2>
        <ul>
          {games.map((game) => (
            <li key={game.name}>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}