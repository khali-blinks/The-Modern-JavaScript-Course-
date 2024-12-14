const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]

// Creating a ul
const ulParent = document.createElement('ul')
for (let game of warriorsGames){
    const {awayTeam,homeTeam} = game;
    // creating a li
    const gameLi = document.createElement('li')
    const {team :aTeam,points:aPoints} = awayTeam;
    const {team :hTeam,points:hPoints} = homeTeam;
    const teams = `${aTeam} @ ${hTeam}`
    const gamePoints = `${aPoints} - ${hPoints}`
    let scoreline;
    if (aPoints > hPoints){
        scoreline = `<b>${aPoints}</b>-${hPoints}` 
    } else {
        scoreline = `${aPoints}-<b>${hPoints}</b>`
    }
    const warriors =hTeam === 'Golden State'? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner? 'win' : 'loss')
    gameLi.innerHTML = `${teams} ${scoreline}`
    ulParent.appendChild(gameLi); // we will not see anything on our webpage because ulParent is not associated with the webpage 
}
// to show it in the body
document.body.prepend(ulParent)

// Refactoring the whole show
const makeChart = (games, targetTeam) => {
	const ulParent = document.createElement('ul');
	for (let game of games) {
		const gameLi = document.createElement('li');
		gameLi.innerHTML = getScoreLine(game);
		gameLi.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
		ulParent.appendChild(gameLi);
	}
	return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
	const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
	return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
	const { team: hTeam, points: hPoints } = homeTeam;
	const { team: aTeam, points: aPoints } = awayTeam;
	const teamNames = `${aTeam} @ ${hTeam}`;
	let scoreLine;
	if (aPoints > hPoints) {
		scoreLine = `<b>${aPoints}</b>-${hPoints}`;
	}
	else {
		scoreLine = `${aPoints}-<b>${hPoints}</b>`;
	}
	return `${teamNames} ${scoreLine}`;
};

//Select the 2 sections to append to (from index.html)
const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');

// Make the 2 charts:
const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');

//Append them!
gsSection.appendChild(gsChart);
houstonSection.appendChild(hrChart);

// addEventListner
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
	alert('CLICKED!!!');
});

btn.addEventListener('click', function() {
	console.log('SECOND THING!!');
});

btn.addEventListener('mouseover', function() {
	btn.innerText = 'STOP TOUCHING ME';
});

btn.addEventListener('mouseout', function() {
	btn.innerText = 'Click Me!';
});

window.addEventListener('scroll', function() {
	console.log('STOP SCROLLING!!');
});

// The Impossible Button Demo
const btn1 = document.querySelector('#newbutton');

btn1.addEventListener('mouseover', function() {
	console.log('MOUSED OVER ME!');
	const height = Math.floor(Math.random() * window.innerHeight);
	const width = Math.floor(Math.random() * window.innerWidth);
	btn1.style.left = `${width}px`;
	btn1.style.top = `${height}px`;
});

btn1.addEventListener('click', function() {
	btn1.innerText = 'YOU GOT ME!';
	document.body.style.backgroundColor = 'green';
});