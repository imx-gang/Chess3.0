import { Chessground } from 'chessground';
import { h } from 'snabbdom';
import { Ctrl } from '../ctrl';
import { Game, Renderer } from '../interfaces';
import OngoingGames from '../ongoingGames';
import { href } from '../routing';

export const renderInventory: Renderer = ctrl => (ctrl.auth.me ? userInventory(ctrl) : anonInventory());

const piecesDir : string = "./../ChessArt/";
const images : any = {
  whiteKing : [
    piecesDir + 'Base/BaseWhiteKing.gif',
    piecesDir + 'Gold/GoldWhiteKing.gif',
  ],
  whiteQueen : [
    piecesDir + 'Base/BaseWhiteQueen.gif',
    piecesDir + 'Gold/GoldWhiteQueen.gif',
  ],
  whiteBishop : [
    piecesDir + 'Base/BaseWhiteBishop.gif',
    piecesDir + 'Gold/GoldWhiteBishop.gif',
  ],
  whiteKnight : [
    piecesDir + 'Base/BaseWhiteKnight.gif',
    piecesDir + 'Gold/GoldWhiteKnight.gif',
  ],
  whiteRook : [ 
    piecesDir + 'Base/BaseWhiteRook.gif',
    piecesDir + 'Gold/GoldWhiteRook.gif',
  ],
  whitePawn : [
    piecesDir + 'Base/BaseWhitePawn.gif',
    piecesDir + 'Gold/GoldWhitePawn.gif',
  ],
  blackKing : [
    piecesDir + 'Base/BaseBlackKing.gif',
    piecesDir + 'Gold/GoldBlackKing.gif',
  ],
  blackQueen : [
    piecesDir + 'Base/BaseBlackQueen.gif',
    piecesDir + 'Gold/GoldBlackQueen.gif',
  ],
  blackBishop : [
    piecesDir + 'Base/BaseBlackBishop.gif',
    piecesDir + 'Gold/GoldBlackBishop.gif',
  ],
  blackKnight : [
    piecesDir + 'Base/BaseBlackKnight.gif',
    piecesDir + 'Gold/GoldBlackKnight.gif',
  ],
  blackRook : [
    piecesDir + 'Base/BaseBlackRook.gif',
    piecesDir + 'Gold/GoldBlackRook.gif',
  ],
  blackPawn : [
    piecesDir + 'Base/BaseBlackPawn.gif',
    piecesDir + 'Gold/GoldBlackPawn.gif',
  ],
};

const userInventory = (ctrl: Ctrl) => [
  
  h('div', [
    h('h2.mt-5.mb-3', 'Inventory'),
    //diplay image with src "images.whiteKing[0]"
    h('div', [ 
      renderInventoryRow('whiteKing'),
      renderInventoryRow('whiteQueen'),
      renderInventoryRow('whiteBishop'),
      renderInventoryRow('whiteKnight'),
      renderInventoryRow('whiteRook'),
      renderInventoryRow('whitePawn'),
      renderInventoryRow('blackKing'),
      renderInventoryRow('blackQueen'),
      renderInventoryRow('blackBishop'),
      renderInventoryRow('blackKnight'),
      renderInventoryRow('blackRook'),
      renderInventoryRow('blackPawn'),
    ]),
    //ImmutableX inventory shown here

    //User can select from his inventory what he wants for each of the 12 Pieces:
    //Inventory items should be pulled from users ImmutableX library and the Gifs should be put in the src/userInventory folder

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

const renderInventoryRow = (pieceType : string) =>
  h('div', [
    h('img', {
      attrs: {
        src: images[pieceType][0],
        width: '100',
        height: '100',
        //image placeholder text
        alt: "Image of " + pieceType,
      },
    }),
  ]);

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
