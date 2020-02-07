import React, {  useContext } from 'react'
import { Container } from 'reactstrap'
import { Bar } from 'react-chartjs-2'
import DisplayResultsContext from '../../utils/DisplayResultsContext'

const PollResults = () => {
   
    const { 
        optionLabels,
        votes
     } = useContext(DisplayResultsContext)
  

    const dataSet = {
        labels: optionLabels,
        data: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(245,241,247,100)',
                borderColor: 'rgba(245,241,247,100)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: votes
            }
        ]
    };


    return (

        <Container>

            <div>
                <h2>Bar Example (custom size)</h2>
                <Bar
                    data={dataSet}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        </Container>


    )

}


export default PollResults