/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, Styled } from 'theme-ui';

const styles = {
    card: {
        background: '#FFFFFF',
        border: '1px solid #A6A6A6',
        boxSizing: 'borderBox',
        width: "500px",                 // have not dealt with extreme cases of very thin browser
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "10px",
        paddingBottom: "25px",
        transform:'translate(-10%,0%)',
    },
    quotes1: {
        fontSize: "14px",
        lineHeight: "162.1%",
        color: "#0F0F0F",
        paddingTop: "10px"
    },
    quotes2: {
        fontStyle: 'italic',
        fontSeight: '500',
        fontSize: '24px',
        lineHeight: '128.1%',
        color: '#0F0F0F',
    },
    name: {
        fontFamily: "heading", 
        fontWeight: '500', 
        fontSize: '36px'
    }
}

function PersonCard({ person }) {
    const { color, concentration, name, pronouns, quotes, year } = person;
    return (
        <div style={styles.card}>
            <Styled.h1 sx={styles.name} style= {{color:color}}> {name}</Styled.h1> 
                <p sx={{fontFamily: "label", color:"#727272"}}> HARVARD {year}, {concentration.toUpperCase()},  {pronouns.toUpperCase()} </p>
                {quotes.map((quote, ind) => (
                    <p sx = {ind % 2 === 0 ? styles.quotes1 : styles.quotes2}>{quote} {ind}</p>
                ))}
                {/* <p > Quotes: {quotes} </p> */}
        </div>
      );
}

export default PersonCard;