"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface CalculatorAppProps {
    onBack: () => void;
    isDarkMode: boolean;
}

export default function CalculatorApp({ onBack, isDarkMode }: CalculatorAppProps) {
    const [display, setDisplay] = useState("0");
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operation, setOperation] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [easterEgg, setEasterEgg] = useState(false);

    const handleNumber = (num: string) => {
        const newDisplay = waitingForOperand ? num : display === "0" ? num : display + num;
        setDisplay(newDisplay);
        setWaitingForOperand(false);

        // Easter egg check
        if (newDisplay === "420") {
            setEasterEgg(true);
            setTimeout(() => setEasterEgg(false), 2000);
        }
    };

    const handleOperator = (nextOperator: string) => {
        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
        } else if (operation) {
            const currentValue = previousValue || 0;
            const newValue = performOperation(currentValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(newValue);
        }

        setWaitingForOperand(true);
        setOperation(nextOperator);
    };

    const performOperation = (prev: number, current: number, op: string): number => {
        switch (op) {
            case "+": return prev + current;
            case "-": return prev - current;
            case "×": return prev * current;
            case "÷": return prev / current;
            default: return current;
        }
    };

    const handleEquals = () => {
        const inputValue = parseFloat(display);

        if (previousValue !== null && operation) {
            const newValue = performOperation(previousValue, inputValue, operation);
            setDisplay(String(newValue));
            setPreviousValue(null);
            setOperation(null);
            setWaitingForOperand(true);
        }
    };

    const handleClear = () => {
        setDisplay("0");
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
    };

    const handleClearEntry = () => {
        setDisplay("0");
        setWaitingForOperand(false);
    };

    const handleDecimal = () => {
        if (waitingForOperand) {
            setDisplay("0.");
            setWaitingForOperand(false);
        } else if (display.indexOf(".") === -1) {
            setDisplay(display + ".");
        }
    };

    const Button = ({ value, onClick, className = "", span = false }: any) => (
        <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className={`h-16 rounded-xl font-bold text-xl transition-all ${span ? 'col-span-2' : ''} ${className}`}
        >
            {value}
        </motion.button>
    );

    return (
        <div className="flex flex-col h-full bg-black text-white p-4 relative">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <button onClick={onBack} className="text-orange-500 hover:text-orange-400 text-xl">
                    ←
                </button>
                <div className="font-bold">Calculator</div>
            </div>

            {/* Display */}
            <div className="flex-1 flex items-end justify-end p-6 mb-4">
                <div className="text-6xl font-light text-right break-all">
                    {display}
                </div>
            </div>

            {/* Easter Egg */}
            {easterEgg && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-black/90 flex items-center justify-center z-50"
                >
                    <div className="text-6xl">Blaze it! 🔥</div>
                </motion.div>
            )}

            {/* Buttons */}
            <div className="grid grid-cols-4 gap-2">
                <Button value="C" onClick={handleClear} className="bg-gray-600 hover:bg-gray-500" />
                <Button value="CE" onClick={handleClearEntry} className="bg-gray-600 hover:bg-gray-500" />
                <Button value="÷" onClick={() => handleOperator("÷")} className="bg-orange-500 hover:bg-orange-400" />
                <Button value="×" onClick={() => handleOperator("×")} className="bg-orange-500 hover:bg-orange-400" />

                <Button value="7" onClick={() => handleNumber("7")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="8" onClick={() => handleNumber("8")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="9" onClick={() => handleNumber("9")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="-" onClick={() => handleOperator("-")} className="bg-orange-500 hover:bg-orange-400" />

                <Button value="4" onClick={() => handleNumber("4")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="5" onClick={() => handleNumber("5")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="6" onClick={() => handleNumber("6")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="+" onClick={() => handleOperator("+")} className="bg-orange-500 hover:bg-orange-400" />

                <Button value="1" onClick={() => handleNumber("1")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="2" onClick={() => handleNumber("2")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="3" onClick={() => handleNumber("3")} className="bg-gray-700 hover:bg-gray-600" />
                <Button value="=" onClick={handleEquals} className="bg-orange-500 hover:bg-orange-400 row-span-2" />

                <Button value="0" onClick={() => handleNumber("0")} className="bg-gray-700 hover:bg-gray-600" span />
                <Button value="." onClick={handleDecimal} className="bg-gray-700 hover:bg-gray-600" />
            </div>
        </div>
    );
}
