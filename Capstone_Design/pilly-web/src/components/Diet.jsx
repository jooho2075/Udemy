import HorizontalCalendar from './Calendar';

function Diet() {
    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <HorizontalCalendar />
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#F3F0F6'
    },
    content: {
        flex: 1,
    },
    footer: {
        backgroundColor: '#f1f1f1',
        padding: '10px',
        textAlign: 'center',
    },
};

export default Diet;
