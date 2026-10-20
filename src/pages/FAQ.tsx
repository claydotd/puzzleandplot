const faq = [
  {
    question: 'What even is a online-virtual escape room?',
    answer: 'Good question, my friend. It’s basically you, me and a good time…and some of your friends and/or family members. I host a live escape room experience through the medium of dance and video call…mainly video call. I set the scene, send you the clues and you solve the puzzles! And we will laugh and laugh.'
  },
  {
    question: 'Do I really need to get dressed while playing from the comfort of my own home?',
    answer: 'For the sake of everyone in your team, I would say yes, some form of clothing is needed. Pjs are not only recommended but encouraged.'
  },
  {
    question: 'How many friends can I play with? I got like loads',
    answer: 'Good for you for having so many friends! I would definitely recommend between two and five. Any less and you won’t have any to bounce ideas off of and any more it can be tricky to see/share the screen enough so everyone can have a go at the puzzles evenly. But again it’s completely up to you.'
  },
  {
    question: 'How hard are the puzzles?',
    answer: 'For me, they are super easy but then again, I made them so I know the answers. For you? I think I’ve hit the right level of not too hard so you get angry/ not too easy it’s boring. And remember I’m there to give hints and helpful tips so you won’t waste time on false trails and wrong answers.'
  },
  {
    question: 'How long does it take to play one of the games?',
    answer: 'Depends on your level of puzzle experience, enthusiasm and how many bottles of red wine you have consumed (looking at you mum! Honestly she forgot half the letters of the alphabet once so it took way longer than it had to!) but I reckon most people take between one and a half to two hours to complete a game.'
  },
  {
    question: 'Speaking of alcohol, am I allowed to drink while playing?',
    answer: 'Of course, it’s your house, I’m not the boss of you! But I would recommend being quite clear headed and switched on for the best game experience.'
  },
  {
    question: 'Is there a time limit?',
    answer: 'Not unless you want one! If you are the competitive type I’m happy to time you and put you on some sort of leaderboard but the beauty of these kinds of games is that there’s no added stress of a timer ticking down.'
  },
  {
    question: 'I have an exceptionally clever five year old, can they play with me?',
    answer: 'Absolutely, everyone is welcome! There is maybe the odd mild swear word and some creepy descriptions in a few games but there are no themes that are x-rated adult only stuff. I will say though that my own non genius level children didn’t have the attention span until they were teenagers to participate meaningfully. But it’s up to you and your patience level!'
  },
  {
    question: 'Mum, what’s for dinner?',
    answer: '*Long outdrawn sigh*'
  },
  {
    question: 'Why are you so expensive?',
    answer: 'Look, jokes aside, I know money is tight for many people now. And with the way the world is going it might not get any better any time soon so that\'s why I believe finding pockets of joy and having fun with people you love shouldn’t be a privilege only reserved for a chosen few. I pride myself on charging per group and not per person, making it more affordable. I also offer [to be confirmed] % of your first game when signing up for my mailing list, run regular promotions and even have a Puzzle & Plot Partnership Programme coming soon! (Bespoke wedding game not included).'
  }
]
export default function FAQ() {
  return (
    <div className="faq-container">
      <h1>FAQ</h1>
      <div className="faq-list">
        {faq.map((item) => (
          <div className="faq-item" key={item.question}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  )
}