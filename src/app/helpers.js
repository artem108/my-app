
export const getChartData = data => {
  const labes = []
  const views = []

  data.map(item => labes.push(item.date))
  data.map(item => views.push(item.views))
  return {
    labels: labes,
    datasets: [
        {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
        },
        {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: views,
        },
    ]
  }
}

export const getModalStyles = () => {
  return {
    content : {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '90%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  }
}
