import React, { useState, useEffect } from 'react'
import PollResults from '../../components/PollResults'
import Menu from '../../components/Menu'
import {Container} from 'reactstrap'


const ResultsPage = _ => {

const [resultsState, setResultsState] = useState({


})


return (
        <Container>
        <Menu />
        <PollResults/>
        </Container>
)

}
export default ResultsPage