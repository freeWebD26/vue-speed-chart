// Set the start time and end time
const startTime = new Date('2023-02-16T00:00:00')
const endTime = new Date('2023-02-16T00:01:00')

// Generate an array of time values at 5 second intervals
const timeLabels = []
for (let time = startTime; time <= endTime; time.setSeconds(time.getSeconds() + 5)) {
    timeLabels.push(time.toLocaleTimeString())
}

// Generate an array of random speed values
const speedData = []
for (let i = 0; i < timeLabels.length; i++) {
    speedData.push(Math.random() * 100)
}

export const data = {
    labels: timeLabels,
    datasets: [
        {
            title: 'Gem Speed',
            label: 'Speed VS Time',
            data: speedData,
        }
    ]
}

export const options = {
    responsive: true,
    maintainAspectRatio: true,
    lineTension: 1,
    elements: {
        point: {
            pointRadius: 10,
            pointBackgroundColor: 'green',
            pointBorderColor: 'red',
            pointHoverBackgroundColor: 'yellow',
            pointHoverBorderColor: 'cyan',
        },
        line: {
            borderColor: 'green', // set the color of the line,
            borderWidth: 2, // set the width of the line,
            fill: false // set to false if you don't want to fill the area under the line
        }
    }
};
