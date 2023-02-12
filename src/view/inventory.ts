import { Chessground } from 'chessground';
import { h } from 'snabbdom';
import { Ctrl } from '../ctrl';
import { Game, Renderer } from '../interfaces';
import OngoingGames from '../ongoingGames';
import { href } from '../routing';

export const renderInventory: Renderer = ctrl => (ctrl.auth.me ? userInventory(ctrl) : anonInventory());

const userInventory = (ctrl: Ctrl) => [
  h('div', [
    





    //ImmutableX inventory shown here

    //User can select from his inventory what he wants for each of the 12 Pieces:
    //White King
    //White Queen
    //White Bishop
    //White Knight
    //White Rook
    //White Pawn
    //Black ...
    //Black ...
    //Black ...
    //Black ...
    //Black ...
    //Black ...

    //if nothing selected use base set
    //see scss/_chessground.cburnett.css to see how images are stored as Base64 GIFS
    //HANDY DANDY TOOL TO CONVERY GIF -> DATA URI FORMAT: https://base64.guru/converter/encode/image



    h('h2.mt-5.mb-3', 'About'),
    renderAbout(),
  ]),
];

const renderGames = (ongoing: OngoingGames) =>
  ongoing.games.length ? ongoing.games.map(renderGameWidget) : [h('p', 'No ongoing games at the moment')];

const renderGameWidget = (game: Game) =>
  h(
    `a.game-widget.text-decoration-none.game-widget--${game.id}`,
    {
      attrs: href(`/game/${game.gameId}`),
    },
    [
      h('span.game-widget__opponent', [
        h('span.game-widget__opponent__name', game.opponent.username || 'Anon'),
        game.opponent.rating && h('span.game-widget__opponent__rating', game.opponent.rating),
      ]),
      h(
        'span.game-widget__board.cg-wrap',
        {
          hook: {
            insert(vnode) {
              const el = vnode.elm as HTMLElement;
              Chessground(el, {
                fen: game.fen,
                orientation: game.color,
                lastMove: game.lastMove.match(/.{1,2}/g),
                viewOnly: true,
                movable: { free: false },
                drawable: { visible: false },
                coordinates: false,
              });
            },
          },
        },
        'board'
      ),
    ]
  );

const anonInventory = () => [
  h('div.login.text-center', [
    renderAbout(),
    h('div.big', [h('p', 'Please log in to continue.')]),
    h(
      'a.btn.btn-primary.btn-lg.mt-5',
      {
        attrs: href('/login'),
      },
      'Login with Lichess'
    ),
  ]),
];

const renderAbout = () =>
  h('div.about', [
    h('p', 'Welcome to Chess 3.0, a new chess platform built using ImmutableX blockchain technology and the Lichess API. Play the age old classic game and earn, collect, trade, buy, sell, and play with our NFT chess pieces!'),
    h('ul', [
      h(
        'li',
        h(
          'a',
          {
            attrs: { href: 'https://github.com/Hadi-Khan-Projects/Chess3.0' },
          },
          'Have a peek at our GitHub repository'
        )
      ),
      h(
        'li',
        h(
          'a',
          {
            attrs: { href: 'https://www.immutable.com' },
          },
          'Find out more about ImmutableX'
        )
      ),
      h(
        'li',
        h(
          'a',
          {
            attrs: { href: 'https://lichess.org/api' },
          },
          'Learn more about the Lichess API'
        )
      ),
    ]),
  ]);
