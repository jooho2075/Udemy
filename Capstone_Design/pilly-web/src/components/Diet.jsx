import { useState } from 'react';

import HorizontalCalendar from './Calendar';

function Diet() {
    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div style={styles.wrapper}>
            <div style={styles.container}>
                <div style={styles.content}>
                    <HorizontalCalendar onDateSelect={setSelectedDate} />
                    <div style={styles.textContainer}>
                        {selectedDate && <h2 style={styles.dateText}>{selectedDate}</h2>}
                        <div style={styles.mealText}>오늘의 식단</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    wrapper: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    container: { flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#F3F0F6' },
    content: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 50 },
    textContainer: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }, 
    dateText: { fontSize: 40, fontWeight: 'bold', color: 'black' },
    mealText: { marginTop: 10, fontSize: 24, fontWeight: 'bold', color: '#333' },
};

export default Diet;
