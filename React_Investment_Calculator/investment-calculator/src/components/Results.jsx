import { calculateInvestmentResults } from "../util/investment.js";

function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);

    console.log(resultsData);
    
    return(
        <p>Results...</p>
    );
}

export default Results;