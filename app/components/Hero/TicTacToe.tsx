"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SquareValue = "X" | "O" | null;

export default function TicTacToe() {
    const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState<SquareValue | "Draw">(null);

    const calculateWinner = (squares: SquareValue[]) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i: number) => {
        if (squares[i] || winner) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? "X" : "O";
        setSquares(nextSquares);
        setXIsNext(!xIsNext);

        const win = calculateWinner(nextSquares);
        if (win) {
            setWinner(win);
        } else if (!nextSquares.includes(null)) {
            setWinner("Draw");
        }
    };

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setWinner(null);
    };

    return (
        <div className="flex flex-col items-center justify-center h-full bg-[#1A1A1A] text-white p-4">
            <div className="mb-4 text-center">
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Tic-Tac-Toe
                </h2>
                <p className="text-xs text-muted">
                    {winner
                        ? winner === "Draw" ? "It's a Draw!" : `Winner: ${winner}`
                        : `Next Player: ${xIsNext ? "X" : "O"}`
                    }
                </p>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                {squares.map((square, i) => (
                    <button
                        key={i}
                        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-3xl font-bold rounded-lg transition-all duration-200 ${square === "X" ? "text-blue-400 bg-blue-400/10" :
                                square === "O" ? "text-purple-400 bg-purple-400/10" :
                                    "bg-white/5 hover:bg-white/10"
                            }`}
                        onClick={() => handleClick(i)}
                    >
                        {square && (
                            <motion.span
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                {square}
                            </motion.span>
                        )}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {winner && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={resetGame}
                        className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform"
                    >
                        Play Again
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
