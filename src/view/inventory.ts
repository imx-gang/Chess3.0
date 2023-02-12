import { Chessground } from 'chessground';
import { h } from 'snabbdom';
import { Ctrl } from '../ctrl';
import { Game, Renderer } from '../interfaces';
import OngoingGames from '../ongoingGames';
import { href } from '../routing';

export const renderInventory: Renderer = ctrl => (ctrl.auth.me ? userInventory(ctrl) : anonInventory());

const width = 50;
const height = 50;
const piecesDir : string = "./../ChessArt/";
const images : any = {
  "White King" : [
    piecesDir + 'Base/BaseWhiteKing.gif',
    piecesDir + 'Gold/GoldWhiteKing.gif',
    piecesDir + "Medieval/MedievalWhiteKing.gif",
  ],
  "White Queen" : [
    piecesDir + 'Base/BaseWhiteQueen.gif',
    piecesDir + 'Gold/GoldWhiteQueen.gif',
    piecesDir + "Medieval/MedievalWhiteQueen.gif",
  ],
  "White Bishop" : [
    piecesDir + 'Base/BaseWhiteBishop.gif',
    piecesDir + 'Gold/GoldWhiteBishop.gif',
    piecesDir + "Medieval/MedievalWhiteBishop.gif",
  ],
  "White Knight" : [
    piecesDir + 'Base/BaseWhiteKnight.gif',
    piecesDir + 'Gold/GoldWhiteKnight.gif',
    piecesDir + "Medieval/MedievalWhiteKnight.gif",
  ],
  "White Rook" : [ 
    piecesDir + 'Base/BaseWhiteRook.gif',
    piecesDir + 'Gold/GoldWhiteRook.gif',
    piecesDir + "Medieval/MedievalWhiteRook.gif",
  ],
  "White Pawn" : [
    piecesDir + 'Base/BaseWhitePawn.gif',
    piecesDir + 'Gold/GoldWhitePawn.gif',
    piecesDir + "Medieval/MedievalWhitePawn.gif",
  ],
  "Black King" : [
    piecesDir + 'Base/BaseBlackKing.gif',
    piecesDir + 'Gold/GoldBlackKing.gif',
    piecesDir + "Medieval/MedievalBlackKing.gif",
  ],
  "Black Queen" : [
    piecesDir + 'Base/BaseBlackQueen.gif',
    piecesDir + 'Gold/GoldBlackQueen.gif',
    piecesDir + "Medieval/MedievalBlackQueen.gif",
  ],
  "Black Bishop" : [
    piecesDir + 'Base/BaseBlackBishop.gif',
    piecesDir + 'Gold/GoldBlackBishop.gif',
    piecesDir + "Medieval/MedievalBlackBishop.gif",
  ],
  "Black Knight" : [
    piecesDir + 'Base/BaseBlackKnight.gif',
    piecesDir + 'Gold/GoldBlackKnight.gif',
    piecesDir + "Medieval/MedievalBlackKnight.gif",
  ],
  "Black Rook" : [
    piecesDir + 'Base/BaseBlackRook.gif',
    piecesDir + 'Gold/GoldBlackRook.gif',
    piecesDir + "Medieval/MedievalBlackRook.gif",
  ],
  "Black Pawn" : [
    piecesDir + 'Base/BaseBlackPawn.gif',
    piecesDir + 'Gold/GoldBlackPawn.gif',
    piecesDir + "Medieval/MedievalBlackPawn.gif",
  ],
};

const userInventory = (ctrl: Ctrl) => [
  
  h('div', [
    h('h2.mt-5.mb-3', 'Inventory'),
    //diplay image with src "images."White King[0]"
    h('div', [ 
      renderInventoryRow('White King'),
      renderInventoryRow('White Queen'),
      renderInventoryRow('White Bishop'),
      renderInventoryRow('White Knight'),
      renderInventoryRow('White Rook'),
      renderInventoryRow('White Pawn'),
      renderInventoryRow('Black King'),
      renderInventoryRow('Black Queen'),
      renderInventoryRow('Black Bishop'),
      renderInventoryRow('Black Knight'),
      renderInventoryRow('Black Rook'),
      renderInventoryRow('Black Pawn'),
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
  h('div.mt-3', [  
  h('h5', pieceType),
  h('div.d-flex.flex-row', [
      h('img', {
        attrs: {
          src: images[pieceType][0],
          width: width.toString(),
          height: height.toString(),
          //image placeholder text
          alt: "Image of " + pieceType,
      }}),
      h('img', {
        attrs: {
          src: images[pieceType][1],
          width: width.toString(),
          height: height.toString(),
          //image placeholder text
          alt: "Image of " + pieceType,
      }}),
      h('img', {
        attrs: {
          src: images[pieceType][2],
          width: width.toString(),
          height: height.toString(),
          //image placeholder text
          alt: "Image of " + pieceType,
      }}),
    ]),
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
    h('p', 'Welcome to CH3SS, a new chess platform built using ImmutableX blockchain technology and the Lichess API. Play the age old classic game and earn, collect, trade, buy, sell, and play with our NFT chess pieces!'),
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
