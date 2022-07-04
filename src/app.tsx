import '@vespaiach/month-view/dist/base.css';
import '@vespaiach/month-view/dist/month.css';

import './app.css';

import * as React from 'react';

import { MonthView } from '@vespaiach/month-view';
import { MonthNum } from '@vespaiach/month-view/dist/type';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export default function App() {
    const [date, setDate] = React.useState(new Date());
    const [events, setEvents] = React.useState({});

    return (
        <div className="flex flex-col px-11 py-9 min-w-[800px] min-h-[600px] m-12 bg-white rounded-md shadow-lg gap-4">
            <div className="grid justify-items-center grid-cols-[auto_1fr_auto]">
                <div>
                    <button
                        onClick={() => {
                            const tmp = new Date(date);
                            tmp.setMonth(tmp.getMonth() - 1);
                            setDate(tmp);
                        }}
                        className="border-solid border-t-2 border-b-2 border-l-2 rounded-l-md border-indigo-300 px-2 w-14 bg-neutral-300 color-white text-white"
                    >
                        prev
                    </button>
                    <button
                        onClick={() => {
                            const tmp = new Date(date);
                            tmp.setMonth(tmp.getMonth() + 1);
                            setDate(tmp);
                        }}
                        className="border-solid border-t-2 border-b-2 border-r-2 rounded-r-md border-indigo-300 px-2 w-14 text-slate-400"
                    >
                        next
                    </button>
                </div>
                <h3 className="text-md font-semibold text-slate-600">{`${
                    MONTHS[date.getMonth()]
                } - ${date.getFullYear()}`}</h3>
                <div>
                    <button
                        onClick={() => {
                            setDate(new Date());
                        }}
                        className="border-solid border-2 border-indigo-300 rounded-md w-14 text-slate-400"
                    >
                        today
                    </button>
                </div>
            </div>
            <MonthView className="flex-1" year={date.getFullYear()} month={date.getMonth() as MonthNum} />
        </div>
    );
}
