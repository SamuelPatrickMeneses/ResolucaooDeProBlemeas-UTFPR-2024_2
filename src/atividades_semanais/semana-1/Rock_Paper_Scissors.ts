const scenarios: any = {
  "scissors":{
      "scissors": "Draw!",
      "paper": "Player 1 won!",
      "rock": "Player 2 won!"
  },
  "paper":{      
      "scissors": "Player 2 won!",
      "paper": "Draw!",
      "rock": "Player 1 won!"
  },
  "rock":{
      "scissors": "Player 1 won!",
      "paper": "Player 2 won!",
      "rock": "Draw!"
  }
}
export function rps(p1: string, p2: string): string{
  return scenarios[p1][p2];
}
