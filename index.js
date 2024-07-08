const quotes = [
  {
    author: "Ralph Waldo Emerson",
    quote: "For every minute you are angry you lose sixty seconds of happiness."
  },
  {
    author: "Audrey Hepburn",
    quote: "The most important thing is to enjoy your life—to be happy—it's all that matters."
  },
  {
    author: "Steve Maraboli",
    quote: "Happiness is not the absence of problems, it's the ability to deal with them."
  },
  {
    author: "Christian Dior",
    quote: "Happiness is the secret to all beauty; there is no beauty without happiness."
  },
  {
    author: "Steve Martin",
    quote: "A day without sunshine is like, you know, night."
  },
  {
    author: "Ralph Waldo Emerson",
    quote: "For every minute you are angry you lose sixty seconds of happiness."
  },
  {
    author: "Earl Wilson",
    quote: "If you think nobody cares if you’re alive, try missing a couple of payments."
  },
  {
    author: "Ralph Waldo Emerson",
    quote: "Enjoy the little things in life, for one day you may look back and realize they were the big things."
  },
  {
    author: "Robert Breault",
    quote: "For every minute you are angry you lose sixty seconds of happiness."
  },
  {
    author: "Abraham Lincoln",
    quote: "Most folks are as happy as they make up their minds to be."
  },
  {
    author: "George Burns",
    quote: "Happiness is having a large, loving, caring, close-knit family in another city."
  },
  {
    author: "Ralph Waldo Emerson",
    quote: "For every minute you are angry you lose sixty seconds of happiness."
  },
  {
    author: "Clare Boothe Luce",
    quote: "Money can't buy happiness, but it can make you awfully comfortable while you're being miserable."
  },
]

const cngBtn = document.querySelector('.cng-btn')
const quoteTxt = document.querySelector('.quote-txt')
const author = document.querySelector('.author')

cngBtn.addEventListener('click', ()=> {
  let random = Math.floor(Math.random()*quotes.length)
  quoteTxt.innerText = quotes[random].quote
  author.innerText = quotes[random].author
})