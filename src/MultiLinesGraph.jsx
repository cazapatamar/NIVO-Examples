import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import dataLinesMultiLinesGraph from './dataLinesMultiLinesGraph';

const MultiLinesGraph = () => (
  <div style={{ height: '490px', width: '750px', display: 'none' }}>
    <h2>
      MultiLinesGraph: Biotablero
    </h2>
    <ResponsiveLine
      data={dataLinesMultiLinesGraph}
      curve="cardinal"
      margin={{
        top: 50,
        left: 60,
        right: 110,
        bottom: 100,
      }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 0,
        max: 100,
        stacked: false,
        reverse: false,
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Año',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Indice promedio Huella Humana',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      // colors={obj => colors(obj.id)}
      colors={{ scheme: 'nivo' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'row',
          justify: false,
          translateX: 10,
          translateY: 90,
          itemsSpacing: 100,
          itemDirection: 'left-to-right',
          itemWidth: 50,
          itemHeight: 80,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
          symbolBorderColor: 'rgba(0, 0, 0, .5)',
          effects: [
            {
              on: 'hover',
              style: {
                itemBackground: '#df4f30',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  </div>
);

export default MultiLinesGraph;
