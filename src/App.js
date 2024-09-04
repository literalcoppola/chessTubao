import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

export default function App() {
    const [game, setGame] = useState(new Chess());

    const makeAMove = (move) => {
        const gameCopy = new Chess(game.fen());
        const result = gameCopy.move(move);
        if (result) {
            setGame(gameCopy);
        }
        return result;
    };

    const onDrop = (sourceSquare, targetSquare) => {
        const move = {
            from: sourceSquare,
            to: targetSquare,
            promotion: targetSquare[1] === '8' ? 'q' : undefined,
        };

        const result = makeAMove(move);
        if (result === null) return false;
        return true;
    };

    return (
        <div style={{
            width: '740px',
            height: '740px',
            margin: '55px 100px 75px 380px',
            position: 'relative',
            overflow: 'hidden',
        }}>
        <div style={{
            position: 'absolute', 
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://www.iped.com.br/_upload/content/2015/02/19/beneficios-didaticos-jogo-xadrez.jpg)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
        }} />
        <div style={{
            position: 'relative', 
            zIndex: 1, 
        }}></div>
            
            <Chessboard 
                position={game.fen()} 
                onPieceDrop={onDrop} 
                boardStyle={{
                    border: '2px solid black',
                }}
                boardColors={{
                    lightSquare: '#ffffff',  // Cor das casas claras
                    darkSquare: '#000000',   // Cor das casas escuras
                }}
            />
        </div>
    );
    




     

}
