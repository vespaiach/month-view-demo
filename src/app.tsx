import '@vespaiach/month-view/dist/base.css'; // Tailwindcss's preflight
import '@vespaiach/month-view/dist/month.css';

import './app.css';

import * as React from 'react';

import { MonthView, MONTH_NAMES } from '@vespaiach/month-view';
import { MonthNum, Event as EventType } from '@vespaiach/month-view/dist/type';

const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth();
const todayYear = today.getFullYear();

export default function App() {
    const [date, setDate] = React.useState(new Date(todayYear, todayMonth, todayDate));
    const [events] = React.useState<EventType[]>([
        {
            title: 'Meet prominent clients',
            start: new Date(todayYear, todayMonth, todayDate, 9, 0, 0, 0),
            minutes: 45,
        },
        {
            title: 'Bring kids to school tour',
            start: new Date(todayYear, todayMonth, todayDate + 2, 8, 0, 0, 0),
            minutes: 45,
        },
        {
            title: 'Dine out with friends',
            start: new Date(todayYear, todayMonth, todayDate + 2, 19, 0, 0, 0),
            minutes: 45,
        },
        {
            title: 'Take annual check-up',
            start: new Date(todayYear, todayMonth, todayDate + 10, 10, 0, 0, 0),
            minutes: 60,
        },
        {
            title: 'Meet with team for future events',
            start: new Date(todayYear, todayMonth, todayDate - 1, 10, 0, 0, 0),
            minutes: 60,
        },
    ]);

    return (
        <div className="flex flex-col px-11 py-9 min-w-[800px] min-h-[600px] bg-white rounded-md shadow-lg gap-4 h-full">
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
                    MONTH_NAMES[date.getMonth()]
                } - ${date.getFullYear()}`}</h3>
                <div>
                    <button
                        onClick={() => {
                            setDate(new Date());
                        }}
                        className="border-solid border-2 border-indigo-300 rounded-md w-14 text-rose-400"
                    >
                        today
                    </button>
                </div>
            </div>
            <MonthView
                className="flex-1"
                year={date.getFullYear()}
                month={date.getMonth() as MonthNum}
                events={events}
                onClick={(dt, events = []) => {
                    alert(`
On Date: ${dt.toLocaleDateString()}
Events: 
${events.map((e) => ` - ${e.title}`).join('\n')}
                    `);
                }}
            />
        </div>
    );
}
